report({
  "testSuite": "UI Regression",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/0776184786_Security_Monitors_Page_0_document_0_desktop.png",
        "test": "../bitmaps_test/20250509-175236/0776184786_Security_Monitors_Page_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "0776184786_Security_Monitors_Page_0_document_0_desktop.png",
        "label": "Security Monitors Page",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.05,
        "url": "https://stage.csp.infoblox.com/#/workspace/security",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/0776184786_Security_Theats_Level_Details_Page_0_document_0_desktop.png",
        "test": "../bitmaps_test/20250509-175236/0776184786_Security_Theats_Level_Details_Page_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "0776184786_Security_Theats_Level_Details_Page_0_document_0_desktop.png",
        "label": "Security Theats Level Details Page",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.05,
        "url": "https://stage.csp.infoblox.com/#/workspace/security",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 2.816502700617284,
          "misMatchPercentage": "2.82",
          "analysisTime": 27
        },
        "diffImage": "../bitmaps_test/20250509-175236/failed_diff_0776184786_Security_Theats_Level_Details_Page_0_document_0_desktop.png"
      },
      "status": "fail"
    }
  ],
  "id": ""
});