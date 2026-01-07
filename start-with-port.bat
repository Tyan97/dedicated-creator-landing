@echo off
echo ========================================
echo  Starting on Different Port
echo ========================================
echo.
echo If port 3000 is busy, trying port 3001...
echo.

call npm install
echo.
echo Starting server on port 3001...
call npm run dev -- -p 3001

pause
