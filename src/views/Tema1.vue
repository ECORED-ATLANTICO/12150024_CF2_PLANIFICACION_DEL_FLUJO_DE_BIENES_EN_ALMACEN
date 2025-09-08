<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Manipulación de bienes

    .tarjeta.color-terciario-10.rounded-0.p-0.mb-0
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-5.mb-lg-0.mb-3.p-0
          figure.p-0
            img(src="@/assets/curso/temas/tema_1/img_1.png", class="img-fluid").p-0
        .col-12.col-lg-7.p-5
          p.mb-0 La manipulación de bienes es crucial en la logística porque impacta directamente en la eficiencia operativa, la seguridad y la rentabilidad de las empresas. Un manejo adecuado de los bienes evita daños físicos a los productos, lo que reduce pérdidas económicas y garantiza que los clientes reciban productos en óptimas condiciones, fortaleciendo así la confianza y la reputación empresarial.

    separador

    #t_1_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.1 Concepto
    .mb-3
 
</template>

<script>
export default {
  name: 'Tema1',
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
