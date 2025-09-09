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
          figcaption(data-aos="zoom-in-right") <b>Fuente:</b> SENA, 2025.
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
                p.mb-0 Emplea sistemas automáticos como cintas transportadoras, vehículos de guiado automático (AGV), sistemas de picking robotizado y almacenes automatizados. Esta técnica es ideal para operaciones de alto volumen, mejora la trazabilidad, reduce errores y minimiza riesgos laborales.
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
          figcaption(data-aos="zoom-in-right") <b>Fuente:</b> SENA, 2025.
    
    .row.justify-content-center.align-items-center
      .col-12.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
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

    separador

    #t_1_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.3	Normativa
    .mb-3

    .bloque-texto-t.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_1/img_21.png')
      .bloque-texto-t__texto.color-adicional-gradient.col-10.mb-0
        p.mb-0 La normativa son las leyes, decretos, resoluciones y normas técnicas que regulan cómo deben manipularse, transportarse y almacenarse los bienes dentro de la cadena logística, teniendo como propósito garantizar la seguridad de los trabajadores, proteger la integridad de los bienes, prevenir afectaciones al medio ambiente y asegurar la eficiencia y legalidad de las operaciones logísticas.

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
