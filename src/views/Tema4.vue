<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Planificación de almacén

    .row.justify-content-center.align-items-center
      .col-10.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/temas/tema_4/img_1.png', class="img-fluid")
      .col-12.col-lg-9.mb-lg-0.mb-3(data-aos="zoom-in-right")
        p.mb-3 Una estrategia de planificación bien diseñada permite optimizar el uso del espacio, reducir los costos operativos y mejorar tanto la eficiencia como la precisión en cada etapa del proceso logístico. Esto se traduce en una mejor gestión del inventario, disminuyendo los riesgos de faltantes o excesos de <i>stock</i>, y agilizando la preparación y envío de pedidos.
        p.mb-0 La planificación de almacén no solo se limita a la gestión diaria, sino que debe ser estratégica, considerando el crecimiento futuro, la flexibilidad en el diseño del almacén y la adaptación a nuevas tecnologías o cambios en la demanda.
    .row.justify-content-center.align-items-center
      .col-12.col-lg-10.mb-0

        separador

        #t_4_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 4.1	Concepto
        .mb-3

        .tarjeta.color-secundario-5.p-4.rounded-4.mb-5
          .row.justify-content-center.align-items-center
            .col-12.col-lg-10(data-aos='zoom-in-right')
               p.mb-0 La planificación de almacén es un proceso estratégico que consiste en organizar, gestionar y optimizar los recursos y espacios dentro de un almacén para garantizar un flujo eficiente de mercancías, desde su recepción hasta su despacho. Su objetivo principal es maximizar la productividad, reducir costos operativos, minimizar errores y mejorar la satisfacción del cliente mediante una gestión eficaz del inventario. A continuación, se detallan los principales objetivos de la planificación de almacén:
            .col-lg-2.d-lg-block.d-none
              figure
                img(src='@/assets/curso/temas/tema_4/img_2.png', class="img-fluid")
        
        .custom-slider--color-fondo-1.p-5.p-sm-3.mb-5(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-4")
            .tarjeta--color-fondo-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--18
                .tarjeta--slider__title.mb-3.text-center.fw-bold Maximizar el espacio disponible
                .tarjeta--slider__content.text-center Aprovechar al máximo el área de almacenamiento mediante una disposición inteligente de estanterías, <i>racks</i> y zonas de trabajo.
            .tarjeta--color-fondo-1.h-95
              .row.justify-content-center.align-items-center.mb-0 
                .col-12.mb-3
                  .tarjeta--19
                .tarjeta--slider__title.mb-3.text-center.fw-bold Optimizar el flujo de materiales
                .tarjeta--slider__content.text-center Reducir tiempos de movimiento y manipulación de productos mediante una distribución lógica.
            .tarjeta--color-fondo-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--20
                .tarjeta--slider__title.mb-3.text-center.fw-bold Maximizar el espacio disponible
                .tarjeta--slider__content.text-center Aprovechar al máximo el área de almacenamiento mediante una disposición inteligente de estanterías, <i>racks</i> y zonas de trabajo.
            .tarjeta--color-fondo-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--21
                .tarjeta--slider__title.mb-3.text-center.fw-bold Optimizar el flujo de materiales
                .tarjeta--slider__content.text-center Reducir tiempos de movimiento y manipulación de productos mediante una distribución lógica.
            .tarjeta--color-fondo-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--22
                .tarjeta--slider__title.mb-3.text-center.fw-bold Minimizar costos operativos
                .tarjeta--slider__content.text-center Reducir gastos en mano de obra, energía y almacenamiento mediante procesos eficientes.
            .tarjeta--color-fondo-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--23
                .tarjeta--slider__title.mb-3.text-center.fw-bold Mejorar la precisión en inventarios
                .tarjeta--slider__content.text-center Evitar pérdidas, roturas o caducidades mediante un control adecuado.
            .tarjeta--color-fondo-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--24
                .tarjeta--slider__title.mb-3.text-center.fw-bold Garantizar la seguridad
                .tarjeta--slider__content.text-center Cumplir con normativas de seguridad para trabajadores y productos.
        
        p.mb-3 Es importante tener en cuenta los siguientes factores que influyen al momento de realizar la planificación del almacén:    
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          h5 Figura 4.
          span Factores clave de la planificación de almacén
        figure.mb-5(data-aos="zoom-in-right")
          img(src='@/assets/curso/temas/tema_4/img_10.svg', class="img-fluid d-none d-lg-block mb-3", alt="La figura muestra los factores clave de la planificación de almacén: volumen de los bienes, rotación de stock, tipo de bienes, tecnología disponible y requerimientos legales y de seguridad.")
          img(src='@/assets/curso/temas/tema_4/img_11.svg', class="img-fluid d-block d-lg-none mb-3", alt="La figura muestra los factores clave de la planificación de almacén: volumen de los bienes, rotación de stock, tipo de bienes, tecnología disponible y requerimientos legales y de seguridad.")
        figcaption(data-aos="zoom-in-right") 
          <b>Fuente:</b> SENA, 2025.
      
        p.mb-0 Es importante tener en cuenta los siguientes factores que influyen al momento de realizar la planificación del almacén:

        separador

        #t_4_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 4.2 Técnicas de planificación
        .mb-3

    .row.justify-content-center.align-items-center.mb-5
      .col-4.col-lg-1.mb-lg-0.mb-3
        figure.p-0
          img(src="@/assets/curso/temas/tema_4/img_12.png", class="img-fluid")
      .col-12.col-lg-9.mb-0
        p.mb-0 La organización eficiente de un almacén logístico requiere integrar diversas estrategias, métodos y tecnologías que permitan maximizar el aprovechamiento del espacio, optimizar los recursos disponibles y mejorar el flujo operativo. Para lograrlo, se emplean distintos enfoques que abarcan desde el diseño de la distribución en planta hasta la gestión automatizada, garantizando así procesos ágiles y precisos.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-3
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Técnicas de planificación de almacén
        .tabla-a.mb-5
          table
            caption 
              p <b>Fuente:</b>  SENA, 2025.
            thead
              tr
              th Enfoque
              th Técnicas de planificación
              th Descripción
            tbody
              tr
                td(rowspan="4") <B>Diseño de <i>layout</i> (distribución en planta)</B>
                td.text-start Almacenamiento en bloque.
                td.text-start Para bienes homogéneos y de gran volumen (ejemplo: <i>palets</i>).
              tr.bg-table-01
                td.text-start Sistema de estanterías selectivas.
                td.text-start Ideal para productos con alta rotación.
              tr
                td.text-start Sistema de flujo continuo (<i>Flow Racking</i>). 
                td.text-start Para productos con caducidad.
              tr.bg-table-01
                td.text-start Almacenamiento compacto (<i>Drive-in</i>, <i>Push-back</i>)
                td.text-start Para maximizar espacio en productos de baja rotación.
              tr
                td(rowspan="6") <B>Métodos de almacenamiento</B>
                td.text-start Método ABC.
                td.text-start Clasifica productos según su importancia (A: alto valor/rotación, B: medio, C: bajo).
              tr.bg-table-01
                td.text-start <i>Cross-Docking</i>.
                td.text-start Minimiza el tiempo de almacenamiento transfiriendo mercancía directamente de entrada a salida.
              tr
                td.text-start Justo a tiempo.
                td.text-start Reduce inventarios recibiendo productos solo cuando son necesarios.
              tr.bg-table-01
                td.text-start <i>Picking</i> por zonas.
                td.text-start Optimización de espacio y recursos.
              tr
                td.text-start <i>Picking</i> por lotes. 
                td.text-start Agrupa pedidos similares para reducir tiempos.
              tr.bg-table-01
                td.text-start <i>Picking</i> por oleadas.
                td.text-start Organiza pedidos en fases según prioridad.
      .col-12.col-lg-10.mb-3 
        p.mb-0 Estas técnicas, combinadas y adaptadas a las características específicas de cada empresa y tipo de bienes, permiten una planificación eficiente del almacén, garantizando la competitividad y la capacidad de respuesta ante las exigencias del mercado.

    separador

    #t_4_3.titulo-segundo.color-acento-contenido.mb-0
      .h2(data-aos="fade-right") 4.3	Tipos de planes
    .mb-5

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_4/img_13.png')
      .bloque-texto-t__texto.col-10.mb-0.custom-t
        p.mb-0 La importancia de los diferentes tipos de planificación en un almacén radica en su capacidad para adaptar la gestión logística a las características específicas del negocio, los bienes y la demanda del mercado. Cada tipo de planificación estratégica, táctica y operativa, cumple un rol fundamental para garantizar la eficiencia y competitividad del almacén:
    
    .row.justify-content-center.align-items-center
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo__slider-1.p-4.mb-5
          SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-6.order-2.order-lg-1.mb-0
                h5.mb-3 Plan estratégico
                p.mb-0 Establece los objetivos a largo plazo, proyectados entre 3 y 5 años, orientados a la ubicación, expansión, automatización y adopción de nuevos sistemas, incorporando además inversiones en infraestructura y tecnología que aseguren el crecimiento sostenible y la competitividad de la organización.
              .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_4/img_15.png', class="img-fluid")
            .row.justify-content-center.align-items-center
              .col-12.col-lg-6.order-2.order-lg-1.mb-0
                h5.mb-3 Plan táctico
                p.mb-0 El plan táctico define los objetivos de mediano plazo, entre 1 y 2 años, enfocados en la optimización de recursos y procesos de acuerdo con las previsiones de demanda y la disponibilidad de espacio, incluyendo mejoras en la eficiencia operativa, la capacitación continua del personal y la implementación de un sistema de gestión de almacenes (WMS) que permita fortalecer la productividad y la adaptabilidad de la organización.
              .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_4/img_16.png', class="img-fluid")
            .row.justify-content-center.align-items-center
              .col-12.col-lg-6.order-2.order-lg-1.mb-0
                h5.mb-3 Plan operativo.
                p.mb-0 Establece los objetivos a corto plazo, con un enfoque diario y semanal, orientados al control de la ejecución eficiente de las operaciones, la asignación puntual de tareas, la gestión de recepción, almacenamiento, <i>picking</i> y despacho, así como la programación adecuada de turnos para garantizar continuidad, productividad y cumplimiento oportuno en cada actividad.
              .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_4/img_17.png', class="img-fluid")
    
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-5(data-aos="zoom-in-right")
        .cajon.color-acento-contenido.p-4.mb-0
          p.mb-0 Cada modalidad de planificación responde a necesidades específicas: la estratégica define la visión y objetivos globales a largo plazo; la táctica traduce esas directrices en planes adaptables que responden a cambios y condiciones del entorno; y la operativa se encarga de asegurar la ejecución eficiente y puntual de las actividades diarias para cumplir con los objetivos planteados.

        separador

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-3(data-aos="zoom-in-right")
        #t_4_4.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 4.4	Herramientas tecnológicas
        .mb-0
        p.mb-0 La tecnología desempeña un papel fundamental en la planificación y gestión moderna de almacenes. Entre las principales herramientas destacan:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-6.order-2.order-lg-1.mb-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-secundario-10")
          div(titulo="<i>Software</i> de gestión de almacenes (SGA/WMS)")
            p.ps-5.mb-0 Automatiza el control de inventarios, coordina procesos, sincroniza tareas y permite el seguimiento en tiempo real de bienes y operarios.
          div(titulo="Sistemas de identificación automática")
            p.ps-5.mb-0 Uso de códigos de barras, RFID y terminales de radiofrecuencia para el registro y localización de bienes.
          div(titulo="Robótica y automatización")
            p.ps-5.mb-0 Robots móviles, transelevadores, sistemas <i>shuttle</i> y transportadores automáticos para el movimiento eficiente de bienes.
          div(titulo="Analítica predictiva y <i>big data</i>")
            p.ps-5.mb-0 Herramientas que permiten anticipar la demanda, optimizar el <i>slotting</i> y mejorar la toma de decisiones.
          div(titulo="Dirección por voz y asistentes digitales")
            p.ps-5.mb-0 Facilitan la preparación de pedidos y otras tareas mediante instrucciones auditivas, aumentando la productividad y precisión.
          div(titulo="Integración con IoT (internet de las cosas)")
            p.ps-5.mb-0 Permite la conexión y gestión inteligente de equipos y sistemas dentro del almacén.
      .col-8.col-md-4.col-lg-4.mb-lg-3.order-1.order-lg-2.mb-md-3.mb-3
        figure
          img.mb-0(src="@/assets/curso/temas/tema_4/img_18.png", class="img-fluid" heigth="120%").h-100
    
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-5(data-aos="zoom-in-right")
        p Estas soluciones tecnológicas ayudan a reducir errores, mejorar la eficiencia, asegurar la trazabilidad y adaptarse rápidamente a cambios en la demanda o el entorno logístico

        separador

        #t_4_5.titulo-segundo.color-acento-contenido.mb-0
          .h2(data-aos="fade-right") 4.5	Documentos
        .mb-0
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/temas/tema_4/img_19.png', class="img-fluid")
      .col-12.col-lg-6.mb-lg-0.mb-3(data-aos="zoom-in-right")
        p.mb-3 La documentación en la gestión de almacenes es fundamental para garantizar el control, la trazabilidad y la eficiencia de las operaciones. 
        p.mb-0 Los documentos en la planificación del almacén son permiten controlar, organizar y dar seguimiento a todas las operaciones relacionadas con la gestión de inventarios y el movimiento de mercancías, asegurando eficiencia, precisión y cumplimiento normativo. A continuación, presentan cada uno de los documentos clave utilizados en la planificación de almacén:
    
    .row.justify-content-center.align-items-center
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo__slider-1.p-4.mb-5
          SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-6.order-2.order-lg-1.mb-0
                h5.mb-3 Documentos de entrada y recepción
                ul.list-unstyled
                  li.d-flex.align-items-start.mb-1
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    span
                      <strong>Orden de recepción (nota de entrada):</strong> 
                        |  autoriza y registra la entrada de bienes al almacén.
                  li.d-flex.align-items-start.mb-1
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    span
                      <strong>Albarán (guía de remisión): </strong> 
                        |  comprobante de entrega física de mercancías (emitido por el proveedor).
                  li.d-flex.align-items-start.mb-1
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    span
                      <strong>Informe de inspección y calidad:</strong> 
                        |  documenta el estado de los productos recibidos (roturas, caducidades, entre otros).
              .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_4/img_21.png', class="img-fluid")
            .row.justify-content-center.align-items-center
              .col-12.col-lg-6.order-2.order-lg-1.mb-0
                h5.mb-3 Documentos de almacenamiento y control de inventario
                ul.list-unstyled
                  li.d-flex.align-items-start.mb-1
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    span
                      <strong>Hoja de ubicación:</strong> 
                        |  indica dónde se almacena cada producto (estantería, pasillo o nivel).
                  li.d-flex.align-items-start.mb-1
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    span
                      <strong>Registro de inventario:</strong> 
                        |  control detallado de entradas, salidas y saldos de cada producto.
                  li.d-flex.align-items-start.mb-1
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    span
                      <strong>Parte de incidencias:</strong> 
                        | reporta problemas como mercancía dañada o faltante, errores en ubicaciones, fallos en equipos (montacargas, sistemas automatizados, entre otros).
              .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_4/img_22.png', class="img-fluid")
            .row.justify-content-center.align-items-center
              .col-12.col-lg-6.order-2.order-lg-1.mb-0
                h5.mb-3 Documentos de salida y expedición
                ul.list-unstyled
                  li.d-flex.align-items-start.mb-1
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    span
                      <strong>Orden de preparación:</strong> 
                        |  detalla los productos a recolectar para un pedido.
                  li.d-flex.align-items-start.mb-1
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    span
                      <strong>Lista de empaque:</strong> 
                        | describe el contenido de cada bulto despachado.
                  li.d-flex.align-items-start.mb-1
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    span
                      <strong>Guía de despacho:</strong> 
                        | acredita la entrega de mercancías al cliente o transporte. 
              .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_4/img_23.png', class="img-fluid")
        
            .row.justify-content-center.align-items-center.mb-5
              .col-12.col-lg-6.order-2.order-lg-1.mb-0
                h5.mb-3 Documentos de planificación y gestión
                ul.list-unstyled
                li.d-flex.align-items-start.mb-1
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                  span
                    <strong>Plan de <i>layout</i> de almacén:</strong> 
                      |  diseño gráfico de la distribución física (estanterías, zonas o flujos).
                li.d-flex.align-items-start.mb-1
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                  span
                    <strong>Manual de procedimientos de almacén:</strong> 
                      | establece normas para operaciones estándar.
              .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_4/img_24.png', class="img-fluid")
        
            .row.justify-content-center.align-items-center
              .col-12.col-lg-6.order-2.order-lg-1.mb-0
                h5.mb-3 Documentos legales y de seguridad
                ul.list-unstyled
                li.d-flex.align-items-start.mb-1
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                  span
                    <strong>Hoja de seguridad:</strong> 
                      |  obligatoria para productos peligrosos (químicos, inflamables, entre otros).
                li.d-flex.align-items-start.mb-1
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                  span
                    <strong>Registro de mantenimiento de equipos:</strong> 
                      | garantiza el buen estado de montacargas y cintas transportadoras.
              .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_4/img_25.png', class="img-fluid")
</template>

<script>
export default {
  name: 'Tema4',
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
