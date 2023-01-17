import { useEffect, useState } from "react";
import { parseGoogleWeightData } from "./utils";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";
import Weight from "../weight";
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

const getMonthlyWeightBody = (date) => {
  const startTimeMillis = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getTime();
  const endTimeMillis = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    1
  ).getTime();

  return {
    aggregateBy: [
      {
        dataTypeName: "com.google.weight",
      },
    ],
    bucketByTime: {
      durationMillis: 86400000, // 1 day per bucket
    },
    startTimeMillis,
    endTimeMillis,
  };
};

const getWeightData = (accessToken, startOfTheMonth) =>
  axios.post(
    GOOGLE_FIT_URL,
    getMonthlyWeightBody(startOfTheMonth),
    getRequestHeaders(accessToken)
  );

const sameDay = (date1, date2) => {
  const d1 = date1 instanceof Date ? date1 : new Date(date1);
  const d2 = date2 instanceof Date ? date2 : new Date(date2);

  return (
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear()
  );
};

const GoogleFitWeight = ({ token }) => {
  const { access_token } = token;
  const [weightData, setWeightData] = useState([]);
  const [startOfTheMonth, setStartOfTheMonth] = useState(new Date());

  const getWeightForDate = (givenDate) => {
    const dayWeigths = weightData
      .filter(({ date }) => sameDay(date, givenDate))
      .map((data) => data.weight);

    return (
      <>
        {dayWeigths.map((w) => (
          <Weight weight={w} idealWeight={75} />
        ))}
      </>
    );
  };

  useEffect(() => {
    getWeightData(access_token, startOfTheMonth).then((data) => {
      setWeightData(parseGoogleWeightData(data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startOfTheMonth]);

  return (
    <>
      <h1>Weight data</h1>
      <div>
        <Calendar
          onActiveStartDateChange={({ activeStartDate }) =>
            setStartOfTheMonth(activeStartDate)
          }
          onClickDay={(value) =>
            console.log(
              "CLICKED DATE: ",
              value,
              " WEIGHT: ",
              getWeightForDate(value)
            )
          }
          tileContent={({ date, view }) =>
            view === "month" && getWeightForDate(date)
          }
        />
      </div>
      <pre>{JSON.stringify(weightData)}</pre>
    </>
  );
};

export default GoogleFitWeight;
