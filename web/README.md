# Files for sorlise.com

These are uploaded to the website by hand. The app and the Supabase emails
link to these exact addresses, so keep the paths as listed.

| File in this repo | Upload to | Address |
|---|---|---|
| `legal/gizlilik.html` | `gizlilik/index.html` | https://sorlise.com/gizlilik |
| `legal/kullanim-kosullari.html` | `kullanim-kosullari/index.html` | https://sorlise.com/kullanim-kosullari |
| `web/sifre-sifirla.html` | `sifre-sifirla/index.html` | https://sorlise.com/sifre-sifirla |
| `web/veli-onayi.html` | `veli-onayi/index.html` | https://sorlise.com/veli-onayi |
| `web/.well-known/assetlinks.json` | `.well-known/assetlinks.json` | https://sorlise.com/.well-known/assetlinks.json |
| `web/.well-known/apple-app-site-association` | `.well-known/apple-app-site-association` (no file extension) | https://sorlise.com/.well-known/apple-app-site-association |

## The two `.well-known` files

They let the password-reset link open the app instead of the web page when the
app is installed (Android App Links / iOS Universal Links).

- Serve both as `Content-Type: application/json`, over HTTPS, without any
  redirect (not to `www.`, not to a login page).
- `assetlinks.json` lists the app's signing fingerprints. It has the EAS key
  now; add the **Play App Signing** fingerprint after the first upload to Play
  Console (Release → Setup → App signing).
- `apple-app-site-association`: replace `APPLE_TEAM_ID` with the Team ID once
  the Apple Developer account is active.
