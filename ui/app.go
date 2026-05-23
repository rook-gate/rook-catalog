package main

import (
	"context"
	"fmt"
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
		"--silent",
		"--disable-interactivity",
		"--accept-package-agreements",
		"--accept-source-agreements",
	)

	fmt.Println("Executing command:", cmd.String())
	out, err := cmd.CombinedOutput()

	output := string(out)

	if strings.Contains(output, "already installed") {
		return  fmt.Errorf("Already Install")
	}

	if err != nil {
		return fmt.Errorf("winget install failed: %s\n%s", err.Error(), string(out))
	}

	return nil
}
