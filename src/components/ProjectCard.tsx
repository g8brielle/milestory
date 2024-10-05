import React, { ReactNode } from 'react';

interface ProjectCardProps {
    className?: string; 
    title: string;
    desc: string;
    tech: string;
    link?: ReactNode;
}

const ProjectCard : React.FC<ProjectCardProps> = ({ className , title, desc, tech, link }) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>Technologies: {tech}</p>
        <p>{desc}</p>
        {link}
    </div>
  );
}

export default ProjectCard;