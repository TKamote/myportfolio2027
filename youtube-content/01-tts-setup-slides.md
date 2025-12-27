# TTS Setup Video - Slide Script with TTS Narration

## Video Metadata

**Title**: "How I Built Text-to-Speech for My Portfolio | Next.js + Google Cloud TTS"

**Description**:
```
In this quick overview, I'll show you how I integrated Google Cloud Text-to-Speech API into my Next.js portfolio website. Perfect for both beginners and experienced developers!

You'll learn:
✅ Quick setup process
✅ Secure API integration
✅ Beautiful React component
✅ Production-ready implementation

🔗 Try it live: [Your Portfolio URL]
📁 Code: [GitHub URL]

#NextJS #TextToSpeech #GoogleCloud #WebDevelopment #Tutorial
```

**Estimated Duration**: 5-7 minutes

---

## Slide 1: Title Slide
**Visual**: Portfolio website hero + TTS feature preview
**Slide Text**: 
```
Building Text-to-Speech
for My Portfolio Website

Next.js + Google Cloud TTS
Quick Overview
```

**TTS Narration** (Copy this text to TTS):
```
Welcome! Today I'm showing you how I built a text-to-speech feature for my portfolio website. This is a quick overview perfect for both beginners and experienced developers. We'll cover the setup, the code, and see it in action. Let's dive in!
```

---

## Slide 2: What We're Building
**Visual**: Screenshot of TTS feature in action
**Slide Text**:
```
What We're Building

✓ Text input area
✓ Voice selection
✓ Audio generation
✓ Play & download
✓ Beautiful UI with dark mode
```

**TTS Narration**:
```
So what exactly are we building? A complete text-to-speech feature that lets visitors convert any text into natural-sounding speech. Users can enter text, choose from multiple voices, generate audio, play it back, and even download it as an MP3 file. The interface is beautiful, responsive, and supports dark mode. Let me show you how it works.
```

---

## Slide 3: Architecture Overview
**Visual**: Diagram showing flow
**Slide Text**:
```
Architecture

Frontend (React)
    ↓
Next.js API Route
    ↓
Google Cloud TTS
    ↓
MP3 Audio Response
```

**TTS Narration**:
```
The architecture is straightforward. The React component on the frontend sends the text to a Next.js API route. That API route securely connects to Google Cloud Text-to-Speech service, generates the audio, and returns it as an MP3 file. The component then plays or downloads the audio. This keeps our Google Cloud credentials secure on the server side.
```

---

## Slide 4: Step 1 - Install Package
**Visual**: Terminal/package.json
**Slide Text**:
```
Step 1: Install Package

npm install @google-cloud/text-to-speech
```

**TTS Narration**:
```
First step is simple. Install the Google Cloud Text-to-Speech package using npm. This gives us everything we need to connect to Google's TTS service from our Next.js application.
```

---

## Slide 5: Step 2 - Google Cloud Setup
**Visual**: Google Cloud Console screenshots
**Slide Text**:
```
Step 2: Google Cloud Setup

1. Create/Select Project
2. Enable Text-to-Speech API
3. Create Service Account
4. Download JSON Key
```

**TTS Narration**:
```
Next, we set up Google Cloud. Create or select a project in Google Cloud Console, enable the Text-to-Speech API, create a service account with the appropriate permissions, and download the JSON credentials file. This file is crucial - it authenticates our application. Remember to add it to your gitignore file to keep it secure!
```

---

## Slide 6: Step 3 - API Route (Generate)
**Visual**: Code snippet of route.ts
**Slide Text**:
```
Step 3: Create API Route

/app/api/tts/generate/route.ts

• Validates input
• Loads credentials
• Calls Google TTS
• Returns MP3 audio
```

**TTS Narration**:
```
Now we create the API route. This Next.js API route handles the text-to-speech generation. It validates the incoming text and voice selection, securely loads the Google Cloud credentials, calls the Text-to-Speech service, and returns the generated audio as an MP3 blob. All the sensitive credential handling happens server-side, keeping it secure.
```

---

## Slide 7: Step 4 - React Component
**Visual**: Code snippet of TextToSpeech.tsx
**Slide Text**:
```
Step 4: Build React Component

• State management
• API integration
• Audio playback
• Download functionality
• Beautiful UI
```

**TTS Narration**:
```
The React component handles the user interface. It manages state for the text input, selected voice, loading states, and the generated audio. When the user clicks generate, it calls our API route, receives the audio, and provides controls to play or download it. The UI is built with Tailwind CSS, supports dark mode, and includes smooth animations using Framer Motion.
```

---

## Slide 8: Key Features
**Visual**: Feature highlights
**Slide Text**:
```
Key Features

🔒 Secure credential handling
🎨 Beautiful, responsive UI
🌙 Dark mode support
🎵 Multiple voice options
⬇️ Download functionality
⚡ Fast & efficient
```

**TTS Narration**:
```
What makes this implementation special? First, security - credentials are handled server-side, never exposed to the client. The UI is beautiful and fully responsive, works great on mobile and desktop. Full dark mode support for better user experience. Multiple voice options from Google's neural voices. Users can download the audio for offline use. And it's fast and efficient, with proper loading states and error handling.
```

---

## Slide 9: Live Demo
**Visual**: Screen recording of feature in action
**Slide Text**:
```
Live Demo

See it in action!
```

**TTS Narration**:
```
Let me show you the feature in action. [PAUSE FOR DEMO] Here you can see the text input, voice selection dropdown, and when I click generate, it creates the audio. I can play it back, try different voices, and download the file. The whole process is smooth and user-friendly.
```

---

## Slide 10: Cost & Considerations
**Visual**: Pricing info
**Slide Text**:
```
Cost & Considerations

Free Tier: 0-4M characters/month
After: $4 per 1M characters

Perfect for portfolio features!
```

**TTS Narration**:
```
Cost-wise, Google Cloud offers a generous free tier - up to 4 million characters per month. After that, it's about 4 dollars per million characters. For a portfolio website feature like this, the free tier is usually more than enough. It's a great way to add value without significant cost.
```

---

## Slide 11: Best Practices
**Visual**: Checklist
**Slide Text**:
```
Best Practices

✓ Never commit credentials
✓ Use environment variables
✓ Handle errors gracefully
✓ Show loading states
✓ Validate user input
```

**TTS Narration**:
```
Some best practices to remember. Never commit your credentials file to git - always use gitignore. Use environment variables for configuration. Handle errors gracefully with user-friendly messages. Show loading states so users know something is happening. And always validate user input before sending to the API. These practices make your implementation production-ready.
```

---

## Slide 12: What You Learned
**Visual**: Summary points
**Slide Text**:
```
What You Learned

✓ Google Cloud TTS setup
✓ Next.js API routes
✓ Secure credential handling
✓ React component integration
✓ Production best practices
```

**TTS Narration**:
```
So what did we cover? You learned how to set up Google Cloud Text-to-Speech API, create secure Next.js API routes, handle credentials properly, integrate everything into a React component, and follow production best practices. This same pattern can be used for other Google Cloud services or third-party APIs.
```

---

## Slide 13: Try It Yourself
**Visual**: Portfolio URL + GitHub
**Slide Text**:
```
Try It Yourself!

Portfolio: [Your URL]
GitHub: [Your Repo]

Check it out and let me know
what you think in the comments!
```

**TTS Narration**:
```
You can try this feature live on my portfolio website, and check out the full code on GitHub. The links are in the description below. If you found this helpful, give it a thumbs up and subscribe for more content. I'd love to hear what you think in the comments, and let me know what feature you'd like to see next. Thanks for watching!
```

---

## Production Notes

### Slide Design Guidelines
- Use consistent color scheme matching portfolio
- Include code snippets with syntax highlighting
- Use icons/emojis for visual interest
- Keep text minimal - let TTS do the explaining
- Use animations/transitions between slides

### TTS Generation Tips
1. Generate each slide's narration separately
2. Use a consistent voice (recommend: en-US-Neural2-F or en-US-Neural2-D)
3. Add 1-2 second pauses between slides in video editing
4. Test audio quality before final production
5. Keep narration pace moderate - not too fast

### Video Editing Workflow
1. Create slides in presentation software (PowerPoint, Keynote, Canva)
2. Export slides as images or video
3. Generate TTS audio for each slide
4. Sync audio with slides in video editor
5. Add screen recordings for demo sections
6. Add background music (optional, keep it subtle)
7. Add captions/subtitles for accessibility
8. Export final video

### Timing Estimates
- Title slide: 10 seconds
- Each content slide: 30-45 seconds
- Demo slide: 60-90 seconds
- Total: ~5-7 minutes

