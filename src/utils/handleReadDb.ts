import { readFileSync } from "node:fs";
import { pathFile } from "../database/index";
import { Weather } from '../interface/interfaces';

const getDataWeather = (): Weather | undefined => {
    const bufferData: Buffer = readFileSync(pathFile);
    const parsedData: Weather = JSON.parse(bufferData.toString());
    return parsedData;
};

export { getDataWeather }