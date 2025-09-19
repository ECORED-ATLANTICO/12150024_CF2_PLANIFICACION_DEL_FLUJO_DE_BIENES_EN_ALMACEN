<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Manipulación de bienes

    .tarjeta.color-terciario-10.rounded-0.p-lg-0.p-3.mb-0
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-5.mb-lg-0.mb-3.p-0
          figure.p-0
            img(src="@/assets/curso/temas/tema_1/img_1.png", class="img-fluid").p-0
        .col-12.col-lg-7.p-lg-3.p-5
          p.mb-0 La manipulación de bienes es crucial en la logística porque impacta directamente en la eficiencia operativa, la seguridad y la rentabilidad de las empresas. Un manejo adecuado de los bienes evita daños físicos a los productos, lo que reduce pérdidas económicas y garantiza que los clientes reciban productos en óptimas condiciones, fortaleciendo así la confianza y la reputación empresarial.

    separador

    #t_1_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.1 Concepto
    .mb-3

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.mb-lg-0.order-2.order-lg-1.mb-3(data-aos='zoom-in-right')
        p.mb-4 La manipulación de bienes se refiere al conjunto de operaciones realizadas para mover, almacenar, proteger y controlar materiales o productos en diferentes etapas de la cadena de suministro. Esta actividad es fundamental en sectores como la logística, la industria manufacturera, el comercio y el transporte, ya que incide directamente en la eficiencia operativa, los costos y la seguridad laboral.
        .tarjeta.color-adicional-1.p-4.rounded-4.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/temas/tema_1/img_2.png', class="img-fluid")
            .col-12.col-lg-10(data-aos='zoom-in-right')
               p.mb-0 Este proceso incluye tareas como cargar, descargar, elevar, clasificar, organizar, embalar y trasladar bienes dentro de instalaciones logísticas, de producción o almacenamiento. La manipulación puede ser manual, mecanizada o automatizada, dependiendo de los recursos, el tipo de bien y el volumen de operaciones.
        p.mb-0 La manipulación de bienes comprende todas las acciones físicas aplicadas a las mercancías durante su transporte, almacenamiento y distribución. Estas prácticas son esenciales para:
      .col-8.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos='zoom-in-right')
        figure
          img(src='@/assets/curso/temas/tema_1/img_3.png', class="img-fluid")
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-5
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          h5 Figura 1.
          span Factores clave en la manipulación de bienes
        figure(data-aos="zoom-in-right")
          img(src='@/assets/curso/temas/tema_1/img_4.svg', class="img-fluid d-none d-lg-block mb-3" alt="En la figura 1 se ilustra el esquema de planificación de frecuencias y horarios, herramienta para lograr la precisión y optimizar viajes y entregas. Sus componentes son:· Utilización de la flota y la fuerza laboral. · Minimización de costos. · Satisfacción del cliente. · Sincronización de la cadena de suministro. · Gestión de la congestión.")
          img(src='@/assets/curso/temas/tema_1/img_5.svg', class="img-fluid d-block d-lg-none mb-3" alt="En la figura 1 se ilustra el esquema de planificación de frecuencias y horarios, herramienta para lograr la precisión y optimizar viajes y entregas. Sus componentes son:· Utilización de la flota y la fuerza laboral. · Minimización de costos. · Satisfacción del cliente. · Sincronización de la cadena de suministro. · Gestión de la congestión.")
        figcaption(data-aos="zoom-in-right") 
          <b>Fuente:</b> SENA, 2025.
      .col-12.col-lg-10.mb-5
        p.mb-0 En la gestión del flujo de bienes se requieren establecer aquellas técnicas de manipulación más favorables de acuerdo con las características del bien, los medios o equipos de manipulación necesarios para mover y trasladar mercancías dentro del almacén y los medios o equipos de almacenamiento, que hace referencia a los estantes, cajas, armarios, suelos, silos, contenedores, etc. que sirven para guardar mercancías requeridas posteriormente. A continuación, se describen las diferentes técnicas para la manipulación de bienes:
      .col-12.col-lg-10.mb-3
        TabsA.mb-0.tarjeta-tabs-a.color-secundario-10
          .tarjeta.color-secundario-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Manual")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-8.order-2.order-lg-1.mb-0
                p.mb-0 La manipulación manual de bienes consiste en desplazar, levantar o trasladar objetos utilizando principalmente la fuerza física de las personas, a menudo con el apoyo de herramientas sencillas como carretillas de mano o transpaletas. Este tipo de manejo es frecuente en operaciones donde el volumen de trabajo es reducido o cuando la mecanización no resulta viable. 
              .col-6.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_1/img_6.svg', class="img-fluid")
          .tarjeta.color-secundario-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Mecanizada")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-8.order-2.order-lg-1.mb-0
                p.mb-0 Se emplean dispositivos motorizados como montacargas, apiladores eléctricos y grúas para simplificar el traslado y la elevación de objetos pesados o de gran tamaño. Estas herramientas disminuyen la carga física sobre los trabajadores y optimizan la productividad en las labores de manipulación de materiales.
              .col-6.col-lg-2.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_1/img_7.svg', class="img-fluid")
          .tarjeta.color-secundario-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Automatizada")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-7.order-2.order-lg-1.mb-0
                p.mb-0 Emplea sistemas automáticos como cintas transportadoras, vehículos de guiado automático (AGV), sistemas de <i>picking</i> robotizado y almacenes automatizados. Esta técnica es ideal para operaciones de alto volumen, mejora la trazabilidad, reduce errores y minimiza riesgos laborales.
              .col-6.col-lg-2.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_1/img_8.svg', class="img-fluid")
    
    .row.justify-content-center.align-items-center
      .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/temas/tema_1/img_9.png', class="img-fluid") 
      .col-12.col-lg-8(data-aos="zoom-in-right")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-8.mb-lg-0.mb-3(data-aos='zoom-in-right')
            p.mb- Las técnicas de manipulación de bienes han pasado de ser métodos tradicionales a sistemas avanzados y tecnológicos. Para elegir la técnica adecuada, es importante tomar en cuenta:    
            ul.list-unstyled.mb-3
              li.d-flex.align-items-start.mb-3.border-bottom.border-dashed.pb-2
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;").mb-0
                span Características intrínsecas de la carga.
              li.d-flex.align-items-start.mb-3.border-bottom.border-dashed.pb-2
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;").mb-0
                span Infraestructura disponible.
              li.d-flex.align-items-start.mb-3.border-bottom.border-dashed.pb-2
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;").mb-0
                span Requerimientos regulatorios.
              li.d-flex.align-items-start.mb-0.border-bottom.border-dashed.pb-2
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;").mb-0
                span Relación costo-beneficio.
          .col-8.col-lg-4.mb-3.mb-lg-0(data-aos='zoom-in-right')
            figure
              img(src='@/assets/curso/temas/tema_1/img_10.png', class="img-fluid")
        p.mb-0 Una manipulación eficiente de bienes marca la diferencia en la cadena de suministro actual, donde la precisión, rapidez y seguridad son claves para lograr un proceso logístico exitoso.

    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.2	Equipos de manipulación
    .mb-3

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-3.mb-lg-0.mb-3(data-aos='zoom-in-right')
        p.mb-0 Una correcta gestión del flujo de bienes requiere evaluar los equipos que se usan para el manejo de materiales y de almacenamiento, procurando tener fácil acceso al material y capacidad de movimiento desde la posición de almacenamiento hasta los muelles de carga.
      .col-12.col-lg-9.mb-lg-0.mb-3(data-aos='zoom-in-right')
        .tarjeta.color-secundario-10.p-4.rounded-4.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/temas/tema_1/img_11.png', class="img-fluid")
            .col-12.col-lg-10(data-aos='zoom-in-right')
               p.mb-3 El uso correcto del equipo permite mejorar la gestión del flujo de bienes, por ejemplo, para artículos con alta rotación se deben usar equipos que permitan recogerlos de manera fácil. 
               p.mb-0 El objetivo de estos equipos es permitir que se minimicen los tiempos en las tareas de manipulación, evitar que los operarios realicen esfuerzos excesivos, reducir costos y contribuir a realizar las actividades de forma más eficiente.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-5
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          h5 Figura 2.
          span Factores clave para la selección de equipos
        figure(data-aos="zoom-in-right")
          img(src='@/assets/curso/temas/tema_1/img_12.svg', class="img-fluid d-none d-lg-block mb-3" alt="En la figura 1 se ilustra el esquema de planificación de frecuencias y horarios, herramienta para lograr la precisión y optimizar viajes y entregas. Sus componentes son:· Utilización de la flota y la fuerza laboral. · Minimización de costos. · Satisfacción del cliente. · Sincronización de la cadena de suministro. · Gestión de la congestión.")
          img(src='@/assets/curso/temas/tema_1/img_13.svg', class="img-fluid d-block d-lg-none mb-3" alt="En la figura 1 se ilustra el esquema de planificación de frecuencias y horarios, herramienta para lograr la precisión y optimizar viajes y entregas. Sus componentes son:· Utilización de la flota y la fuerza laboral. · Minimización de costos. · Satisfacción del cliente. · Sincronización de la cadena de suministro. · Gestión de la congestión.")
        figcaption(data-aos="zoom-in-right") 
          <b>Fuente:</b> SENA, 2025.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/temas/tema_1/img_14.png', class="img-fluid") 
      .col-12.col-lg-8(data-aos="zoom-in-right")
        p.mb-3 Además de los factores mencionados anteriormente, es importante tener en cuenta las siguientes consideraciones económicas:
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-8.mb-lg-3.mb-0
            ul.list-unstyled.mb-0
              li.d-flex.align-items-start.mb-3.border-bottom.border-dashed.pb-2
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;").mb-0
                span Costo inicial vs vida útil.
              li.d-flex.align-items-start.mb-3.border-bottom.border-dashed.pb-2
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;").mb-0
                span Consumo energético.
              li.d-flex.align-items-start.mb-0.border-bottom.border-dashed.pb-2
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;").mb-0
                span Requerimientos de mantenimiento.
          .col-8.col-lg-4.mb-3.mb-lg-0
        p.mb-0 A continuación, encontraremos los diferentes equipos que se utilizan para la manipulación de la carga:
    
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12.col-xl-8.order-2.order-lg-2.order-xl-1.mb-0
        .custom-slider.p-2.p-sm-3(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6")
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--1
                .tarjeta--slider__title.mb-3.text-center.fw-bold Manuales
                .tarjeta--slider__content.text-center Transpaletas manuales, carretillas, gatos para palés. Ideales para cargas ligeras y cortas distancias.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--2
                .tarjeta--slider__title.mb-3.text-center.fw-bold Motorizados
                .tarjeta--slider__content.text-center Montacargas contrabalanceados, retráctiles, trilaterales, apiladores eléctricos. Permiten manejar cargas pesadas o voluminosas y optimizar el espacio.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--3
                .tarjeta--slider__title.mb-3.text-center.fw-bold Equipos de elevación
                .tarjeta--slider__content.text-center Grúas puente, polipastos, elevadores de tijera. Utilizados para elevar o mover cargas en vertical.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--4
                .tarjeta--slider__title.mb-3.text-center.fw-bold Equipos de almacenamiento
                .tarjeta--slider__content.text-center Estanterías selectivas y dinámicas, racks móviles, contenedores apilables. Facilitan la organización y acceso rápido a la mercancía.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--5
                .tarjeta--slider__title.mb-3.text-center.fw-bold Equipos para manipulación a granel
                .tarjeta--slider__content.text-center Tolvas, cintas transportadoras, apiladoras, recuperadoras. Especializados en el manejo de materiales a granel como alimentos, minerales o líquidos.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--6
                .tarjeta--slider__title.mb-3.text-center.fw-bold Sistemas automatizados.
                .tarjeta--slider__content.text-center Cintas transportadoras, AGV, sistemas de <i>picking</i> robotizado, almacenes automáticos. Mejoran la eficiencia y reducen la intervención humana.
      .col-8.col-lg-6.col-xl-4.order-1.order-lg-1.order-xl-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema_1/img_21.png', class="img-fluid")

    separador

    #t_1_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.3	Normativa
    .mb-3

    .bloque-texto-t.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_1/img_22.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 La normativa son las leyes, decretos, resoluciones y normas técnicas que regulan cómo deben manipularse, transportarse y almacenarse los bienes dentro de la cadena logística, teniendo como propósito garantizar la seguridad de los trabajadores, proteger la integridad de los bienes, prevenir afectaciones al medio ambiente y asegurar la eficiencia y legalidad de las operaciones logísticas.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-3.mb-5(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/temas/tema_1/img_23.png', class="img-fluid") 
      .col-12.col-lg-8.mb-5(data-aos="zoom-in-right")
        p.mb-3 La normativa aplicable en la manipulación de bienes dentro de la cadena logística se desarrolla en diferentes ámbitos que permiten garantizar el correcto manejo de las operaciones y la protección de los recursos involucrados. Estos ámbitos establecen lineamientos claros para la ejecución de actividades relacionadas con el movimiento, el almacenamiento, la protección y la seguridad, asegurando que cada etapa del flujo de bienes se realice de manera eficiente y segura, en los siguientes aspectos:
        .tarjeta.tarjeta--fondo__slider.p-4.mb-0
          SlyderA(tipo="a").tarjeta.tarjeta--blanca.p-5
            .row.justify-content-center.align-items-center
              .col-10.col-lg-7.order-2.order-lg-1.mb-0
                h5 Movimiento
                p.mb-0 Operaciones de carga, descarga y transporte interno en el almacén.
              .col-8.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_1/img_25.svg')
            .row.justify-content-center.align-items-center
              .col-10.col-lg-7.order-2.order-lg-1.mb-0
                h5 Almacenamiento
                p.mb-0 Condiciones de ubicación, ventilación, temperatura, humedad y uso de estibas.
              .col-8.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_1/img_26.svg')
            .row.justify-content-center.align-items-center
              .col-10.col-lg-7.order-2.order-lg-1.mb-0
                h5 Protección
                p.mb-0 Embalaje, fijación y sujeción de mercancías.
              .col-8.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_1/img_27.svg')
            .row.justify-content-center.align-items-center
              .col-10.col-lg-7.order-2.order-lg-1.mb-0
                h5 Seguridad
                p.mb-0 Incluye la seguridad laboral y la protección de los bienes y del entorno.
              .col-8.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_1/img_28.svg')
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cajon.color-acento-contenido-10.p-4.mb-0(data-aos="fade-left")
          p.mb-0 En Colombia, la manipulación, transporte y almacenamiento de bienes está regulada por un conjunto de normas legales y técnicas que establecen requisitos obligatorios para garantizar la seguridad laboral, la protección de las mercancías y el cumplimiento de estándares en las operaciones logísticas.

    .row.justify-content-center.align-items-stretch
      .col-12.col-sm-6.col-lg-4.mb-lg-0.mb-4.d-flex(data-aos="zoom-in-right")
        .tarjeta.color-secundario-5.p-5.h-100.w-100.d-flex.flex-column
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema_1/img_29.svg', class="img-fluid")
          h5.mb-3.text-center Seguridad  laboral y manipulación de cargas
          p.mb-3.text-center <B>Decreto 1072 de 2015:</B> establece el Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST), exige capacitación al personal, uso de equipos adecuados y medidas de prevención de riesgos.
          p.mb-0.text-center <B>Resolución 1409 de 2012:</B> regula la manipulación manual de cargas, define límites de peso, promueve técnicas ergonómicas y obliga a identificar riesgos en tareas repetitivas o con sobreesfuerzo.
      .col-12.col-sm-6.col-lg-4.mb-lg-0.mb-4.d-flex(data-aos="zoom-in-right")
        .tarjeta.color-acento-contenido-5.p-5.h-100.w-100.d-flex.flex-column
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema_1/img_30.svg', class="img-fluid")
          h5.mb-3.text-center Transporte de bienes
          p.mb-3.text-center <B>Ley 769 de 2002 (Código Nacional de Tránsito):</B> regula el transporte terrestre de mercancías, establece límites de peso y dimensiones, y obliga al uso de sistemas de fijación homologados.
          p.mb-0.text-center <B>Decreto 1609 de 2002:</B> regula el transporte y manejo de mercancías peligrosas como químicos, inflamables y explosivos, definiendo requisitos de embalaje, etiquetado, rotulación y planes de emergencia.
      .col-12.col-sm-6.col-lg-4.mb-lg-0.mb-4.d-flex(data-aos="zoom-in-right")
        .tarjeta.color-adicional-3.p-4.h-100.w-100.d-flex.flex-column
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema_1/img_31.svg', class="img-fluid")
          h5.mb-3.text-center Normas técnicas (ICONTEC)
          p.mb-3.text-center <B>NTC 5611:</B> establece los requisitos para el almacenamiento de productos sólidos a granel.
          p.mb-3.text-center <B>NTC 1694:</B> define criterios de seguridad para el uso de equipos de izaje como grúas y montacargas.
          p.mb-0.text-center <B>NTC 5378:</B> regula los requisitos para el uso de estibas y la sujeción de carga durante el transporte.
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
