import React from 'react';
import { useNavigate } from 'react-router-dom';

const LearnMore = () => {
    const navigate = useNavigate();

    const handleLearnMoreClick = () => {
        navigate('/');
    };
    
    return (
        <div className='learn-more text-center d-flex justify-content-center align-items-center'>
            <div className='learn-more-container'>
                <a href='' onClick={handleLearnMoreClick} >
                    <svg className='arrow-left' width='32' height='32' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M38 24H10M10 24L24 38M10 24L24 10' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/>
                    </svg>
                </a>
                <h1 className='mb-3'>Get to Know Me</h1>
                <div className='learn-more-divider'></div>
                <p className='lh-lg m-auto'>I am currently a junior with a variety of experiences from different realms, such as being a software engineer intern at Transamerica, working on teams around GenAI adoption and platform rewrites. 
                    <br/> <br/> I also have teaching experience in computer science and am continuing this path alongside software development, where I taught game development and web applications to K-12 students. 
                    <br/><br/>Teaching has been a growing passion for me, and I enjoy being both the learner and the guider as I take part in opportunities that push the boundaries of technology.
                </p>
                <h1 className='mt-5 mb-3'>Involvement</h1>
                <div className='learn-more-divider'></div>
                <p className='lh-lg m-auto'>I strive to find outreach opportunities in the STEM community, particularly for underrepresented groups and am involved with a number of organizations and clubs as part of my efforts:
                    <br/><br/><span className='orgs'>Teacher Education Alliance</span> - President of student-led club, organizing volunteer events at nearby schools and outreach seminars for STEM teaching.
                    <br/><br/><span className='orgs'>Girls Who Code</span> - Alum and instructor for their Summer Immersion Program for high school girls.
                    <br/><br/><span className='orgs'>Girls Inc.</span> - Alum and previous administrative intern for their summer school program.
                    <br/><br/><span className='orgs'>Society of Women Engineers</span> - Mentor undergrad students in areas, such as managing uncertainty, women in academia, and technology.
                </p>
            </div>
        </div>
    );
}

export default LearnMore;