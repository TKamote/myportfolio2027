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
            { error: `Credentials file not found at: ${credentialsFile}. Please ensure myportfoliowebsite.json exists in your project root or set GOOGLE_APPLICATION_CREDENTIALS environment variable with JSON credentials. Environment variable is ${credentialsEnv ? 'set but not JSON format' : 'not set'}` },
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
        { error: `Failed to initialize Google Cloud client. Error: ${error.message}.` },
        { status: 500 }
      );
    }

    // List available voices
    const [result] = await client.listVoices();
    const voices = result.voices || [];

    // Return voices with all available properties
    // Google Cloud TTS voice object contains:
    // - name: voice identifier (e.g., "en-US-Neural2-F")
    // - languageCodes: array of supported language codes
    // - ssmlGender: MALE, FEMALE, or NEUTRAL
    // - naturalSampleRateHertz: sample rate (e.g., 24000)
    const formattedVoices = voices.map((voice: any) => ({
      name: voice.name,
      languageCodes: voice.languageCodes || [],
      languageCode: voice.languageCodes?.[0] || "", // Primary language code
      ssmlGender: voice.ssmlGender || "NEUTRAL",
      naturalSampleRateHertz: voice.naturalSampleRateHertz || null,
    }));

    return NextResponse.json({ voices: formattedVoices });
  } catch (error: any) {
    console.error("Voices Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to load voices" },
      { status: 500 }
    );
  }
}

