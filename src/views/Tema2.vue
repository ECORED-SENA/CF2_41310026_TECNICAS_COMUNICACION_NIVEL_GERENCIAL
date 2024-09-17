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
    
    .row.mt-5
    

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
