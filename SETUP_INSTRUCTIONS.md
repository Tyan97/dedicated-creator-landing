# Setup Instructions

## The Issue
Node.js is installed but not available in your PATH environment variable yet. This means your terminal can't find the `node` and `npm` commands.

## Quick Fix - Option 1: Restart Your Computer

The easiest solution is to **restart your computer**. This will refresh your system's PATH variables and make Node.js available.

After restarting:
1. Open Command Prompt or PowerShell
2. Navigate to the project: `cd "c:\Users\tyan3\Desktop\dedicated-creator-landing"`
3. Run: `npm install`
4. Run: `npm run dev`
5. Open: http://localhost:3000

## Quick Fix - Option 2: Open a New Terminal

If you don't want to restart:
1. **Close all Command Prompt/PowerShell/VS Code windows**
2. Open a **brand new** Command Prompt or PowerShell window
3. Try running: `node --version`
4. If it works, proceed with:
   ```
   cd "c:\Users\tyan3\Desktop\dedicated-creator-landing"
   npm install
   npm run dev
   ```

## Quick Fix - Option 3: Use the Full Path

If the above doesn't work, Node.js is typically installed at:
`C:\Program Files\nodejs\npm.cmd`

You can try running:
```
cd "c:\Users\tyan3\Desktop\dedicated-creator-landing"
"C:\Program Files\nodejs\npm.cmd" install
"C:\Program Files\nodejs\npm.cmd" run dev
```

## Quick Fix - Option 4: Use VS Code Terminal

If you have VS Code installed:
1. Open VS Code
2. Open the folder: File → Open Folder → Select `dedicated-creator-landing`
3. Open Terminal: Terminal → New Terminal (or Ctrl + `)
4. Run:
   ```
   npm install
   npm run dev
   ```

## Verify Node.js Installation

In a new terminal, run these commands to verify:
```bash
node --version
npm --version
```

You should see version numbers like:
```
v20.11.0
10.2.4
```

If you see "command not found" or similar errors, Node.js needs to be reinstalled or added to your PATH manually.

## Need More Help?

If none of these work, let me know and I can:
1. Create a standalone HTML version that doesn't require Node.js
2. Help you troubleshoot your Node.js installation
3. Provide alternative deployment options
