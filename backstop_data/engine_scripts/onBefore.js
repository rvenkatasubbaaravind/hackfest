module.exports = async (page, scenario, vp) => {

    console.log('[onBefore.js] Starting script for scenario:', scenario.label);

    
    // Add mocks for specific API endpoints
    await page.setRequestInterception(true);
    
    page.on('request', request => {

      const url = request.url();
      
      // Example: Mock a specific API endpoint
      if (url.includes('/api/cricket/scores')) {
        console.log("caught")
        request.respond({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify([
            {name: "Virat Kohli", ballsFaced: 65, runs: 82, sixes: 3, fours: 7, status: "Not Out"},
            {name: "Rohit Sharma", ballsFaced: 48, runs: 56, sixes: 2, fours: 6, status: "Out"}
          ])
        });
      } else {
        // Let other requests continue normally
        request.continue();
      }
    });
  };