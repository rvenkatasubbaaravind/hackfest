package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
)

type Player struct {
	Name       string `json:"name"`
	BallsFaced int    `json:"ballsFaced"`
	Runs       int    `json:"runs"`
	Sixes      int    `json:"sixes"`
	Fours      int    `json:"fours"`
	Status     string `json:"status"`
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "3982" // Default port if not specified
	}

	// Define the file server to serve static files
	fs := http.FileServer(http.Dir("./public"))

	// Register routes
	http.Handle("/", fs)
	http.HandleFunc("/api/cricket/scores", getCricketScores)

	log.Printf("Starting server on port %s", port)
	err := http.ListenAndServe(":"+port, nil)
	if err != nil {
		log.Fatal(err)
	}
}

func getCricketScores(w http.ResponseWriter, r *http.Request) {
	// Set CORS headers if needed
	w.Header().Set("Content-Type", "application/json")

	// Sample data - in a real application, this would come from a database or external API
	players := []Player{
		{Name: "Virat Kohli", BallsFaced: 65, Runs: 82, Sixes: 3, Fours: 7, Status: "Not Out"},
		{Name: "Rohit Sharma", BallsFaced: 48, Runs: 56, Sixes: 2, Fours: 6, Status: "Out"},
		{Name: "KL Rahul", BallsFaced: 32, Runs: 42, Sixes: 1, Fours: 5, Status: "Out"},
		{Name: "Rishabh Pant", BallsFaced: 18, Runs: 34, Sixes: 2, Fours: 3, Status: "Not Out"},
		{Name: "Hardik Pandya", BallsFaced: 15, Runs: 24, Sixes: 1, Fours: 2, Status: "Not Out"},
	}

	// Encode the data as JSON
	err := json.NewEncoder(w).Encode(players)
	if err != nil {
		http.Error(w, "Error encoding response", http.StatusInternalServerError)
		return
	}
}
