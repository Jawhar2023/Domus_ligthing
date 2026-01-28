# GitHub Setup Instructions

Your repository is already initialized and connected to GitHub. Here's what you need to do:

## Step 1: Remove Git Lock (if needed)
If you get a lock file error, run:
```powershell
Remove-Item .git\index.lock -Force
```

## Step 2: Add All Files
```bash
git add .
```

## Step 3: Commit Your Changes
```bash
git commit -m "Initial commit: Add Domus Lighting website"
```

## Step 4: Push to GitHub
```bash
git push -u origin main
```

## What Was Wrong?

You were only adding `README.md` with:
```bash
git add README.md
```

But you need to add ALL your project files with:
```bash
git add .
```

The `.` means "add everything in the current directory".

## If You Get Errors:

1. **Lock file error**: Remove `.git/index.lock` file
2. **Authentication error**: Make sure you're logged into GitHub
3. **Remote exists error**: Your remote is already set up correctly

## Your Repository:
- Remote: https://github.com/Jawhar2023/Domus.git
- Branch: main
