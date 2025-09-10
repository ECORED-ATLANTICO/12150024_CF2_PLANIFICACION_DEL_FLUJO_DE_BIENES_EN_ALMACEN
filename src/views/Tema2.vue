<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Organización de almacén

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0(data-aos='zoom-in-right')
        .tarjeta.color-secundario-10.p-4.rounded-4.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-2.d-lg-block.d-none
              figure
                img(src='@/assets/curso/temas/tema_2/img_1.png', class="img-fluid")
            .col-12.col-lg-10(data-aos='zoom-in-right')
               p.mb-0 En el contexto del flujo de bienes, la organización busca garantizar que los productos se muevan de forma continua, eficiente y controlada, minimizando tiempos muertos, errores y costos operativos. Esto implica una planificación estratégica de las zonas funcionales (recepción, almacenamiento, picking, expedición, entre otros), así como la coordinación de actividades para asegurar la correcta entrada, almacenamiento temporal y salida de mercancías conforme a la demanda.

    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.1	Concepto
    .mb-3

</template>

<script>
export default {
  name: 'Tema2',
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
