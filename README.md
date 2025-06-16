# 📒 Mi API de Contactos

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)

API RESTful para gestionar una agenda de contactos. Permite crear, buscar, actualizar y eliminar contactos fácilmente.

---

## 🚀 Características

- Crear, leer, actualizar y eliminar contactos (CRUD)
- Búsqueda por nombre o email
- Validación de datos y manejo de errores
- Conexión segura a MongoDB Atlas
- Listado ordenado alfabéticamente

---

## 🛠️ Instalación

1. **Clona el repositorio**
   ```sh
   git clone https://github.com/tu-usuario/mi-api.git
   cd mi-api
   ```

2. **Instala las dependencias**
   ```sh
   npm install
   ```

3. **Configura las variables de entorno**  
   Crea un archivo `.env` con el siguiente contenido:
   ```
   PORT=3000
   MONGODB_URI=tu_uri_de_mongodb
   ```

---

## ▶️ Uso

Inicia el servidor con:

```sh
node app.js
```

El servidor estará disponible en [http://localhost:3000](http://localhost:3000).

---

## 📚 Endpoints

| Método | Endpoint                | Descripción                  |
|--------|------------------------ |-----------------------------|
| POST   | `/api/contactos`        | Crear un nuevo contacto      |
| GET    | `/api/contactos`        | Listar/buscar contactos     |
| GET    | `/api/contactos/:id`    | Obtener contacto por ID      |
| PUT    | `/api/contactos/:id`    | Actualizar contacto por ID   |
| DELETE | `/api/contactos/:id`    | Eliminar contacto por ID     |

### Ejemplo de contacto

```json
{
  "nombre": "Juan Pérez",
  "telefono": "5551234567",
  "email": "juan@mail.com",
  "direccion": "Calle Falsa 123",
  "fechaNacimiento": "1990-01-01"
}
```

---

## 🗂️ Estructura del proyecto

```
.
├── app.js
├── package.json
├── .env
├── models/
│   └── Contacto.js
└── routes/
    └── contactos.js
```

- [`app.js`](app.js): Configuración principal y arranque del servidor.
- [`models/Contacto.js`](models/Contacto.js): Modelo de datos de contacto.
- [`routes/contactos.js`](routes/contactos.js): Rutas de la API para contactos.

---

## 📄 Licencia

Este proyecto está bajo la licencia ISC.

---

> Hecho con ❤️ por [tu nombre o usuario]
