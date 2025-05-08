module.exports = async (page, scenario) => {

  console.log('Waiting for 3 seconds...');
  await new Promise(resolve => setTimeout(resolve, 3000));
  console.log('3 seconds wait completed.');

  console.log('Waiting for all ib-spinner elements to have empty children...');
  await page.waitForFunction(() => {
    const spinners = document.querySelectorAll('ib-spinner');
    return Array.from(spinners).every(spinner => spinner.children.length === 0);
  });
  console.log('All ib-spinner elements have empty children.');
};
