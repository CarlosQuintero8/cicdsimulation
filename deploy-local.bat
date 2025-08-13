@echo off
echo Starting local deployment test...
echo.

echo Step 1: Running tests...
call npm test
if %errorlevel% neq 0 (
    echo Tests failed! Deployment aborted.
    exit /b 1
)

echo.
echo Step 2: Building application...
call npm run build
if %errorlevel% neq 0 (
    echo Build failed! Deployment aborted.
    exit /b 1
)

echo.
echo Step 3: Starting local server...
echo Open http://localhost:8000 in your browser
echo Press Ctrl+C to stop the server
python -m http.server 8000