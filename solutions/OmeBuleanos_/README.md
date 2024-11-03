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
1.  Que si bien la solución puede ser escalable a las 3 marcas de belcorp, el prototipo está basado para cyzone, lo que puede desconcertar a los jurados. 
2.  El prototipo se presenta de manera local, pero la solución se planea hacer utilizando cloud computing.
3.  La IA tiende a demorarse analizando las imagenes, por lo que se tienen datos precargados.
4.  La respuesta por el backend tiende a ser demorada debido al procesamiento de la IA
## Detalles técnicos
- **Tecnologías utilizadas**: Python - Flask, Angular, API de Gemini
- **Herramientas usadas**: Figma
- **Alcance del prototipo**: El prototipo tiene como objetivo simular el flujo de trabajo de las consultoras al mostrar un producto a sus clientes. Para ello, se creó un flujo básico en Figma que incluye interacción con botones y navegación entre diferentes ventanas. Asimismo, se realizó una demostración en la que la consultora toma una fotografía del usuario para mostrar cómo se vería utilizando el producto. Además, el script es capaz de proporcionar productos según la fotografía obtenida y ofrecer recomendaciones personalizadas. Estos datos se exponen en un endpoint, que el frontend muestra de manera intuitiva al usuario final.
  
  En primer lugar, se creó un script en Python llamado Training, que establece comunicación con la API de Gemini para enviar las imágenes de los productos y analizarlas utilizando la biblioteca PIL.Image. Este análisis permite identificar ventajas, desventajas y una descripción general de los productos. Con esta información, se generó un diccionario que resume los datos más relevantes de cada producto, los cuales luego se utilizan para procesar las imágenes.

#### Resultado del Training:

![image](https://github.com/user-attachments/assets/33db32bd-f63a-4aff-a68a-d337b4105bb4)

Además, se desarrolló un backend con Flask, que expone un endpoint consumido por el frontend programado en Angular. Para el intercambio de imágenes entre el frontend y el backend, se empleó codificación en base64 mediante las bibliotecas base64 y cv2. En el backend, también se utilizó NumPy para decodificar las imágenes.

## Repositorio del proyecto
[Repositorio del equipo](URL)
