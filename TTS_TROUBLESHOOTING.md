# TTS Troubleshooting Guide

## Quick Diagnosis Steps

### 1. Check if Dev Server is Running
```bash
# Make sure your dev server is running
npm run dev
```
The server should be running on `http://localhost:3000`

### 2. Check Browser Console
1. Open your portfolio in browser
2. Go to `/creator` page
3. Open Developer Tools (F12 or Cmd+Option+I)
4. Go to Console tab
5. Try generating TTS
6. Look for any error messages

### 3. Check Server Logs
Look at your terminal where `npm run dev` is running. You should see any server-side errors there.

### 4. Verify Credentials File
The code looks for credentials in this order:
1. Environment variable: `GOOGLE_APPLICATION_CREDENTIALS`
2. Fallback: `myportfoliowebsite.json` in project root

Check if file exists:
```bash
ls -la myportfoliowebsite.json
```

### 5. Test API Route Directly
You can test the API route directly using curl:

```bash
curl -X POST http://localhost:3000/api/tts/generate \
  -H "Content-Type: application/json" \
  -d '{"text":"Hello world","voice":"en-US-Neural2-F"}'
```

This will show you the exact error message.

## Common Issues & Solutions

### Issue 1: "Credentials file not found"
**Solution**: 
- Make sure `myportfoliowebsite.json` is in your project root
- Or set environment variable: `GOOGLE_APPLICATION_CREDENTIALS=./myportfoliowebsite.json`

### Issue 2: "Failed to initialize Google Cloud client"
**Possible causes**:
- Credentials file is invalid or corrupted
- Credentials file doesn't have proper permissions
- Service account doesn't have TTS API enabled

**Solution**:
1. Re-download credentials from Google Cloud Console
2. Make sure file has read permissions: `chmod 644 myportfoliowebsite.json`
3. Verify service account has "Cloud Text-to-Speech API User" role

### Issue 3: "Text-to-Speech API is not enabled"
**Solution**:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project
3. Go to "APIs & Services" > "Library"
4. Search for "Cloud Text-to-Speech API"
5. Click "Enable"

### Issue 4: "Billing not enabled"
**Solution**:
- Google Cloud requires billing to be enabled (even for free tier)
- Go to Google Cloud Console > Billing
- Link a billing account (you won't be charged until you exceed free tier)

### Issue 5: Network/CORS Issues
**Solution**:
- Make sure you're accessing from `localhost:3000` (not IP address)
- Check if firewall is blocking requests
- Try restarting the dev server

### Issue 6: Package Not Installed
**Solution**:
```bash
npm install @google-cloud/text-to-speech
```

## Debugging Steps

1. **Check if server is running**
   ```bash
   # Should see "Ready" message
   npm run dev
   ```

2. **Check browser console**
   - Open DevTools (F12)
   - Go to Console tab
   - Look for errors when clicking "Generate Audio"

3. **Check network tab**
   - Open DevTools (F12)
   - Go to Network tab
   - Click "Generate Audio"
   - Look for `/api/tts/generate` request
   - Check the response (should show error message)

4. **Check server logs**
   - Look at terminal where `npm run dev` is running
   - Any errors will appear there

5. **Test API directly**
   ```bash
   # Test with curl
   curl -X POST http://localhost:3000/api/tts/generate \
     -H "Content-Type: application/json" \
     -d '{"text":"Test","voice":"en-US-Neural2-F"}'
   ```

## Getting More Detailed Error Messages

The updated code now shows more detailed error messages. When you try to generate audio, you should see:
- The exact error from Google Cloud
- File path issues
- Authentication problems

## Still Not Working?

1. **Restart dev server**: Stop and restart `npm run dev`
2. **Clear browser cache**: Hard refresh (Cmd+Shift+R or Ctrl+Shift+R)
3. **Check Google Cloud Console**: Verify API is enabled and billing is set up
4. **Re-download credentials**: Get fresh credentials from Google Cloud
5. **Check file permissions**: Make sure credentials file is readable

## Need Help?

Share the exact error message you see (from browser alert or console), and we can diagnose further!

