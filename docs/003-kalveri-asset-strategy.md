# Kalveri asset strategy

## Principles

Keep authoritative brand sources, reviewed public derivatives, and evidence screenshots in Git. Prefer SVG for simple marks and optimized PNG for assets whose current rendering depends on raster source artwork. Avoid untraceable generated assets, unnecessary duplicate exports, embedded private metadata, and public build artifacts.

## Inventory decisions

| Asset group | Decision | Rationale |
| --- | --- | --- |
| `kalveri-wordmark-source.png`, `kalveri-k-source.png` | Retain as source masters | Existing authoritative raster sources; approximately 2.2 MB each; keep until a reviewed vector source supersedes them |
| `kalveri-wordmark.png`, `kalveri-k.png` | Keep optimized runtime derivatives | Correct display dimensions and materially smaller than sources |
| `kalveri-mark.svg`, `favicon.svg` | Keep as vectors | Small, scalable, reviewable identity marks |
| `favicon.ico`, `apple-touch-icon.png` | Keep | Required browser/platform derivatives |
| `kalveri-social-preview.svg` | Keep as editable source | Reproducible public preview composition |
| `kalveri-social-preview.png` | Keep generated public derivative | Required broad social-card compatibility; regenerate from the reviewed SVG |
| `docs/assets/screenshots/*.png` | Keep approved evidence only | Recruiter/partner review evidence governed by the screenshot policy |
| `dist/`, reports, source maps | Do not track | Reproducible validation/build outputs |

Git LFS is not justified for the current asset volume. It would add contributor and CI complexity without resolving ownership or provenance. Confirm legal ownership of the source artwork before granting any reuse rights; the current proprietary source-visible posture reserves those rights.
