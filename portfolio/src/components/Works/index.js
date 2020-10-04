import React from 'react';
import Project from '../Project';

import savor from "../../assets/savor.png";
import teamGenerator from "../../assets/team-gen-screenShot.png";
import noteTaker from "../../assets/note-taker.png";
import burger from "../../assets/burger.png";
import trainingZone from "../../assets/training-zone.png";
import budgetTracker from "../../assets/budget-ScreenShot.png";

let WorksArr = [
  {
    id: 1,
    name: "Savor",
    image: savor,
    altMessage: "Savor app with display of Ciara's Level up lyrics",
    technologies: "JavaScript JQuery ItunesAPI lyrics.ovhAPI HTML CSS Materialize",
    app_URL: "https://caseyvanalstyne.github.io/Savor",
    github_URL: "https://github.com/Laura915/Savor",
    des: "Savor retrieves an artist's song lyrics and a profile with basic information about the song. Also a link to the artist's iTunes profile page is provided for more information."
  },
  {
    id: 2,
    name: "Training Zone",
    image: trainingZone,
    altMessage: "2 week day work out cards",
    technologies: "JavaScript JQuery Node.js Express Sequelize Express-Handlebars MySQL HTML CSS Materialize Heroku",
    app_URL: "https://project2group4bcs.herokuapp.com/",
    github_URL:"https://github.com/Laura915/project2",
    des: "Training Zone helps keep track of user workouts. Select a workout from the drop-down menu below and enter your personlized workout routine."
  },
  {
    id: 3,
    name: "Budget-Tracker",
    image: budgetTracker,
    altMessage: "budget tracker home page",
    technologies: "JavaScript JQuery Node.js Mongo Mongoose Morgan Express HTML CSS Heroku PWA Indexdb",
    app_URL: "https://hidden-lake-36299.herokuapp.com/",
    github_URL:"https://github.com/Laura915/Budget-Tracker-indexDB",
    des: "Budget-Tracker keeps track of user expenses. Enter an expense, or deposit, and the app will adjust the total accordingly. This app is a PWA, thus enabling offline use."
  },
  {
    id: 4,
    name: "Burger",
    image: burger,
    altMessage: "Burger app with available and finished burgers list",
    technologies: "JavaScript JQuery Node.js Express-Handlebars MySQL HTML CSS Heroku",
    app_URL: "https://secure-beyond-70824.herokuapp.com/",
    github_URL:"https://github.com/Laura915/Burger",
    des: "Burger app sorts burgers into an organized layout. User must input a name for the burger and devour it to sort."
  },
  {
    id: 5,
    name: "Team Generator",
    image: teamGenerator,
    altMessage: "Team generated with a few employees",
    technologies: "JavaScript Node.js Inquirer Jest HTML CSS OOP",
    app_URL: "https://youtu.be/sPTlVrgFAl8",
    github_URL:"https://github.com/Laura915/Team-Generator",
    des: "Team Generator is a command line app that enables user to organize team members' information. User is prompted a series of questions to build their team."
  },
  {
    id: 6,
    name: "Note-Taker",
    image: noteTaker,
    altMessage: "Note text area and lists of todos",
    technologies: "JavaScript JQuery Node.js Express CSS HTML Heroku",
    app_URL: "https://note-taker-laura.herokuapp.com/notes",
    github_URL:"https://github.com/Laura915/Note-Taker",
    des: "Note-Taker provides a digital space to write, save, and delete notes. User must input a note title and text to save their note. User may re read or delete their saved note from the note column."
  }
]

function Works() {

  return (
    <div>
      <div className="row " id="works-title">
        <h2 className="col-lg-12" >Works </h2>
      </div>
      <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3" id="cards-align">
        {WorksArr.map(work => (
          <Project
            key={work.id}
            name={work.name}
            image={work.image}
            altMessage={work.altMessage}
            technologies={work.technologies}
            app_URL={work.app_URL}
            github_URL={work.github_URL}
            des={work.des}
          />
        ))}
      </div>
    </div>
  );
}

export default Works;