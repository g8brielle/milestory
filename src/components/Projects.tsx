import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const bloodTypingLink = <a href='https://github.com/katr1na/Blood-Typing-Game'  target='_blank' rel='noopener noreferrer'>Git <svg className='arrow-right' width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
  <path d='M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z'/>
</svg></a> 
  const psycheLink = <a href='https://github.com/katr1na/psyche_chatbot' target='_blank' rel='noopener noreferrer'>Git <svg className='arrow-right' width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
  <path d='M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z'/>
</svg></a>
  const microbladingLink = <a href='https://luminousbrows.com/' target='_blank' rel='noopener noreferrer'>Link <svg className='arrow-right' width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
  <path d='M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z'/>
</svg></a>

  return (
    <div className='projects text-center py-5'>
      <h1 className='my-projects mb-5'>My Projects</h1>
      <div className='container'>
        <div className='row-container'>
          <div className='project-card'>
            <ProjectCard 
              title='Clue Board Game' 
              desc='A classic Clue game based on the campus of Mines. Players can play against computers to win the game.' 
              tech='Java, Git' 
            />
          </div>
          <div className='project-card'>
            <ProjectCard 
              title='Blood Typing Game' 
              desc='An educational game on learning different blood types and their compatibility. Players save patients by selecting the correct blood type for transfusions. ' 
              tech='C++' 
              link={bloodTypingLink}
            />
          </div>
          <div className='project-card'>
            <ProjectCard 
              title='Psyche Chatbot' 
              desc='A web application featuring an IBM Watson Assistant chatbot focused on assisting users in managing their mental health and establishing daily routines.' 
              tech='Javascript, HTML, CSS' 
              link={psycheLink}
            />
          </div>
          <div className='project-card'>
            <ProjectCard 
              title='Microblading Business Website' 
              desc='A web application for Luminous Brows, a microblading and cosmetics business based in Lafayette, CO, to help customers book appointments.' 
              tech='HTML, CSS' 
              link={microbladingLink}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;