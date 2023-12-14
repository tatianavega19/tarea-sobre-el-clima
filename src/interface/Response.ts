import {
    HourlyTemperatureAndHumidity,
    pressureSurfaceLevelByTemperature,
  } from "./Weather";
  
  interface Response {
    code: number;
    data: HourlyTemperatureAndHumidity[] | pressureSurfaceLevelByTemperature[];
  }
  
  export { Response };