[![WheelHub](https://wheelhub.es/logo/Logotipo-Vertical-Negro-Alta.png)](https://wheelhub.es/)

# Test backend

### Instrucciones
Deberá crear un proyecto en NodeJS en donde se utilice el framework Express y los archivos estén desarrollados con Typescript.
El proyecto tendrá una única ruta que apuntará a un método POST llamado "create". 
Este endpoint debe recibir y validar los campos permitiendo únicamente los incluídos en el Swagger:
| CAMPO | FORMATO |
| ------ | ------ |
| username | string |
| password | string |

> Excluír campos adicionales o que lleguen en otros formatos.

Previo al guardado, el password tiene que encriptarse a SHA256.

Mediante typeORM agregar los datos a una base de datos local (generada con SQLite) en una tabla "user" que contendrá los campos:
| Tabla USER|  |
| ------ | ------ |
| id | string |
| username | string |
| password | string |

El retorno será un JSON con el siguiente formato:
`
{
   status: 200,
   message: "El usuario se creó correctamente"
}
`


Para realizar las pruebas y validar que el endpoint funciona correctamente, deberá utilizar Rest-Client.

---

Una vez finalizado el test, suba la prueba a una cuenta de github propia con acceso público al repositorio, y compartanos el link a nuestros correos.


### Requisitos
- [Node.js]
- [Express]
- Typescript
- [Swagger]
- [Rest-Client]
- [TypeORM]
- [Sqlite]

### Se valorará el uso de las siguientes herramientas
- [Axios]
- [Eslint]



   [swagger]: <https://swagger.io/>
   [axios]: <https://axios-http.com/>
   [eslint]: <https://eslint.org/>
   [rest-client]: <https://marketplace.visualstudio.com/items?itemName=humao.rest-client>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [typeorm]: <https://typeorm.io>
   [sqlite]: <https://www.sqlite.org>


### Notas tras el desarollo

Para su instalación haga un clone de este repositorio, dirijase a la carpeta descargada y ejecute en consola:


`npm i`
`npm run dev`

Si quiere ver un swagger con la documentación de la api, vaya a:

`http://localhost:3000/docs`

Se han creado requests con Rest-Client en la carpeta /request

Se han instalado algunos paquetes para ver por terminal las respuesta del servidor de forma sencilla, asi como las query que se hacen a base de datos.
Asi como un watcher, que cada vez que hay un cambio en un archivo en /src hace un build y levanta el server.




