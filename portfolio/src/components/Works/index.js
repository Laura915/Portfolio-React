import React from 'react';
import Project from '../Project';

import savor from "../../assets/savor.png";
import scheduler from "../../assets/scheduler.png";
import passwordGen from "../../assets/passwordGen.png";
import noteTaker from "../../assets/note-taker.png";
import burger from "../../assets/burger.png";
import trainingZone from "../../assets/training-zone.png";
import NetFling from "../../assets/NetFling.png";

let WorksArr = [
  {
    id: 1,
    name: "Savor",
    image: savor,
    altMessage: "Savor app with display of Ciara's Level up lyrics",
    technologies: "Materialize HTML JavaScript JQuery CSS ItunesAPI lyrics.ovhAPI",
    app_URL: "https://caseyvanalstyne.github.io/Savor",
    github_URL: "https://github.com/CaseyVanAlstyne/Savor",
    des: "Mea eros instructior et, graece fuisset vel ne, id wisi habeo qui. Adhuc dictas delectus nec et. Solet explicari intellegatId mel soluta apeirian, ipsum falli voluptatibus eu usu"
  },
  {
    id: 2,
    name: "Work Day scheduler",
    image: scheduler,
    altMessage: "calendar app with list of inputs from 9-5",
    technologies: "HTML JavaScript JQuery CSS ",
    app_URL: "https://laura915.github.io/Work-Day-Scheduler/",
    github_URL:"https://github.com/Laura915/Work-Day-Scheduler",
    des: "Mea eros instructior et, graece fuisset vel ne, id wisi habeo qui. Adhuc dictas delectus nec et. Solet explicari intellegatId mel soluta apeirian, ipsum falli voluptatibus eu usu"
  },
  {
    id: 3,
    name: "Password Generator",
    image: passwordGen,
    altMessage: "Button and output area with generated password",
    technologies: "HTML JavaScript CSS ",
    app_URL: "https://laura915.github.io/Password-Generator/",
    github_URL:"https://github.com/Laura915/Password-Generator",
    des: "Mea eros instructior et, graece fuisset vel ne, id wisi habeo qui. Adhuc dictas delectus nec et. Solet explicari intellegatId mel soluta apeirian, ipsum falli voluptatibus eu usu"
  },
  {
    id: 4,
    name: "Burger",
    image: burger,
    altMessage: "Burger app with available and finished burgers list",
    technologies: "HTML JavaScript JQuery CSS express-handlebars mysql Node",
    app_URL: "https://secure-beyond-70824.herokuapp.com/",
    github_URL:"https://github.com/Laura915/Burger",
    des: "Mea eros instructior et, graece fuisset vel ne, id wisi habeo qui. Adhuc dictas delectus nec et. Solet explicari intellegatId mel soluta apeirian, ipsum falli voluptatibus eu usu"
  },
  {
    id: 5,
    name: "Training Zone",
    image: trainingZone,
    altMessage: "2 weekly work out cards",
    technologies: "HTML JavaScript JQuery CSS express-handlebars mysql",
    app_URL: "https://project2group4bcs.herokuapp.com/",
    github_URL:"https://github.com/Laura915/project2",
    des: "Mea eros instructior et, graece fuisset vel ne, id wisi habeo qui. Adhuc dictas delectus nec et. Solet explicari intellegatId mel soluta apeirian, ipsum falli voluptatibus eu usu"
  },
  {
    id: 6,
    name: "Note-Taker",
    image: noteTaker,
    altMessage: "Note text area and lists of todos",
    technologies: "HTML JavaScript JQuery CSS",
    app_URL: "https://note-taker-laura.herokuapp.com/notes",
    github_URL:"https://github.com/Laura915/Note-Taker",
    des: "Mea eros instructior et, graece fuisset vel ne, id wisi habeo qui. Adhuc dictas delectus nec et. Solet explicari intellegatId mel soluta apeirian, ipsum falli voluptatibus eu usu"
  }
  ,
  // {
  //   id: 7,
  //   name: "NetFling",
  //   image: NetFling,
  //   altMessage: "NetFling Create profile page",
  //   technologies: "JavaScript Mongo Node React HTML CSS",
  //   app_URL: "https://netfling.herokuapp.com/",
  //   github_URL:"https://github.com/sidseal/project3"
  // }
]

function Works() {

  return (
    <div>
      <div className="row " id="works-title">
        <h2 className="col-lg-12" >Works </h2>
      </div>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
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