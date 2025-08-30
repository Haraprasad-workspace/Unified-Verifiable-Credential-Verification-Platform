# Smart verifier API contract

this document is made to outline the API endpoints , including their request and response structure , to enable parallel development between the frontend and backend teams 

## 1. POST /api/verify
**Description:** Verifies a digital credential ()

## 2. POST /api/structure-text
**Description:** Structures raw text extracted from a document into a JSON object. This is used as a fallback for non-QR documents.
# Major Verifiable Credential Formats & Standards

## W3C Verifiable Credentials (VC)

- **VC Data Model 1.1** (JSON-LD based)  
- **VC Data Model 2.0** (more general; JSON, JSON-LD, JWT, CBOR representations)  

---

## W3C VC Serializations

- **VC-JWT** (JSON Web Token based)  
- **VC Data Integrity (LD-Proofs)** (JSON/JSON-LD with cryptographic proof suites)  
- **BBS+ Signatures** (for selective disclosure, privacy-preserving)  

---

## IETF / OAuth-related

- **SD-JWT** (Selective Disclosure JWT, standalone)  
- **SD-JWT VC** (binding SD-JWT to W3C VC Data Model)  
- **CWT/COSE** (CBOR Web Token with COSE signatures — compact format)  

---

## ISO Standards

- **ISO/IEC 18013-5 Mobile Driving Licence (mDL)** (CBOR/COSE based)  
- **ISO/IEC 23220 “Mobile eID / mdoc” family** (general-purpose mobile documents)  

---

## AnonCreds

- Privacy-preserving credentials (CL Signatures, ZKPs)  
- Used in **Hyperledger Indy / Aries** ecosystems  

---

## Other / Related

- **DIF Presentation Exchange (PE)** — format-agnostic request/response framework  
- **OpenID for Verifiable Credentials (OIDC4VCI / OIDC4VP)** — transport profiles supporting W3C VC, SD-JWT VC, ISO mDL  
- **ISO 29115 / eIDAS 2.0** — European digital identity wallets context  
