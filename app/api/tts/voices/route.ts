import { NextResponse } from "next/server";

export async function GET() {
  try {
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

