module.exports = async (page, scenario) => {
    console.log("Waiting for 3 seconds...");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("3 seconds wait completed.");
  };
  