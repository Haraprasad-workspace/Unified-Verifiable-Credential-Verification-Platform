// This module provides a function to decode and verify SD-JWT credentials. 
// It extracts the claims and disclosures, loads the issuer’s public key (mocked here),
//  and verifies the JWT signature using ES256.
//  If valid, it returns a success response; otherwise, it throws or returns an error.

// Importing required functions:
// decode → Parses an SD-JWT (Selective Disclosure JWT) into header, payload, and disclosures.
// verify → Verifies the JWT signature.
// importJWK (from jose) → Converts a JSON Web Key (JWK) into a usable crypto key object

const { decode, verify } = require('@sd-jwt/core');
const { importJWK } = require('jose');

async function sdJwtVerifier(credential) {
    try {
        // Decode the SD-JWT to get the claims and disclosures
        const { header, payload, disclosures, ...rest } = decode(credential);

        // You'll need the public key of the issuer to verify the signature.
        // This would typically come from a trusted source, like a JWK endpoint.
        // For a mock, you can use a placeholder.
        const jwk = {
            "kty": "EC",
            "crv": "P-256",
            "x": "PLACEHOLDER_X", //only for now , to make the backend work 
            "y": "PLACEHOLDER_Y"
        };
        const publicKey = await importJWK(jwk);

        // Verify the SD-JWT using the library
        const verificationResult = await verify(
            credential, 
            publicKey, 
            { alg: 'ES256' } // The algorithm used for signing
        );

        // Check if verification was successful
        if (verificationResult) {
            return {
                isValid: true,
                verificationDetails: {
                    message: 'SD-JWT is valid.',
                }
            };
        } else {
            return {
                isValid: false,
                error: 'SD-JWT failed verification.',
            };
        }
    } catch (error) {
        console.error('SD-JWT verification error:', error);
        // This error will be passed to your AI service in index.js
        throw new Error(`SD-JWT verification failed: ${error.message}`);
    }
}

module.exports = { verify: sdJwtVerifier };