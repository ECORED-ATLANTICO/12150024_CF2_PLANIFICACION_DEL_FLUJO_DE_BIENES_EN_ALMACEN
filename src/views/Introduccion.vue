<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.color-secundario-10.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Introduccion/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El componente formativo Gestión operativa del flujo de bienes proporciona los conocimientos esenciales para manejar, planificar, organizar y programar eficientemente las operaciones logísticas en un almacén. Comienza con la manipulación de bienes, explicando su concepto y los equipos utilizados, para luego profundizar en la planificación de almacenes, abordando técnicas y tipos de planes que optimizan el espacio y los recursos. Estos fundamentos permiten entender la importancia de una gestión estructurada en la cadena de suministro.
    
    p.mb-5 Posteriormente, se desarrollan estrategias de organización y programación de almacenes, incluyendo técnicas de distribución, cuantificación de recorridos y tipos de órdenes. Este enfoque integral busca mejorar la productividad, reducir tiempos y costos, y garantizar un flujo ágil de mercancías. Al dominar estos procesos, los participantes estarán capacitados para implementar soluciones logísticas eficaces, adaptables a distintos entornos operativos, contribuyendo así a la competitividad empresarial.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/X-HAyBJi1MI?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
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
