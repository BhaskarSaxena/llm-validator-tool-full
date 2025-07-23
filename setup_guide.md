# LLM Validation Project Setup Guide

This guide will walk you through setting up and running the LLM Validation Project (backend and frontend) on your local computer using VS Code.

## Overview of Steps:

1.  **Extract the Project:** Unzip the provided `llm-validator-tool.zip` file.
2.  **Backend Setup (Flask):** Configure and run the Flask backend application.
3.  **Frontend Setup (Next.js):** Configure and run the Next.js frontend application.
4.  **Interaction:** Understand how the frontend and backend interact.

Let's get started!




## 1. Extract the Project

First, locate the `llm-validator-tool.zip` file you downloaded. Extract its contents to a directory of your choice. You can typically do this by right-clicking the zip file and selecting "Extract All" or a similar option.

Once extracted, you should have a folder named `llm-validator-tool` (or similar) containing all the project files.

## 2. Backend Setup (Flask)

The backend of this project is a Flask application. We will set it up using a Python virtual environment to manage dependencies.

### 2.1. Open the Project in VS Code

1.  Open VS Code.
2.  Go to `File > Open Folder...` (or `Code > Open Folder...` on macOS).
3.  Navigate to and select the extracted `llm-validator-tool` folder.

### 2.2. Create and Activate a Python Virtual Environment

It's best practice to use a virtual environment to avoid conflicts with your system's Python packages.

1.  Open the integrated terminal in VS Code by going to `Terminal > New Terminal`.
2.  In the terminal, navigate to the root of the `llm-validator-tool` directory (if you're not already there).
3.  Create a virtual environment:
    ```bash
    python3.11 -m venv venv
    ```
    (If `python3.11` is not found, try `python3` or `python` depending on your system setup.)
4.  Activate the virtual environment:
    *   **On macOS/Linux:**
        ```bash
        source venv/bin/activate
        ```
    *   **On Windows (Command Prompt):**
        ```bash
        .\venv\Scripts\activate.bat
        ```
    *   **On Windows (PowerShell):**
        ```powershell
        .\venv\Scripts\Activate.ps1
        ```

    You should see `(venv)` prepended to your terminal prompt, indicating the virtual environment is active.

### 2.3. Install Backend Dependencies

With your virtual environment activated, install the required Python packages:

1.  In the same VS Code terminal, run:
    ```bash
    pip install -r requirements.txt
    ```
    This will install Flask, Flask-CORS, and other necessary libraries.

### 2.4. Run the Flask Backend Application

1.  The main backend application file is `src/main.py` (which is a copy of `flask_app.py` for deployment purposes). You can run it directly.
2.  In the same activated terminal, run:
    ```bash
    python src/main.py
    ```
    You should see output indicating that the Flask development server is running, typically on `http://127.0.0.1:8000` or `http://0.0.0.0:8000`.

    Leave this terminal open and running the backend server. You will open a new terminal for the frontend.





## 3. Frontend Setup (Next.js)

The frontend is a Next.js application located in the `frontend` directory. It requires Node.js and pnpm to run.

### 3.1. Install Node.js and pnpm

If you don't have Node.js and pnpm installed, you'll need to do so. You can download Node.js from its official website [1]. pnpm is a fast, disk-space efficient package manager for Node.js, and it's recommended for this project. You can install pnpm globally after installing Node.js:

```bash
npm install -g pnpm
```

### 3.2. Navigate to the Frontend Directory

1.  Open a **new** integrated terminal in VS Code (keep the backend terminal running).
2.  Navigate into the `frontend` directory:
    ```bash
    cd frontend
    ```

### 3.3. Install Frontend Dependencies

Once in the `frontend` directory, install the Node.js dependencies using pnpm:

1.  In the new terminal, run:
    ```bash
    pnpm install
    ```
    This will install all the necessary Next.js, React, and other frontend libraries.

### 3.4. Run the Next.js Frontend Application

1.  After the dependencies are installed, start the Next.js development server:
    ```bash
    pnpm dev
    ```
    You should see output indicating that the Next.js development server is running, typically on `http://localhost:3000`.

    Leave this terminal open and running the frontend server.

### 3.5. Frontend-Backend Connection

The Next.js frontend is configured to communicate with the backend running on `http://localhost:8000`. When you click the "Run LLM Validation" button on the frontend, it will send a request to this address. Ensure your Flask backend is running on `http://localhost:8000` for the frontend to function correctly.

[1] https://nodejs.org/en/download/




## 4. Running Both Applications and Interaction

Once both the backend and frontend servers are running, you can interact with the application.

1.  Open your web browser and navigate to `http://localhost:3000`.
2.  You should see the Next.js frontend dashboard.
3.  Click the "Run LLM Validation" button. This will trigger a request to your locally running Flask backend.
4.  The response from the backend (a simplified validation result) will be displayed on the frontend.

### Troubleshooting:

*   **Backend not starting:** Check the terminal where you ran `python src/main.py` for any error messages. Ensure you have activated the virtual environment and installed all `requirements.txt` dependencies.
*   **Frontend not starting:** Check the terminal where you ran `pnpm dev` for errors. Ensure you are in the `frontend` directory and have run `pnpm install`.
*   **Frontend not connecting to backend:** Verify that the Flask backend is running on `http://localhost:8000`. If you changed the port, you will need to update the `frontend/src/app/page.tsx` file to reflect the new backend URL.

This setup provides a local development environment for you to explore and modify the LLM Validation Project. If you wish to deploy this application to a public server, you can refer to the previous deployment steps I performed, which involved deploying the Flask backend and the Next.js static build to separate services.


