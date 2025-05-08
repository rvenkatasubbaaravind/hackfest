require('dotenv').config();

module.exports = async (page, scenario) => {
  console.log('Logging in to the application...');

  // Navigate to the login page
  await page.goto('https://env-2a.test.infoblox.com', { waitUntil: 'networkidle2' });

  // Wait for the redirection to complete
  await page.waitForNavigation({ waitUntil: 'networkidle0' });

  // Fill in the username and submit
  const username = process.env.BACKSTOP_USERNAME;
  const password = process.env.BACKSTOP_PASSWORD;

  if (!username || !password) {
    throw new Error('Environment variables BACKSTOP_USERNAME and BACKSTOP_PASSWORD must be set.');
  }

  await page.type('input[name="username"]', username);
  await page.click('input[type="submit"]'); // Click the submit button for username
  await page.waitForSelector('input[type="password"]'); // Wait for the password field to appear

  // Fill in the password and submit
  await page.type('input[type="password"]', password);

  // Ensure the submit button is visible and interactable before clicking
  const submitButton = await page.waitForSelector('input[value="Sign In"]', { visible: true });
  await submitButton.click(); // Click the submit button for password
  await page.waitForNavigation({ waitUntil: 'networkidle0' }); // Wait for navigation to complete

  console.log('Login successful!');
};
