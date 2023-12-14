import {
  HourlyTemperatureAndHumidity,
  pressureSurfaceLevelByTemperature,
} from "../interface/Weather";
import { getDataWeather } from "../utils/handleReadDb";

const getHourlyTemperatureAndHumidity = ():
  | HourlyTemperatureAndHumidity[]
  | undefined => {
  const weatherData = getDataWeather();

  if (!weatherData) {
    return;
  }

  const mappedData = weatherData.timelines.hourly.map((timeline) => ({
    time: timeline.time,
    humidity: timeline.values.humidity,
    temperature: timeline.values.temperature,
  }));

  return mappedData;
};

const getPressureLevelByTemperature = (
  temperature: number
): pressureSurfaceLevelByTemperature[] | undefined => {
  const weatherData = getDataWeather();

  if (!weatherData) {
    return;
  }

  const filterData = weatherData.timelines.hourly.filter(
    (timeline) => timeline.values.temperature >= temperature
  );

  const mappedData = filterData.map((timeline) => ({
    pressureSurfaceLevel: timeline.values.pressureSurfaceLevel,
    temperature: timeline.values.temperature,
  }));

  return mappedData;
};

export { getHourlyTemperatureAndHumidity, getPressureLevelByTemperature };