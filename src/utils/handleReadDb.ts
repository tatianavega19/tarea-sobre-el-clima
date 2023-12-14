import { readFileSync } from "node:fs";
import { pathFile } from "../database";
import { Weather } from "../interface/Weather";

const getDataWeather = (): Weather | undefined => {
  const bufferData: Buffer = readFileSync(pathFile);
  const parsedData: Weather = JSON.parse(bufferData.toString());
  return parsedData;
};

export { getDataWeather };