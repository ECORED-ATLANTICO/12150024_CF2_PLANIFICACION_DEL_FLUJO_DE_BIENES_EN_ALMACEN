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
               p.mb-0 En el contexto del flujo de bienes, la organización busca garantizar que los productos se muevan de forma continua, eficiente y controlada, minimizando tiempos muertos, errores y costos operativos. Esto implica una planificación estratégica de las zonas funcionales (recepción, almacenamiento, <i>picking</i>, expedición, entre otros), así como la coordinación de actividades para asegurar la correcta entrada, almacenamiento temporal y salida de mercancías conforme a la demanda.

    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.1	Concepto
    .mb-3

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema_2/img_2.png', class="img-fluid")
      .col-12.col-lg-10(data-aos='zoom-in-right')
         p.mb-3 La organización de almacén se refiere al diseño, disposición y gestión sistemática de los espacios, procesos y recursos dentro de un almacén para optimizar el flujo de bienes desde su recepción hasta su expedición. Contienen, agrupan y facilitan el manejo, transporte y almacenamiento de productos, garantizando su integridad durante la cadena de suministro.
         p.mb-0 La organización adecuada del almacén impacta directamente en la capacidad de respuesta, la precisión en inventarios y la satisfacción del cliente final, siendo un pilar fundamental para la competitividad logística en mercados globalizados y dinámicos. Un almacén bien organizado debe considerar:

    .row.justify-content-center.align-items-stretch
      .col-12.col-sm-6.col-lg-3.mb-lg-0.mb-4.d-flex(data-aos="zoom-in-right")
        .tarjeta--blanca-1.h-95.p-3.w-100.d-flex.flex-column
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema_2/img_3.svg', class="img-fluid")
          h5.mb-3.text-center Accesibilidad
          p.mb-3.text-center Facilitar el movimiento rápido de productos.
      .col-12.col-sm-6.col-lg-3.mb-lg-0.mb-4.d-flex(data-aos="zoom-in-right")
        .tarjeta--blanca-1.h-95.p-3.w-100.d-flex.flex-column
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema_2/img_4.svg', class="img-fluid")
          h5.mb-3.text-center Seguridad
          p.mb-3.text-center Evitar daños a la mercancía y riesgos laborales.
      .col-12.col-sm-6.col-lg-3.mb-lg-0.mb-4.d-flex(data-aos="zoom-in-right")
        .tarjeta--blanca-1.h-95.p-3.w-100.d-flex.flex-column
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema_2/img_5.svg', class="img-fluid")
          h5.mb-3.text-center Trazabilidad
          p.mb-3.text-center Permitir el seguimiento preciso de los inventarios.
      .col-12.col-sm-6.col-lg-3.mb-lg-0.mb-4.d-flex(data-aos="zoom-in-right")
        .tarjeta--blanca-1.h-95.p-3.w-100.d-flex.flex-column
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema_2/img_6.svg', class="img-fluid")
          h5.mb-3.text-center Flexibilidad
          p.mb-3.text-center Adaptarse a cambios en la demanda o nuevos productos.
      
      .row.justify-content-center.align-items-center
        .col-12.col-lg-10(data-aos="zoom-in-right")
          .cajon.color-acento-botones.p-4.mb-0
            .row.justify-content-center.align-items-center
              .col-12.col-lg-10
                p.mb-0 En la actualidad, la organización de almacenes no solo implica ubicar productos en estantes, sino integrar sistemas de inteligencia artificial, robótica y análisis de datos para predecir demandas y optimizar espacios.
              .col-6.col-lg-1.d-lg-block.d-none
                figure
                  img(src='@/assets/curso/temas/tema_2/img_7.svg', class="img-fluid")

    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.2	Técnicas de organización
    .mb-3

    .tarjeta.color-terciario-10.rounded-0.p-lg-0.p-3.mb-5
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-5.mb-lg-0.mb-3.p-0
          figure.p-0
            img(src="@/assets/curso/temas/tema_2/img_8.png", class="img-fluid").p-0
        .col-12.col-lg-7.p-lg-3.p-5
          p.mb-3 Comprender las técnicas de organización de almacenes es esencial porque permite a las empresas descubrir oportunidades de mejora, aumentar la productividad y tener un control preciso del volumen de los bienes.
          p.mb-0 Además, una adecuada organización contribuye a la seguridad del personal y a la eficiencia del proceso logístico, impactando positivamente en toda la cadena de suministro y en la competitividad de la empresa. A continuación, se describen las principales técnicas implementadas para la organización del almacén:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1.mb-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-secundario-10")
          div(titulo="Agrupación de productos similares")
            p.ps-5.mb-0 Consiste en almacenar juntos productos que comparten características o que se manipulan de forma conjunta, facilitando su localización y conservación.
          div(titulo="Almacenamiento vertical")
            p.ps-5.mb-0 Aprovecha la altura del almacén mediante estanterías adecuadas para maximizar el espacio sin aumentar la superficie ocupada.
          div(titulo="Ubicación diferenciada para cada producto")
            p.ps-5.mb-0 Asignar un lugar fijo para cada artículo ayuda a mantener el orden y facilita la rápida localización.
          div(titulo="Almacenamiento según clase de movimiento o rotación")
            p.ps-5.mb-0 Los productos se ubican en función de la frecuencia con que son manipulados. Los de alta rotación se colocan en zonas de fácil acceso para agilizar el <i>picking</i> y la expedición.
          div(titulo="Técnicas FIFO, LIFO y FEFO")
            p.ps-5.mb-0 <B>FIFO (<i>First In, First Out</i>):</B> los productos que entran primero salen primero, ideal para evitar caducidades y obsolescencia.
            p.ps-5.mb-0 <B>LIFO (<i>Last In, First Out</i>):</B> los productos más recientes se usan primero, útil en ciertos tipos de inventarios.
            p.ps-5.mb-0 <B>FEFO (<i>First Expired, First Out</i>):</B> prioriza la salida de productos con fecha de caducidad más próxima, fundamental en alimentos y medicamentos.
          div(titulo="Almacenamiento por bloques")
            p.ps-5.mb-0 Los productos se agrupan en grandes bloques, a menudo directamente sobre el suelo, facilitando el manejo de grandes volúmenes de mercancía similar.
      .col-8.col-md-4.col-lg-3.mb-lg-3.order-1.order-lg-2.mb-md-3.mb-3
        figure
          img.mb-0(src="@/assets/curso/temas/tema_2/img_9.png", class="img-fluid")

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-6.col-xl-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema_2/img_10.png', class="img-fluid")
      .col-12.col-lg-12.col-xl-8.mb-0
        .custom-slider.p-2.p-sm-3(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-12 col-md-12 col-lg-6")
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--7
                .tarjeta--slider__title.mb-3.text-center.fw-bold Estanterías selectivas
                .tarjeta--slider__content.text-center Sistema versátil y común que permite acceso directo a cada palé o producto, con opciones de simple o doble profundidad.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--8
                .tarjeta--slider__title.mb-3.text-center.fw-bold Estanterías dinámicas y <i>push-back</i>
                .tarjeta--slider__content.text-center Utilizan rodillos y gravedad para facilitar la entrada y salida de mercancías, garantizando rotación eficiente y ahorro de espacio.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--9
                .tarjeta--slider__title.mb-3.text-center.fw-bold <i>Cross-docking</i>
                .tarjeta--slider__content.text-center Técnica que minimiza el almacenamiento intermedio, enviando la mercancía directamente de recepción a expedición para acelerar el flujo.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--10
                .tarjeta--slider__title.mb-3.text-center.fw-bold Almacenamiento en entresuelo
                .tarjeta--slider__content.text-center Divide el almacén en dos niveles para optimizar espacio, requiriendo atención a la seguridad y manejo mecánico.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--11
                .tarjeta--slider__title.mb-3.text-center.fw-bold Zonificación del almacén.
                .tarjeta--slider__content.text-center Dividir el espacio en zonas específicas según tipo de producto, rotación o función (recepción, <i>picking</i>, expedición) para facilitar la gestión y el flujo de bienes.
    
    .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-10.mb-0
            .cita-decorada
              blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-5
                .row.justify-content-center.align-items-center
                  .col-6.col-lg-3.order-2.order-lg-1
                    img(src='@/assets/curso/temas/tema_2/img_16.png',  class="img-fluid cita-decorada__imagen-flotante-1")
                  .col-12.col-lg-1.order-1.order-lg-1.d-none.d-lg-block
                    img(src='@/assets/curso/temas/tema_2/img_17.png',  class="img-fluid cita-decorada__imagen-flotante-1")
                  .col-7.col-lg-8.order-1.order-lg-2
                    p.cita-decorada__texto Estas técnicas pueden combinarse y adaptarse según las características del producto, volumen de inventario, tipo de almacén y necesidades logísticas, siempre con el fin de optimizar el flujo de bienes y la eficiencia operativa.
    separador

    #t_2_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.3	Buenas prácticas
    .mb-3

    .row.justify-content-center.align-items-center.mb-0
      .col-8.col-lg-2.mb-5
        figure
          img(src='@/assets/curso/temas/tema_2/img_18.png', class="img-fluid")
      .col-12.col-lg-10.mb-5
        p.mb-0 Adoptar buenas prácticas en la organización de almacenes es esencial para mejorar la eficiencia operativa, disminuir costos y elevar la satisfacción del cliente. Estas prácticas facilitan un uso óptimo del espacio y un control preciso del inventario, lo que agiliza la localización y rotación de productos. Además, promueven un entorno de trabajo seguro y ordenado para el personal, y permiten una gestión logística más efectiva mediante controles rigurosos y evaluaciones constantes. Varios aspectos importantes se describen a continuación:
      .col-12.col-lg-10.mb-lg-0.mb-0
        TabsA.mb-0.tarjeta-tabs-a.color-secundario-10.uno
          .tarjeta.color-secundario-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Mantener orden y limpieza (5S)")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-10.col-xl-5.order-1.order-xl-2.mb-3
                p.mb-0 <B><i>Seiri</i> (clasificar):</B> eliminar lo innecesario.
                p.mb-0 <B><i>Seiton</i> (organizar):</B> todo en su lugar.
                p.mb-0 <B><i>Seiso</i> (limpiar):</B> mantener áreas libres de obstáculos.
                p.mb-0 <B><i>Seiketsu</i> (estandarizar):</B> protocolos claros.
                p.mb-0 <B><i>Shitsuke</i> (disciplina):</B> cumplimiento constante.
              .col-10.col-lg-8.col-xl-7.order-1.order-xl-2.mb-xl-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_2/img_19.png', class="img-fluid")
          .tarjeta.color-secundario-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Rotulación y señalización clara")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-10.col-xl-5.order-1.order-xl-2.mb-3
                p.mb-0 Identificar pasillos, estanterías y bienes con etiquetas visibles.
              .col-10.col-lg-8.col-xl-7.order-1.order-xl-2.mb-xl-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_2/img_20.png', class="img-fluid")
          .tarjeta.color-secundario-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Capacitación del personal")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-10.col-xl-5.order-1.order-xl-2.mb-3
                p.mb-0 Entrenar al equipo en manejo de inventario, seguridad y uso de tecnologías.
              .col-10.col-lg-8.col-xl-7.order-1.order-xl-2.mb-xl-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_2/img_21.png', class="img-fluid")
          .tarjeta.color-secundario-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Gestión de stock eficiente")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-10.col-xl-5.order-1.order-xl-2.mb-3
                p.mb-0 Realizar inventarios periódicos y evitar <i>sobrestock</i> o roturas de <i>stock</i>.
              .col-10.col-lg-8.col-xl-7.order-1.order-xl-2.mb-xl-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_2/img_22.png', class="img-fluid")
          .tarjeta.color-secundario-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Seguridad y prevención de riesgos")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-10.col-xl-5.order-1.order-xl-2.mb-3
                p.mb-0 Uso de equipo de protección personal (EPP).
                p.mb-0 Correcto apilamiento de mercancías para evitar accidentes.
              .col-10.col-lg-8.col-xl-7.order-1.order-xl-2.mb-xl-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_2/img_23.png', class="img-fluid")
          .tarjeta.color-secundario-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Mejora continua (Kaizen)")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-10.col-xl-5.order-1.order-xl-2.mb-3
                p.mb-0 Evaluar procesos y aplicar ajustes para optimizar el flujo de bienes.
              .col-10.col-lg-8.col-xl-7.order-1.order-xl-2.mb-xl-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_2/img_24.png', class="img-fluid")
    
          
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
