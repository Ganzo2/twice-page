# ONCE HQ — 3D Fan Site (with Login)

A multi-page site with a Three.js 3D hero, a member grid, and real login/logout
via **Firebase Authentication** — all static files, no custom server needed,
so it still deploys free to GitHub Pages, Netlify, or Vercel.

## Pages
- `index.html` — home page with the animated 3D hero
- `members.html` — public member grid
- `login.html` — email/password log in + sign up
- `exclusive.html` — members-only page, redirects to login if you're not signed in
- `css/style.css` — shared styles for all pages
- `js/firebase-config.js` — **you need to fill this in** with your own Firebase project keys
- `js/auth.js` — shared logic: updates the nav (Log in ↔ Log out) and protects `exclusive.html`

## 1. Set up Firebase (free, ~5 minutes)
1. Go to [console.firebase.google.com](https://console.firebase.google.com) and create a project (free "Spark" plan).
2. In your project, go to **Build → Authentication → Get started**.
3. Under "Sign-in method", enable **Email/Password**.
4. Go to **Project settings** (gear icon) → scroll to "Your apps" → click the web icon `</>` → register a nickname (no hosting needed).
5. Copy the `firebaseConfig` object it gives you.
6. Paste those values into `js/firebase-config.js`, replacing the placeholder values.

That's it — login/signup/logout will work immediately once deployed (or even opened locally, though some browsers restrict `file://` access — see step 3 below).

## 2. Adding real member photos
Placeholders are used instead of real photos/logos (copyright). To add real ones:
1. Save image files into `assets/members/`, e.g. `nayeon.jpg`.
2. In `members.html`, find the card you want and replace:
   ```html
   <div class="avatar">N</div>
   ```
   with:
   ```html
   <div class="avatar"><img src="assets/members/nayeon.jpg" alt="Nayeon"></div>
   ```

## 3. Test locally
Because this loads files via relative paths and calls Firebase, open it through a local server rather than double-clicking the HTML file:
```bash
cd twice-site
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

## 4. Deploy for free

### Netlify (easiest — drag and drop)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the whole `twice-site` folder in
3. Live instantly at a `.netlify.app` URL

### GitHub Pages
1. Push this folder to a GitHub repo
2. Settings → Pages → Source: `Deploy from a branch`, branch `main`, folder `/root`
3. Live at `https://<username>.github.io/<repo>/`

### Vercel
1. Push to GitHub, then import the repo at [vercel.com/new](https://vercel.com/new)
2. No config needed — it's static. Click Deploy.

**Important:** In the Firebase console, under Authentication → Settings → Authorized domains, add your live domain (e.g. `yourname.netlify.app` or `username.github.io`) once you have it, or Firebase will block login from that domain.

## Going further: true "admin" role (optional)
Right now, `exclusive.html` unlocks for **any** logged-in user — that's a "members-only" tier.
If you want a separate **admin** tier (e.g. only you can post announcements, everyone else just reads):
1. Add **Firestore** in the Firebase console (also free).
2. Create a `users` collection with a document per user containing a field like `role: "admin"` or `role: "member"`.
3. In `auth.js`, after login, fetch that user's Firestore doc and check `role` before showing admin-only UI.
4. Add Firestore **security rules** so only admins can write to admin-only data — this is the part that makes it actually secure, not just hidden in the UI.

Happy to build this out fully if you want a real admin panel next.
