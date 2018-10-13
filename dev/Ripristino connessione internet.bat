::Coded By Davoleo
::Davoleo - (c) - 2018

@ECHO OFF
color 04

echo Richiedendo i privilegi amministrativi...
if not "%1"=="am_admin" (powershell start -verb runas '%0' am_admin & exit /b)

:LANG
cls
color 4f
SET /p language=Please input your language (Supported languages: IT - EN): 

IF /I "%language%"=="IT" GOTO IT
IF /I "%language%"=="EN" GOTO EN
ELSE ( 
GOTO NONE
)

:IT
cls
color 0a
echo Benvenuto nel programma di ripristino della connessione!
echo -------------------------------------------------------------------------
echo Questo script ripristinera' i DNS della tua connessione internet in modo da neutralizzare l'errore "invalid IP config"
echo -------------------------------------------------------------------------
color 0b
echo.
echo Il prossimo comando sara': netsh winsock reset
PAUSE
netsh winsock reset

color 0c
echo.
echo Il prossimo comando sara': netsh int ip reset
PAUSE
netsh int ip reset

color 0d
echo.
echo Il prossimo comando sara': ipconfig /flushdns
PAUSE
ipconfig /flushdns

color 0e
echo.
echo Il prossimo comando sara': ipconfig /release
PAUSE
ipconfig /release

color 0f
echo.
echo Il prossimo comando sara' ipconfig /renew
PAUSE
ipconfig /renew

cls
color f3
echo RIPRISTINO COMPLETATO!
echo Scritto da Davoleo
echo Davoleo - (c) - 2018
PAUSE

color 05
cls
echo Questi comandi avranno effetto solo dopo aver riavviato il computer
echo Vuoi riavviare il computer ora?

SET /p reboot=Inserisci "SI" oppure "NO": 

IF "%reboot%"=="SI" (
echo Arresto e Riavvio in corso... 
shutdown -r 
PAUSE
exit
)

IF "%reboot%"=="NO" exit

REM -------------------------------------------------------------------------------------

:EN
cls
color 0a
echo Welcome to the Nework Connection Restore script!
echo -------------------------------------------------------------------------
echo This script will restore your internet connection DNS to get rid of the error "invalid IP Config"
echo -------------------------------------------------------------------------
color 0b
echo.
echo The next command is: netsh winsock reset
PAUSE
netsh winsock reset

color 0c
echo.
echo The next command is: netsh int ip reset
PAUSE
netsh int ip reset

color 0d
echo.
echo The next command is: ipconfig /flushdns
PAUSE
ipconfig /flushdns

color 0e
echo.
echo The next command is: ipconfig /release
PAUSE
ipconfig /release

color 0f
echo.
echo The next command is: ipconfig /renew
PAUSE
ipconfig /renew

cls
color f3
echo RESTORE COMPLETE!
echo Script Coded By Davoleo
echo Davoleo - (c) - 2018
PAUSE

color 05
cls
echo These commands will only have effect after a PC reboot
echo Do you want to reboot now?

SET /p reboot=Write "Y" or "N": 

IF "%reboot%"=="Y" (
    echo Shutdown and reboot in progress...
    shutdown -r
    PAUSE
    exit
)
IF "%reboot%"=="N" (
    exit
)

REM ---------------------------------------------------------------------------

:NONE
color 0e
echo ignore this ^^
echo.
echo Language not supported by the script
echo Sorry for the inconvenience
echo Retry choosing from one of the supported languages...
echo.
PAUSE
GOTO LANG