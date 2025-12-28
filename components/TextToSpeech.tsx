"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Download, Loader2, Volume2 } from "lucide-react";

interface Voice {
  name: string;
  languageCodes?: string[];
  languageCode?: string;
  ssmlGender: string;
  naturalSampleRateHertz?: number;
}

// Language code to full name mapping
const languageNames: { [key: string]: string } = {
  "en-US": "English (United States)",
  "en-GB": "English (United Kingdom)",
  "en-AU": "English (Australia)",
  "en-CA": "English (Canada)",
  "en-IN": "English (India)",
  "es-ES": "Spanish (Spain)",
  "es-US": "Spanish (United States)",
  "es-MX": "Spanish (Mexico)",
  "fr-FR": "French (France)",
  "fr-CA": "French (Canada)",
  "de-DE": "German (Germany)",
  "it-IT": "Italian (Italy)",
  "pt-BR": "Portuguese (Brazil)",
  "pt-PT": "Portuguese (Portugal)",
  "ja-JP": "Japanese (Japan)",
  "ko-KR": "Korean (South Korea)",
  "zh-CN": "Chinese (Simplified, China)",
  "zh-TW": "Chinese (Traditional, Taiwan)",
  "zh-HK": "Chinese (Traditional, Hong Kong)",
  "ar-XA": "Arabic",
  "hi-IN": "Hindi (India)",
  "nl-NL": "Dutch (Netherlands)",
  "ru-RU": "Russian (Russia)",
  "pl-PL": "Polish (Poland)",
  "tr-TR": "Turkish (Turkey)",
  "sv-SE": "Swedish (Sweden)",
  "da-DK": "Danish (Denmark)",
  "no-NO": "Norwegian (Norway)",
  "fi-FI": "Finnish (Finland)",
  "cs-CZ": "Czech (Czech Republic)",
  "uk-UA": "Ukrainian (Ukraine)",
  "th-TH": "Thai (Thailand)",
  "vi-VN": "Vietnamese (Vietnam)",
  "id-ID": "Indonesian (Indonesia)",
  "ms-MY": "Malay (Malaysia)",
  "he-IL": "Hebrew (Israel)",
  "ro-RO": "Romanian (Romania)",
  "hu-HU": "Hungarian (Hungary)",
  "el-GR": "Greek (Greece)",
  "bg-BG": "Bulgarian (Bulgaria)",
  "hr-HR": "Croatian (Croatia)",
  "sk-SK": "Slovak (Slovakia)",
  "sl-SI": "Slovenian (Slovenia)",
  "et-EE": "Estonian (Estonia)",
  "lv-LV": "Latvian (Latvia)",
  "lt-LT": "Lithuanian (Lithuania)",
  "ca-ES": "Catalan (Spain)",
  "eu-ES": "Basque (Spain)",
  "gl-ES": "Galician (Spain)",
  "ga-IE": "Irish (Ireland)",
  "is-IS": "Icelandic (Iceland)",
  "mt-MT": "Maltese (Malta)",
  "cy-GB": "Welsh (United Kingdom)",
};

// Helper function to get language name
const getLanguageName = (code: string): string => {
  return languageNames[code] || code;
};

export default function TextToSpeech() {
  const [text, setText] = useState("");
  const [selectedVoice, setSelectedVoice] = useState("en-US-Neural2-F");
  const [isGenerating, setIsGenerating] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [voices, setVoices] = useState<Voice[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Load voices on mount
  useEffect(() => {
    fetch("/api/tts/voices")
      .then((res) => res.json())
      .then((data) => {
        if (data.voices) {
          setVoices(data.voices);
        }
      })
      .catch((err) => console.error("Error loading voices:", err));
  }, []);

  const handleGenerate = async () => {
    if (!text.trim()) {
      alert("Please enter some text");
      return;
    }

    setIsGenerating(true);
    try {
      const response = await fetch("/api/tts/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text.trim(),
          voice: selectedVoice,
        }),
      });

      if (!response.ok) {
        // Try to get error message from response
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.error || `HTTP ${response.status}: ${response.statusText}`;
        throw new Error(errorMessage);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
    } catch (error: any) {
      console.error("Error generating audio:", error);
      const errorMessage = error?.message || "Failed to generate audio. Please check your Google Cloud setup.";
      alert(`Error: ${errorMessage}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleDownload = () => {
    if (audioUrl) {
      const a = document.createElement("a");
      a.href = audioUrl;
      a.download = "text-to-speech.mp3";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const characterCount = text.length;

  return (
    <div className="space-y-6">
      {/* Text Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Enter your text
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
          className="w-full h-48 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
        />
        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {characterCount} characters
        </div>
      </div>

      {/* Voice Selection */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Select Voice
          </label>
          <button
            type="button"
            onClick={() => {
              const info = `Sample Rate (Hz) Guide:
• 24,000Hz+ = High Quality (best for TTS, clear speech)
• 16,000-23,999Hz = Standard (good for most uses)
• Below 16,000Hz = Basic (smaller files, lower quality)

Higher Hz = Better quality but larger file size.
For text-to-speech, 24kHz is optimal!`;
              alert(info);
            }}
            className="text-xs text-purple-600 dark:text-purple-400 hover:underline cursor-help"
            title="Learn about sample rates"
          >
            ℹ️ About Hz
          </button>
        </div>
        <select
          value={selectedVoice}
          onChange={(e) => setSelectedVoice(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option value="en-US-Neural2-F">English (US) - Female (Neural2)</option>
          <option value="en-US-Neural2-D">English (US) - Male (Neural2)</option>
          <option value="en-US-Neural2-J">English (US) - Male (Neural2-J)</option>
          <option value="en-GB-Neural2-F">English (UK) - Female (Neural2)</option>
          <option value="en-GB-Neural2-D">English (UK) - Male (Neural2)</option>
          {voices.map((voice) => {
            // Extract more descriptive information from voice name
            const voiceName = voice.name;
            const langCode = voice.languageCode || (voice.languageCodes && voice.languageCodes[0]) || "Unknown";
            const languageName = getLanguageName(langCode);
            
            // Parse voice name for better display (e.g., "en-US-Neural2-F" -> "Neural2 Female")
            const nameParts = voiceName.split("-");
            let voiceType = "";
            let gender = voice.ssmlGender;
            
            // Extract voice type (Neural2, WaveNet, Standard, Chirp3, etc.)
            if (nameParts.length >= 3) {
              const typeIndex = nameParts.findIndex(part => 
                part.includes("Neural") || part.includes("WaveNet") || part.includes("Standard") || 
                part.includes("Chirp") || part.includes("Studio")
              );
              if (typeIndex !== -1) {
                voiceType = nameParts[typeIndex];
                // Special handling for Chirp3 - it's a high-definition voice type
                if (voiceType.includes("Chirp")) {
                  voiceType = "Chirp3 HD"; // Make it clearer
                }
              }
            }
            
            // Extract character name for Chirp3 voices (e.g., "Aoede", "Charon", "Fenrir")
            let characterName = "";
            if (voiceType.includes("Chirp")) {
              // Chirp3 voices often have character names at the end
              const possibleName = nameParts[nameParts.length - 1];
              // Check if it's a character name (not a gender code)
              if (possibleName && !["F", "D", "M", "A", "J"].includes(possibleName) && possibleName.length > 2) {
                characterName = possibleName;
              }
            }
            
            // Build display name with full country/language name
            let displayName = languageName;
            if (voiceType) {
              displayName += ` - ${voiceType}`;
              // Add character name for Chirp3 voices
              if (characterName) {
                displayName += ` (${characterName})`;
              }
            }
            displayName += ` - ${gender}`;
            
            // Add sample rate with explanation
            if (voice.naturalSampleRateHertz) {
              const sampleRate = voice.naturalSampleRateHertz;
              let qualityNote = "";
              if (sampleRate >= 24000) {
                qualityNote = " (High Quality)";
              } else if (sampleRate >= 16000) {
                qualityNote = " (Standard)";
              } else {
                qualityNote = " (Basic)";
              }
              displayName += ` - ${sampleRate}Hz${qualityNote}`;
            }
            
            return (
              <option key={voice.name} value={voice.name}>
                {displayName}
              </option>
            );
          })}
        </select>
      </div>

      {/* Generate Button */}
      <motion.button
        onClick={handleGenerate}
        disabled={isGenerating || !text.trim()}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
      >
        {isGenerating ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Generating...
          </>
        ) : (
          <>
            <Volume2 size={20} />
            Generate Audio
          </>
        )}
      </motion.button>

      {/* Audio Player */}
      {audioUrl && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4 mb-2">
            <motion.button
              onClick={handlePlay}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </motion.button>
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors flex items-center gap-2"
            >
              <Download size={18} />
              Download MP3
            </motion.button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Audio format: MP3 (MPEG Audio)
          </p>
          <audio
            ref={audioRef}
            src={audioUrl}
            onEnded={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="hidden"
          />
        </div>
      )}
    </div>
  );
}

