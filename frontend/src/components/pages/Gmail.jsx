import { GoogleApi } from 'react-google-api';
import { gmail } from 'googleapis';

import { useState, useEffect } from 'react';

const Gmail = () => {
  const [emails, setEmails] = useState([]);

  const gmailClient = new gmail.Gmail({
    auth: {
      // TODO: Replace this with your own OAuth 2.0 credentials.
      clientId: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
      refreshToken: 'YOUR_REFRESH_TOKEN',
    },
  });

  async function fetchEmails() {
    const response = await gmailClient.users.messages.list({
      userId: 'me',
    });
  
    const emails = response.data.messages;
    // TODO: Do something with the emails.
  }
  
  
  useEffect(() => {
    const fetchEmails = async () => {
      const response = await gmailClient.users.messages.list({
        userId: 'me',
      });

      const emails = response.data.messages;
      setEmails(emails);
    };

    fetchEmails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {emails.map((email) => (
        <li key={email.id}>{email.subject}</li>
      ))}
    </ul>
  );
};

export default Gmail;
