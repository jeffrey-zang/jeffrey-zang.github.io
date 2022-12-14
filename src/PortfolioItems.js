import meletilogo from './logos/meletipfp.png'
import farmoutlogo from './logos/farmouticon.png'
import logo from './logos/logo.png'
import galactijump from './logos/galactijumplogo.png'
import policecar from './logos/police-car.png'
import happymathlogo from './logos/happymathlogo.png'
import simpleread from './logos/simplereadlogo.png'
import molelogo from './logos/molelogo.png'
import clockhacks from './logos/clockhacks.png'
import recipelogo from './logos/recipe.png'

const PortfolioItems = {

  rythmhacks: {
    title: 'RythmHacks',
    description: 'Experience the magic of tech',
    logo: 'https://links-rythmhacks-ca.vercel.app/assets/logosmall-29cd5f72.png',
    fontsize: '3.2vw',

    languages: 'React, JavaScript, Tailwind',
    status: 'Complete',
    statuscolor: '#a5ff90',
    buttons: {
      github: {
        title: 'GitHub',
        icon: 'bi bi-github',
        link: 'https://github.com/RythmHacks/rythmhacks.ca'
      },
      link: {
        title: 'Link',
        icon: 'bi bi-link-45deg',
        link: 'https://rythmhacks.ca'
      },
    },

    overlaydesc: `RythmHacks

    In August of 2023, we're going in person at the University of Waterloo! Join us for an amazing weekend of fun, innovation, and free food. At RythmHacks, you'll work in teams of four or less to create a website, app, game, robot, or anything you can imagine. You'll have 36 hours to create your project, pitch it to judges, and compete for prizes!
    
    Whether you're a seasoned developer or it's your first time creating a project, you're welcome at RythmHacks. We've got workshops, mini-events, and other resources planned through the weekend to help you in your project creation. Developers, designers, hardware wizards, and tech enthusiasts of all sorts have a place here at RythmHacks.
    
    A place for everyone
    Whether you're a seasoned developer or it's your first time creating a project, you're welcome at RythmHacks. We've got workshops, mini-events, and other resources planned through the weekend to help you in your project creation. Developers, designers, hardware wizards, and tech enthusiasts of all sorts have a place here at RythmHacks.
    
    We know from first-hand experience that finding tech opportunities can be one of the hardest things to do in high school. That's why we've made RythmHacks into a high-school only hackathon, tailored to beginners. We hope that you'll learn a lot and that attending RythmHacks will help you launch your career.
`
  },

  clock: {
    title: 'ClockHacks',
    description: 'A hackathon for time',
    logo: clockhacks,
    fontsize: '3.2vw',

    languages: 'React, JavaScript, Tailwind',
    status: 'Complete',
    statuscolor: '#a5ff90',
    buttons: {
      github: {
        title: 'GitHub',
        icon: 'bi bi-github',
        link: 'https://github.com/ClockHacks/clockhacks.ca'
      },
      link: {
        title: 'Link',
        icon: 'bi bi-link-45deg',
        link: 'https://clockhacks.ca'
      },
    },

    overlaydesc: `ClockHacks Website
The website for Clockhacks, a hackathon by students for students https://clockhacks.ca/

Info
Event Date: Nov 4, 2022 to Nov 6, 2022
Free: Yes
Students: Yes, high school
Location: Online
Duration: 40 hours
Language: English

By students, for students
ClockHacks is a hackathon created by a group of high school students from Waterloo, Ontario.

Our mission is to make hackathons accessible and fun for high school students around the world. Themed around time, Clockhacks will take place online on DATE.

You will be able to work in teams of up to 4 to create a website, game, app, robot, or whatever tech-related product you want. Participate in activites, speeches, workshops, and events to learn more about the world of tech. At the end of the event, pitch your project to a panel of judges and compete for prizes.

Join hackers from across North America this November for a weekend of fun and innovation at ClockHacks!

Dependencies
React
Sass
Material Icons
Tailwind
AOS
Bootstrap Icons
Graphics by https://undraw.co/illustrations
Logo and banner by https://www.linkedin.com/in/cera-wang-171699240/`
  },

    happymath: {
      title: 'Happy Math Education',
      description: 'A tutoring service for math contests',
      logo: happymathlogo,
      fontsize: '3.2vw',
  
      languages: 'React, JavaScript, SASS',
      status: 'Complete',
      statuscolor: '#a5ff90',
      buttons: {
        github: {
          title: 'GitHub',
          icon: 'bi bi-github',
          link: 'https://github.com/happymatheducation/happymatheducation.com'
        },
        link: {
          title: 'Link',
          icon: 'bi bi-link-45deg',
          link: 'https://happymatheducation.com//'
        },
      },
  
      overlaydesc: `Website for Happy Math Education
      
  Our Mission: To help kids enjoy maths
  
  This website is the new and improved website for Happy Math Education, a tutoring service for math contests. Apart from a completely new user interface, colours, layout, and animations, this new website features many new features. Below is a list of all the changes:
      
  - New navbar
  - Animations and gradient colour on home page
  - Icons by Bootstrap Icons
  - Improved navigation from "View Policy" and "Back to Top" buttons
  - Timeline and math contests with dropdown for grade
  - Open source, ability to report bugs and request features
  
  Dependencies
  - React
  - Bootstrap Icons
      
  Authors
  Jeffrey Zang
      
  Version History
  1.0 Initial Release
      
  License
  This project is licensed under the BSD-3 Clause License - see the LICENSE file for details`
    },

    recipe: {
      title: 'MyRecipePal',
      description: 'Unlock your inner chef skills',
      logo: recipelogo,
      fontsize: '3vw',    
      languages: 'React, JavaScript, ChakraUi, CockroachDB',
      status: 'In Progress',
      statuscolor: '#FFFF00',
  
      buttons: {
        github: {
          title: 'GitHub',
          icon: 'bi bi-github',
          link: 'https://github.com/jeffrey-zang/MyRecipePal'
        },
        link: {
          title: 'Link',
          icon: 'bi bi-link',
          link: 'https://my-recipe-pal.github.io/'
        },
      },
  
      overlaydesc: `Submission for Hack the North 2022

📝About
As university students, we all understand that one of the biggest struggles of living by yourself is cooking food. We wanted to make it easy to find and craft new recipes, while still eating healthy.

🛠️ Built With
We used React, JavaScript, ChakraUI, and Bootstrap for the frontend. For the backend. we used CockroachDB and Express.

⚙️ Usage
We didn't have time to host the backend, so the database won't work for regular users. If you host it locally, you are able to create recipes, search for recipes, and view recipes.

⛰️ Challenges
Before hacking started, one of our teammates felt sick and had to go home. Without him, a lot of our planning and ideas had to be delayed and reinvisioned. He was a big part of keeping our team together and energized throughout the night, so we were all discouraged from him leaving.
Instead of giving up, we took the loss of a teammate with even more determination to win. We utilized our resources, such as discord for communication, to help us continue moving forward with our project. As a result, we still managed to go beyond our expectations and make considerable progress on our project.

🛣️ Roadmap
In the future, we hope to add:
Accounts/login system
Forums for people to talk about recipes and health
A tracker that keeps track of your meals, calorie intake, etc`    
  },
  
    simpleread: {
      title: 'SimpleRead',
      description: 'A simple, minimalist book reviewing website',
      logo: simpleread,
      fontsize: '3.3vw',    
      languages: 'Javascript, HTML/CSS',
      status: 'In Progress',
      statuscolor: '#FFFF00',
  
      buttons: {
        github: {
          title: 'GitHub',
          icon: 'bi bi-github',
          link: 'https://github.com/lifeng-yin/simpleread'
        },
      },
  
      overlaydesc: `SimpleRead
  A simple, minimalist book review website
  
  Authors: Li Feng Yin, Daniel Zhang, Jeffrey Zang
  `    
  },

  thiswebsite: {
    title: 'This Website',
    description: 'The website that you\'re looking at right now',
    logo: logo,
    fontsize: '2.6vw',
    languages: 'Javascript, HTML/CSS',
    status: 'Complete, recieving updates',
    statuscolor: '#a5ff90',

    buttons: {
      github: {
        title: 'GitHub',
        icon: 'bi bi-github',
        link: 'https://github.com/jeffrey-zang/jeffrey-zang.github.io'
      },
      link: {
        title: 'Link',
        icon: 'bi bi-link-45deg',
        link: 'https://jeffrey-zang.github.io/'
      }
    },
    
    overlaydesc: `jeffrey-zang.github.io

About The Project
jeffrey-zang.github.io is my personal website. It contains my portfolio of probjects, links to my resume, and ways to contact me. It is what you're looking at right now.

Built With
- React
- Particles.js
- AOS
- Bootstrap Icons

Roadmap
- Add About Me
- Add LinkedIn
- Ambed Resume

License
Distributed under the BSD-# Clause License. See LICENSE.txt for more information.
`
  },
  
    meleti: {
      title: 'Meleti',
      description: 'An all-in-one productivity discord bot',
      logo: meletilogo,
      fontsize: '',    
      languages: 'Python',
      status: 'Complete',
      statuscolor: '#a5ff90',
  
      buttons: {
        github: {
          title: 'GitHub',
          icon: 'bi bi-github',
          link: 'https://github.com/Yourself1011/meleti'
        },
        link: {
          title: 'Discord Invite',
          icon: 'bi bi-link-45deg',
          link: 'https://discord.com/invite/wyPGW6Asbx'
        },
        devpost: {
          title: 'Devpost',
          icon: 'bi bi-people',
          link: 'https://devpost.com/software/meleti'
        },
      },
  
      overlaydesc: `Daniel Zhang, Li Feng Yin, Jashanpreet Singh, and Jeffrey Zang's submission for Jamhacks 6.
  
  The all-in-one productivity discord bot, jam-packed with features (pun intented). Meleti has a study timer, scientifically proven to produce best results, to-do lists to keep track of all your crucial tasks, recurring reminders for wordle fans that want to keep their streak, and much more! Best of all, Meleti features a reward system featuring famous artifacts from history to encourage you to keep studying.
      
Authors
  Daniel Zhang
  Li Feng Yin
  Jashanpreet Singh
  Jeffrey Zang

Works Cited
      
  Images: https://www.flaticon.com/authors/special/lineal-color?author_id=1
  Discord.js: https://discord.js.org/#/
      `
    },
    
    farmout: {
      title: 'Farmout',
      description: 'Discord bot about farming crops and animals',
      logo: farmoutlogo,
      fontsize: '4.4vw',
      languages: 'Python',
      status: 'Complete, 50% working',
      statuscolor: '#FFFF00',
  
      buttons: {
        github: {
          title: 'GitHub',
          icon: 'bi bi-github',
          link: 'https://github.com/Yourself1011/farmoutbot'
        },
        link: {
          title: 'Discord Invite',
          icon: 'bi bi-link-45deg',
          link: 'https://discord.com/oauth2/authorize?client_id=834116780502679572&permissions=67628225&scope=bot'
        },
        devpost: {
          title: 'Top.gg',
          icon: 'bi bi-robot',
          link: 'https://top.gg/bot/795319933314662452'
        },
      },
  
      overlaydesc: `Farmout
  A currency bot where the player grows crops, takes care of animals, and trades with merchants to gain coins.
      
  Farmout is a Currency/Fun bot where you own and take care of a farm.
      
  There are tons of different animals that you can take care of, all giving you unique items like wool and milk. You have to plant and water seeds for crops, which you can sell and trade with the marketplace for other cool items. We’ve only recently added 2 new revolutionary updates: contracts and locations. These make the game feel more realistic, and make it feel like you are actually running a farm.
      
  Built With
  - Python
  - Discord.py
  - Replit database
  - Uptimerobot
  
  Invite Link
  https://discord.com/oauth2/authorize?client_id=834116780502679572&permissions=67628225&scope=bot
      
  With weekly updates, active devs, and an awesome community, there’s no reason not to try Farmout!
  `    
    },
  
    whackamole: {
      title: 'Whack-A-Mole',
      description: 'The most realistic mole whacking experience',
      logo: molelogo,
      fontsize: '2.5vw',
      languages: 'C#',
      status: 'In Progress, expected September 2022',
      statuscolor: '#FFFF00',
  
      buttons: {
        github: {
          title: 'GitHub',
          icon: 'bi bi-github',
          link: 'https://github.com/jeffrey-zang/whack-a-mole'
        },
      },
  
      overlaydesc: `Whack A Mole

The most realistic mole whacking experience. My rendition of the classic game Whack A Mole in Unity3D.

Key Features
- Models made by me
- Cool animations
- Scoreboard

How To Use
  it's not done yet

Credits
  This software uses the following packages and softwares:

- Blender
- TextMeshPro
- Unity3D

no real moles were harmed      
  `    
    },
  
    galactijump: {
      title: 'galactijump',
      description: 'Low poly space game about asteroid minerals',
      logo: galactijump,
      fontsize: '2.6vw',
      languages: 'C#',
      status: 'In Progress, expected September 2022',
      statuscolor: '#FFFF00',
  
      buttons: {
        github: {
          title: 'GitHub',
          icon: 'bi bi-github',
          link: 'https://github.com/jeffrey-zang/galactijump'
        },
      },
  
      overlaydesc: `galactijump

galactijump (no capital) is a low poly space game about harvesting asteroid minerals. It features a physics engine, models created by myself, and animations. The name galactijump was inspired by GalactiGolf, the winning entry of JAMHacks 6.

Created with Unity3D, Blender, TextMeshPro
  `    
    },
  
    policepursuit: {
      title: 'Police Pursuit',
      description: 'A simple 2D game about escaping from a police car',
      logo: policecar,
      fontsize: '3vw',
  
      languages: 'Python',
      status: 'Complete',
      statuscolor: '#a5ff90',
  
      buttons: {
        github: {
          title: 'GitHub',
          icon: 'bi bi-github',
          link: 'https://github.com/jeffrey-zang/Police-Pursuit'
        },
        link: {
          title: 'PyWeek Link',
          icon: 'bi bi-download',
          link: 'https://pyweek.org/e/nah/'
        }
      },
      
      overlaydesc: `Police Pursuit
Entry in PyWeek 31, April 2021

Theme: Cops

Authors: Jeffrey Zang, Daniel Zhang

Dependencies:
Python 3: http://www.python.org/ 
PyGame: http://www.pygame.org/

How to Play:
- Locate the "main.py" file and double click it.
- Use WASD or arrow keys to control your car
- Space to pause
- image credits can be found in the image credits file
`
    }
  
  }
  
  export default PortfolioItems