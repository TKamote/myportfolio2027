import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Import Google Cloud TTS client
    const { TextToSpeechClient } = require("@google-cloud/text-to-speech");
    
    // Get credentials from environment variable
    const credentialsEnv = process.env.GOOGLE_APPLICATION_CREDENTIALS;
    const path = require("path");
    const fs = require("fs");
    const projectRoot = process.cwd();
    
    // Initialize client with credentials
    let client;
    try {
      // Check if credentialsEnv is a JSON string (production) or file path (local dev)
      if (credentialsEnv && credentialsEnv.trim().startsWith("{")) {
        // Production: credentials are stored as JSON string in environment variable
        const credentials = JSON.parse(credentialsEnv);
        client = new TextToSpeechClient({
          credentials: credentials,
        });
      } else {
        // Local development: credentials are a file path
        let credentialsFile = null;
        
        if (credentialsEnv) {
          // Use path from environment variable
          credentialsFile = path.isAbsolute(credentialsEnv) 
            ? credentialsEnv 
            : path.join(projectRoot, credentialsEnv.replace(/^\.\//, ""));
        } else {
          // Fallback: try common location
          credentialsFile = path.join(projectRoot, "myportfoliowebsite.json");
        }
        
        // Check if file exists
        if (!fs.existsSync(credentialsFile)) {
          return NextResponse.json(
            { error: `Credentials file not found at: ${credentialsFile}. Please ensure myportfoliowebsite.json exists in your project root or set GOOGLE_APPLICATION_CREDENTIALS environment variable.` },
            { status: 500 }
          );
        }
        
        client = new TextToSpeechClient({
          keyFilename: credentialsFile,
        });
      }
    } catch (error: any) {
      console.error("Client initialization error:", error);
      return NextResponse.json(
        { error: `Failed to initialize Google Cloud client. Error: ${error.message}.` },
        { status: 500 }
      );
    }

    // List available voices
    const [result] = await client.listVoices();
    const voices = result.voices || [];

    return NextResponse.json({ voices });
  } catch (error: any) {
    console.error("Voices Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to load voices" },
      { status: 500 }
    );
  }
}

