const fs = require("fs");
const path = require("path");

module.exports = async (page, scenario) => {
  await page.setRequestInterception(true);

  page.on("request", (request) => {
    const url = request.url();

    if (
      url.includes("/api/cubejs-security/v1/query") ||
      url.includes("/api/cubejs/v1/query")
    ) {
      const urlObj = new URL(url);
      const queryParam = urlObj.searchParams.get("query");

      const decodedQuery = decodeURIComponent(queryParam);

      if (decodedQuery) {
        try {
          queryData = JSON.parse(decodedQuery);
        } catch (e) {
          console.error("Failed to parse query as JSON:", e);
        }

        const dimensions = queryData.dimensions || [];

        const dimensionsStr = JSON.stringify(dimensions);

        const mockPath = path.join(__dirname, "mocks.json");
        const fileContent = fs.readFileSync(mockPath, "utf8");
        const mockData = JSON.parse(fileContent);
        let responseData = {};

        // Case 1: severity and tclass
        if (
          dimensionsStr ==
          JSON.stringify([
            "PortunusAggThreat_ch.severity",
            "PortunusAggThreat_ch.tclass",
          ])
        ) {
          responseData = mockData["case1"] || {};
        }
        // Case 2: only tclass
        else if (
          dimensionsStr === JSON.stringify(["PortunusAggThreat_ch.tclass"])
        ) {
          responseData = mockData["case2"] || {};
        }
        // Case 3: only action
        else if (
          dimensionsStr === JSON.stringify(["PortunusAggThreat_ch.action"])
        ) {
          responseData = mockData["case3"] || {};
        }
        // Case 4: only feed_name
        else if (
          dimensionsStr === JSON.stringify(["PortunusAggThreat_ch.feed_name"])
        ) {
          responseData = mockData["case4"] || {};
        }
        // Case 5: only severity
        else if (
          dimensionsStr === JSON.stringify(["PortunusAggThreat_ch.severity"])
        ) {
          responseData = mockData["case5"] || {};
        }
        // Case 6:
        else if (
          dimensionsStr ===
          JSON.stringify([
            "PortunusAggThreat_ch.tclass",
            "PortunusAggThreat_ch.tproperty",
            "PortunusAggThreat_ch.severity",
            "PortunusAggThreat_ch.confidence",
            "PortunusAggThreat_ch.feed_name",
            "PortunusAggThreat_ch.action",
            "PortunusAggThreat_ch.threat_indicator",
            "PortunusAggThreat_ch.actor_name",
          ])
        ) {
          responseData = mockData["case6"] || {};
        }

        request.respond({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify(responseData),
        });
      } else {
        request.respond({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({
            data: [],
          }),
        });
      }
    } else {
      request.continue();
    }
  });
};
