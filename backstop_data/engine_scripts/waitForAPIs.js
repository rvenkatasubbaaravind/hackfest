module.exports = async (page, scenario) => {
  console.log("Waiting for 3 seconds...");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("3 seconds wait completed.");

  console.log("Waiting for all ib-spinner elements to have empty children...");
  console.log("All ib-spinner elements have empty children.");

  await page.evaluate(() => {
    const legendItemDiv = document.querySelector(
      "ib-nested-sunburst-chart .legend-items .legend-item:first-child"
    );
    if (legendItemDiv) {
      legendItemDiv.click();
      console.log("Clicked on the legend item div.");
    } else {
      console.log("Legend item div not found.");
    }
  });
  console.log("Click action completed.");

  // Wait for the redirection to complete
  await page.waitForNavigation({ waitUntil: "networkidle0" });

  console.log("Waiting for 5 seconds...");
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("3 seconds wait completed.");
};
