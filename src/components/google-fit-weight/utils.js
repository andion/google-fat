/* 
  Google aggregated data is weird, let's have something better.
  From :
{
  "startTimeMillis": "1654100665663",
  "endTimeMillis": "1654187065663",
  "dataset": [
    {
      "dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
      "point": []
    }
  ]
},
{
  "startTimeMillis": "1654187065663",
  "endTimeMillis": "1654273465663",
  "dataset": [
    {
      "dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
      "point": [
        {
          "startTimeNanos": "1654252911000000000",
          "endTimeNanos": "1654252911000000000",
          "dataTypeName": "com.google.weight.summary",
          "originDataSourceId": "raw:com.google.weight:com.xiaomi.hm.health:GoogleFitSyncHelper - weight",
          "value": [
            {
              "fpVal": 83.80000305175781,
              "mapVal": []
            },
            {
              "fpVal": 83.80000305175781,
              "mapVal": []
            },
            {
              "fpVal": 83.80000305175781,
              "mapVal": []
            }
          ]
        }
      ]
    }
  ]
},

to: 

  [{date: '08/10/1982 10:30' , weight: 83}]
*/
//nanos / 000000 = millies
export const parseGoogleWeightData = (googleWeightData) => {
  const nanosToMillis = (nanos) => nanos / 1000000;
  const weights = googleWeightData.data.bucket.filter(
    (b) => b.dataset[0].point?.length > 0
  );

  return weights.map((weightData) => {
    const point = weightData.dataset[0].point[0];
    return {
      date: new Date(nanosToMillis(point.startTimeNanos)).toString(),
      weight: point.value[0].fpVal,
    };
  });
};

export const getLastWeight = (weights) => {
  return weights.reverse()[0];
};
