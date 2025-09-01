const express = require('express');
const app= express();
const cors = require('cors');
const {getAIAnalysis , getStructuredData} = require('./Services/aiServices')
const port = 3000;
const credentialTrie = require('./Trie')
const w3cverify = require('./Pulgins/w3cVerifier')
const sdJwtverify = require('./Pulgins/sdJwtVerifier')
app.use(cors());
app.use(express.json());

app.get('/' , (req,res)=>{
    res.send("nothing here , move to another page");
})

app.post('/api/verify', async (req, res) => {
  const { credential } = req.body;

  const detectedType = credentialTrie.search(credential);
  
  // Handle unknown credential type first
  if (!detectedType) {
    return res.status(400).json({ isValid: false, error: 'Unknown credential format.' });
  }

  try {
    if (detectedType.includes("w3c")) {

      const verificationresult = await w3cverify(credential);
     
    } else if (detectedType.includes("sd")) {
      const verificationresult = await sdJwtverify(credential);
    }
  } catch (error) {
    // If a verification plugin throws an error, this block catches it
    // and provides AI analysis.
    const aiAnalysis = await getAIAnalysis(error.message);
    res.status(500).json({
      isValid: false,
      error: error.message,
      aiAnalysis: aiAnalysis
    });
  }
});

// Endpoint for text structuring
//this is a post request so use post man app to test the routes 

app.post('/api/structure-text', async (req, res) => {
  // This is a mock response as per the API contract , to check for the endpoint 
  const {rawtext} = req.body;
  try{
    const structuredData = await getStructuredData(rawtext);
      res.status(200).json({structuredData});
  }catch(error){
    res.status(500).json({error:'failed to structure text via AI service'});
  }
});


app.listen(port , ()=>{
    console.log("server is running on port " + port);
})