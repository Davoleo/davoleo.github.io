::Coded By Davoleo
::Davoleo - (c) - 2018

@ECHO OFF
color 04

echo Richiedendo i privilegi amministrativi...
if not "%1"=="am_admin" (powershell start -verb runas '%0' am_admin & exit /b)


color 0a
echo Benvenuto nel programma di ripristino della connessione!
echo -------------------------------------------------------------------------
echo Questo script ripristinera' i DNS della tua connessione internet in modo da neutralizzare l'errore "not valid IP config"
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
echo Coded By Davoleo
echo Davoleo - (c) - 2018
PAUSE