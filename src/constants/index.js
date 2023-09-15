import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  leaderboard,
  furn,
  github,
  cloths,
  berry,
  weather,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  // {
  //   name: 'Tailwind CSS',
  //   icon: tailwind,
  // },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  // },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
 
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'FiNC',
    icon: microverse,
    iconBg: '#333333',
    date: 'Sep 2022 - Feb 2023',
  },
  {
    title: 'UI/UX Designer',
    company_name: 'Ideatrek',
    icon: microverse,
    iconBg: '#333333',
    date: 'Nov 2022 - Current',
  },
 
];

const projects = [
  {
    id: 'project-1',
    name: 'The Home Stead Tee',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
     image: cloths,
    repo: 'https://www.thehomesteadt.com/',
    
  },
  {
    id: 'project-2',
    name: 'Gecko Leather Works',
    
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://www.geckoleatherworks.com/',
  },
  {
    id: 'project-3',
    name: 'Ubuy Furniture',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: furn,
    repo: 'https://www.ubuyfurniture.com/' },
  {
    id: 'project-4',
    name: 'Berrycove Farms',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: berry,
    repo: 'https://www.berrycovefarms.com/' ,
  },
  
  {
    id: 'project-5',
    name: '( Personal Project Travel )',
   tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      
    ],
    image: github,
    repo: 'https://travel-78bc3.firebaseapp.com/'},
    {
      id: 'project-6',
      name: '( Personal Project Weather )',
     tags: [
        {
          name: 'nextjs',
          color: 'blue-text-gradient',
        },
        {
          name: 'supabase',
          color: 'green-text-gradient',
        },
        {
          name: 'css',
          color: 'pink-text-gradient',
        },
        
      ],
      image: weather,
      repo: 'https://weather-11a1c.firebaseapp.com/'},
      
    
];

export { services, technologies, experiences, projects };
