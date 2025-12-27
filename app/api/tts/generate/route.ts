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
    
    // Initialize client (will use GOOGLE_APPLICATION_CREDENTIALS env var or default credentials)
    let client;
    try {
      client = new TextToSpeechClient();
    } catch (error: any) {
      return NextResponse.json(
        { error: "Google Cloud credentials not configured. Please set GOOGLE_APPLICATION_CREDENTIALS environment variable. See TTS_SETUP.md for instructions." },
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

