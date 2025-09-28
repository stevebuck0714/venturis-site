@echo off
echo Stopping any running Node processes...
taskkill /F /IM node.exe 2>nul
echo.
echo Starting Venturis development server...
echo Directory: %CD%
npm run dev
pause

