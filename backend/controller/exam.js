const handleSubmitExam = () => {
    if (submitted) return;
  
    // Prepare the data to be sent to the backend
    const submissionData = {
      userAnswers,
      score,
      // Add any other relevant data like user ID or exam details
    };
  
    // Send a POST request to the backend API
    fetch("/api/submit-exam", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Include authentication headers if required
      },
      body: JSON.stringify(submissionData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server if needed
        // For example, you could show a success message
      })
      .catch((error) => {
        console.error("Error submitting exam:", error);
      });
  
    setScore(userScore);
    setSubmitted(true);
  };
  