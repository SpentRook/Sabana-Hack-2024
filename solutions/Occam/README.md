# Ficha Técnica - CleanCheck

## Descripción breve
Propuesta de un sistema de lavamanos inteligente con reconocimiento de gestos que guía y monitorea el proceso de lavado de manos en el Instituto Nacional de Cancerología (INC), siguiendo el protocolo de la OMS para reducir las Infecciones Asociadas a la Atención en Salud (IAAS).

## Nivel de desarrollo
Prototipo funcional / MVP

## Link al video
[Video de presentación](https://youtu.be/muMa4EkaPsA?si=G6BfqFSe3k9hlZbT)

## Ventajas o fortalezas de nuestra propuesta
1. Fomenta la adherencia a prácticas de higiene correctas y seguras.
2. Retroalimentación en tiempo real para el personal médico.
3. Datos estadísticos para el INC sobre la frecuencia y precisión del lavado de manos.
4. Incremento en la seguridad de los pacientes y del personal médico.

## Desventajas o debilidades de nuestra propuesta
1. Requiere entrenamiento inicial del personal para la familiarización con el sistema.
2. Posibles costos adicionales para mantenimiento del equipo y software.
3. Adaptación del lavamanos para implementar la solución.
4. Capacidad de Personalización y Escalabilidad de tal forma que el sistema permite añadir posiciones o pasos adicionales y ajustar umbrales de confianza según las necesidades de precisión.

## Detalles técnicos

###Tecnologías utilizadas:
Backend: TensorFlow, Keras, Node.js.
Frontend: React, Tailwind CSS.
Procesamiento de Imágenes: OpenCV, NumPy.
Visualización y Análisis: Matplotlib, Scikit-Learn.
Asistentes de IA: ChatGPT, Gemini AI, GitHub Copilot.
Modelado 3D: Rhino.

### Alcance Actual del Prototipo
El prototipo actual permite clasificar imágenes en tiempo real mediante una cámara, identificando dos posiciones específicas (inicio y fin de un proceso) con una precisión confiable. Gracias al uso de redes neuronales convolucionales (CNN) y un modelo ligero como MobileNetV2, el sistema detecta correctamente las posiciones en tiempo real, emitiendo alertas visuales en la pantalla para indicar si las posiciones son correctas o si no se ha detectado nada relevante. Así mismo se incluye un cronómetro que registra la duración del lavado de manos.

Además, el prototipo se conecta con un Arduino que procesa la información y ejecuta acciones específicas: enciende un LED cuando se detecta una posición correcta o activa un buzzer como alerta cuando la posición no coincide con los requisitos.

Aunque existe una interfaz frontend estática para la visualización de resultados, actualmente no está conectada con el backend en tiempo real. Esta limitación significa que el frontend no refleja directamente el procesamiento del modelo, aunque puede ser usado para mostrar información estática o realizar pruebas de diseño de interfaz.

### Limitaciones
- **Restricción de Clases**: El modelo solo está entrenado para detectar dos posiciones específicas, lo que limita su capacidad para identificar otros pasos intermedios o posiciones adicionales.
- **Sensibilidad a Iluminación y Posicionamiento**: La precisión del prototipo puede verse afectada por cambios en la iluminación o variaciones en el ángulo de la cámara, ya que el modelo depende de patrones visuales específicos.
- **Requerimientos de Hardware**: Aunque es eficiente, el rendimiento óptimo en tiempo real puede depender de la disponibilidad de una GPU; en sistemas con CPU únicamente, la velocidad de inferencia puede reducirse.
- **Integración con el Frontend**: Aunque existe un frontend, no está conectado con el backend para recibir datos en tiempo real, limitando su funcionalidad a visualizaciones estáticas o simuladas.

## Repositorio del proyecto
[Repositorio del equipo](https://github.com/DavidVargas-Ctrl/CleanCheck.git)
