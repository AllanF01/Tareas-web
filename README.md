# GestionTarea

Este proyecto es un sistema sencillo de gestión de tareas (CRUD) desarrollado en Angular, siguiendo los principios de Arquitectura Limpia y Clean Code. El objetivo es aplicar buenas prácticas de desarrollo para garantizar un código mantenible, escalable y legible.
 

## Capas del proyecto

Capa de Dominio:
Define los modelos e interfaces que representan las entidades principales del sistema.

En este caso, la interfaz Task define una tarea con los atributos id, title, description, y completed.

Capa de Aplicación:
Contiene los servicios que gestionan la lógica de negocio.

El servicio TaskService interactúa con una API simulada para obtener, crear, actualizar y eliminar tareas.
Capa de Presentación:

Gestiona la interacción con el usuario.
El componente TaskListComponent se encarga de mostrar las tareas en una lista y utiliza el servicio para obtener los datos.


## Development server

Ejecuta "ng serve" para iniciar el servidor de desarrollo. Navega a http://localhost:4200/. La aplicación se recargará automáticamente si realizas cambios en los archivos fuente.

## Principios aplicados de clean code

Nombres Descriptivos: Todas las variables, clases y funciones tienen nombres que describen claramente su propósito.

Responsabilidad Única: Las funciones y clases tienen una única responsabilidad. Por ejemplo, el servicio TaskService se encarga solo de la lógica relacionada con las tareas.

SOLID Principles: Se implementaron principios SOLID, como el principio de responsabilidad única (SRP) y la inversión de dependencias (DIP).

Eliminación de Comentarios Innecesarios: En lugar de usar comentarios, el código está diseñado para ser lo suficientemente claro por sí mismo.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
# Tareas-web
# Tareas-web
# Tareas-web
