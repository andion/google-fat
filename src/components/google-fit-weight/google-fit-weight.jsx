import { useState } from "react";
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
      dataTypeName: {
        title: "Weight",
        type: "com.google.weight",
      },
    },
  ],
  bucketByTime: {
    durationMillis: 86400000,
  },
  endTimeMillis: endTime,
  startTimeMillis: endTime - 7 * 86400000,
});

const getWeight = (accessToken) =>
  axios.post(
    GOOGLE_FIT_URL,
    getWeightBody(new Date()),
    getRequestHeaders(accessToken)
  );
const GoogleFitWeight = ({ token }) => {
  const { access_token } = token;
  const [weight, setWeight] = useState(null);

  getWeight(access_token).then((data) => {
    console.log(data);
    setWeight(data);
  });

  return (
    <>
      <h1> You are fucking fat, you fat cunt.</h1>
      {weight ? (
        <tt>WEIGHT: {JSON.stringify(weight)}</tt>
      ) : (
        <p>NO WEIGHT YET</p>
      )}
    </>
  );
};

export default GoogleFitWeight;
