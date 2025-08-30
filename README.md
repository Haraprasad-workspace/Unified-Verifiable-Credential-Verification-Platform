# 🤖 The Smart Verifier

An intelligent, unified platform for verifying digital credentials, built for the **MOSIP Decode 2025 Hackathon**.

![GitHub last commit](https://img.shields.io/github/last-commit/your-username/smart-verifier)
![GitHub repo size](https://img.shields.io/github/repo-size/your-username/smart-verifier)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

---
## 📜 Overview

The "Smart Verifier" is a developer-first platform designed to solve the critical problem of tooling fragmentation in the verifiable credential ecosystem. In the real world, developers receive credentials in various formats, often trapped inside PDFs. Our tool provides a single, seamless interface to upload a PDF, automatically find and extract the credential data (whether in a QR code or as text), and instantly receive a comprehensive and actionable verification report.

Our key innovation is the **AI Co-pilot**, which transforms the tool from a simple verifier into an interactive debugging assistant, providing plain-English explanations and suggested fixes for verification errors.

---
## ✨ Key Features

- **Intelligent PDF Processing:** Automatically handles PDFs with or without QR codes using a QR Scan & OCR Fallback system.
- **Multi-Format Support:** A pluggable backend engine designed to verify **W3C VCs**, **SD-JWTs**, and be easily extensible for future formats.
- **Efficient Auto-Detection:** A sophisticated **Trie-based detector** for scalable and fast identification of credential formats.
- **AI-Powered Debugging:** An integrated **AI Co-pilot** that explains cryptic verification errors and suggests actionable solutions.
- **Modular & Containerized:** A future-proof, extensible architecture fully containerized with Docker for easy deployment.

---
## ⚙️ Workflow & Architecture

The application follows a sophisticated, multi-step process to deliver a seamless user experience:

**[ User ] --> PDF Upload --> [ React Frontend ]**
1.  **QR Scan (`jsQR`):** Attempt to find a QR code.
2.  **OCR Fallback (`Tesseract.js`):** If no QR, extract raw text.
3.  **Data Extraction:** Send extracted data (from QR or OCR) to the Backend.

**[ Backend API ]**
1.  **AI Structuring (Hugging Face):** If OCR text is received, structure it into JSON.
2.  **Format Detection (Trie):** Identify the credential format (W3C VC, SD-JWT).
3.  **Verification (Pluggable Engine):** Run cryptographic checks.
4.  **AI Error Analysis (Gemini):** If verification fails, get a simple explanation.
5.  **Final Report:** Send a standardized JSON response back to the Frontend.

---
## 🛠️ Tech Stack

- **Frontend:** ReactJS, `pdf.js`, `jsQR`, `Tesseract.js`
- **Backend:** Node.js, Express.js
- **AI Services:** Google Gemini API, Hugging Face Inference API
- **DevOps:** Docker, Git & GitHub

---
## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/smart-verifier.git](https://github.com/your-username/smart-verifier.git)
    cd smart-verifier
    ```
2.  **Setup Backend:**
    ```bash
    cd backend
    npm install
    cp .env.example .env # Add your API keys here
    npm start
    ```
3.  **Setup Frontend:**
    ```bash
    cd frontend
    npm install
    npm start
    ```

---
## 🎯 Action Plan (Deadline: September 15th)

This is a 12-day sprint to build and deploy the project. Tasks are divided between **Asad (Full Stack)** and **Haraprasad (Backend)**.

| Day | Date | Asad (Full Stack) | Haraprasad (Backend) | Status |
| :-- | :--- | :--- | :--- | :--- |
| **Phase 1: Advanced Backend Build** | | | | |
| 1 | Aug 30 | **(Joint)** Create Repo, Define API Contract, Setup Folders | **(Joint)** Create Repo, Define API Contract, Setup Folders | ☐ |
| 2-3 | Aug 31-Sep 1 | Setup Express Server & Endpoints, Implement **Trie Detector** | Build **Plugin Manager** & Create Verifier Stubs | ☐ |
| 4-5 | Sep 2-3 | Build **AI Co-pilot** & **AI Structuring** Services | Complete **W3C VC Plugin** & **SD-JWT Plugin** | ☐ |
| 6-7 | Sep 4-5 | **(Joint)** Integrate All Backend Modules | **(Joint)** Integrate All Backend Modules | ☐ |
| **Phase 2: Intelligent Frontend & Finalization** | | | | |
| 8-9 | Sep 6-7 | Build UI, Implement **QR Scan Flow** (`jsQR`) | Provide Support, Draft `README.md` | ☐ |
| 10 | Sep 8 | Implement **OCR Fallback Flow** (`Tesseract.js`) | Assist in testing AI endpoints | ☐ |
| 11 | Sep 9 | Finalize UI/UX, Create Pitch Deck, Record Demo Video | Finalize `README.md` | ☐ |
| 12 | Sep 10 | **(Joint)** Dockerize, Deploy & **SUBMIT PROJECT** | **(Joint)** Dockerize, Deploy & **SUBMIT PROJECT** | ☐ |
| | Sep 11-14 | *Buffer for fixes and final polish* | *Buffer for fixes and final polish* | |
| **Deadline** | **Sep 15** | **HACKATHON DEADLINE** | **HACKATHON DEADLINE** | |
