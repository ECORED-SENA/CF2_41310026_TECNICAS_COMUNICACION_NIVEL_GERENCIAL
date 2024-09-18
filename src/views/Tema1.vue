<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Internet

    .row
      .col-lg.order-2.order-lg-1(data-aos="fade-right")
        p El 24 de octubre de 1995, el Consejo Federal de Redes (Federal Networking Council), en conjunto con otras instituciones, definió el término #[strong "Internet"] como el sistema de información global que conecta diversas redes de computadoras entre sí bajo el protocolo de comunicación TCP/IP.
        .p-4(style="background-color:#CAE1F9;border-radius:15px;")
          p.mb-0 Cada dispositivo posee una dirección única para su reconocimiento (Internet Protocol, IP), y la red provee acceso a diferentes niveles de servicios de comunicación e información, ya sean públicos o privados.
        p.mt-4 Internet es un conjunto descentralizado de redes de comunicación interconectadas que utilizan la familia de protocolos TCP/IP. Considerada la "red de redes", es un sistema universal de comunicaciones que ofrece múltiples servicios para la movilización y comunicación de la información, como Telnet y www, los cuales tienen un gran impacto social.
      .col-lg-auto.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/1.svg")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-4(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/2.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Conceptos básicos de Internet
    
    .row
      .col-lg(data-aos="fade-up")
        p Es importante comprender que internet posibilita dos tipos de comunicación: una en tiempo real, llamada #[strong Sincrónica] (como chat, mensajes, audio y videoconferencia), y otra #[strong Asincrónica], que ocurre en tiempos diferentes (como noticias grupales, listas de distribución y correo electrónico). Estos conceptos son esenciales para entender las bases de internet.
        p.mb-0 Los aspectos clave y básicos para comprender esta infraestructura técnica de internet incluyen redes, protocolos de comunicación y direcciones electrónicas son:
      .col-lg-auto(data-aos="fade-left")
        figure 
          img(src="@/assets/curso/tema1/3.png")
    
    .row.mt-4
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema1/4.svg")
      .col-lg-9(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Redes")
            p Cuando se conectan dos o más dispositivos (teléfonos, celulares, computadoras, agentes digitales personales) entre sí, se establecen redes. La clasificación de las redes se realiza en función de su extensión y situación particular, y pueden ser:
            ul.lista-ul
              li.d-flex
                i.fas.fa-bullhorn(style="color:#FA7247;")
                span LAN (Red de área local)
              li.d-flex
                i.fas.fa-bullhorn(style="color:#FA7247;")
                span PAN (Red de área personal)
              li.d-flex
                i.fas.fa-bullhorn(style="color:#FA7247;")
                span MAN (Red de área metropolitana)
              li.d-flex
                i.fas.fa-bullhorn(style="color:#FA7247;")
                span WAN (Red de área extensa)
          .row.col-xl-11.m-auto(titulo="Protocolos de comunicación para internet")
            ul.lista-ul
              li.d-flex
                i.fas.fa-bullhorn(style="color:#FA7247;")
                span Los protocolos de comunicación para internet son un conjunto de normas formales que permiten la comunicación (transmisión) entre distintos equipos. No debe confundirse este concepto con el relacionado con el flujo de información corporativo interno, que se basa en estrictos procedimientos de manejo de la documentación.
              li.d-flex
                i.fas.fa-bullhorn(style="color:#FA7247;")
                span Los protocolos de transmisión para internet, como TCP e IP, son esenciales para el intercambio de información entre computadoras.
    
    .cont_1_1.mt-4.pb-4
      .row.mt-4
        .col-lg-9(data-aos="zoom-in-up")
          AcordionA(tipo="a" clase-tarjeta="tarjeta")
            .row.col-xl-11.m-auto(titulo="IP (Protocolo de Internet)")
              p El protocolo de comunicación IP es responsable de identificar los dispositivos conectados a internet y seleccionar la mejor ruta para que los datos lleguen a su destino. Este proceso se conoce como enrutamiento, el cual es realizado por routers, computadoras especializadas en recibir y enviar paquetes a través de diferentes interfaces de red.
            .row.col-xl-11.m-auto(titulo="TCP (Protocolo de Control de Transmisión)")
              p El protocolo de comunicación TCP asegura que los datos lleguen a su destino sin errores ni alteraciones. Su transmisión se realiza en fragmentos pequeños o datagramas, los cuales son ensamblados nuevamente en su destino, garantizando que el mensaje se reciba correctamente.
            .row.col-xl-11.m-auto(titulo="Protocolos de comunicación para internet")
              p Son números únicos asignados a cada dispositivo conectado a la red, permitiendo que sean reconocidos por otros. También se conocen como direcciones IP, y son fundamentales para la comunicación en internet. Ejemplos de incluyen:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-bullhorn(style="color:#FA7247;")
                  span www.sena.edu.co 
                li.d-flex
                  i.fas.fa-bullhorn(style="color:#FA7247;")
                  span www.ccb.org.co 
                li.d-flex
                  i.fas.fa-bullhorn(style="color:#FA7247;")
                  span www.divercity.com.co 
                li.d-flex
                  i.fas.fa-bullhorn(style="color:#FA7247;")
                  span www.exito.com
        .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
          figure 
            img(src="@/assets/curso/tema1/5.png")






      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
