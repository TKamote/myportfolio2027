# Vercel Environment Variable Setup

This guide covers setting up **both Google Cloud TTS and Firebase** environment variables in Vercel.

## Required Environment Variables

You need to set up:
1. **Google Cloud TTS** credentials (`GOOGLE_APPLICATION_CREDENTIALS`)
2. **Firebase Client Config** (6 variables starting with `NEXT_PUBLIC_FIREBASE_*`)
3. **Firebase Service Account** (`FIREBASE_SERVICE_ACCOUNT`)

---

## Part 1: Google Cloud TTS Setup

### Step 1: Access Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Log in to your account
3. Find and select your portfolio project (`myportfolio2027` or similar)

### Step 2: Navigate to Environment Variables
1. Click on your project
2. Go to **Settings** (top navigation)
3. Click on **Environment Variables** (left sidebar)

### Step 3: Add the Environment Variable

**Variable Name:**
```
GOOGLE_APPLICATION_CREDENTIALS
```

**Variable Value:**
Copy and paste the ENTIRE JSON content from your `myportfoliowebsite.json` file (as a single-line string).

**⚠️ IMPORTANT:** 
- Open your `myportfoliowebsite.json` file locally
- Copy the entire JSON content
- Convert it to a single line (remove all line breaks)
- Paste it into the Value field

**Example format (DO NOT use this - use your actual file):**
```json
{"type":"service_account","project_id":"your-project-id","private_key_id":"...","private_key":"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n","client_email":"...","client_id":"...","auth_uri":"...","token_uri":"...","auth_provider_x509_cert_url":"...","client_x509_cert_url":"...","universe_domain":"googleapis.com"}
```

**Important Notes:**
- Paste it as a **single line** (no line breaks)
- Make sure all quotes are preserved
- The entire JSON should be in one continuous string
- **Never commit this file or the actual JSON to GitHub** - it's already in `.gitignore`

### Step 4: Select Environments
Check all three boxes:
- ✅ **Production**
- ✅ **Preview** 
- ✅ **Development**

This ensures it works in all environments.

### Step 5: Save
1. Click **Save** button
2. You should see the variable appear in the list

### Step 6: Redeploy
After adding the environment variable, you need to redeploy:

**Option A: Automatic (Recommended)**
- Make a small change to your code (add a comment, etc.)
- Push to GitHub
- Vercel will auto-deploy with the new environment variable

**Option B: Manual Redeploy**
1. Go to **Deployments** tab
2. Find the latest deployment
3. Click the **⋯** (three dots) menu
4. Select **Redeploy**
5. Check "Use existing Build Cache" (optional)
6. Click **Redeploy**

### Step 7: Verify
1. Wait for deployment to complete (usually 1-2 minutes)
2. Visit your live site: `tkamot.com/creator`
3. Try generating TTS audio
4. It should work now! 🎉

## Troubleshooting

### If it still doesn't work:

1. **Check the variable was saved correctly:**
   - Go back to Settings → Environment Variables
   - Verify `GOOGLE_APPLICATION_CREDENTIALS` is listed
   - Make sure it's enabled for Production

2. **Check deployment logs:**
   - Go to Deployments → Latest deployment → View Function Logs
   - Look for any errors related to credentials

3. **Verify JSON format:**
   - The JSON must be valid (no syntax errors)
   - All quotes must be escaped if needed
   - Should be a single continuous string

4. **Wait a few minutes:**
   - Sometimes Vercel needs a moment to propagate environment variables
   - Try redeploying again

## Security Note

✅ **Good:** Environment variables in Vercel are encrypted and secure
✅ **Good:** They're not exposed in your code or git repository
✅ **Good:** Each environment (prod/preview/dev) can have different values

---

## Part 2: Firebase Client Config Setup

### Step 1: Get Firebase Config Values
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **Project Settings** (gear icon)
4. Scroll to **Your apps** section
5. Click on your web app (or create one)
6. Copy the config values

### Step 2: Add Firebase Environment Variables in Vercel

Add these 6 variables in Vercel (Settings → Environment Variables):

| Variable Name | Value | Environments |
|--------------|-------|--------------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Your API key (starts with `AIza...`) | ✅ All |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | `your-project.firebaseapp.com` | ✅ All |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Your project ID | ✅ All |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | `your-project.appspot.com` | ✅ All |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Your sender ID | ✅ All |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Your app ID | ✅ All |

**Important**: 
- No quotes around values
- Enable for Production, Preview, and Development
- These are public variables (safe to expose)

---

## Part 3: Firebase Service Account Setup

### Step 1: Get Service Account JSON
1. Go to Firebase Console → Project Settings
2. Go to **Service Accounts** tab
3. Click **Generate new private key**
4. Download the JSON file

### Step 2: Add to Vercel

**Variable Name:**
```
FIREBASE_SERVICE_ACCOUNT
```

**Variable Value:**
Copy the ENTIRE JSON content as a single-line string (same process as Google Cloud credentials).

**Example format:**
```json
{"type":"service_account","project_id":"text-to-speech-72c60",...}
```

**Important**:
- Paste as single line (no line breaks)
- Enable for all environments
- This is a SECRET variable (keep it secure)

---

## Complete Checklist

After setup, you should have these variables in Vercel:

✅ `GOOGLE_APPLICATION_CREDENTIALS` (Google Cloud TTS)  
✅ `NEXT_PUBLIC_FIREBASE_API_KEY`  
✅ `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`  
✅ `NEXT_PUBLIC_FIREBASE_PROJECT_ID`  
✅ `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`  
✅ `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`  
✅ `NEXT_PUBLIC_FIREBASE_APP_ID`  
✅ `FIREBASE_SERVICE_ACCOUNT` (Firebase Admin)

---

## Next Steps

1. Redeploy your application after adding all variables
2. Test authentication: Sign up at `/auth/signup`
3. Test TTS: Generate audio at `/creator`
4. Check usage stats are displayed correctly

