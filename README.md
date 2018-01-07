![alt text](https://github.com/Yann1ck/uiheaven/blob/master/public/images/LandingPage_OVERVIEW_02012018.png "Melding.Amsterdam Website")

# Melding.Amsterdam

One-page mobile website project using Node.js, Postgresql and Pug/Jade. The website is meant for people who receive unwanted advertisement leaflets in their mailbox and want to report this to the municipality (Gemeente Amsterdam). The app uses WebRTC in order to gain access to the users' camera.

#### Demo (adjust browser window for mobile view):

Link to deployed project: <a href="https://melding-amsterdam.yannickvisbeek.com">Melding.Amsterdam</a>

## Site

Once a user gets to the landing page he/she gets asked for permission to turn on the camera (on mobile). The button/arrow at the bottom will take the user down the page to the camera view. Taking a photo will take the user down to a view where the photo taken is shown and a form to fill out. If the user is not happy with the photo, he/she can retake the photo by click the "Opnieuw" button, which will take him/her back up the page to the camera view.

![alt text](https://github.com/Yann1ck/uiheaven/blob/master/public/gif/melding-gif1.gif "Gif 1")

## Database

Once a user filled out the form, the data gets stored in a PostgreSQL database so that the data + photo is available to whomever might need the data (in this case Gemeente Amsterdam)

![alt text](https://github.com/Yann1ck/uiheaven/blob/master/public/gif/melding-gif2.gif "Gif 2")

## Built with

- [jQuery - Ajax](http://www.w3schools.com/jquery/jquery_ref_ajax.asp) - jQuery simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development.
- [Pug/Jade](https://pugjs.org/) - Pug is a high-performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers.
- [Node.js](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [PostgreSQL](https://www.postgresql.org/) - PostgreSQL is a powerful, open source object-relational database system.
- [WebRTC](https://webrtc.org/) - WebRTC is a free, open project that provides browsers and mobile applications with Real-Time Communications (RTC) capabilities via simple APIs.

## To-do

- Create an easy-to-use dashboard in which the data is organised so that the Gemeente can get some good insights into in which areas they might need to take action
