package main

import (
	"context"
	"os/exec"
	"strings"
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

func (a *App) InstallApp(wingetID string) error {
	cmd := exec.Command(
		"winget",
		"install",
		"--id",
		wingetID,
		"-e",
		"--accept-package-agreements",
		"--accept-source-agreements",
	)

	return cmd.Run()
}

func (a *App) IsInstalled(wingetID string) (bool, error) {
	cmd := exec.Command("winget", "list", "--id", wingetID, "-e")
	out, err := cmd.CombinedOutput()

	if err != nil {
		return false, err
	}

	result := string(out)

	return strings.Contains(result, wingetID), nil
}