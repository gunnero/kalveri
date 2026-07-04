# Kalveri Static Homepage

Minimal public homepage for `kalveri.com`.

## Local Preview

Open `index.html` directly, or use a small static server:

```bash
cd /Users/aleksandardimovski/Sites/kalveri
python3 -m http.server 4173
```

Open:

```text
http://127.0.0.1:4173/
```

## Files

- `index.html` - static page markup and SEO metadata.
- `styles.css` - responsive premium dark/gold visual system.
- `assets/kalveri-wordmark-source.png` - original Kalveri wordmark artwork used in the header and hero.
- `assets/kalveri-k-source.png` - original gold K artwork used in the hero.
- `assets/kalveri-mark.svg` - replaceable Kalveri K mark.
- `assets/favicon.svg` - local favicon placeholder.
- `.well-known/mta-sts.txt` - mail security policy file that must stay deployed.

## Build

No build step is required.

## Apache Deployment Notes

Do not deploy until explicitly approved.

Recommended Apache static hosting path:

```text
/home/kalveri/public_html
```

Deployment command once approved:

```bash
rsync -av --delete \
  --exclude '.git' \
  --exclude 'screenshots' \
  --exclude 'design-qa.md' \
  /Users/aleksandardimovski/Sites/kalveri/ \
  web01:/home/kalveri/public_html/
```

The local `.well-known/mta-sts.txt` file is included so `--delete` does not remove the mail security policy from the public web root.

Then on `web01`:

```bash
sudo chown -R kalveri:kalveri /home/kalveri/public_html
sudo find /home/kalveri/public_html -type d -exec chmod 0750 {} +
sudo find /home/kalveri/public_html -type f -exec chmod 0644 {} +
sudo chmod 0755 /home/kalveri/public_html/.well-known 2>/dev/null || true
sudo apache2ctl configtest
sudo systemctl reload apache2
```

## HTTPS

Current Kalveri certificate on `web01` should include:

```text
kalveri.com
www.kalveri.com
mail.kalveri.com
webmail.kalveri.com
mta-sts.kalveri.com
```

Verify after deployment:

```bash
curl -Iv https://kalveri.com/
curl -Iv https://www.kalveri.com/
```

## DNS Check

```bash
dig +short A kalveri.com
dig +short AAAA kalveri.com
dig +short A www.kalveri.com
dig +short AAAA www.kalveri.com
```

Expected:

```text
188.245.47.216
2a01:4f8:c2c:18df::1
```

## Rollback

Before deploying, back up the current web root:

```bash
ssh web01 'sudo tar -C /home/kalveri -czf /root/codex-backups/kalveri-public-html-before-homepage-$(date +%Y%m%d%H%M%S).tar.gz public_html'
```

Rollback:

```bash
ssh web01 'sudo rm -rf /home/kalveri/public_html && sudo mkdir -p /home/kalveri/public_html'
ssh web01 'sudo tar -C /home/kalveri -xzf /root/codex-backups/kalveri-public-html-before-homepage-YYYYMMDDHHMMSS.tar.gz'
ssh web01 'sudo apache2ctl configtest && sudo systemctl reload apache2'
```
