import React from 'react';
import "./style.css";

function Project(props) {
  return (
    <div className="card" >
      <div className="img-container">
          <img className="card-img-top" alt={props.altMessage} src={props.image} />
      </div>
      <div className="content" >
        <ul>
          <li>
            <strong>{props.name}</strong>
          </li>
          <li>
            {props.des}
          </li>
          <li>
            <strong>Technologies:</strong> {props.technologies}
          </li>
          <li className="card-links">
            <a target="_blank" href={props.app_URL} class="card-link">Website</a>
          </li>
          <li className="card-links github-link">
            <a target="_blank" href={props.github_URL} class="card-link">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
