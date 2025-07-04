export const worklist = [
    {
        id: 0,
        date: "05.2025",
        name: "PAUL MONTARLIER",
        link: "paulmontarlier", 
        type: "Professional",
        background : '/media/work/kia/banner_compressed.webp'
    },
    {
        id: 1,
        date: "03.2025",
        name: "TKORP",
        link: "tkorp", 
        type: "Professional",
        background : '/media/work/kia/banner_compressed.webp'
    },
    {
        id: 2,
        date: "04.2023",
        name: "Kia OSB",
        link: "kia", 
        type: "Professional",
        background : '/media/work/kia/banner_compressed.webp'
    },
    {
      id: 3,
      date: "10.2022",
      name: "AIDES Campaign",
      link: "aides", 
      type: "Professional",
      background : '/media/work/aides/banner_compressed.webp'
    },
    {
      id: 4,
      date: "09.2023",
      name: "Prime Prono",
      link: "primeprono", 
      type: "Personal",
      background: '/media/work/primeprono/banner_compressed.webp'
    },
    {
      id: 5,
      date: "11.2023",
      name: "Rolland Games",
      link: "rolland", 
      type: "Personal",
      background: '/media/work/rolland/banner_compressed.webp'
    },
    {
      id: 6,
      date: "01.2023",
      name: "Event",
      link: "eventapp", 
      type: "School",
      background : '/media/work/eventapp/banner_compressed.webp'
    }
]

export const projectsData = [
  {
    path: 'work/kia',
    data: {
      date: "04.2023",
      type: "Professional",
      stack: "FRONT-END development",
      projectName: "Kia OSB",
      demolink: "https://www.kia.com/fr/services/rendez-vous-atelier/?step=vehicle",
      directory: 'kia',
      paraA: "Kia OSB (Online Service Booking) is an innovative tool for scheduling appointments at KIA dealerships. This solution allows KIA vehicle owners to easily plan the necessary technical operations, select their preferred dealership, and choose a time slot that suits them. This solution reflects a high level of technical expertise and a strong command of web development technologies.",
      paraB: "The front-end of the project is based on Astro and Vue JS. The project also uses numerous APIs and libraries, for example, for appointment scheduling or selecting a dealership on a map.",
      link: 'aides',
      linkname: 'Aides Campaign'
    },
  },
  {
    path: 'work/aides',
    data: {
      date: "10.2022",
      type: "Professional",
      stack: "FRONT-END development",
      projectName: "AIDES Campaign",
      demolink: "https://don.aides.org/",
      directory: 'aides',
      paraA: "Discover the website of the new campaign by AIDES. Through the site, learn about the journeys of some of the activists involved in the fight against HIV and viral hepatitis. The website has been professionally designed to provide an optimal user experience across all devices. The creation of this website and the new advertising campaign was carried out by a dedicated team with rigor and commitment.",
      paraB: "Project realized with Vue JS.",
      link: 'primeprono',
      linkname: 'PRIMEPRONO APP'
    },
  },
  {
    path: 'work/primeprono',
    data: {
      date: "11.2023",
      type: "Personal",
      stack: "Webdesign - Full Stack development",
      projectName: "Prime Prono",
      demolink: "https://primeprono.netlify.app/",
      directory: 'primeprono',
      paraA: "Prime Prono is a Progressive Web App for sports betting among friends. My passion for football led me to create a unique experience of sharing and competition among friends. Picture yourself immersed in the excitement of upcoming matches, challenging your friends in suspenseful predictions. Our app offers a friendly and intuitive platform where you can predict match results, accumulate points, and compete for the title of the ultimate predictor. Whether you're a casual fan or a soccer expert, this app promises a captivating adventure, strengthening friendships through healthy competition and sharing memorable moments from the world of football.",
      paraB: "The front-end of the project is built in React (PWA), while the backend (bet recording, user accounts) operates through Supabase. To obtain real-time match odds, a dedicated NodeJs server for scraping has been set up. Designed by my-self on Figma.",
      link: 'rolland',
      linkname: 'ROLLAND GAMES'
    },
  },
  {
    path: 'work/rolland',
    data: {
      date: "11.2023",
      type: "Personal",
      stack: "Webdesign - Full Stack development",
      projectName: "Rolland games",
      demolink: "https://rollandgames.netlify.app/",
      directory: 'rolland',
      paraA: "Challenge your friends with 'Rolland Games,' an application for versus games with friends on the theme of rap. Inspired by a game that added spice to each of our evenings, the goal of the game is to take turns finding an artist who has collaborated with a given artist. The first one who runs out of ideas loses the game. Immerse yourself in the world of versus, where music and friendship merge to create a unique and entertaining experience at every moment.",
      paraB: "The front-end of the project is in React, while the backend (email authentication management, game data) operates through Supabase. All data on artists comes from the Spotify API. Designed by my-self on Figma.",
      link: 'eventapp',
      linkname: 'EVENT APP'
    },
  },
  {
    path: 'work/eventapp',
    data: {
      date: "01.2023",
      type: "School",
      stack: "Webdesign - FRONT-END development",
      projectName: "Event App",
      demolink: "https://events-lesfousduroy.netlify.app/me-connecter",
      directory: 'eventapp',
      paraA: 'Welcome to the "Event" application designed to simplify the planning of events in board and card game stores. You can say goodbye to paper lists and disorganization. Event allows store managers to manage and plan their events with ease while allowing their customers to register directly via their cell phone, to register in the queue, to cancel, etc...',
      paraB: "The front-end of the project is in Vue JS, and the backend as well as the back office work on the Airtable platform to facilitate the administration of the tool for the client. Designed by my-self on Figma.",
      link: 'kia',
      linkname: 'KIA OSB'
    },
  },
  {
    path: 'work/paul-montarlier',
    data: {
      date: "05.2025",
      type: "Professional",
      stack: "Webdesign - FRONT-END development",
      projectName: "Paul Montarlier",
      demolink: "https://events-lesfousduroy.netlify.app/me-connecter",
      directory: 'paulmontarlier',
      paraA: 'Welcome to the "Event" application designed to simplify the planning of events in board and card game stores. You can say goodbye to paper lists and disorganization. Event allows store managers to manage and plan their events with ease while allowing their customers to register directly via their cell phone, to register in the queue, to cancel, etc...',
      paraB: "The front-end of the project is in Vue JS, and the backend as well as the back office work on the Airtable platform to facilitate the administration of the tool for the client. Designed by my-self on Figma.",
      link: 'paulmontarlier',
      linkname: 'Paul Montarlier'
    },
  },
  {
    path: 'work/tkorp',
    data: {
      date: "03.2025",
      type: "Professional",
      stack: "Webdesign - FRONT-END development",
      projectName: "TKORP",
      demolink: "https://www.tkorp.com/",
      directory: 'tkorp',
      paraA: 'Welcome to the "Event" application designed to simplify the planning of events in board and card game stores. You can say goodbye to paper lists and disorganization. Event allows store managers to manage and plan their events with ease while allowing their customers to register directly via their cell phone, to register in the queue, to cancel, etc...',
      paraB: "The front-end of the project is in Vue JS, and the backend as well as the back office work on the Airtable platform to facilitate the administration of the tool for the client. Designed by my-self on Figma.",
      link: 'tkorp',
      linkname: 'TKORP'
    },
  },
];
