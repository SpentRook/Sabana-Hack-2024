# Ficha Técnica - VitalTrack

## Descripción breve

VitalTrack es un algoritmo que lee, analiza y clasifica las bases de datos clínicos para facilitar la digitación de las historias a las bases y evitar errores tipográficos, de entrada manual, codificación y de formato incorrectos.

## Nivel de desarrollo

El nivel de desarrollo se encuentra en una fase intermedia (Prototipo Funcional). Las funcionalidades básicas están implementadas y operativas, pero se requiere más trabajo en aspectos como la optimización del rendimiento, la mejora de la precisión en el análisis emocional y la creación de una interfaz amigable para el usuario

## Link al video

[Video de presentación](https://www.canva.com/design/DAGVcB77XYQ/wYv6v5zd0Fe-MgPCJOO8dQ/watch?utm_content=DAGVcB77XYQ&utm_campaign=designshare&utm_medium=link&utm_source=editor )

## Ventajas o fortalezas de nuestra propuesta

_1. Procesamiento de Lenguaje Natural Avanzado_ <br/>
1.1. Utiliza bibliotecas como NLTK y spaCy para un análisis lingüístico sofisticado.<br/>
1.2. Implementa técnicas avanzadas como tokenización, extracción de entidades y generación de n-gramas.<br/>

_2. Flexibilidad en el Análisis_<br/>
2.1. Puede analizar diferentes campos médicos (nódulos, calcificaciones, asimetrías, etc.) de manera adaptable para otras investigaciones futuras. <br/>
2.2. Permite la configuración de umbrales de similitud para ajustar la sensibilidad del análisis. <br/>

_3. Análisis Contextual_ <br/>
3.1. Examina las palabras en su contexto (Historia clínica o Estudio), mejorando la precisión de la interpretación. <br/>
3.2. Utiliza técnicas de coincidencia difusa (Funza matching) para identificar palabras y frases relevantes. <br/>

_4. Estructura Modular_<br/>
4.1. El código está organizado en funciones separadas, facilitando el mantenimiento y la expansión futura. <br/>

_5. Análisis de Sentimientos_<br/>
5.1. Se incorporo el análisis de sentimiento para campos específicos como nódulos, microcalcificaciones y asimetrías. <br/>

_6. Personalización_<br/>
6.1 Permite la configuración de campos de análisis a través de la clase "User", ofreciendo flexibilidad para diferentes tipos de informes médicos. <br/>

## Desventajas o debilidades de nuestra propuesta

_1. Expansión de la extracción de datos_<br/>
1.1. Posibilidad de ampliar el alcance para capturar una gama más completa de variables clínicas, mejorando la comprensión de cada caso específico. <br/>

_2. Optimización de dependencias_<br/>
2.1. Potencial para consolidar funcionalidades para mejorar la eficiencia y facilitar el mantenimiento a largo plazo del sistema.<br/>

_3. Simplificación y modularización_<br/>
3.1. Oportunidad para refinar aún más la estructura del código, haciéndolo más accesible y fácil de mantener sin sacrificar funcionalidad, facilitando futuras expansiones y adaptaciones. <br/>

## Detalles técnicos

- _Tecnologías utilizadas_:<br/>
  _1. Python:_ Lenguaje de programación principal para el desarrollo del prototipo.<br/>
  _2. spaCy:_ Biblioteca de procesamiento de lenguage natural (NLP) utilizada para la tokenización, análisis de entidades y generación de n-gramas, facilitando el entendimiento del texto en español. <br/>
  _3. NLTK:_ Conocido como Natural Lenguage ToolKit, fue utilizado para la tokenización y manipulación de texto, espcialmente para trabajar con n-gramas y análisis linguístico. <br/>
  _4. FuzzyWuzzy:_ Biblioteca para comparacion de cadenas que permite filtrar palabras y frases similares mediante algoritmos de coincidencia difusa.<br/>
  _5. Transformer:_ Es fundamental para el desarrollo, ya que permite acceder a modelos avanzados de PNL y facilitar su uso a traves de la interfaz de "Pipeline".<br/>

- _Herramientas usadas_:<br/>
  _1. Word_tokenize:_ Utilizada para la tokenización de texto, permitiendo dividir el texto en palabras individuales.<br/>
  _2. Fuzz:_ utilizada para la comparación de cadenas, que permite medir la similitud entre palabras y frases mediante algoritmos de coincidencia difusa.<br/>
  _3. analysis_of_feelings:_ Importa un módulo que se encarga del análisis de sentimientos, sugiriendo que contiene funciones específicas para evaluar las emociones en el texto.<br/>

- _Alcance del prototipo_: El prototipo está diseñado para analizar datos textuales de pacientes, extrayendo sentimientos y palabras clave relevantes mediante técnicas de procesamiento de lenguaje natural. Utiliza tokenización y n-gramas para identificar entidades significativas y evaluar el tono emocional de las entradas. Al filtrar información relevante y contextualizar términos clave, el sistema proporciona herramientas valiosas para que los profesionales de la salud mejoren la calidad del cuidado.<br/>
  _Limitaciones_<br/>
  _Dependencia del umbral de similitud:_ Un umbral fijo para determinar la similitud de palabras puede no ser adecuado en todos los contextos, lo que podría resultar en la omisión de información crítica o en la inclusión de datos irrelevantes.<br/>

## Repositorio del proyecto

[Repositorio del equipo](https://github.com/isadiazac/sabana-hack)
