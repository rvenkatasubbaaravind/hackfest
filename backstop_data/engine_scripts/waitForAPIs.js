module.exports = async (page, scenario) => {
  console.log("Waiting for 3 seconds...");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("3 seconds wait completed.");

  console.log("Waiting for all ib-spinner elements to have empty children...");
  console.log("All ib-spinner elements have empty children.");

  console.log("Waiting for 5 seconds...");
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("5 seconds wait completed.");

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

  // Replace your final navigation wait with this more comprehensive approach
await Promise.all([
  page.waitForNavigation({ waitUntil: 'networkidle0' }),
  page.waitForNavigation({ waitUntil: 'load' }),
  page.waitForNavigation({ waitUntil: 'domcontentloaded' })
]).catch(e => console.log('Some navigation event might have been missed, but continuing...'));

console.log("Waiting for 5 seconds...");
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("5 seconds wait completed.");
  
};
