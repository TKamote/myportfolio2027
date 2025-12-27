import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Import Google Cloud TTS client
    const { TextToSpeechClient } = require("@google-cloud/text-to-speech");
    
    // Get credentials path from environment or use default
    const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
    const path = require("path");
    const fs = require("fs");
    const projectRoot = process.cwd();
    
    // Try to resolve credentials file
    let credentialsFile = null;
    
    // First, try environment variable
    if (credentialsPath) {
      credentialsFile = path.isAbsolute(credentialsPath) 
        ? credentialsPath 
        : path.join(projectRoot, credentialsPath.replace(/^\.\//, ""));
    } else {
      // Fallback: try common location
      credentialsFile = path.join(projectRoot, "myportfoliowebsite.json");
    }
    
    // Check if file exists
    if (!fs.existsSync(credentialsFile)) {
      return NextResponse.json(
        { error: `Credentials file not found at: ${credentialsFile}. Please ensure myportfoliowebsite.json exists in your project root.` },
        { status: 500 }
      );
    }
    
    // Initialize client with credentials file
    let client;
    try {
      client = new TextToSpeechClient({
        keyFilename: credentialsFile,
      });
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

