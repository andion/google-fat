# Google FAT

Un experimento con las Apis de google para mostrar el peso de una manera útil y no como lo muestra gugel.

# ROADMAP

- [x] Login con google
- [ ] Sacar la info de fit
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

# NOTAS

- El 27 de este mes cambian los permisos de acceso a datos de google fit: https://developers.google.com/fit/rest/v1/reference/releases
