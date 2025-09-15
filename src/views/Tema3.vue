<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Programación de almacén

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_3/img_1.png')
      .bloque-texto-t__texto.col-10.mb-0.custom-t
        p.mb-3 La programación de almacén es un proceso esencial para optimizar la eficiencia en la gestión logística, integrando herramientas tecnológicas y metodologías que permiten controlar operaciones como el almacenamiento, la preparación de pedidos y la trazabilidad de los bienes.
        p.mb-0 La programación de almacén implica la planificación y organización de las operaciones dentro de un almacén, desde la recepción de bienes hasta la expedición. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10

        separador

        #t_3_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 3.1	Concepto
        .mb-3


      .col-12.col-lg-10.mb-0(data-aos='zoom-in-right')
        .tarjeta.color-terciario-5.p-4.rounded-4.mb-3
          .row.justify-content-center.align-items-center
            .col-12.col-lg-10(data-aos='zoom-in-right')
               p.mb-0 La programación de almacén es un proceso logístico que consiste en planificar, organizar y controlar las actividades relacionadas con el flujo de bienes dentro de un almacén. Su objetivo principal es optimizar el uso de los recursos (espacio, mano de obra y equipos) para garantizar una operación eficiente, reduciendo costos y tiempos de entrega.
            .col-lg-2.d-lg-block.d-none
              figure
                img(src='@/assets/curso/temas/tema_3/img_2.png', class="img-fluid")
    
    .row.justify-content-center.align-items-center
      .col-8.col-lg-3.mb-5(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/temas/tema_3/img_3.png', class="img-fluid") 
      .col-12.col-lg-7.mb-5(data-aos="zoom-in-right")
        .tarjeta.tarjeta--fondo__slider.p-4.mb-3
          SlyderA(tipo="a").tarjeta.tarjeta--blanca.p-5
            .row.justify-content-center.align-items-center
              .col-10.col-lg-7.order-2.order-lg-1.mb-0
                h5 Maximizar la eficiencia operativa.
                p.mb-0 Minimizar tiempos muertos y movimientos innecesarios.
              .col-8.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_3/img_5.png')
            .row.justify-content-center.align-items-center
              .col-10.col-lg-7.order-2.order-lg-1.mb-0
                h5 Reducir costos.
                p.mb-0 Optimizar el uso de espacio y recursos humanos.
              .col-8.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_3/img_6.png')
            .row.justify-content-center.align-items-center
              .col-10.col-lg-7.order-2.order-lg-1.mb-0
                h5 Mejorar la precisión en inventarios.
                p.mb-0 Evitar errores en <i>picking</i> y almacenamiento.
              .col-8.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_3/img_7.png')
            .row.justify-content-center.align-items-center
              .col-10.col-lg-7.order-2.order-lg-1.mb-0
                h5 Garantizar la disponibilidad de productos.
                p.mb-0 Asegurar que los artículos estén accesibles cuando se necesiten.
              .col-8.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_3/img_8.png')
        p.mb-0 Antes de iniciar con la programación del almacén, es necesario tener en cuenta factores clave como el volumen de mercancías, el tipo de bienes a manejar, el <i>layout</i> o distribución de las zonas del almacén y la tecnología disponible, incluyendo sistemas de gestión WMS y procesos de automatización, ya que estos elementos determinan la eficiencia y organización de las operaciones logísticas.

    separador

    #t_3_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.2	Tipos de programación
    .mb-3

    .tarjeta.color-secundario-5.rounded-0.p-0.mb-5
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-5.mb-lg-0.mb-3.p-0
          figure.p-0
            img(src="@/assets/curso/temas/tema_3/img_9.png", class="img-fluid").p-0
        .col-12.col-lg-7.p-5
          p.mb-3 Conocer los tipos de programación o <i>software</i> de gestión de almacén es fundamental para optimizar la operación logística y la administración del inventario en cualquier empresa que maneje almacenes.
          p.mb-0 Dependiendo de las necesidades del almacén, se pueden aplicar diferentes tipos de programación y sistemas que optimicen el proceso.

    .row.justify-content-center.align-items-center
      .col-12.col-lg-10.mb-5
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          h5 Figura 3.
          span Tipos de programación de almacén
        figure(data-aos="zoom-in-right")
          img(src='@/assets/curso/temas/tema_3/img_10.svg', class="img-fluid d-none d-lg-block mb-3", alt="La figura presenta los principales tipos de programación de almacén: por órdenes de pedido, por rutas de picking, por oleadas, en tiempo real y por turnos, cada uno con criterios y aplicaciones específicas según el tipo de operación.")
          img(src='@/assets/curso/temas/tema_3/img_11.svg', class="img-fluid d-block d-lg-none mb-3", alt="La figura presenta los principales tipos de programación de almacén: por órdenes de pedido, por rutas de picking, por oleadas, en tiempo real y por turnos, cada uno con criterios y aplicaciones específicas según el tipo de operación.")
          figcaption(data-aos="zoom-in-right") <b>Fuente:</b> SENA, 2025.
      .col-12.col-lg-10.mb-0

        separador

        #t_3_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 3.3	Técnicas de cuantificación de recorridos
        .mb-3

    .row.justify-content-center.align-items-center.mb-5
      .col-4.col-lg-1.mb-lg-0.mb-3
        figure.p-0
          img(src="@/assets/curso/temas/tema_3/img_12.png", class="img-fluid")
      .col-12.col-lg-9.mb-0
        p.mb-0 Las técnicas de cuantificación de recorridos en almacén son métodos y herramientas que permiten medir y optimizar las distancias y tiempos que recorren los operarios durante actividades como el picking, la recepción o la expedición de mercancías. Estas técnicas buscan reducir costos y mejorar la productividad logística.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Técnicas de cuantificación de recorridos en almacén
    .tabla-a.mb-5
      table
        caption 
          p <b>Fuente:</b>  SENA, 2025.
        thead
          tr
            th Técnicas
            th Descripción
            th Ejemplo
        tbody
          tr
            td(rowspan="3") <B>Diagramas de recorrido.</B>
            td.text-start <B>Mapas de calor:</B> visualización gráfica de las zonas más transitadas.
            td.text-start(rowspan="3") 
              p.mb-2 <B>Situación:</B> el operario recoge 5 ítems en un almacén de 10x10 m.
              p.mb-2 <B>Cálculo:</B> 
              p.mb-2 <B>Ubicaciones:</B> A1(2,2), B1(8,2), C2(5,5), D3(2,8), E3(8,8)
              p.mb-2 <B>Ruta actual:</B> A1 → B1 → C2 → D3 → E3 (serpenteo)
              p.mb-2 Distancia calculada con teorema de Pitágoras entre 
              p.mb-2 <B>A1-B1:</B> √[(8-2)² + (2-2)²] = 6 m
              p.mb-2 <B>B1-C2:</B> √[(5-8)² + (5-2)²] = 4.24 m
              p.mb-2 <B>C2-D3:</B> √[(2-5)² + (8-5)²] = 4.24 m
              p.mb-2 <B>D3-E3:</B> √[(8-2)² + (8-8)²] = 6 m
              p.mb-0 <B>Total:</B> 6 + 4.24 + 4.24 + 6 = 20.48 m
          tr
            td.text-start.bg-table-01 <B>Diagramas espagueti:</B> líneas que representan los trayectos de personas o equipos.
          tr
            td.text-start <B>Grillas de frecuencia:</B> división del almacén en zonas con conteo de pasos.
          tr
            td(rowspan="2") <B>Métodos de medición</B> 
            td.text-start <B>Cronometraje directo:</B> medición con cronómetro de tiempos de recorrido.
            td.text-start(rowspan="2") 
              p.mb-2 Para un <i>picking</i> de 20 ítems, se cronometra que el operario tarda:
              p.mb-2 3 min en llegar a la primera ubicación.
              p.mb-2 8 min en recolectar todos los ítems.
              p.mb-2 2 min en regresar a la zona de despacho.
              p.mb-0 <B>Total:</B> 13 minutos / orden.
          tr
            td.text-start <B>Sistemas de <i>tracking</i>:</B> uso de RFID, sensores IoT, sistemas de posicionamiento en interiores, wearables para operarios.
          tr
            td(rowspan="4") <B>Métricas clave</B> 
            td.text-start <B>Distancia total recorrida:</B> metros / kilómetros por jornada.
            td.text-start(rowspan="4")
              p.mb-2 Un operario con wearable registra en su turno de 8 horas:
              p.mb-2 12.7 km recorridos.
              p.mb-2 142 viajes entre pasillos.
              p.mb-0 8 minutos promedio por tarea de picking.
          tr
            td.text-start.bg-table-01 <B>Tiempo de recorrido:</B> por operación o tarea.
          tr
            td.text-start <B>Frecuencia de pasos:</B> por zona o pasillo.
          tr
            td.text-start.bg-table-01 <B>Puntos de congestión:</B> áreas con mayor densidad de tráfico.
          tr
            td(rowspan="3") <B>Técnicas analíticas</B> 
            td.text-start <B>Estudios MTM (Métodos de medición del tiempo):</B> para movimientos básicos.
            td.text-start(rowspan="3") 
              p.mb-2 En un almacén con 10 pasillos paralelos, el sistema WMS genera esta ruta:
              p.mb-2 Recepción → Pasillo 1 (ida) → Pasillo 2 (vuelta) → Pasillo 3 (ida) → [...] → Pasillo 10 → Zona de despacho.
              p.mb-0 Ahorro estimado: 28% vs rutas aleatorias.
          tr
            td.text-start <B>Algoritmos de ruteo:</B> método del serpenteo, ruteo por zonas, ruteo por jerarquía de pedidos.
          tr
            td.text-start <B>Simulación por computadora:</B> modelado digital de flujos.
          tr
            td(rowspan="2") <B>Herramientas tecnológicas</B> 
            td.text-start <B>Sistemas WMS:</B> con módulos de análisis de movimientos.
            td.text-start(rowspan="2") 
              p.mb-2 Carretillas equipadas con tags RFID que al pasar por lectores en cada intersección registran:
              p.mb-2 09:15 - Zona A → Pasillo 3. 
              p.mb-2 09:18 - Pasillo 3 → Zona B.  
              p.mb-0 09:22 - Zona B → Pasillo 7 (Tiempo muerto: 1.5 min).
          tr
            td.text-start.bg-table-01 <B><i>Software</i> de simulación:</B> FlexSim, AnyLogic.

    .row.justify-content-center.align-items-center
      .col-12.col-lg-10.mb-5(data-aos="zoom-in-right")
        .cajon.color-acento-botones.p-4.mb-0
          .row.justify-content-center.align-items-center
            .col-12.col-lg-10
              p.mb-0 Adicionalmente, cabe destacar la existencia de parámetros para evaluar la eficiencia de recorridos en almacenes. Estas categorías permiten diagnosticar el desempeño actual y establecer metas de mejora.
            .col-6.col-lg-1.d-lg-block.d-none
              figure
                img(src='@/assets/curso/temas/tema_3/img_13.png', class="img-fluid")
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Niveles de eficiencia de recorridos en almacén
        .tabla-a.mb-5
          table
            caption 
              p <b>Fuente:</b>  SENA, 2025.
            thead
              tr
                th Nivel
                th Eficiencia
                th Metros/Pedido
                th % Tiempo productivo
            tbody
              tr
                td A+
                td Excelente
                td <15 m
                td >85 %
              tr
                td A
                td Muy bueno
                td 15-20 m
                td 75-85 %
              tr
                td B
                td Bueno
                td 20-30 m
                td 65-75 %
              tr
                td C
                td Regular
                td 30-40 m
                td 50-65 %
              tr
                td D
                td Deficiente
                td >40 m
                td <50 %

    separador

    #t_3_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.4	Órdenes 
    .mb-3

    .bloque-texto-g.color-secundario-10.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_3/img_14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Conocer los tipos de órdenes en un almacén es fundamental para garantizar una gestión logística eficiente y precisa, ya que cada tipo de orden responde a una función específica dentro del flujo operativo y contribuye a la optimización de recursos y tiempos. Esta comprensión permite organizar las tareas de manera estructurada, evitar errores y mejorar la trazabilidad de los productos.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1.mb-0
        .custom-slider.p-5.p-sm-3(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6")
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--12
                .tarjeta--slider__title.mb-3.text-center.fw-bold Órdenes de recepción
                .tarjeta--slider__content.text-center Recibir y verificar mercancías entrantes, con control de calidad y registro de documentos.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--13
                .tarjeta--slider__title.mb-3.text-center.fw-bold Órdenes de almacenamiento
                .tarjeta--slider__content.text-center Indican dónde y cómo guardar productos, ya sea por decisión manual o asignación automática del WMS.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--14
                .tarjeta--slider__title.mb-3.text-center.fw-bold Órdenes de picking
                .tarjeta--slider__content.text-center Preparar pedidos indicando qué productos recoger, cantidades y método (por pedido, lote o zona).
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--15
                .tarjeta--slider__title.mb-3.text-center.fw-bold Órdenes de reabastecimiento
                .tarjeta--slider__content.text-center Trasladar <i>stock</i> desde la reserva hacia áreas de <i>picking</i> cuando hay escasez.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--16
                .tarjeta--slider__title.mb-3.text-center.fw-bold Órdenes de inventario
                .tarjeta--slider__content.text-center Contar y auditar productos en inventarios cíclicos o físicos, registrando discrepancias.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--17
                .tarjeta--slider__title.mb-3.text-center.fw-bold Órdenes de <i>cross-docking</i>
                .tarjeta--slider__content.text-center Mover productos directamente de recepción a despacho sin pasar por almacenamiento.
      .col-8.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema_3/img_21.png', class="img-fluid")

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0
        img(src='@/assets/curso/temas/tema_3/img_22.svg', class="img-fluid d-none d-lg-block mb-3")
        img(src='@/assets/curso/temas/tema_3/img_23.svg', class="img-fluid d-block d-lg-none mb-3")

</template>

<script>
export default {
  name: 'Tema3',
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
