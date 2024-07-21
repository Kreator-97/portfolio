import { calculateYears } from '@/utils'

export const english = {
  common: {
    proficientIn: 'Competente en:',
  },
  navbar: {
    home: 'Home',
    skills: 'Skills',
    projects: 'Projects',
    learning: 'Learning',
    contact: 'Contact',
  },
  presentation: {
    title: 'Hi, I\'m',
    fullname: 'Donato Monzón',
    subtitle: 'I am Frontend Developer'
  },
  aboutMe: {
    parragraphs: {
      first: `I'm ${calculateYears(new Date('1997/06/08'))} years old and I'm passionate about programming and technology in general.`,
      second: 'I love to learn new things and I\'m always looking for new challenges.',
      third: {
        first: 'My biggest dream is to ',
        span: 'impact significantly and positively',
        third: ' in the world of technology and programming.'
      },
    },
  },
  hardSkills: {
    title: 'Technical Skills',
    webTecnologies: {
      title: 'Web Technologies',
      description: 'My skills consist of advanced domains of web technologies such as:',
      icons: [
        { iconURL: '/icons/html.svg', title: 'HTML' },
        { iconURL: '/icons/css.svg', title: 'CSS' },
        { iconURL: '/icons/javascript.svg', title: 'JavaScript' },
      ],
      details: [
        'Web design and layout',
        'Good practices following the Responsive Web Design methodology',
        'DOM manipulation and mastery of asynchronous requests with JS',
      ]
    },
    reactEcosystem: {
      title: 'React Ecosystem',
      description: 'I am specialized in creating user interfaces using the React library and the ecosystem built around it.',
      icons: [
        { iconURL: '/icons/react.svg', title: 'React' },
        { iconURL: '/icons/redux.svg', title: 'Redux' },
        { iconURL: '/icons/nextjs.svg', title: 'NextJS' },
      ],
      details: [
        'Creating web applications with React',
        'State management with Redux',
        'Developing web applications with NextJS',
      ]
    },
    typescript: {
      title: 'TypeScript',
      description: 'I use TypeScript in all my developments because it provides a better development experience, type safety, maintainability and scalability.',
      details: [
        'Efficient handling in the type system',
        'Good development practices using TypeScript',
        'Clean, maintainable and scalable code',
      ]
    },
    serverApplications: {
      title: 'Server Applications',
      description: 'I have knowledge in the creation of REST services and GraphQL Server, using NodeJS as Runtime to run my JavaScript applications.',
      icons: [
        { iconURL: '/icons/nodejs.svg', title: 'Express' },
        { iconURL: '/icons/nextjs.svg', title: 'NextJs' },
        { iconURL: '/icons/graphql.svg', title: 'GraphQL' },
      ],
      details: [
        'Handling and creating REST services',
        'Handling and creating GraphQL servers using Apollo Server',
        'Creating fast and optimized web applications using NextJS',
      ]
    },
    docker: {
      title: 'Docker',
      description: 'I use docker at a basic - intermediate level to keep my development environments separate. I am studying it to start using the microservices architecture.',
      icons: [
        { iconURL: '/icons/docker.svg', title: 'Docker' },
      ],
      details: [
        'Container and service management',
        'Image and volume creation',
        'Network and volume configuration',
        'Handling different environments (production, development, testing)'
      ]
    },
    shopify: {
      title: 'Shopify',
      description: 'I have knowledge in the creation and customization of themes, creation of highly customizable and accessible sites, and creation of private Shopify applications.',
      details: [
        'Creation and customization of themes',
        'Creation of highly customizable and accessible sites',
        'Creation of private Shopify applications'
      ]
    },
    otherTools: {
      title: 'Other Tools',
      description: 'As a developer, I have knowledge in the use of other tools that help me in my daily work.',
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
    title: 'Soft Skills',
    items: [
      {
        title: 'Problem Solving',
        description: 'Able to search and find solutions that adapt to the problems that are presented to me.',
        icon: '/icons/ideas.svg',
      },
      {
        title: 'Teamwork',
        description: 'Collaborative and empathetic. Diverse opinions enrich us and increase our skills and results.',
        icon: '/icons/team.svg',
      },
      {
        title: 'Results Focused',
        description: 'Able to see and distinguish objectives clearly to achieve the proposed expectations and results.',
        icon: '/icons/graph.svg',
      },
      {
        title: 'Proactive',
        description: 'I am actively looking for new things to do or create. Able to take the initiative when required.',
        icon: '/icons/gears.svg',
      },
      {
        title: 'Adaptability',
        description: 'I am able to adapt to new situations and environments, always looking for the best way to solve problems.',
        icon: '/icons/roads.svg',
      },
      {
        title: 'Analytical Thinking',
        description: 'I am able to analyze and understand complex problems to find the best solutions.',
        icon: '/icons/brain.svg',
      }
    ],
  },
  proyects: {
    title: 'Projects',
    dartmong: {
      title: 'Dartmong Blog',
      description: 'This is an entertainment site with the main theme about Video Games, but also about Animes and Mangas. News is collected and articles are written in the form of personal opinions and analysis.',
      description2: 'It is a project that I plan to scale over time, as a Hobby, and develop all the potential that it can achieve.',
      description3: 'It is made with the following technologies:',
    },
    auroraManga: {
      title: 'Aurora Manga',
      description: 'Aurora manga is a fictional E-commerce site specialized in the sale of Mangas where you can get your favorite manga titles.',
      description2: 'Payments are made using the Paypal SDK, with which you can subscribe to the monthly releases with a recurring payment or simply pay for the items in your shopping cart in a single exhibition.',
      description3: 'Characteristics:',
      features: [
        'Shopping cart',
        'Recurring payment',
        'Single payment',
        'Product catalog',
        'Product filter',
        'Product search engine',
        'User profile',
        'Purchase history',
      ],
      description4: 'It is made with the following technologies:',
    },
    twittDuck: {
      title: 'Twitt Duck (Twitter Clone)',
      description: 'This is a social network that allows you to create posts, upload photos, comment and share other users\' posts in a similar way to Twitter',
      description2: 'Features:',
      features: [
        'Post tweets',
        'Like tweets',
        'Retweet tweets',
        'Follow other users',
        'User profile',
        'Tweet history',
        'Search tweets',
      ],
      description3: 'Next Features:',
      features2: [
        'Trending section within the network',
        'Private messages',
      ],
    }
  },
  learning: {
    title: 'Learning',
    description: 'I am constantly learning more about web design and development. Currently I am learning the following technologies and skills: ',
    items: [
      {
        title: 'PHP',
        iconURL: '/icons/php.svg',
        description: 'PHP is one of the most important languages in web development and has a large community and tools that allow you to easily meet the needs of clients. I am getting involved in this great community learning the basics of the language to then start trying more complex tools that facilitate the development of new projects.'
      },
      {
        title: 'NESTJS',
        iconURL: '/icons/nestjs.svg',
        description: 'This is the JavaScript/TypeScript framework that I didn\'t know I needed. It offers a lot of solutions to create scalable server applications along with a very good development experience. It is definitely a great tool that is helping me improve as a developer, because as you learn NestJS you learn to write clean code.'
      }
    ]
  },
  nextToLearn: {
    title: 'To learn in the future',
    description: 'A large part of my time is dedicated to learning new technologies and staying up to date.',
    description2: 'I have the ability to learn and adapt to any stack or requirement that is necessary, although personally there are some tools and technologies that I am interested in learning in the future either for personal or work purposes.',
    description3: 'Some of the technologies I would like to learn in the future are:',
  },
  contact: {
    title: 'Contact me',
    options: {
      workPurpose: 'Work Purpose',
      collaboration: 'Collaboration',
      personalContact: 'Personal Contact',
      custom: 'Custom (write it in the message)',
    },
    button: 'Send',
    placeholders: {
      email: 'Email...',
      message: 'Message...',
    }
  }
}
