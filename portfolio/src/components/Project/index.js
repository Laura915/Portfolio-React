import React from 'react';
import "./style.css";

function Project(props) {
  return (
      <div className="card" >
        <div className="img-container">
          <a target="_blank" href={props.githubURL}>
            <img alt={props.altMessage} src={props.image} />
          </a>
        </div>
        <div className="content" >
          <ul>
            <li>
              <strong>{props.name}</strong>
            </li>
            <li>
              <strong>Technologies:</strong> {props.technologies}
            </li>
          </ul>
        </div>
      </div>
  );
}

export default Project;
