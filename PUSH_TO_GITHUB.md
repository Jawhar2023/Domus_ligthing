# Push Project to GitHub - Commands

Your project is already initialized. Here are the commands to push everything:

## Step 1: Remove Git Lock (if needed)
Close Cursor/VS Code first, then run:
```powershell
Remove-Item ".git\index.lock" -Force -ErrorAction SilentlyContinue
```

## Step 2: Add All Files
```bash
git add .
```
**Important**: Use `git add .` (not just `git add README.md`) to add ALL your project files!

## Step 3: Commit
```bash
git commit -m "first commit"
```

## Step 4: Ensure Branch is Main
```bash
git branch -M main
```

## Step 5: Set Remote (Already Done)
```bash
git remote set-url origin https://github.com/Jawhar2023/Domus_ligthing.git
```

## Step 6: Push to GitHub
```bash
git push -u origin main
```

## Complete Command Sequence:
```bash
cd "c:\Users\jawha\OneDrive\Desktop\project-client\domus-client\domus-lumina-main\domus-lumina-main"

# Remove lock if exists
Remove-Item ".git\index.lock" -Force -ErrorAction SilentlyContinue

# Add all files
git add .

# Commit
git commit -m "first commit"

# Ensure branch name
git branch -M main

# Push
git push -u origin main
```

## ⚠️ Important Notes:

1. **Close Cursor/VS Code** before running git commands (OneDrive lock issue)
2. **Use `git add .`** not `git add README.md` - you need ALL files
3. If you get permission errors, **pause OneDrive sync** temporarily
4. You may need to **authenticate with GitHub** (username + Personal Access Token)

## If You Get Errors:

- **Lock file error**: Close all programs, delete `.git\index.lock` manually
- **Permission error**: Pause OneDrive sync, run commands, resume sync
- **Auth error**: Use GitHub Personal Access Token instead of password
