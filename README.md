# Vamos a repasar paso a paso, todo lo que hay que hacer para iniciar un proyecto desde cero:
Creamos una carpeta general para almacenar todo el proyecto.

Creamos las subcarpetas que dividen a nuestra aplicación en partes:

src -> Contiene todos los módulos de TS que conforman el corazón de nuestra aplicación.
database -> tiene el/los archivos JSON que usamos como base de datos.
model -> almacena todos los módulos TS que constituyen el modelo.
controller -> almacena todos los módulos TS que constituyen el controlador.
index.ts -> es el módulo principal que llama al controlador y que contiene la función main().
node_modules -> es el directorio que se crea automáticamente al instalar alguna dependencia de terceros usando NPM. No hay que crear esta carpeta manualmente, simplemente aclaro que formará parte del proyecto si llegamos a instalar algún módulo creado por terceros que necesitemos, como jsonfile.
distes el directorio que se crea automáticamente al compilar código TS a JS ejecutando el comando tsc.
README.mdes el archivo de texto MARKDOWN en el que describimos el funcionamiento de la aplicación e incluimos información que consideramos importante y útil.
Desde la terminal de VSCode ejecutamos git initpara inicializar un nuevo repositorio de GIT local, que una vez terminado el proyecto subiremos a la nube de GitHub.

Una vez iniciado el repositorio de GIT, es necesario indicarle los archivos y/o directorios que NO queremos que se suban a la nube. Para esto creamos un archivo .gitignore, y mediante saltos de línea indicamos los nombres de los archivos en cuestión. Por ejemplo: node_modules dist

Ahora podemos inicializar el proyecto con NPM: npm init -y. Este comando crea de forma automática el archivo de configuración package.jsonal cuál tenemos que configurarle los scripts para facilitar la ejecución de los comandos. Antes, vamos a instalar lo necesario para trabajar en la aplicación.

Instale TypeScript y su intérprete ts-node con npm i -D typescript ts-node.

Configurar los scripts del package.json de la siguiente forma: "scripts": { "dev": "ts-node ./src/index.ts", "build": "tsc" }

Necesitamos también configurar el mínimo necesario para usar TypeScript . Para esto, ejecutamos npx tsc --init. Esto creará de forma automática el archivo tsconfig.json, el cuál tenemos que configurar los parámetros:

target: ESNext| El compilador traducirá el código TS a la última versión de ECMAScript .
module: commonjs| El sistema de módulos será el desarrollado por Node.
rootDir: ./src/| Con esto configuramos que la carpeta con los archivos fuente sea "/src".
outDir: ./dist/| Aquí indicamos la carpeta de destino de los archivos creados por el compilador de TS .
alwaysStrict: true| Con este comando nos aseguramos que todos los archivos JS emitidos estén en modo estricto ¿Qué es eso?! ¡Chequeá los enlaces de ayuda!
¡LISTO!

Para este desafío les proponemos que desarrollen una aplicación, siguiendo el patrón MVC, que consume los datos de un JSON generado por una API del clima (ver enlace). El objetivo es que la aplicación imprima en la consola una tabla del clima. 

El modelo tiene que exportar sólo dos funciones (puede tener todas las funciones que quieran, pero sólo debe exportar estas dos):

getHourlyTemperatureAndHumidity()=> Retorna una colección cuyos objetos son {time: '2023-07-21T14:00:00Z', humidity: 86, temperature: 13.26}.
getPressureLevelByTemperature(temperature)=> Retorna una colección en la que la propiedad temperaturede los objetos sea igual o mayor al valor temperaturerecibido por parámetro. Los objetos que conforman esta colección tienen que tener la forma {pressureSurfaceLeve: 1009.62, temperature: 21.25}.