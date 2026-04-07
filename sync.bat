@echo off
cd /d "C:\Users\AloeVERA\OneDrive - ALOMAYJOB\DWWM\MOURAD"

:: Récup date/heure format FR
for /f %%a in ('powershell -command "Get-Date -Format HH:mm"') do set HOUR=%%a
for /f %%a in ('powershell -command "Get-Date -Format dd-MM-yy"') do set DATE=%%a

set MSG=PC DWWM - %HOUR% - %DATE%

git add .

:: commit seulement si changement
git diff --cached --quiet
if %errorlevel%==0 (
    echo Aucun changement
    goto pull
)

git commit -m "%MSG%"

:pull
git pull --rebase

if %errorlevel% neq 0 (
    echo Conflit detecte, corrige manuellement
    pause
    exit /b
)

git push

echo Sync termine
pause