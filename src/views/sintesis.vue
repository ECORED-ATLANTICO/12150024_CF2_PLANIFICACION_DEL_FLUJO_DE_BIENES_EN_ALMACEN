<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-3.mb-3
        figure
          img(src='@/assets/curso/sintesis/img_1.png', class="img-fluid")
      .col-12.col-lg-9(data-aos='zoom-in-right')
         p.mb-3 El componente formativo “Gestión operativa del flujo de bienes” permite comprender los procesos logísticos dentro de un almacén, desde su manipulación operativa hasta su planificación estratégica.
         p.mb-0 Se inicia con el estudio de la manipulación de bienes, así como su normativa y los equipos requeridos. Posteriormente, se profundiza en la organización del almacén, lo que permite establecer su importancia en la optimización de los recursos y el flujo de materiales. Asimismo, se analizan los diferentes tipos de programación, proporcionando herramientas para la gestión de órdenes y la cuantificación de recorridos.
    .row.justify-content-center.align-items-stard.mb-0
      .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
        .cajon.color-acento-contenido.p-4.mb-0
          p.mb-0 Se presentan las técnicas de planificación que influyen en la eficiencia general, así como los distintos planes y herramientas tecnológicas de apoyo. La documentación aborda los formatos clave para el control y la trazabilidad. Para fortalecer la aplicación de estos conceptos, se detallan los aspectos prácticos sobre la manipulación segura y tácticos de la organización interna. Finalmente, se analiza la importancia de una correcta planificación para garantizar la efectividad de toda la operación logística.
      .col-12.col-lg-2.mb-5
        figure
          img(src="@/assets/curso/sintesis/img_2.png", alt="")
    
    .row.justify-content-center
      .col-12.col-lg-12.mb-5.bgs.p-4.brad
        figure
        img(src="@/assets/curso/sintesis/sintesis.svg", alt="El componente formativo “Gestión operativa del flujo de bienes” ofrece una aproximación integral a los conocimientos fundamentales sobre la manipulación de mercancías y la organización estratégica del almacén. Este módulo analiza detalladamente los procesos de manipulación de bienes, resaltando la selección y uso correcto de equipos en cuanto a eficiencia y cumplimiento normativo, y se desglosan las buenas prácticas para la disposición física de los productos. Asimismo, se estudian las metodologías para la programación de las operaciones del almacén. La propuesta profundiza en las técnicas para la cuantificación y optimización de recorridos, así como en la gestión de los diferentes tipos de órdenes de trabajo. Además, se destacan las estrategias y tipos de planes para la planificación del almacén, junto con el uso de herramientas tecnológicas de soporte, enfatizando la importancia de la correcta documentación para una toma de decisiones informada y la trazabilidad del flujo de bienes.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
