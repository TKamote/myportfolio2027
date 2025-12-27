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
        { error: `Credentials file not found at: ${credentialsFile}. Please ensure myportfoliowebsite.json exists in your project root. Current project root: ${projectRoot}` },
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
        { error: `Failed to initialize Google Cloud client. Error: ${error.message}. Please check your credentials file.` },
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

