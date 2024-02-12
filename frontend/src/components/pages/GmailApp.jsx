import { useEffect, useState } from 'react';
import { google } from 'googleapis';

function GmailApp() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    // Load the Gmail API client asynchronously
    window.gapi.load('client:auth2', initClient);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initClient = () => {
    const clientId = 'YOUR_CLIENT_ID'; // Replace with your OAuth 2.0 Client ID
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key (not always needed)
    const discoveryDocs = ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'];
    const scope = 'https://www.googleapis.com/auth/gmail.readonly';

    window.gapi.client.init({
      apiKey,
      clientId,
      discoveryDocs,
      scope,
    }).then(() => {
      // Listen for sign-in state changes
      window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

      // Handle the initial sign-in state
      updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
    });
  };

  const updateSigninStatus = (isSignedIn) => {
    if (isSignedIn) {
      listEmails();
    } else {
      window.gapi.auth2.getAuthInstance().signIn();
    }
  };

  const listEmails = () => {
    window.gapi.client.gmail.users.messages.list({
      userId: 'me',
    }).then((response) => {
      const emailList = response.result.messages || [];
      setEmails(emailList);
    });
  };

  return (
    <div>
      <h1>Gmail Emails</h1>
      <ul>
        {emails.map((email) => (
          <li key={email.id}>{email.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default GmailApp;
