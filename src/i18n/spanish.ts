import { calculateYears } from '@/utils'

export const spanish = {
  common: {
    proficientIn: 'Competente en:',
  },
  navbar: {
    home: 'Inicio',
    skills: 'Habilidades',
    projects: 'Proyectos',
    learning: 'Aprendizaje',
    contact: 'Contacto',
  },
  presentation: {
    title: 'Hola, soy',
    fullname: 'Donato Monzón',
    subtitle: 'Soy Desarrollador Frontend'
  },
  aboutMe: {
    parragraphs: {
      first: `Tengo ${calculateYears(new Date('1997/06/08'))} años y soy un apasionado de la programación y la tecnología en general.`,
      second: 'Me gusta aprender cosas nuevas y siempre estoy buscando nuevos desafíos.',
      third: {
        first: 'Mi mayor sueño es ',
        span: 'impactar de manera significativa y positiva ',
        third: 'en el mundo de la tecnología y la programación.'
      }
    },
  },
  hardSkills: {
    title: 'Habilidades Técnicas',
    webTecnologies: {
      title: 'Tecnologías Web',
      description: 'Mis habilidades consisten en dominios avanzados de las tecnologías web como lo son:',
      icons: [
        { iconURL: '/icons/html.svg', title: 'HTML' },
        { iconURL: '/icons/css.svg', title: 'CSS' },
        { iconURL: '/icons/javascript.svg', title: 'JavaScript' },
      ],
      details: [
        'Maquetación y diseño de sitios web',
        'Buenas prácticas siguiendo la métodologia de Responsive Web Design',
        'Manipulación del DOM y dominio de peticiones asíncronas con JS',
      ]
    },
    reactEcosystem: {
      title: 'Ecocistema de React',
      description: 'Estoy especializado en la creación de interfaces de usuarios utilizando la librería de React y el ecosistema construído alrededor.',
      icons: [
        { iconURL: '/icons/react.svg', title: 'React' },
        { iconURL: '/icons/redux.svg', title: 'Redux' },
        { iconURL: '/icons/nextjs.svg', title: 'NextJS' },
      ],
      details: [
        'Creación de aplicaciones web con React',
        'Manejo de estados con Redux',
        'Desarrollo de aplicaciones web con NextJS',
      ]
    },
    typescript: {
      title: 'TypeScript',
      description: 'Utilizo TypeScript en todos mis desarrollos debido a que proporciona una mejor experiencia de desarrollo, seguridad de tipos, mantenibilidad y escabilidad.',
      details: [
        'Manejo eficiente en el sistema de tipos',
        'Buenas prácticas de desarrollo usando TypeScript',
        'Código limpio, mantenible y escalable',
      ]
    },
    serverApplications: {
      title: 'Aplicaciones del Servidor',
      description: 'Tengo conocimientos en la creación de servicios REST y GraphQL Server, utilizando NodeJS como Runtime para ejecutar mis aplicaciones de JavaScript.',
      icons: [
        { iconURL: '/icons/nodejs.svg', title: 'Express' },
        { iconURL: '/icons/nextjs.svg', title: 'NextJs' },
        { iconURL: '/icons/graphql.svg', title: 'GraphQL' },
      ],
      details: [
        'Manejo y creación de servicios REST',
        'Manejo y creación de servidores GraphQL usando Apollo Server',
        'Creación de aplicaciones web rápidas y optimizadas usando NextJS',
      ]
    },
    docker: {
      title: 'Docker',
      description: 'Utilizo docker a nivel básico - intermedio para tener separado mis entornos de desarrollo. Sigo estudiándolo para comenzar a utilizar la arquitectura de microservicios.',
      icons: [
        { iconURL: '/icons/docker.svg', title: 'Docker' },
      ],
      details: [
        'Manejo de contenedores y servicios',
        'Creación de imágenes y volúmenes',
        'Configuración de redes y volúmenes',
        'Manejo de distintos ambientes (production, development, testing)'
      ]
    },
    shopify: {
      title: 'Shopify',
      description: 'Tengo experiencia profesional desarrollando soluciones de comercio electrónico para clientes que utilizan la plataforma de Shopify para su modelo de negocio.',
      details: [
        'Creación y personalización de temas',
        'Creación de sitios altamente personalizables y accesibles',
        'Creación de aplicaciones de Shopify privadas' 
      ]
    },
    otherTools: {
      title: 'Otras Herramientas',
      description: 'Como desarrollador web estas son algunas de las herramientas que utilizo cotidianamente para el desarrollo de mis aplicaciones.',
      items: [
        {
          title: 'Git',
          iconURL: '/icons/git.svg',
        },
        {
          title: 'GitHub',
          iconURL: '/icons/github.svg',
        },
        {
          title: 'VSCode',
          iconURL: '/icons/vscode.svg',
        },
        {
          title: 'Figma',
          iconURL: '/icons/figma.svg',
        },
        {
          title: 'Eslint',
          iconURL: '/icons/eslint.svg',
        },
        {
          title: 'VSCode',
          iconURL: '/icons/vscode.svg',
        },
      ]
    }
  },
  softSkills: {
    title: 'Habilidades Blandas',
    items: [
      {
        title: 'Resolución de problemas',
        description: 'Capaz de buscar y encontrar soluciones que se adapten a los problemas que se me presentan.',
        icon: '/icons/ideas.svg',
      },
      {
        title: 'Trabajo en equipo',
        description: 'Colaborativo y empático. Las opiniones diversas nos enriquecen y aumentan nuestras habilidades y resultados.',
        icon: '/icons/team.svg',
      },
      {
        title: 'Enfocado a resultados',
        description: 'Capaz de ver y distinguir los objetivos de manera clara para lograr cumplir las expectivas y resultados propuestos.',
        icon: '/icons/graph.svg',
      },
      {
        title: 'Proactivo',
        description: 'Estoy activamente buscando cosas nuevas por hacer o crear. Capaz de tomar la iniciativa cuando se requiera.',
        icon: '/icons/gears.svg',
      },
      {
        title: 'Adaptabilidad al cambio',
        description: 'Afronto los cambios como nuevos desafios y oportunidades que pueda aprovechar para aprender y crecer más.',
        icon: '/icons/roads.svg',
      },
      {
        title: 'Pensamiento analítico',
        description: 'Trato de observar cuales son las mejores soluciones para resolver un problema y eligir la más adecuada para cada situación.',
        icon: '/icons/brain.svg',
      },
    ],
  },
  proyects: {
    title: 'Proyectos',
    dartmong: {
      title: 'Dartmong Blog',
      description: 'Este es sitio de entretemiento de temática principal sobre Videojuegos, pero también de Animes y Mangas. Se recopilan noticias y se escriben artículos a manera de opiniones personales y análisis.',
      description2: 'Es muy proyecto que pienso escalar a lo largo de tiempo, como un Hobby, y desarrollar todo el potencial que este pueda lograr.',
      description3: 'Está realizado con las siguientes tecnologías:',
    },
    auroraManga: {
      title: 'Aurora Manga',
      description: 'Aurora manga es un sitio de E-commerce (ficticio) especializado en la venta de Mangas en el cual puedes conseguir tus títulos de mangas favoritos.',
      description2: 'Los pagos son realizados utilizando la SDK de Paypal, con el cual puedes suscribirte a los lanzamientos del Mes con un pago recurrente o simplemente pagar los artículos de tu carrito de compra en una sola exhibición.',
      description3: 'Características:',
      features: [
        'Carrito de compras',
        'Pago recurrente',
        'Pago único',
        'Catálogo de productos',
        'Filtro de productos',
        'Buscador de productos',
        'Perfil de usuario',
        'Historial de compras',
      ],
      description4: 'Está realizado con las siguientes tecnologías:',
    },
    twittDuck: {
      title: 'Twitt Duck (Clon de Twitter)',
      description: 'Esta es una red social que te permite crear publicaciones, subir fotos, comentar y difundir las publicaciones de otros usuarios de forma similar a Twitter.',
      description2: 'Características:',
      features: [
        'Publicar tweets',
        'Dar like a tweets',
        'Retwittear tweets',
        'Seguir a otros usuarios',
        'Perfil de usuario',
        'Historial de tweets',
        'Buscar tweets',
      ],
      description3: 'Proximas Características:',
      features2: [
        'Seccion de tendencias dentro de la red',
        'Mensajes privados',
      ],
    },
  },
  learning: {
    title: 'Learning',
    description: 'Constantemente estoy aprendiendo más sobre el diseño y el desarrollo web. Actualmente me encuentro aprendiendo las siguiente tecnologías y habilidades: ',
    items: [
      {
        title: 'PHP',
        iconURL: '/icons/php.svg',
        description: 'PHP es uno de los lenguajes más importantes en el desarrollo web y posee una gran comunidad y herramientas que permiten resolver las necesidades de los clientes de forma fácil. Me estoy involucrando en esta gran comunidad aprendiendo las bases del lenguaje para después comenzar a probar herramientas más complejas que faciliten el desarrollo de nuevos proyectos.'
      },
      {
        title: 'NESTJS',
        iconURL: '/icons/nestjs.svg',
        description: 'Este es el framework de JavaScript/TypeScript que no sabia que necesitaba. Ofrece una gran cantidad de soluciones para crear aplicaciones del servidor escalables junto a una muy buena experiencia de desarrollo. Sin duda es una gran herramienta que me está ayudando a mejorar como desarrollador, pues a la vez que se aprende NestJS aprendes escribir código limpio.'
      }
    ]
  },
  nextToLearn: {
    title: 'Por aprender en un futuro',
    description: 'Gran parte de mi tiempo está dedicado a aprender nuevas tecnologías y mantenerme actualizado.',
    description2: 'Tengo la habilidad de aprender y adaptarme a cualquier stack o requerimiento que sea necesario, aunque de forma personal hay algunas herramientas y tecnologías que me interesan aprender en un futuro ya sea para propósitos personales o laborales. Algunas tecnologías que me interesan aprender:',
    description3: 'Algunas de las tecnologías que me gustaría aprender en un futuro son:',
  },
  contact: {
    title: 'Contacta conmigo',
    options: {
      workPurpose: 'Propuesta de trabajo',
      collaboration: 'Colaboración',
      personalContact: 'Contacto Personal',
      custom: 'Otros (descríbelo en el mensaje)',
    },
    button: 'Enviar',
    placeholders: {
      email: 'Correo...',
      message: 'Mensaje',
    }
  }
}
