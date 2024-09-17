<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Las Tecnologías de la Información y la Comunicación (TIC).',
      titulo: 'Cuestionario',
      introduccion:
        'Evaluar los conceptos clave relacionados con las Tecnologías de la Información y la Comunicación  en el contexto organizacional, su impacto en la comunicación y la gestión.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la principal función de las TIC en una organización? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar la comunicación corporativa. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Facilitar la interacción social. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir los costos de producción. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar la productividad laboral. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de información pueden almacenar y compartir las TIC? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Información visual, digital, auditiva y mixta. ',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Solo información visual. ', esCorrecta: false },
            { id: 'c', texto: 'Solo información digital. ', esCorrecta: false },
            {
              id: 'd',
              texto: 'Información escrita únicamente. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué protocolo es responsable de asegurar que los datos lleguen sin errores a su destino en internet? ',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'TCP. ', esCorrecta: true },
            { id: 'b', texto: 'IP. ', esCorrecta: false },
            { id: 'c', texto: 'HTTP. ', esCorrecta: false },
            { id: 'd', texto: 'FTP. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el objetivo principal de la intranet en una organización? ',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permitir el acceso eficiente y coordinado a la información. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Facilitar la comunicación externa. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Compartir archivos entre empleados. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Proteger la red de ciberataques. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué herramienta permite programar el envío de correos electrónicos y activar recordatorios? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Boomerang. ', esCorrecta: true },
            { id: 'b', texto: 'PhilterIt. ', esCorrecta: false },
            { id: 'c', texto: 'OtherInbox. ', esCorrecta: false },
            { id: 'd', texto: 'SaneBox.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de las siguientes redes es la de mayor extensión geográfica? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'WAN. ', esCorrecta: true },
            { id: 'b', texto: 'LAN. ', esCorrecta: false },
            { id: 'c', texto: 'PAN. ', esCorrecta: false },
            { id: 'd', texto: 'MAN. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué término se refiere a la identificación única de un dispositivo en una red? ',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Dirección IP. ', esCorrecta: true },
            { id: 'b', texto: 'URL. ', esCorrecta: false },
            { id: 'c', texto: 'DNS. ', esCorrecta: false },
            { id: 'd', texto: 'Protocolo TCP. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué herramienta se popularizó desde 2006, permitiendo la creación de contenidos propios? ',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Blog. ', esCorrecta: true },
            { id: 'b', texto: 'Wiki. ', esCorrecta: false },
            { id: 'c', texto: 'Chat. ', esCorrecta: false },
            { id: 'd', texto: 'Foro. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué función de las TIC permite difundir información masiva entre los colaboradores? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Contribución al producto, servicio o cadena de producción. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Automatización de procesos. ',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Control de gestión. ', esCorrecta: false },
            {
              id: 'd',
              texto: 'Aporte al diseño organizacional. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué aspecto es fundamental para el éxito a largo plazo de una organización en el uso de TIC? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Adaptarse rápidamente a nuevas tecnologías. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir los costos operativos. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar el número de empleados. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar la publicidad externa. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
