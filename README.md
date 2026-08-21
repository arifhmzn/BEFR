# Blue Economy Fun Run UMT 2026

This is a database-free React website. Registration is handled entirely through the official Google Form:

https://forms.gle/YvHj9yBKhsg2uUqk6

## Run locally

```bash
npm install
npm run dev
```

Open the localhost URL shown by Vite, normally `http://localhost:5173`.

## Build

```bash
npm run build
```

## Deploy to Vercel

Push the project to GitHub or upload it to Vercel. No environment variables, database, Firebase project, MongoDB account, storage service, Vercel API functions or administrator credentials are required.

## Registration management

Participant responses, payment proof and any confirmation settings are managed directly inside Google Forms and its linked Google Sheet. The website does not store or process participant information.

### Enable email confirmation in Google Forms

1. Open the registration Google Form and select **Settings**.
2. Under **Responses**, enable **Collect email addresses**.
3. Set **Send responders a copy of their response** to **Always** (or **When requested**, if preferred).
4. Customise the confirmation message under **Presentation**, for example: “Your registration has been received. Please keep this confirmation. Payment verification will be updated by the organiser.”

Google Forms can confirm that a form was submitted, but it cannot automatically confirm that payment was approved. Payment approval can be sent manually from the linked Google Sheet, or automated later using Google Apps Script.

## Replacing race images later

Replace the relevant file inside `src/assets` while keeping the same filename:

- `shirt-3km.png`
- `shirt-5km.png`
- `route-3km.png`
- `route-5km.png`
- `medal-3km.png`
- `medal-5km.png`

Then run `npm run build`, commit the changes and push them to GitHub. Vercel will redeploy the updated images automatically.

## SEO and sharing preview

SEO information is stored in `index.html`. It helps search engines understand the event page. Open Graph tags control the title, description and image shown when the link is shared on WhatsApp, Facebook and similar platforms. The sharing artwork is saved as `public/seo-preview.jpg` at 1200 × 630 px. Replace that file with the same filename whenever the artwork is updated.

## Checkpoint concept image

The five-checkpoint illustration is stored as `src/assets/checkpoints-concept.png`. It is labelled on the website as a concept illustration because the actual checkpoint decorations and activities may differ on event day. Replace the file using the same filename if the final checkpoint visual changes.

## Collaborating club

Young Conservationist Club UMT is displayed separately from sponsors in the organiser section. Its logo is stored as `src/assets/ycc-logo.jpeg`.

The Majlis Perwakilan Pelajar UMT organiser logo is stored as `src/assets/mpp-logo.jpeg`.
