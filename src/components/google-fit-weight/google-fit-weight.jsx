import { useEffect, useState } from "react";
import { getLastWeight, parseGoogleWeightData } from "./utils";
import axios from "axios";

const GOOGLE_FIT_URL =
  "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate";

export const getAggregateData = async (body, headers) => {
  const req = await axios.post(GOOGLE_FIT_URL, body, headers);
  return req;
};

export const getRequestHeaders = (accessToken) => ({
  params: {
    key: process.env.REACT_APP_API_KEY,
  },
  headers: {
    Authorization: `Bearer ${accessToken}`,
    Accept: "application/json",
  },
});

const getWeightBody = (endTime) => ({
  aggregateBy: [
    {
      dataTypeName: "com.google.weight",
    },
  ],
  bucketByTime: {
    durationMillis: 86400000,
  },
  endTimeMillis: endTime,
  startTimeMillis: endTime - 30 * 86400000,
});

const getWeightData = (accessToken) =>
  axios.post(
    GOOGLE_FIT_URL,
    getWeightBody(new Date().getTime()),
    getRequestHeaders(accessToken)
  );

const GoogleFitWeight = ({ token }) => {
  const { access_token } = token;
  const [weightData, setWeightData] = useState(null);

  useEffect(() => {
    getWeightData(access_token).then((data) => {
      setWeightData(parseGoogleWeightData(data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1> You are fucking fat, you fat cunt.</h1>
      {weightData ? (
        <h2>
          Your last WEIGHT: {getLastWeight(weightData)?.date}:
          {getLastWeight(weightData)?.weight}
        </h2>
      ) : (
        <p>NO WEIGHT YET</p>
      )}
    </>
  );
};

export default GoogleFitWeight;
