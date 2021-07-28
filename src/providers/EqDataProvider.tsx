import React, { useState, createContext, useEffect } from "react";

const USGS_API_URL = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson`;

export interface IEarthquakeData {
  dateOccured: Date;
  magnitude: number;
  moreDetailURL: string;
  location: string;
}

export interface IEQDataFromApi {
  properties: IEQPropertyFromApi;
}

export interface IEQPropertyFromApi {
  mag: number;
  place: string;
  time: number;
  url: string;
}

// Data context for the EQ data that any child component can utilize.
export const EQDataContext = createContext({
  eqList: [] as IEarthquakeData[],
  refreshList: () => {
    return;
  },
  isLoading: false,
  hasNetworkError: false,
  lastRefreshed: new Date(),
});

const EqDataProvider: React.FC = ({ children }): JSX.Element => {
  const [eqList, setEqList] = useState<Array<IEarthquakeData>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasNetworkError, setHasNetworkError] = useState<boolean>(false);
  const [lastRetrievedDate, setLastRetrievedDate] = useState<Date>(new Date());

  // On app mount, call the API to load the eq data.
  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = async () => {
    try {
      setIsLoading(true);
      setHasNetworkError(false);
      const listFromApi = await fetchEQDataFromApi();
      const mappedList: IEarthquakeData[] = listFromApi.map(
        ({ properties }) => ({
          dateOccured: new Date(properties.time),
          magnitude: Number(properties.mag.toFixed(2)),
          moreDetailURL: properties.url,
          location: properties.place,
        })
      );
      setEqList(mappedList);
      setLastRetrievedDate(new Date());
    } catch (e) {
      setHasNetworkError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // This function simply initiates the http GET call to retrieve the list of EQ data.
  // Putting the resulting list into the context data, and setting other flags will be up to the caller.
  const fetchEQDataFromApi = async () => {
    const response = await fetch(USGS_API_URL);
    if (response.ok) {
      const { features }: { features: Array<IEQDataFromApi> } =
        await response.json();
      return features;
    } else {
      throw new Error("network error");
    }
  };

  return (
    <EQDataContext.Provider
      value={{
        eqList,
        refreshList: refreshData,
        isLoading,
        hasNetworkError,
        lastRefreshed: lastRetrievedDate,
      }}
    >
      {children}
    </EQDataContext.Provider>
  );
};

export default EqDataProvider;
