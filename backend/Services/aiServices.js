require("dotenv").config();
//impoorting class
const { GoogleGenerativeAI } = require("@google/generative-ai");
const axios = require("axios");

//obj
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

//selecting model
const flashModel = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-latest",
});

const getAIAnalysis = async (error) => {
  try {
    //prompt
    const prompt = `Act as an expert on verifiable credentials. A developer's verification failed.

**Task:**
1.  Explain the error in simple terms.
2.  Provide the top 2 likely causes.
3.  For each cause, suggest a clear, actionable fix.

**Constraints:**
-   Be concise and direct.
-   Keep the total response under 100 words.
-   Do not use conversational filler.

**Error:** ${JSON.stringify(error)}
`;
    const result = await flashModel.generateContent({
        //generates response in a control way
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        maxOutputTokens: 256,
        temperature: 0.5,
      },
    });
    const res = await result.response;
    return res.text();
  } catch (e) {
    console.error("Error calling Gemini API:", e);
    return "AI analysis is currently unavailable.";
  }
};

const getStructuredData = async (rawText) => {
  try {
    const prompt = `From the following text, extract the credential information. Respond with ONLY a single, clean JSON object and nothing else. The required fields are issuer, issuanceDate, and credentialSubject (which should contain an id and name). Text: "${rawText}"`;
    const result = await flashModel.generateContent(prompt);
    const res = await result.response;
    const generatedText = res.text();
    //checking json in text
    const jsonMatch = generatedText.match(/\{[\s\S]*\}/);

    if (!jsonMatch) {
      throw new Error("Gemini did not return a valid JSON object.");
    }

    const jsonString = jsonMatch[0];
    return JSON.parse(jsonString);
  } catch (e) {
    console.error("Error calling Gemini API for structuring:", e.message);
    return { error: "Could not structure data from the provided text." };
  }
};

module.exports = { getAIAnalysis, getStructuredData };
