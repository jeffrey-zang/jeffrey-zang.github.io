import meletilogo from './logos/meletipfp.png'
import farmoutlogo from './logos/farmouticon.png'
import logo from './logos/logo.png'
import galactijump from './logos/galactijumplogo.png'
import policecar from './logos/police-car.png'
import happymathlogo from './logos/happymathlogo.png'
import simpleread from './logos/simplereadlogo.png'
import molelogo from './logos/molelogo.png'

const PortfolioItems = {

    happymath: {
      title: 'Happy Math Education',
      description: 'Website for Happy Math Education',
      logo: happymathlogo,
      fontsize: '3.2vw',
  
      languages: 'Javascript, HTML/CSS',
      status: 'Complete',
      statuscolor: '#a5ff90',
      buttons: {
        github: {
          title: 'GitHub',
          icon: 'bi bi-github',
          link: 'https://github.com/jeffrey-zang/happy-math-education'
        },
        link: {
          title: 'Link',
          icon: 'bi bi-link-45deg',
          link: 'https://jeffrey-zang.github.io/happy-math-education/'
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
  This project is licensed under the BSD-3 Clause License - see the LICENSE file for details
      
  Previous website: https://www.happymatheducation.com/    `
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