import React, { useState, useEffect } from 'react';
// import { jobs } from '../jobs'
import { FaAngleDoubleRight } from 'react-icons/fa';


const url = 'https://course-api.com/react-tabs-project';

const Experience = () => {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);

    const fetchJobs = async() => {
        const response = await fetch(url);
        const newJobs = await response.json();
        setJobs(newJobs);
        setLoading(false);
    };

    useEffect(() => {
        fetchJobs();
    }, []);
    console.log(jobs);

    if (loading) {
        return(
            <section>
                <h2>Loading...</h2>
            </section>
        );
    };
    const {duties, dates, company, title} = jobs[value];
    return (
        <section className='section'>
            <div className="title">
                <h2>Experience</h2>
                <div className="underline"></div>
            </div>
            <div className='jobs-center'>
                <div className="btn-container">
                    {jobs.map((item, index) => {
                        return <button 
                        key={item.id}
                        className={`job-btn ${index === value && 'active-btn'}`}
                        onClick={() => setValue(index)}>
                            {item.company}
                        </button>
                    })}
                </div>
                
                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className='job-date'>{dates}</p>
                    {duties.map((task, index) => {
                        return (
                            <div className="job-desc">
                                <FaAngleDoubleRight
                                className='job-icon'></FaAngleDoubleRight>
                                <p key={index}>{task}</p>
                            </div>
                        )
                    })}
                    
                </article> 
                
            </div>
        </section>
        
    );
};

export default Experience;