# How to Push Your Project to GitHub

## ⚠️ Issue: OneDrive is Locking Files

Your project is in OneDrive, which can cause Git permission issues. Here's how to fix it:

## Solution 1: Manual Steps (Recommended)

### Step 1: Close All Programs
- Close Cursor/VS Code
- Close any Git GUI tools
- Close File Explorer windows showing your project

### Step 2: Remove Lock Files Manually
1. Open File Explorer
2. Go to: `C:\Users\jawha\OneDrive\Desktop\project-client\domus-client\domus-lumina-main\domus-lumina-main\.git\`
3. Delete these files if they exist:
   - `index.lock`
   - Any files in `objects\a5\` folder that start with `tmp_obj_`

### Step 3: Open PowerShell as Administrator
1. Press `Windows + X`
2. Select "Windows PowerShell (Admin)" or "Terminal (Admin)"
3. Navigate to your project:
   ```powershell
   cd "C:\Users\jawha\OneDrive\Desktop\project-client\domus-client\domus-lumina-main\domus-lumina-main"
   ```

### Step 4: Run Git Commands
```powershell
# Remove any remaining lock files
Remove-Item ".git\index.lock" -Force -ErrorAction SilentlyContinue
Remove-Item ".git\objects\a5\tmp_obj_*" -Force -ErrorAction SilentlyContinue

# Add all files
git add .

# Commit
git commit -m "Initial commit: Add Domus Lighting website"

# Push to GitHub
git push -u origin main
```

## Solution 2: Move Project Out of OneDrive (Best Long-term)

OneDrive sync can interfere with Git. Consider moving your project:

1. Move the project folder to: `C:\Projects\domus-lumina-main\`
2. Then run the git commands from there

## Solution 3: Pause OneDrive Sync Temporarily

1. Right-click OneDrive icon in system tray
2. Click "Pause syncing" → "2 hours"
3. Run git commands
4. Resume syncing after

## If You Get Authentication Errors

You may need to authenticate with GitHub:

```powershell
# Set your GitHub credentials
git config --global user.name "Jawhar2023"
git config --global user.email "your-email@example.com"

# If using HTTPS, you'll be prompted for credentials
# Or use a Personal Access Token instead of password
```

## Your Repository Info:
- **Remote URL**: https://github.com/Jawhar2023/Domus.git
- **Branch**: main

## Quick Command Summary:
```bash
git add .
git commit -m "Initial commit: Add Domus Lighting website"
git push -u origin main
```
