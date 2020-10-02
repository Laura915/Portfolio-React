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
            <strong>Tools Used:</strong> {props.technologies}
          </li>
          <li className="card-links">
            <a target="_blank" rel="noopener noreferrer" href={props.app_URL} className="card-link">Website</a>
          </li>
          <li className="card-links github-link">
            <a target="_blank" rel="noopener noreferrer"  href={props.github_URL} className="card-link">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
