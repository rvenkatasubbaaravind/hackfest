require("dotenv").config();
const mockFunctions = require("./mock.js");

module.exports = async (page, scenario) => {
  console.log("Logging in to the application...");

  await mockFunctions(page, scenario);

  // Navigate to the login page
  await page.goto("https://stage.csp.infoblox.com", {
    waitUntil: "networkidle2",
  });

  // Wait for the redirection to complete
  await page.waitForNavigation({ waitUntil: "networkidle0" });

  // Fill in the username and submit
  const username = process.env.BACKSTOP_USERNAME;
  const password = process.env.BACKSTOP_PASSWORD;

  if (!username || !password) {
    throw new Error(
      "Environment variables BACKSTOP_USERNAME and BACKSTOP_PASSWORD must be set."
    );
  }

  await page.type('input[name="username"]', username);
  await page.click('input[type="submit"]'); // Click the submit button for username
  await page.waitForSelector('input[type="password"]'); // Wait for the password field to appear

  // Fill in the password and submit
  await page.type('input[type="password"]', password);

  // Ensure the submit button is visible and interactable before clicking
  const submitButton = await page.waitForSelector('input[value="Sign In"]', {
    visible: true,
  });
  await submitButton.click(); // Click the submit button for password
  await page.waitForNavigation({ waitUntil: "networkidle0" }); // Wait for navigation to complete

  console.log("Login successful!");

  console.log("Running ufeOverride after login...");
  await page.evaluate(() => {
    if (typeof ufeOverride === "function") {
      ufeOverride("dashboards", "v4.6.1-0-g7a334cb-dashboards--main");
      console.log("ufeOverride executed successfully.");
    } else {
      console.warn("ufeOverride function is not defined on the page.");
    }
  });
  console.log(
    "ufeOverride execution completed. Waiting for navigation to start..."
  );

  // Wait for navigation to start and complete
  await page.waitForNavigation({ waitUntil: "networkidle0" });
  console.log("Navigation completed.");
};
