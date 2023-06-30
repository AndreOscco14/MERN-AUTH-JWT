# Backend JWT - Auth - Validations 

## Generar Package.json.
npm init -y

## Instalar las dependencias. (Express)
npm i express

### Agregar "type": "module" em package.json (Acepte archivos de import / export)

## index.js , encargado de arrancar todo el servidor

## Nodemon (Actualizacion en cada guardado)
npm i nodemon -D
--> crear un comando en package.json (npm run dev) nodemon src/index.js

## Morgan , permite ver las peticiones que van llegando.
npm i morgan 

## Instalacion de Mongoose en el backend
npm i mongoose

## Backend recibe datos JSON 
app.js -> middleware app.uyse(express.json())

## Encripatando la contraseña
npm i bcryptjs  (Hasheando)

## JWT
npm i jsonwebtoken