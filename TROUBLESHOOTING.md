# Troubleshooting "Site Can't Be Reached"

## Step-by-Step Fix

### Step 1: Run Diagnostic Check
1. Double-click `check-setup.bat`
2. Take a screenshot or note what it says
3. If it says "command not found" for node/npm, restart your computer

### Step 2: Make Sure Dependencies Are Installed

Open Command Prompt (Win + R, type `cmd`, press Enter) and run:

```bash
cd "c:\Users\tyan3\Desktop\dedicated-creator-landing"
npm install
```

**Wait for it to complete** - this may take 2-5 minutes. You should see:
- A progress bar
- "added XXX packages"
- A new folder called `node_modules` will appear

### Step 3: Start the Server

After installation completes, run:

```bash
npm run dev
```

**DO NOT CLOSE THIS WINDOW!** Keep it open.

You should see:
```
  ▲ Next.js 14.2.0
  - Local:        http://localhost:3000
  - ready started server on 0.0.0.0:3000
```

### Step 4: Open Browser

While keeping the terminal window open, open your browser and go to:
- http://localhost:3000
- OR try: http://127.0.0.1:3000

## Common Issues & Solutions

### Issue 1: "Port 3000 is already in use"

**Solution:** Run `start-with-port.bat` to use port 3001 instead.

Or manually:
```bash
npm run dev -- -p 3001
```
Then open: http://localhost:3001

### Issue 2: Terminal closes immediately

**Causes:**
- npm install failed
- Missing dependencies
- Syntax error in code

**Solution:**
1. Open Command Prompt manually
2. Run commands one by one:
   ```bash
   cd "c:\Users\tyan3\Desktop\dedicated-creator-landing"
   npm install
   npm run dev
   ```
3. Look for any RED error messages and share them

### Issue 3: "Cannot find module" errors

**Solution:** Delete node_modules and reinstall:
```bash
rmdir /s /q node_modules
npm install
npm run dev
```

### Issue 4: Nothing happens when I run npm run dev

**Causes:**
- Server is starting but slow
- Firewall blocking
- TypeScript compilation errors

**Solution:**
1. Wait 30-60 seconds after running npm run dev
2. Check Windows Firewall - allow Node.js if prompted
3. Look for compilation errors in the terminal

### Issue 5: Browser shows "This site can't be reached"

**Checklist:**
- ✅ Is the terminal window still open?
- ✅ Do you see "ready started server" in the terminal?
- ✅ Did you wait at least 30 seconds after npm run dev?
- ✅ Are you using the correct URL? (http://localhost:3000)
- ✅ Try http://127.0.0.1:3000 instead

## Still Not Working?

### Quick Alternative: Run the HTML Version

Your project folder has an old `index.html` file. While we set up Next.js, you can:

1. Right-click `index.html`
2. Open with → Chrome/Edge/Firefox
3. This gives you a preview (but won't have all Next.js features)

### Get Detailed Error Info

Run this in Command Prompt and share the output:

```bash
cd "c:\Users\tyan3\Desktop\dedicated-creator-landing"
npm run dev > output.log 2>&1
```

Wait 30 seconds, then open `output.log` and share what's inside.

## Contact for Help

If you're still stuck, share:
1. What happens when you run `npm run dev`
2. Any error messages (red text)
3. Screenshot of the terminal
4. Output from `check-setup.bat`
