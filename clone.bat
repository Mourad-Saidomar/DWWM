@echo off

cd /d "C:\Users\AloeVERA\OneDrive - ALOMAYJOB\DWWM\MOURAD"

set REPO=https://github.com/Mourad-Saidomar/DWWM.git
set FOLDER=DWWM

if exist "%FOLDER%" (
    echo Deja clone → mise a jour
    cd %FOLDER%
    git pull
) else (
    git clone %REPO% %FOLDER%
)

pause