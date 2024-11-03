# Ficha Técnica -  BELBEAU

## Descripción breve
Belbeau es una inteligencia artificial generativa que busca personalizar, dinamizar y facilitar la experiencia de las consultoras en sus procesos de venta.  

## Nivel de desarrollo
Prototipo funcional

## Link al video
[Video de presentación](https://youtu.be/hfXPOTNCo6))

## Link de la presentación
[Presentación canva](https://www.canva.com/design/DAGVZ2EihYg/Llf_8nEkfl7lQ4lmwKsAeA/edit)

## Ventajas o fortalezas de nuestra propuesta
* Personalización del servicio: Recomendaciones personalizadas de productos en tiempo real, basada en preferencias, compras anteriores, tendencias, etc. 
* Optimizar la gestión del cliente: Capacidad de gestión de la relación con los clientes de manera eficiente, sugerencias de seguimiento personalizadas, etc. 
* Experiencia interactiva: Pruebas virtuales personalizadas (virtual tryons) para guiar a la consultora en su proceso de compra y asesoría a sus clientes. 
* Retención de las consultoras: Mediante la facilitación de la información, las ventas son más efectivas y se obtiene una mayor utilidad. 

## Desventajas o debilidades de nuestra propuesta
*  Que si bien la solución puede ser escalable a las 3 marcas de belcorp, el prototipo está basado para cyzone, lo que puede desconcertar a los jurados. 
* El prototipo se presenta de manera local, pero la solución se planea hacer utilizando cloud computing.
* La IA tiende a demorarse analizando las imagenes, por lo que se tienen datos precargados.
* La respuesta por el backend tiende a ser demorada debido al procesamiento de la IA
## Detalles técnicos
- **Tecnologías utilizadas**: Python - Flask/PyTorch, Angular, API de Gemini
- **Herramientas usadas**: Figma
- **Alcance del prototipo**: El prototipo tiene como objetivo simular el flujo de trabajo de las consultoras al mostrar un producto a sus clientes. Para ello, se creó un flujo básico en Figma que incluye interacción con botones y navegación entre diferentes ventanas. Asimismo, se realizó una demostración en la que la consultora toma una fotografía del usuario para mostrar cómo se vería utilizando el producto. Además, el script es capaz de proporcionar productos según la fotografía obtenida y ofrecer recomendaciones personalizadas. Estos datos se exponen en un endpoint, que el frontend muestra de manera intuitiva al usuario final.
  
  En primer lugar, se creó un script en Python llamado Training, que establece comunicación con la API de Gemini para enviar las imágenes de los productos y analizarlas utilizando la biblioteca PIL.Image. Este análisis permite identificar ventajas, desventajas y una descripción general de los productos. Con esta información, se generó un diccionario que resume los datos más relevantes de cada producto, los cuales luego se utilizan para procesar las imágenes.
  Junto a este desarrollo, Se utilizo una red generativas antagónica preentrenada para que las consultoras puedan enriquezer su experiencia de ventas con la posibilidad de realizar _try on_ de sus productos, una de las grandes ventajas es que esta red generativa es que permite que un usuario se pruebe un producto con _tan solo una foto de referencia_ sin la necesidad de entrenar el modelo con multiples imagenes, lo que lo vuelve altamente compatible con los cortos tiempos entre temporadas y la alta rotacion de productos. 

#### Resultado del Training:

![image](https://github.com/user-attachments/assets/33db32bd-f63a-4aff-a68a-d337b4105bb4)

Además, se desarrolló un backend con Flask, que expone un endpoint consumido por el frontend. Para el intercambio de imágenes entre el frontend y el backend, se empleó codificación en base64 mediante las bibliotecas base64 y opencv. En el backend, también se utilizó NumPy para decodificar las imágenes.

Para continuar se hizo uso de angular para la programación frontend con la libreriía de Ngx webcam con el proposito de utilizar la cámara del dispositivo, para poder tomar una foto y hacer el envío de la imagen codificada en base64 al backend, el cual la decodifica, realiza el análisis por medio de IA y devuelve al frontend el analisis realizado en formato JSON y finalmente sería mostrado en la interfaz

## Presupuestos
![Imagen de WhatsApp 2024-11-03 a las 10 56 54_844a7222](https://github.com/user-attachments/assets/be16b285-8970-4505-9025-d41bb1e2b64f)


## Repositorio del proyecto
* [Proyecto backend](https://github.com/Oswe-gif/Backend_Proyecto.git)  
* [Proyecto figma](https://www.figma.com/proto/OrPeVo7IFjpS6C3Sg6l0U4/Untitled?node-id=1-5&node-type=frame&scaling=min-zoom&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=4%3A9)
