package main

import (
	"context"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"syscall"
)

// App struct
type App struct {
	ctx context.Context
}

func NewApp() *App {
	return &App{}
}

func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func getWingetPath() string {
	// Try PATH first
	if path, err := exec.LookPath("winget"); err == nil {
		return path
	}

	// Try all possible locations
	possiblePaths := []string{
		filepath.Join(os.Getenv("LOCALAPPDATA"), `Microsoft\WindowsApps\winget.exe`),
		filepath.Join(os.Getenv("USERPROFILE"), `AppData\Local\Microsoft\WindowsApps\winget.exe`),
		`C:\Program Files\WindowsApps\Microsoft.DesktopAppInstaller_1.22.10582.0_x64__8wekyb3d8bbwe\winget.exe`,
	}

	for _, path := range possiblePaths {
		if _, err := os.Stat(path); err == nil {
			return path
		}
	}

	return ""
}

func (a *App) InstallApp(wingetID string) error {
	wingetPath := getWingetPath()

	if wingetPath == "" {
		return fmt.Errorf("winget not found on this system. Please install App Installer from Microsoft Store")
	}

	cmd := exec.Command(
		wingetPath,
		"install",
		"--id",
		wingetID,
		"--silent",
		"--disable-interactivity",
		"--accept-package-agreements",
		"--accept-source-agreements",
	)

	cmd.SysProcAttr = &syscall.SysProcAttr{
        HideWindow:    true,
        CreationFlags: 0x08000000, // CREATE_NO_WINDOW
    }

	out, err := cmd.CombinedOutput()
	output := string(out)

	if strings.Contains(output, "already installed") {
		return fmt.Errorf("Already Install")
	}

	if err != nil {
		return fmt.Errorf("winget install failed: %s\n%s", err.Error(), output)
	}

	return nil
}
