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
      // Debug: Log if env var exists (without showing full value for security)
      console.log("GOOGLE_APPLICATION_CREDENTIALS exists:", !!credentialsEnv);
      
      // Clean the credentials string - remove outer quotes if present
      let cleanedCredentials = credentialsEnv?.trim() || "";
      if (cleanedCredentials.startsWith('"') && cleanedCredentials.endsWith('"')) {
        // Remove outer quotes
        cleanedCredentials = cleanedCredentials.slice(1, -1);
        console.log("Removed outer quotes from credentials");
      }
      
      console.log("GOOGLE_APPLICATION_CREDENTIALS starts with {:", cleanedCredentials.startsWith("{"));
      
      // Check if credentialsEnv is a JSON string (production) or file path (local dev)
      if (cleanedCredentials && cleanedCredentials.startsWith("{")) {
        // Production: credentials are stored as JSON string in environment variable
        try {
          const credentials = JSON.parse(cleanedCredentials);
          client = new TextToSpeechClient({
            credentials: credentials,
          });
          console.log("Using credentials from environment variable (JSON)");
        } catch (parseError: any) {
          console.error("Failed to parse credentials JSON:", parseError.message);
          throw new Error(`Invalid JSON in GOOGLE_APPLICATION_CREDENTIALS: ${parseError.message}`);
        }
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
          console.error(`Credentials file not found at: ${credentialsFile}`);
          console.error(`Environment variable GOOGLE_APPLICATION_CREDENTIALS is: ${credentialsEnv ? 'set' : 'not set'}`);
          return NextResponse.json(
            { error: `Credentials file not found at: ${credentialsFile}. Please ensure myportfoliowebsite.json exists in your project root or set GOOGLE_APPLICATION_CREDENTIALS environment variable with JSON credentials. Current project root: ${projectRoot}. Environment variable is ${credentialsEnv ? 'set but not JSON format' : 'not set'}` },
            { status: 500 }
          );
        }
        
        console.log("Using credentials from file:", credentialsFile);
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

