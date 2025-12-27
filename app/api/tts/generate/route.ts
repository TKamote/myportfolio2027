import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { text, voice } = await request.json();

    if (!text || !voice) {
      return NextResponse.json(
        { error: "Text and voice are required" },
        { status: 400 }
      );
    }

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
            { error: `Credentials file not found at: ${credentialsFile}. Please ensure myportfoliowebsite.json exists in your project root or set GOOGLE_APPLICATION_CREDENTIALS environment variable. Current project root: ${projectRoot}` },
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
        { error: `Failed to initialize Google Cloud client. Error: ${error.message}. Please check your credentials configuration.` },
        { status: 500 }
      );
    }

    // Configure the request
    const requestConfig = {
      input: { text },
      voice: {
        name: voice,
        languageCode: voice.split("-").slice(0, 2).join("-"), // Extract language code from voice name
      },
      audioConfig: {
        audioEncoding: "MP3" as const,
      },
    };

    // Generate speech
    const [response] = await client.synthesizeSpeech(requestConfig);

    // Return audio as blob
    return new NextResponse(response.audioContent, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Disposition": "attachment; filename=text-to-speech.mp3",
      },
    });
  } catch (error: any) {
    console.error("TTS Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate audio" },
      { status: 500 }
    );
  }
}

