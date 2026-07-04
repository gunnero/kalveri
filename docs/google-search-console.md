# Google Search Console Preparation

Kalveri homepage v1 is ready for Search Console setup after deployment.

## Verification

Recommended method: DNS TXT verification.

1. Open Google Search Console.
2. Add a domain property for `kalveri.com`.
3. Copy the TXT verification record Google provides.
4. Add the TXT record in Hetzner DNS for `kalveri.com`.
5. Wait for DNS propagation.
6. Click **Verify** in Search Console.

Do not add a verification token to the homepage unless DNS verification is not possible.

## Sitemap Submission

After the property is verified:

1. Open **Sitemaps** in Google Search Console.
2. Submit `https://kalveri.com/sitemap.xml`.
3. Confirm Google can fetch the sitemap.

## Current Sitemap

The sitemap contains only the homepage:

- `https://kalveri.com/`

Future pages can be added to `sitemap.xml` as the site expands.
