import React from 'react';

let SkillsArr = [
    {
        id: 1,
        name: "Git"
    },
    {
        id: 2,
        name: "Javascript"
    },
    {
        id: 3,
        name: "jQuery"
    },
    {
        id: 4,
        name: "Node.js"
    },
    {
        id: 5,
        name: "Express"
    },
    {
        id: 6,
        name: "Handlebars"
    },
    {
        id: 7,
        name: "React.js"
    },
    {
        id: 8,
        name: "Redux"
    },
    {
        id: 9,
        name: "HTML 5"
    },
    {
        id: 10,
        name: " CSS 3"
    },
    {
        id: 11,
        name: "Bootstrap"
    },
    {
        id: 12,
        name: "MySQL"
    },
    {
        id: 13,
        name: "MongoDB"
    },
    {
        id: 14,
        name: "PWA"
    },
    {
        id: 15,
        name: "WebPack"
    },
    {
        id: 16,
        name: "IndexDB"
    },
    {
        id: 17,
        name: "Local Strorage"
    },
    {
        id: 18,
        name: "Heroku"
    }
]

function Skills() {
    
    return (
        <>
            {SkillsArr.map(skill => (
                <div class='skill-list'>
                    <p key={skill.id}>
                        {skill.name}
                    </p>
                </div>
            ))}
        </>
    );
}

export default Skills;