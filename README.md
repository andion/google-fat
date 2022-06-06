# Google FAT

Un experimento con las Apis de google para mostrar el peso de una manera útil y no como lo muestra gugel.

# ROADMAP

- [x] Login con google
- [x] Sacar la info de fit
  - [] Cachear en localStorage dia/peso
- [ ] Guardar token para mantener logueado
- [ ] Perfil de usuario -> Probar Tailwind a ver que tal
- [ ] Gráficas

# Sacar la info de fit

https://developers.google.com/fit/rest/v1/running-examples

DataType: weight: https://developers.google.com/fit/datatypes/body#weight

PERMISO: scope="https://www.googleapis.com/auth/fitness.body.read"

Ya conseguimos hacer la request, peeeero ahora parece que no está bien el aggregated. Estoy siguiendo:https://github.dev/uds5501/fitmeup-oauth-visualizer/blob/master/src/Utility/DataRequestManager.js

ERROR:

{
"error": {
"code": 400,
"message": "Invalid value at 'aggregate_by[0]' (data_type_name), Starting an object on a scalar field\nInvalid value at 'end_time_millis' (TYPE_INT64), \"2021-08-16T11:07:23.313Z\"",
"errors": [
{
"message": "Invalid value at 'aggregate_by[0]' (data_type_name), Starting an object on a scalar field\nInvalid value at 'end_time_millis' (TYPE_INT64), \"2021-08-16T11:07:23.313Z\"",
"reason": "invalid"
}
],
"status": "INVALID_ARGUMENT"
}
}

ESTABAMOS PASANDO MAL LA INFO, ahora sí que pasa, y devuelve

WEIGHT: {
"data": {
"bucket": [
{
"startTimeMillis": "1651940665663",
"endTimeMillis": "1652027065663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1652027065663",
"endTimeMillis": "1652113465663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1652113465663",
"endTimeMillis": "1652199865663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1652199865663",
"endTimeMillis": "1652286265663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1652286265663",
"endTimeMillis": "1652372665663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1652372665663",
"endTimeMillis": "1652459065663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1652459065663",
"endTimeMillis": "1652545465663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1652545465663",
"endTimeMillis": "1652631865663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1652631865663",
"endTimeMillis": "1652718265663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1652718265663",
"endTimeMillis": "1652804665663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1652804665663",
"endTimeMillis": "1652891065663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1652891065663",
"endTimeMillis": "1652977465663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1652977465663",
"endTimeMillis": "1653063865663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1653063865663",
"endTimeMillis": "1653150265663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1653150265663",
"endTimeMillis": "1653236665663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1653236665663",
"endTimeMillis": "1653323065663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1653323065663",
"endTimeMillis": "1653409465663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1653409465663",
"endTimeMillis": "1653495865663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1653495865663",
"endTimeMillis": "1653582265663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1653582265663",
"endTimeMillis": "1653668665663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1653668665663",
"endTimeMillis": "1653755065663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1653755065663",
"endTimeMillis": "1653841465663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1653841465663",
"endTimeMillis": "1653927865663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1653927865663",
"endTimeMillis": "1654014265663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1654014265663",
"endTimeMillis": "1654100665663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
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
{
"startTimeMillis": "1654273465663",
"endTimeMillis": "1654359865663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1654359865663",
"endTimeMillis": "1654446265663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
},
{
"startTimeMillis": "1654446265663",
"endTimeMillis": "1654532665663",
"dataset": [
{
"dataSourceId": "derived:com.google.weight.summary:com.google.android.gms:aggregated",
"point": []
}
]
}
]
},
"status": 200,
"statusText": "",
"headers": {
"cache-control": "private",
"content-encoding": "gzip",
"content-length": "596",
"content-type": "application/json; charset=UTF-8",
"date": "Mon, 06 Jun 2022 16:24:27 GMT",
"server": "ESF",
"vary": "Origin, X-Origin, Referer"
},
"config": {
"url": "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",
"method": "post",
"data": "{\"aggregateBy\":[{\"dataTypeName\":\"com.google.weight\"}],\"bucketByTime\":{\"durationMillis\":86400000},\"endTimeMillis\":1654532665663,\"startTimeMillis\":1651940665663}",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json;charset=utf-8",
"Authorization": "Bearer ya29.a0ARrdaM8cuL5z298g3-tBPHtYvbtBdbJxaqc_JEbC6JS9sthRvLG5YkI7znDfeLyUo9lfwQuWaIPkV3ADmTFxptFQYGJU4ejim7YY2RQpoac_VAN6SEVzu2pEAalkpRSm36w_mjsEHgbZbe57fXnBiFf9s8ic"
},
"params": {
"key": "AIzaSyBCx-16fPmHfhI0ZuPlR4KmN3YocOXeVW4"
},
"transformRequest": [
null
],
"transformResponse": [
null
],
"timeout": 0,
"xsrfCookieName": "XSRF-TOKEN",
"xsrfHeaderName": "X-XSRF-TOKEN",
"maxContentLength": -1,
"maxBodyLength": -1
},
"request": {}
}

# NOTAS

- El 27 de este mes cambian los permisos de acceso a datos de google fit: https://developers.google.com/fit/rest/v1/reference/releases
