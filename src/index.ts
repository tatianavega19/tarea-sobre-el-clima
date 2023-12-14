import * as controller from "./controller/controller";

const processParams = (params: string[]) => {
  switch (params[0]) {
    case "m1":
      return controller.getHourlyTemperatureAndHumidity();
    case "m2":
      return controller.getPressureLevelByTemperature(Number(params[1]));
    default:
      return "Parametros incorrectos...";
  } 
};

const main = (): void => {
  const params = process.argv.splice(2);
  const response = processParams(params);
  if (typeof response !== "string") {
    console.table(response.data);
  } else {
    console.log(response);
  }
};

main();