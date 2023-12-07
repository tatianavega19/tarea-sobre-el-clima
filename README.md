# Vamos a repasar paso a paso, todo lo que hay que hacer para iniciar un proyecto desde cero:

1. **Creamos una carpeta general para almacenar todo el proyecto**
- **src:** Contiene todos los módulos de TypeScript que conforman el corazón de la aplicación.

2. **Creamos las subcarpetas que dividen a nuestra aplicación en partes:**
   - **database:** Archivos JSON utilizados como base de datos.
   - **model:** Almacena todos los módulos TypeScript que constituyen el modelo.
   - **controller:** Almacena todos los módulos TypeScript que constituyen el controlador.
   - **index.ts:** Módulo principal que llama al controlador y contiene la función main().
   - **node_modules:** Directorio creado automáticamente al instalar dependencias de terceros usando NPM.
   - **dist:** Directorio creado automáticamente al compilar código TypeScript a JavaScript ejecutando el comando tsc.
   - **README.md:** Archivo de texto Markdown donde se describe el funcionamiento de la aplicación e incluye información importante y útil.

3. **Inicializar Repositorio GIT:**
   - Desde la terminal de VSCode ejecutamos `git init` para inicializar un nuevo repositorio GIT local. Después de terminar el proyecto, lo subiremos a la nube de GitHub.

4. **Configurar .gitignore:**
   - Creamos un archivo `.gitignore` para indicarle a GIT los archivos y/o directorios que NO queremos subir a la nube. Ejemplo: `node_modules` y `dist`.

5. **Inicializar Proyecto con NPM:**
   - Ejecutamos `npm init -y` para crear automáticamente el archivo de configuración `package.json`. Configuramos los scripts para facilitar la ejecución de los comandos.

6. **Instalar TypeScript y ts-node:**
   - Instalamos TypeScript y su intérprete ts-node con `npm i -D typescript ts-node`.

7. **Configurar Scripts en package.json:**
   - Configuramos los scripts en el `package.json` de la siguiente forma:
     ```json
     "scripts": {
       "dev": "ts-node ./src/index.ts",
       "build": "tsc"
     }
     ```

8. **Configurar tsconfig.json:**
   - Ejecutamos `npx tsc --init` para crear el archivo `tsconfig.json` y configuramos los parámetros necesarios:
     ```json
     {
       "target": "ESNext",
       "module": "commonjs",
       "rootDir": "./src/",
       "outDir": "./dist/",
       "alwaysStrict": true
     }
     ```

9. **Desafío:**
   - Desarrollar una aplicación siguiendo el patrón MVC que consume datos de un JSON generado por una API del clima. El objetivo es imprimir en la consola una tabla del clima.

   - **Modelo:** Exportar dos funciones:
     - `getHourlyTemperatureAndHumidity()`: Retorna una colección con objetos {time: '2023-07-21T14:00:00Z', humidity: 86, temperature: 13.26}.
     - `getPressureLevelByTemperature(temperature)`: Retorna una colección donde la propiedad `temperature` de los objetos que sea igual o mayor al valor recibido por parámetro. Los objetos tienen la forma {pressureSurfaceLeve: 1009.62, temperature: 21.25}.