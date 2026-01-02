# Installation Guide - Firebase + Stripe

## Step 1: Install Required Packages

```bash
npm install firebase firebase-admin stripe @stripe/stripe-js
```

## Step 2: Set Up Firebase

### 2.1 Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Name it (e.g., "text-to-speech-72c60")
4. Enable Google Analytics (optional)
5. Create project

### 2.2 Enable Authentication
1. In Firebase Console, go to **Authentication**
2. Click **Get Started**
3. Enable **Email/Password** as sign-in provider
4. Add your domain to authorized domains (e.g., `tkamot.com`)

### 2.3 Get Firebase Client Config
1. Go to **Project Settings** (gear icon)
2. Scroll to **Your apps** section
3. Click the web icon (`</>`) to add a web app
4. Register app (name it, e.g., "TTS App")
5. Copy the Firebase configuration object

### 2.4 Create Firestore Database
1. Go to **Firestore Database**
2. Click **Create database**
3. Start in **production mode** (we'll set rules)
4. Choose location (closest to your users)
5. Click **Enable**

### 2.5 Set Firestore Security Rules
Go to **Firestore Database** → **Rules** and add:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Usage history - users can only read their own
    match /usageHistory/{usageId} {
      allow read: if request.auth != null && 
        resource.data.userId == request.auth.uid;
      allow create: if request.auth != null && 
        request.resource.data.userId == request.auth.uid;
    }
  }
}
```

### 2.6 Get Service Account Key
1. Go to **Project Settings** (gear icon)
2. Go to **Service Accounts** tab
3. Click **Generate new private key**
4. Download the JSON file
5. Save as `firebase-service-account.json` in project root
6. **IMPORTANT**: Add to `.gitignore`!

### 2.7 Add to .gitignore
```
firebase-service-account.json
```

## Step 3: Set Up Stripe (Optional - for Payments)

### 3.1 Create Stripe Account
1. Go to [Stripe](https://stripe.com/)
2. Sign up or log in
3. Get your API keys from **Developers** → **API keys**

### 3.2 Create Products and Prices
1. Go to **Products** in Stripe Dashboard
2. Create two products:

**Product 1: Basic Tier**
- Name: "TTS Basic"
- Description: "10,000 words per month"
- Pricing: $4.99/month (recurring)
- Copy the **Price ID** (starts with `price_`)

**Product 2: Pro Tier**
- Name: "TTS Pro"
- Description: "Unlimited words per month"
- Pricing: $9.99/month (recurring)
- Copy the **Price ID** (starts with `price_`)

### 3.3 Set Up Webhook
1. Go to **Developers** → **Webhooks**
2. Click **Add endpoint**
3. Endpoint URL: `https://tkamot.com/api/subscription/webhook`
4. Events to listen for:
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Click **Add endpoint**
6. Copy the **Signing secret** (starts with `whsec_`)

## Step 4: Environment Variables

Create/update `.env.local`:

```env
# Firebase Client Config (from Firebase Console)
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyC...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=text-to-speech-72c60.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=text-to-speech-72c60
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=text-to-speech-72c60.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123

# Firebase Service Account (for Vercel - use service account JSON as string)
FIREBASE_SERVICE_ACCOUNT={"type":"service_account","project_id":"..."}

# Stripe
STRIPE_SECRET_KEY=sk_test_... (use sk_live_... for production)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_... (use pk_live_... for production)
STRIPE_BASIC_PRICE_ID=price_...
STRIPE_PRO_PRICE_ID=price_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Google Cloud TTS (existing)
GOOGLE_APPLICATION_CREDENTIALS=your-credentials
```

## Step 5: For Vercel Deployment

### 5.1 Firebase Service Account
Instead of uploading the file, paste the entire JSON content as a single-line string in Vercel environment variables:
- Variable name: `FIREBASE_SERVICE_ACCOUNT`
- Value: `{"type":"service_account",...}` (entire JSON as one line)

### 5.2 Firebase Client Config
Add all `NEXT_PUBLIC_FIREBASE_*` variables to Vercel environment variables.

## Step 6: Test the Setup

1. Start dev server: `npm run dev`
2. Visit `/creator` page
3. Try to use TTS - should prompt for login
4. Sign up with email/password at `/auth/signup`
5. Sign in at `/auth/signin`
6. Should create user in Firestore
7. Should be able to use TTS (up to free tier limit)

## Troubleshooting

### Firebase Admin not initializing
- Check `FIREBASE_SERVICE_ACCOUNT` is set correctly
- Verify service account JSON is valid
- Check file path if using local file

### Firebase Auth not working
- Verify all `NEXT_PUBLIC_FIREBASE_*` variables are set
- Check Firebase Console → Authentication → Settings → Authorized domains
- Verify email/password provider is enabled
- Check browser console for errors

### Stripe webhook not working
- Verify webhook URL is accessible
- Check webhook secret matches
- Test with Stripe CLI: `stripe listen --forward-to localhost:3000/api/subscription/webhook`

## Next Steps

After installation:
1. Test authentication flow
2. Test usage tracking
3. Test payment flow
4. Deploy to production

