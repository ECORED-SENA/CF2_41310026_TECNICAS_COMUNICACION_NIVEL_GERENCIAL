<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Cultura organizacional e internet
    
    .row
      .col-lg.order-2.order-lg-1(data-aos="fade-right")
        p La evolución de internet ha permitido que se convierta en una herramienta útil para la cultura e indispensable para la comunicación en las organizaciones, tanto internamente mediante la intranet como externamente con la extranet.
        .p-4(style="background-color:#FEECE6;border-radius:10px;")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure 
                img(src="@/assets/curso/tema2/1.svg")
            .col(style="place-self:center;")
              p.mb-0 La intranet y la extranet son entornos únicos de la sociedad digital donde se integran procesos, colaboradores/usuarios, cultura corporativa, objetivos y tecnología. Es importante considerar el presupuesto asignado a estas herramientas, ya que esto determina la capacidad o espacio disponible en la red de internet para que la organización pueda ejecutar sus aplicaciones de comunicación sin saturación ni inconvenientes técnicos.
        p.mt-4 Se invita a revisar el siguiente recurso esencial para fortalecer la cultura organizacional y mejorar la colaboración dentro del equipo.
      .col-lg-auto.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/2.svg")

    .row.mt-5
      .col-lg-7(data-aos="zoom-in")
        .h-100.p-4(style="background-color:#4A6D92;border-radius:10px;")
          .row
            .col-lg-auto.md-4.mb-lg-0 
              figure.m-auto.col-7.col-md-5.col-lg-12
                img(src="@/assets/curso/tema2/3.svg")
            .col-lg(style="place-self:end;")
              h4(style="color:#F6DE44;") ¿Sabías qué?
              p.text-white Lo invitamos a escuchar el siguiente Pódcast:  
              TarjetaAudio.color-acento-botones.mb-3.bg-white(
                texto="Cultura organizacional e internet"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                tiempo
              )
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left" style="place-self:center;")
        figure 
          img(src="@/assets/curso/tema2/4.png")
    
    .row.mt-5(data-aos="fade-up")
      .col-lg-4.pe-lg-0.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema2/5.png" style="margin-left:1px;")
      .col-lg-8.ps-lg-0
        .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#FEECE6;")
          p.mb-0 La intranet no solo centraliza información clave como normas, procesos de trabajo y el portafolio de productos, sino que también ofrece una amplia gama de servicios que facilitan la operatividad y el bienestar de los empleados. Entre estos servicios se incluyen la expedición de certificados, la programación de capacitaciones tanto presenciales como virtuales, y la posibilidad de trabajar de manera colaborativa desde cualquier lugar con acceso a internet. Además, la intranet permite gestionar aspectos esenciales como la programación de vacaciones y el acceso a la nómina virtual, lo que optimiza el tiempo y mejora la eficiencia en la gestión de recursos humanos.

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-4(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/2.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 ¿Cómo ayuda el correo electrónico en la comunicación digital?
    
    .row
      .col-lg(data-aos="fade-up")
        p El correo electrónico en las Pymes es esencial para la comunicación y la gestión del conocimiento. Se subraya su relación e importancia en la comunicación organizacional. La tecnología ofrece cada vez más soluciones, pero también presenta nuevos retos.
        .p-3(style="background-color:#CAE1F9;border-radius:13px;")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure 
                img(src="@/assets/curso/tema2/6.svg")
            .col(style="place-self:center;")
              p.mb-0  En el pasado, las quejas en las organizaciones se centraban en cómo organizar documentos físicos; ahora, en pleno siglo XXI, las quejas giran en torno a problemas como: "No tengo tiempo para todos los correos", "Mi correo se llena en un instante", entre otros.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/7.png")
    
    p.mt-4(data-aos="fade-right") Para optimizar la revisión diaria de los correos, existen cinco herramientas online para gestionar y organizar el correo electrónico, algunas aplicaciones que facilitan la clasificación, uso y gestión de correos, beneficiando una adecuada comunicación en las organizaciones.

    .cont_1_1.mt-5.pb-5
      .cont_2_1.pt-4.pb-4.pb-xl-5.pt-xl-5
        .tarjeta.bg-white.p-4.p-lg-5.pt-lg-4.mt-4
          LineaTiempoC.color-acento-contenido(text-small)
            .row.pt-lg-4(titulo="Boomerang")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h5 Boomerang
                p.mt-4 Permite programar el envío de correos electrónicos semanalmente, útil para usuarios en diferentes zonas horarias. Activa recordatorios para respuestas prioritarias y genera notificaciones de tareas específicas para el día siguiente. Funciona solo con Gmail y Google Apps, y cuenta con una versión para Android.
              .col-lg-5(style="place-self:center;")
                figure.m-auto.col-8.col-md-6.col-lg-12
                  img(src='@/assets/curso/tema2/9.png')
            .row.pt-lg-4(titulo="SaneBox")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h5 SaneBox
                p.mt-4 Detecta y organiza automáticamente los mensajes más importantes en la bandeja de entrada, facilitando su revisión. Envía notificaciones de tareas pendientes o correos no respondidos. Funciona en todas las plataformas de correo electrónico y está disponible para todos los dispositivos móviles.
              .col-lg-5(style="place-self:center;")
                figure.m-auto.col-8.col-md-6.col-lg-12
                  img(src='@/assets/curso/tema2/10.png')
            .row.pt-lg-4(titulo="LetterMeLater")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h5 LetterMeLater
                p.mt-4 Permite programar envíos futuros, editar mensajes antes de enviarlos, programar envíos con adjuntos recurrentes, crear mensajes de correo en HTML, y organizar contactos en grupos para listas de distribución. Sincroniza más de una cuenta de correo y permite programar envíos a través de mensajes de texto.
              .col-lg-5(style="place-self:center;")
                figure.m-auto.col-8.col-md-6.col-lg-12
                  img(src='@/assets/curso/tema2/11.png')
            .row.pt-lg-4(titulo="PhilterIt")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h5 PhilterIt
                p.mt-4 Organiza los correos recibidos en carpetas identificables según la prioridad, dejando en la bandeja de entrada solo correos prioritarios. Envía un resumen diario de los contenidos organizados y tiene un sistema de bloqueo de spam que elimina automáticamente los mensajes marcados como no deseados. Está disponible para dispositivos móviles.
              .col-lg-5(style="place-self:center;")
                figure.m-auto.col-8.col-md-6.col-lg-12
                  img(src='@/assets/curso/tema2/12.png')
            .row.pt-lg-4(titulo="OtherInbox")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h5 OtherInbox
                p.mt-4 Organiza los mensajes de forma visual en carpetas identificadas con íconos relacionados a cada correo (como logos de empresas o fotos de personas), facilitando el acceso a correos específicos. Permite gestionar múltiples marcas, comerciantes, organizaciones, instituciones, boletines de noticias, #[em blogs], etc., en una sola plataforma. Actualmente, solo disponible para cuentas de Gmail.
              .col-lg-5(style="place-self:center;")
                figure.m-auto.col-8.col-md-6.col-lg-12
                  img(src='@/assets/curso/tema2/13.png')








</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
