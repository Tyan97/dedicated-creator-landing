@echo off
echo ========================================
echo  Use Case Studio - Setup Script
echo ========================================
echo.

echo Checking Node.js installation...
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Node.js not found in PATH!
    echo.
    echo Please try one of these solutions:
    echo 1. Close this window and open a NEW Command Prompt
    echo 2. Restart your computer
    echo 3. Check if Node.js is installed at: C:\Program Files\nodejs\
    echo.
    echo Then run this script again.
    echo.
    pause
    exit /b 1
)

node --version
npm --version
echo.

echo Installing dependencies...
echo This may take a few minutes...
echo.
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Installation failed!
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo  Installation Complete!
echo ========================================
echo.
echo Starting development server...
echo The site will open at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev
