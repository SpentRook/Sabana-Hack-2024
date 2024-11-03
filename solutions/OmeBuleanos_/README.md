# Ficha Técnica - [Nombre del Proyecto]

## Descripción breve
Escribe una breve descripción de la solución.

## Nivel de desarrollo
Indica el nivel de desarrollo actual de la solución (ejemplo: prototipo funcional, versión preliminar, etc.)

## Link al video
[Video de presentación](URL)

## Ventajas o fortalezas de nuestra propuesta
1. ...
2. ...

## Desventajas o debilidades de nuestra propuesta
1. ...
2. ...

## Detalles técnicos
- **Tecnologías utilizadas**: Python - Flask, Angular, API de Gemini
- **Herramientas usadas**: Figma
- **Alcance del prototipo**: Describe brevemente el alcance actual del prototipo y sus limitaciones.
  Se puede agregar cualquier otro detalle técnico que se desee compartir como diagramas, presupuesto, imágenes, etc.

  En primer lugar, se creó un script en Python llamado Training, que establece comunicación con la API de Gemini para enviar las imágenes de los productos y analizarlas utilizando la biblioteca PIL.Image. Este análisis permite identificar ventajas, desventajas y una descripción general de los productos. Con esta información, se generó un diccionario que resume los datos más relevantes de cada producto, los cuales luego se utilizan para procesar las imágenes.

Además, se desarrolló un backend con Flask, que expone un endpoint consumido por el frontend programado en Angular. Para el intercambio de imágenes entre el frontend y el backend, se empleó codificación en base64 mediante las bibliotecas base64 y cv2. En el backend, también se utilizó NumPy para decodificar las imágenes.

## Repositorio del proyecto
[Repositorio del equipo](URL)
