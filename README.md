# Analizador de texto
## Índice

* [1. Información del sitio Web "Analizador de Textos"](#1-información-del-sitio-web-"analizador-de-textos")
* [2. Funcionalidad](#2-funcionalidad)
* [3. Pruebas unitarias](#3-pruebas-unitarias)
* [4. Deploy](#4-deploy)
* [5. Prototio de baja fidelidad](#5-prototipo-de-baja-fidelidad)
* [6. Planeación](#6-planeación)

***
## 1. Información del sitio Web "Analizador de Textos"

El analizador de texto permite extraer información útil de un texto
utilizando diversas técnicas, como el procesamiento del lenguaje
natural (NLP), el aprendizaje automático (ML) y el análisis estadístico.
Proporcionando una variedad de métricas que brindan
información básica sobre la longitud y la estructura del texto como son en este caso:
El conteo de palabras, el conteo de caracteres, el conteo de números y la suma de números.
Mediante el uso de estas herramientas de análisis, los usuarios pueden
obtener una comprensión más profunda de los textos.

![Prueba](/docs/images/preview1.png)

## 2. Funcionalidad

1. La aplicación permite al usuario ingresar un texto escribiéndolo
en un cuadro de texto.

2. La aplicación calcula las siguientes métricas y actualiza el
resultado en tiempo real a medida que el usuario escribe su texto:

    - **Recuento de palabras**: la aplicación cuenta el número de
    palabras en el texto de entrada y muestra este recuento al usuario
    - **Recuento de caracteres**: la aplicación cuenta el número de
    caracteres en el texto de entrada, incluidos espacios y signos de
    puntuación, y muestra este recuento al usuario.
    - **Recuento de caracteres excluyendo espacios y signos de puntuación**:
    la aplicación cuenta el número de caracteres en el texto de
    entrada, excluyendo espacios y signos de puntuación, y muestra este recuento
    al usuario.  
    - **Recuento de números**: la aplicación cuenta cúantos números hay en
    el texto de entrada y muestra este recuento al usuario.
    - **Suma total de números**: la aplicación suma todos los números que
    hay en el texto de entrada y muestra el resultado al usuario.
    - **Longitud media de las palabras**: la aplicación debe calcular la
    longitud media de las palabras en el texto de entrada y mostrársela al usuario.

3. La aplicación permite limpiar el contenido de la caja de texto haciendo
clic en el botón **Limpiar métricas**.

![Prueba2](/docs/images/Preview-2.gif)

## 3. Pruebas unitarias

Una prueba unitaria es una técnica de prueba de software en la que se comprueba
que cada componente individual de un programa o sistema funciona correctamente
de manera aislada. En el proyecto se pasan todas las pruebas

La ejecucion de las pruebas se realizo con los siguientes comandos:

* `npm run test:oas-html`
* `npm run test:oas-css`
* `npm run test:oas-web-api`
* `npm run test:oas-js`

#### Pruebas end-to-end

Se realizó la prueba end-to-end (E2E), la cual es una técnica de prueba de software 
en la que se verifica el funcionamiento de todo el sistema desde el inicio hasta el
final. 

Realizando estas pruebas con el comando `npm run test:e2e` 

![Pruebas Unitarias](/docs/images/Test.gif)

## 4. Deploy

Los sitios estan publicados (o _desplegados_) para que usuarias de
la web puedan acceder a él..

En este proyecto se utiliza _Github Pages_ para desplegar el sitio web.

![Deploy](/docs/images/deploy.gif)

## 5. Prototipo de baja fidelidad

Se realizo el prototipo de baja fidelidad como se presenta a continuacion:

![Deploy](/docs/images/prototipo-baja-fidelidad.png)

## 6. Planeación 

La planeación se realizo con la plataforma de Trello

![Deploy](/docs/images/planeacion.gif)