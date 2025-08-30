const express = require('express');
const app= express();
const cors = require('cors');
const port = 3000;
const credentialTrie = require('./Trie')
app.use(cors());
app.use(express.json());

app.get('/' , (req,res)=>{
    res.send("nothing here , move to another page");
})

app.post('/api/verify', (req, res) => {

  const {credential} = req.body;

  const detectedType = credentialTrie.search(credential);

  if(detectedType && detectedType.includes("w3c")){
    const mockresponse = {
        isValid:true,
        type:'w3c verifiable credential',
        message:'The credential is a valid W3C Verifiable Credential.'
    }

    res.status(200).json(mockresponse);
  }

  else if(detectedType && detectedType.includes("sd")){
    const mockresponse = {
        isValid:true,
        type:'sd-jwt',
        message:'The credential is a valid SD-JWT.'
    }

    res.status(200).json(mockresponse);
    }
    else{
        console.log("verifiableCredential not found");
        res.status(400).json({
            isValid:false,
            type:'unknown',})
    }
});

// Endpoint for text structuring
//this is a post request so use post man app to test the routes 

app.post('/api/structure-text', (req, res) => {
  // This is a mock response as per the API contract , to check for the endpoint 

  const mockResponse = {
    structuredData: {
      message: 'Text structuring is not yet implemented. This is a mock response.',
    },
  };

  res.status(200).json(mockResponse);
});


app.listen(port , ()=>{
    console.log("server is running on port " + port);
})