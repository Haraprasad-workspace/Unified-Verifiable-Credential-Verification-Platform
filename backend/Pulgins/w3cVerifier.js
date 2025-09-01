//getting the npm package ---

const vc = require('@digitalbazaar/vc');
const { documentLoader } = require('../utils/documentloader'); // This is important, see note below

//function to verify the credentials for w3c type 

async function verify(credential) {
    try {
        // Calling the library's verify method
        const result = await vc.verify({ credential, documentLoader });

        if (result.verified) {
            return {
                isValid: true,
                verificationDetails: {
                    message: 'W3C Verifiable Credential is valid.',
                    // You can add more details here from the result object if available
                }
            };
        } else {
            return {
                isValid: false,
                error: 'W3C Verifiable Credential failed verification.',
                // The library's result object will contain more details on the error
            };
        }
    } catch (error) {
        console.error('W3C verification error:', error);
        // This error will be passed to your AI service in index.js
        throw new Error(`W3C VC verification failed: ${error.message}`);
    }
}

module.exports = { verify };