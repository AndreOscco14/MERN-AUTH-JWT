# Generar Package.json.
npm init -y

# Instalar las dependencias. (Express)
npm i express

# Agregar "type": "module" em package.json (Acepte archivos de import / export)

# index.js , encargado de arrancar todo el servidor

# Nodemon (Actualizacion en cada guardado)
npm i nodemon -D
--> crear un comando en package.json (npm run dev) nodemon src/index.js

# Morgan , permite ver las peticiones que van llegando.