export default {
  global: {
    componenteFormativo:
      'Las Tecnologías de la Información y la Comunicación (TIC)',
    descripcionCurso:
      'El componente formativo aborda la importancia de las TIC en la comunicación organizacional, destacando el papel de internet y la cultura organizacional en el acceso y uso de tecnologías. Se explican conceptos clave como redes, protocolos TCP/IP, y direcciones electrónicas. Además, se detallan herramientas y funciones de las TIC en la automatización, gestión y comunicación, impulsando la competitividad empresarial.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Internet',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Cultura organizacional e internet',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Recursos tecnológicos',
        desarrolloContenidos: true,
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
        download: 'downloads/41310026_CF2_DU.pdf',
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
      tema: 'Internet ',
      referencia:
        'El Espectador (2019). Internet de las cosas: ¿Innovación en las empresas? | El Espectador. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TxZPEBGvP0w  ',
    },
    {
      tema: 'Cultura organizacional e internet ',
      referencia:
        'CNN en Español. (2020). El secreto del éxito de Netflix, ¿su cultura corporativa? Su copresidente ejecutivo nos responde. [Archivo de video] Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=M_Z2gLUWZJE  ',
    },
    {
      tema: 'Cultura organizacional e internet ',
      referencia:
        'Magro, C., Salvatella, J., Álvarez, M., Herrero, O., Paredes, A., & Vélez, G. (2014, febrero). 8 <em>competencias digitales</em> [Libro electrónico]. RocaSalvatella. ',
      tipo: 'Libro',
      link:
        'https://www.rocasalvatella.com/app/uploads/2018/11/maqueta_competencias_espanol.pdf',
    },
    {
      tema: 'Recursos tecnológicos ',
      referencia:
        'Mantulak, M. J., Hernández Pérez, G. D., & Abreu Ledón, R. (2017). Los recursos tecnológicos y su transversalidad con aspectos laborales y ambientales: Un análisis de correspondencias. Universidad Central “Marta Abreu” de Las Villas. ',
      tipo: 'Artículo',
      link:
        'https://www.researchgate.net/publication/337228086_LOS_RECURSOS_TECNOLOGICOS_Y_SU_TRANSVERSALIDAD_CON_ASPECTOS_LABORALES_Y_AMBIENTALES_UN_ANALISIS_DE_CORRESPONDENCIAS',
    },
    {
      tema: 'Recursos tecnológicos ',
      referencia:
        'Unidad de Desarrollo Productivo. (2015). ¿Cómo beneficia la tecnología a mi negocio?. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=u25nYLn3toE  ',
    },
  ],
  glosario: [
    {
      termino: 'Canal',
      significado:
        'medio a través del cual se transmite el mensaje, estableciendo la conexión entre el emisor y el receptor. Ejemplos: el aire, en el caso de la voz; el hilo telefónico, en el caso de una conversación telefónica. ',
    },
    {
      termino: 'Clima organizacional',
      significado:
        'conjunto de elementos propios del lugar de trabajo que influyen en la motivación y productividad de una persona. Incluye aspectos como el ambiente físico, el ambiente social y la estructura organizacional que rodean a un trabajador. ',
    },
    {
      termino: 'Código',
      significado:
        'conjunto de reglas de cada sistema de signos y símbolos que el emisor utiliza para transmitir su mensaje, combinándolos de manera adecuada para que el receptor pueda comprenderlo. Ejemplo: la gramática de un idioma. ',
    },
    {
      termino: 'Comunicación asertiva',
      significado:
        'forma de comunicación que ocurre en relaciones interpersonales donde los interlocutores pueden entablar diálogos en los que expresan libre, clara y precisamente sus pensamientos, ideas y sentimientos. ',
    },
    {
      termino: 'Comunicación externa',
      significado:
        'se refiere a las dinámicas y políticas comunicativas que una organización adopta respecto a agentes externos. Incluye comunicados oficiales, publicidad, marketing, entre otros. ',
    },
    {
      termino: 'Comunicación interna',
      significado:
        'dinámica comunicativa que se da entre los miembros internos de la organización. Es crucial para fomentar el compañerismo, la creatividad y la motivación en la organización. ',
    },
    {
      termino: 'Comunicación no verbal',
      significado:
        'forma de comunicación que no utiliza signos gráficos o palabras para exteriorizar pensamientos y sentimientos. Incluye signos visuales, auditivos, olfativos, sonidos, gestos, movimientos corporales, posturas, miradas, entre otros. ',
    },
    {
      termino: 'Comunicación organizacional',
      significado:
        'proceso dinámico que se materializa dentro de una colectividad social u organización. Implica la formulación, intercambio, procesamiento y almacenamiento de información entre los miembros de la organización. ',
    },
    {
      termino: 'Comunicación técnica',
      significado:
        'proceso de transmisión de información a través de diferentes medios. ',
    },
    {
      termino: 'Comunicación verbal',
      significado:
        'forma en que el ser humano exterioriza sus pensamientos y sentimientos mediante palabras, ya sea de manera oral o escrita. Se da principalmente en forma de diálogo. ',
    },
    {
      termino: 'Contexto',
      significado: 'tiempo y lugar en que se realiza el acto comunicativo.',
    },
    {
      termino: 'Emisor',
      significado:
        'persona encargada de suministrar el mensaje o información. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Alonso Cuesta, F. (2010). <em>Marketing Directo 2.0</em>, España (1ª ed.), Grupo Planeta. ISBN: 978-849875-0539.',
      link: '',
    },
    {
      referencia:
        'Gutiérrez, F. (2008). <em>Internet como herramienta para la investigación</em>, México (1ª ed.), Alfaomega Grupo Editor. ISBN: 978-970-151389-7.  ',
      link: '',
    },
    {
      referencia:
        'Guzmán, R. (2007). <em>Comunicación Empresarial</em>, Bogotá (1ª ed.), Ecoe Ediciones Ltda. ISBN: 958-648-459-9.',
      link: '',
    },
    {
      referencia:
        'Pablos, C. (2004). <em>Sonia Informática y comunicaciones en la empresa</em>. ',
      link: '',
    },
    {
      referencia:
        'Suárez, R. (2010). <em>Tecnologías de la Información y la Comunicación. Introducción a los sistemas de información y de telecomunicación</em>. Ideas Propias Editorial. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
