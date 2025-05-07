# Static Web Server

This project sets up a simple HTTP server that serves a static webpage. The server listens on port 3982 and serves files from the `public` directory.

## Project Structure

```
static-web-server
├── public
│   ├── index.html        # Main HTML document
│   ├── css
│   │   └── style.css     # Styles for the webpage
│   └── js
│       └── script.js     # JavaScript for interactivity
├── src
│   └── server.js         # Entry point for the HTTP server
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd static-web-server
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the server**:
   ```
   npm start
   ```

4. **Access the webpage**:
   Open your browser and navigate to `http://localhost:3982`.

## Dependencies

This project uses the following npm packages:
- express: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## License

This project is licensed under the MIT License.