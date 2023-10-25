package main

import (
	web "poc/embedReact/vite-project"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()
	web.RegisterHandlers(e)
	// Routes
	e.GET("/welcome", func(c echo.Context) error {
		return c.String(200, "Hello, World!")
	})

	e.Logger.Fatal(e.Start(":4500"))
}
