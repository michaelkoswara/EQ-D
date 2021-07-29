const messages = {
  networkError:
    "Unfortunately a network error was encountered. Either the USGS API is down, or there is a problem with your internet connection. Please try again to refresh using the 'Refresh' button or try later. Thank you !",
  appTitle: "EQ-D",
  statTotal: "Total Earthquakes in the Past Day (rolling basis)",
  statMax: "Highest Magnitude Reported",
  statMin: "Lowest Magnitude Reported",
  statAvg: "Average Magnitude of Earthquakes (past day)",
  loading: "Loading...",
  clickToRefresh: "Click to Refresh Data",
  listPageHeader: "Tabulated Data of All Earthquakes (Past 24 hours)",
  listPageBody:
    "This table list the important information from the USGS 'Past Day' API of reported earthquakes around the world. To sort by magnitude, simply click on the 'Magnitude' column header to toggle through the desired sort order (including to reset with no sorting).",
  homepageHeader: "Synopsis",
  homepageGraphTitle: "Number of Earthquakes per magnitude (24 hours)",
  homeGraphX: "x-axis: magnitude",
  homeGraphY: "y-axis: number of earthquakes",
  lastRefreshed: "latest Data fetched on",
  homepageBody:
    "This web application pulls in data from the public API of USGS (United States Geological Survey). The USGS updates their data fairly frequently, so all that is needed to refresh the data is click the blue refresh button or refresh the page the traditional way.",
};

export default messages;
