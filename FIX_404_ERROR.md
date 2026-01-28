# Fix 404 Error for Images

If you're getting a 404 error for the images, try these steps:

## Solution 1: Restart Dev Server
1. Stop your current dev server (Ctrl+C)
2. Restart it with: `npm run dev`

## Solution 2: Clear Vite Cache
1. Delete the `node_modules/.vite` folder (if it exists)
2. Restart the dev server

## Solution 3: Verify Image Files
Make sure these files exist:
- `src/assets/products/domus1.png`
- `src/assets/products/domus2.png`

## Solution 4: Check File Names
Ensure the file names match exactly (case-sensitive):
- `domus1.png` (not `Domus1.png` or `DOMUS1.png`)
- `domus2.png` (not `Domus2.png` or `DOMUS2.png`)

The code is already set up correctly - the 404 is usually just a dev server cache issue that a restart will fix.
