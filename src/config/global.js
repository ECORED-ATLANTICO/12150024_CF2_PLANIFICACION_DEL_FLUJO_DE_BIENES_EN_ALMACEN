export default {
  global: {
    Name: 'Gestión operativa del flujo de bienes',
    Description:
      'El componente formativo desarrolla competencias en manipulación, almacenamiento y distribución de mercancías, abarcando equipos especializados, organización de almacenes, así como técnicas de programación y cuantificación de recorridos, y planificación. Su objetivo es optimizar procesos logísticos, garantizando eficiencia, seguridad y reducción de costos en la cadena de suministro.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Manipulación de bienes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Equipos de manipulación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Normativa',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Organización de almacén',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de organización',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Buenas prácticas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Programación de almacén',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de programación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Técnicas de cuantificación de recorridos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Órdenes',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Planificación de almacén',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Técnicas de planificación',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Tipos de planes',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Herramientas tecnológicas',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Documentos',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Manipulación de bienes',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <i>Preparación de carga para distribución.</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6phzzMEfztk',
    },
    {
      tema: 'Organización del almacén',
      referencia:
        'Soluciones Logísticas y Aduaneras. (2020). <i>Principales zonas de un almacén.</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sC_SAxJcexY&t=1s',
    },
    {
      tema: 'Buenas prácticas',
      referencia:
        'Javier Peña. (2023). <i>8 consejos prácticos para Mejorar la operación del Almacén.</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uQvCZG3n6-o',
    },
    {
      tema: 'Planificación de almacén',
      referencia:
        'Brain Logistic. (2022). <i>¿Qué es un Warehouse Management System?</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3HZ622AAcNw',
    },
  ],
  glosario: [
    {
      termino: 'Almacenamiento compacto',
      significado:
        'técnica que maximiza el espacio en almacenes, como sistemas <i>Drive-in</i> o <i>Push-back</i>, ideal para productos de baja rotación.',
    },
    {
      termino: 'Almacenamiento vertical',
      significado:
        'uso de estanterías altas para aprovechar el espacio vertical del almacén.',
    },
    {
      termino: 'ERP (<i>Enterprise Resource Planning</i>)',
      significado:
        'sistema integrado para gestionar procesos empresariales, como inventarios y finanzas.',
    },
    {
      termino: 'FEFO (<i>First Expired, First Out</i>)',
      significado:
        'método de inventario donde los productos con fecha de caducidad más próxima se despachan primero.',
    },
    {
      termino: 'FIFO (<i>First In, First Out</i>)',
      significado:
        'sistema de inventario donde los primeros productos en entrar son los primeros en salir.',
    },
    {
      termino: 'Justo a tiempo (JIT)',
      significado:
        'estrategia que recibe productos solo cuando son necesarios, reduciendo inventarios.',
    },
    {
      termino: '<i>Layout</i>',
      significado:
        'diseño físico de la distribución de espacios en un almacén.',
    },
    {
      termino: 'LIFO (<i>Last In, First Out</i>)',
      significado:
        'método donde los últimos productos en entrar son los primeros en salir, usado en ciertos inventarios.',
    },
    {
      termino: 'MTM (Métodos de Medición del Tiempo)',
      significado:
        'técnicas para analizar movimientos laborales y optimizar tiempos.',
    },
    {
      termino: 'NTC (Norma Técnica Colombiana)',
      significado:
        'estándares técnicos aplicables en Colombia, como NTC 5611 para almacenamiento.',
    },
    {
      termino: '<i>Put-away<i>',
      significado:
        'proceso de almacenamiento de mercancías recibidas en ubicaciones designadas.',
    },
    {
      termino: 'SKU (<i>Stock Keeping Unit</i>)',
      significado: 'código único que identifica cada producto en inventario.',
    },
    {
      termino: '<i>Stock</i>',
      significado: 'inventario de mercancías disponibles en el almacén.',
    },
    {
      termino: '<i>Tracking</i>',
      significado: 'monitoreo en tiempo real de mercancías o equipos.',
    },
    {
      termino: '<i>Wearables</i>',
      significado:
        'dispositivos portátiles para registrar movimientos de operarios.',
    },
  ],
  referencias: [
    {
      referencia:
        'Algevasa Logistics. (2025). <i>La planificación en el almacén logístico.</i>',
      link:
        'https://www.algevasa.com/la-planificacion-en-el-almacen-logistico/ ',
    },
    {
      referencia:
        'AR Racking. (2024). <i>Cómo organizar un almacén de forma eficiente.</i>',
      link:
        'https://www.ar-racking.com/co/blog/consejos-para-organizar-un-almacen-de-forma-eficiente/',
    },
    {
      referencia:
        'Aula Centro de Formación. (2022). <i>Gestión de Almacén y Logística.</i>',
      link:
        'https://dl.dropboxusercontent.com/scl/fi/ucro9rrtkrv682y7s1qt6/Curso-Gesti-n-de-Almanc-n-y-Log-stica-Aula-Centro-Formaci-n.pdf?rlkey=azxypu2r27s5m21odlj9ymwys&dl=0',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos ',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yezid Arturo Choperena Guerrero',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Heydy Cristina González García',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñador <i>web</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
