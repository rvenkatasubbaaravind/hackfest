module.exports = async (page, scenario) => {

  console.log('Waiting for any ib-spinner element to have at least one child...');
  await page.waitForFunction(() => {
    const spinners = document.querySelectorAll('ib-spinner');
    return Array.from(spinners).some(spinner => spinner.children.length > 0);
  });
  console.log('An ib-spinner element now has at least one child.');

  console.log('Waiting for all ib-spinner elements to have no children...');
  await page.waitForFunction(() => {
    const spinners = document.querySelectorAll('ib-spinner');
    return Array.from(spinners).every(spinner => spinner.children.length === 0);
  });
  console.log('All ib-spinner elements now have no children.');
};
