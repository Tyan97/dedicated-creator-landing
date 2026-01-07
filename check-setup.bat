@echo off
echo ========================================
echo  Diagnostic Check
echo ========================================
echo.

echo Checking Node.js...
where node
node --version
echo.

echo Checking npm...
where npm
npm --version
echo.

echo Checking project files...
if exist "package.json" (
    echo [OK] package.json found
) else (
    echo [ERROR] package.json not found!
)

if exist "app\page.tsx" (
    echo [OK] app\page.tsx found
) else (
    echo [ERROR] app\page.tsx not found!
)

if exist "node_modules" (
    echo [OK] node_modules folder exists
) else (
    echo [WARNING] node_modules not found - need to run npm install
)

echo.
echo ========================================
echo  Check Complete
echo ========================================
pause
