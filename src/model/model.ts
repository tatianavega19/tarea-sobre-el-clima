import { readFileSync } from "node:fs";
import { pathFile } from "../database/index";
import * as interfaces from '../utils/interfaces';

const getDataWeather = (): interfaces.Weather | false => {
  const bufferData: Buffer = readFileSync(pathFile);
  const parsedData: interfaces.Weather = JSON.parse(bufferData.toString());
  return parsedData;
};

function getHourlyTemperatureAndHumidity(): { time: string, humidity: number, temperature: number }[] | false {
  const weatherData: interfaces.Weather | false = getDataWeather();
  if (!weatherData || !weatherData.timelines) {
    return false;
  }

  let hourlyTimelines: interfaces.DataHourly[] | undefined;

  if ('hourly' in weatherData.timelines) {
    hourlyTimelines = weatherData.timelines.hourly as interfaces.DataHourly[];
  } else {
    return false;
  }

  return hourlyTimelines.map(timeline => ({
    time: timeline.time,
    humidity: timeline.values.humidity,
    temperature: timeline.values.temperature
  }));
}

const probarFuncion = getHourlyTemperatureAndHumidity();
 console.table(probarFuncion);

 const getPressureLevelByTemperature = (
  temperature: number
): { pressureSurfaceLevel: number; temperature: number }[] | false => {
  const weatherData: interfaces.Weather | false = getDataWeather();

  if (!weatherData || !weatherData.timelines) {
    return false;
  }

  let hourlyTimelines: interfaces.DataHourly[] | undefined;

  if ('hourly' in weatherData.timelines) {
    hourlyTimelines = weatherData.timelines.hourly as interfaces.DataHourly[];
  } else {
    return false;
  }

  if (!hourlyTimelines) {
    return false;
  }

  return hourlyTimelines
    .filter((timeline) => timeline.values.temperature >= temperature)
    .map((timeline) => ({
      pressureSurfaceLevel: timeline.values.pressureSurfaceLevel,
      temperature: timeline.values.temperature,
    }));
};

const tempTest: number = 8;
const probarPressureLevels = getPressureLevelByTemperature(tempTest);
console.table(probarPressureLevels);