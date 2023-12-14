import { MessageStatus, StatusCode } from "../enum/Status";
import { Response } from "../interface/Response";
import * as model from "../model/model";
import { MessageError } from "../types/MessageError";

const getHourlyTemperatureAndHumidity = (): Response | MessageError => {
  const data = model.getHourlyTemperatureAndHumidity();

  if (!data) {
    return `${StatusCode.NOT_FOUND} - ${MessageStatus.NOT_FOUND}`;
  }

  return {
    code: StatusCode.OK,
    data,
  };
};

const getPressureLevelByTemperature = (
  temperature: number
): Response | MessageError => {
  if (typeof temperature !== "number") {
    return `${StatusCode.BAD_REQUEST} - ${MessageStatus.BAD_REQUEST}`;
  }

  const data = model.getPressureLevelByTemperature(temperature);

  if (!data) {
    return `${StatusCode.NOT_FOUND} - ${MessageStatus.NOT_FOUND}`;
  }

  return {
    code: StatusCode.OK,
    data,
  };
};

export { getHourlyTemperatureAndHumidity, getPressureLevelByTemperature };