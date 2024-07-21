interface ExternalLinks {
  [key: string]: Link;
}

interface Technology {
  title: string;
  iconURL: string;
}

interface ProyectDetail {
  [key: string]: Link & {
    repositoryURL?: string;
    technologies: Technology[];
  };
}

interface Link {
  title: string;
  url  : string;
}

export const proyects: ProyectDetail = {
  dartmong: {
    title: 'Dartmong Blog',
    url: 'https://dartmong.com',
    technologies: [
      { title: 'NextJS', iconURL: '/icons/nextjs.svg' },
      { title: 'TypeScript', iconURL: '/icons/typescript.svg' },
      { title: 'SASS', iconURL: '/icons/sass.svg' },
      { title: 'MongoDB', iconURL: '/icons/mongodb.svg' },
    ]
  },
  auroraManga: {
    title: 'Aurora Manga',
    url: 'https://aurora-mangas.vercel.app/',
    repositoryURL: 'https://github.com/Kreator-97/aurora-mangas',
    technologies: [
      { title: 'NextJS', iconURL: '/icons/nextjs.svg' },
      { title: 'TypeScript', iconURL: '/icons/typescript.svg' },
      {
        title: 'TailwindCSS',
        iconURL: '/icons/tailwindcss.svg',
      },
      {
        title: 'Redux',
        iconURL: '/icons/redux.svg',
      },
      {
        title: 'PrismaORM',
        iconURL: '/icons/prisma.svg',
      },
      {
        title: 'MySQL',
        iconURL: '/icons/mysql.svg',
      },
      {
        title: 'GraphQL',
        iconURL: '/icons/graphql.svg',
      }
    ]
  },
  twittDuck: {
    title: 'Twitt Duck (Clon de Twitter)',
    url: 'https://twitt-duck.herokuapp.com/',
    repositoryURL: 'https://github.com/Kreator-97/twitt-duck',
    technologies: [
      {
        title: 'ExpressJS',
        iconURL: '/icons/nodejs.svg',
      },
      {
        title: 'React',
        iconURL: '/icons/chakraui.svg',
      },
      {
        title: 'Redux',
        iconURL: '/icons/redux.svg',
      },
      {
        title: 'TypeScript',
        iconURL: '/icons/typescript.svg',
      },
      {
        title: 'Chakra UI',
        iconURL: '/icons/chakraui.svg',
      },
      {
        title: 'Turborepo',
        iconURL: '/icons/turborepo.svg',
      },
      {
        title: 'Prisma ORM',
        iconURL: '/icons/prisma.svg',
      },
    ]
  },
}

export const personalLinks: ExternalLinks = {
  twitter: {
    title: 'Twitter',
    url: 'https://twitter.com/arturo_monzon8'
  },
  github: {
    title: 'Github',
    url: 'https://github.com/Kreator-97'
  },
}

