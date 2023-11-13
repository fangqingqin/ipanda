const OpenAI = require('openai');

const openai = new OpenAI();

async function sendResume(resumeText, jobDescriptions) {
  try {
    // Prepare messages with the user's resume and job descriptions
    let messages = [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: `My resume: ${resumeText}` },
    ];

    // Add each job description to the messages
    jobDescriptions.forEach((jobDesc, index) => {
      messages.push({ role: "user", content: `Job description ${index + 1}: ${jobDesc}` });
    });

    // Call the OpenAI API with the messages
    const completion = await openai.chat.completions.create({
      messages: messages,
      model: "gpt-3.5-turbo",
    });

    // Here, instead of console.log, you would handle the file creation
    // and provide a link for the user to download the result
    // For this example, let's assume we create a text file and provide a link to it
    const fileContent = completion.choices[0].message.content; // This is a placeholder
    const fileBlob = new Blob([fileContent], { type: 'text/plain' });
    const fileUrl = URL.createObjectURL(fileBlob);

    // Display the link (you would append this to your HTML in the actual implementation)
    console.log(`Download your file here: ${fileUrl}`);
    
  } catch (error) {
    console.error('An error occurred while generating resume and cover letters:', error);
  }
}
