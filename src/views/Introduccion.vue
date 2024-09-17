<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row
      .col-lg(data-aos="fade-right")
        .row
          .col-auto.d-none.d-md-block(style="place-self:center;")
            figure 
              img(src="@/assets/curso/intro1.svg")
          .col(style="place-self:center;")
            p.mb-0 Las Tecnologías de la Información y la Comunicación (TIC) emplean varios medios tecnológicos para almacenar, compartir y divulgar todo tipo de información: visual, digital, auditiva y mixta, con diferentes finalidades. En la actualidad, el uso de estos medios se ha convertido en una prioridad dentro de los procesos organizacionales, pues contribuyen a la comunicación corporativa en todos los niveles. Además, la presencia de las TIC marca la diferencia entre una organización desarrollada y competitiva y otra menos competente.
        .row.mt-4
          .col-md-auto.pe-md-0
            .h-100.p-3.d-flex.align-content-center.cont_intro2(style="background-color:#E6EAE9;border-radius:15px 0px 0px 15px;")
              figure.m-auto.col-7.col-md-12
                img(src="@/assets/curso/intro2.svg")
          .col.ps-md-0
            .h-100.p-4.d-flex.align-content-center.cont_intro2(style="background-color:#FED8CC;border-radius:0px 15px 15px 0px;")
              p.mb-0 Esto se logra cuando se integran internet y una cultura organizacional que promueve el acceso y uso de internet, aprovechando las ventajas ofrecidas por las TIC para ejecutar la política de comunicaciones de la organización.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left" style="place-self:center;")
        figure 
          img(src="@/assets/curso/intro3.png")
    
    .cont_intro.mt-4
      .row
        .col-lg-5(data-aos="fade-up")
          figure
            img(src="@/assets/curso/intro5.svg" style="max-width:80px;")
          p.mt-3.mb-0 Las TIC no solo facilitan la comunicación interna y externa de las organizaciones, sino que también optimizan procesos administrativos, mejoran la toma de decisiones y fomentan la innovación. Su correcta implementación puede transformar la manera en que una organización opera, permitiendo una respuesta más ágil a los cambios del mercado y aumentando la eficiencia en todos los niveles. La capacidad de adaptarse rápidamente a las nuevas tecnologías se convierte en un factor decisivo para mantener la competitividad y asegurar el éxito a largo plazo.
        .col-lg-7.d-none.d-lg-block(data-aos="fade-down" style="place-self:center;")
          figure
            img(src="@/assets/curso/intro6.png")

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
