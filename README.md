# Hackfest Project

## Overview

This project includes a setup for visual regression testing using BackstopJS. It also contains a static web server and other related files for development and testing purposes.

## Features

- **BackstopJS**: Visual regression testing tool.
- **Static Web Server**: A simple server for serving static files.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd hackfest
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## BackstopJS Usage

### Initialize BackstopJS

BackstopJS has already been initialized in this project. The configuration file is located at `backstop.json`.

### Generate Reference Screenshots

Run the following command to generate reference screenshots:

```bash
npx backstop reference
```

### Test Against References

Run the following command to compare the current state against the reference screenshots:

```bash
npx backstop test
```

### View Reports

After running tests, view the HTML report generated in the `backstop_data/html_report` directory.

## Static Web Server

The `static-web-server` directory contains a simple static web server written in Go.

### Running the Server

1. Navigate to the `static-web-server` directory:
   ```bash
   cd static-web-server
   ```
2. Run the server:
   ```bash
   go run main.go
   ```

The server will serve files from the `public` directory.

## Project Structure

- `backstop.json`: Configuration file for BackstopJS.
- `backstop_data/`: Contains reference and test screenshots, as well as reports.
- `static-web-server/`: Contains the static web server implementation.
- `src/`: Contains server-side code.

## Contributing

Feel free to submit issues or pull requests to improve this project.

## License

This project is licensed under the MIT License.
