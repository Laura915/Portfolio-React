import React from 'react';
import Project from 'react';
// import "../../assets";

let WorksArr = [
  {
    id: 1,
    name: "Savor",
    image: "savor.png",
    altMessage: "Savor app with display of Ciara's Level up lyrics",
    technologies: "Materialize HTML JavaScript JQuery CSS ItunesAPI lyrics.ovhAPI",
    github_URL: "https://caseyvanalstyne.github.io/Savor"
  },
  {
    id: 2,
    name: "Work Day scheduler App",
    image: "scheduler.png",
    altMessage: "calendar app with list of inputs from 9-5",
    technologies: "HTML JavaScript JQuery CSS ",
    github_URL: "https://laura915.github.io/Work-Day-Scheduler/"
  }
]

function Works() {

  return (
    <>
      {WorksArr.map(work => (
        <Project
          key={work.id}
          name={work.name}
          image={work.image}
          altMessage={work.altMessage}
          technologies={work.technologies}
          github_URL={work.github_URL}
        />
      ))}
    </>
  );
}

export default Works;