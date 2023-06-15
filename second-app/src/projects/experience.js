import React, { useState, useEffect } from 'react';
// import { jobs } from '../jobs'

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
        )
    }
    const {id, duties, dates, company, title} = jobs[value];
    return (
        <>
        <div className="title">
            <h2>Experience</h2>
            <div className="underline"><h2>-</h2></div>
        </div>
        <div className='jobs'>
            <div className="btn-container">
                {jobs.map(({company, index})=>{
                    return <button key={index} className='button' onClick={() => setValue(index)}>
                        {company}
                    </button>
                })}
            </div>
            <section className="jobs-main">
                <h3>{title}</h3>
                <p>{dates}</p>
                {duties.map((task) => {
                    return ( <article>
                        <p>{task}</p>
                    </article>
                    )
                })}
                
            </section> 
            
        </div>
        </>
        
    );
};

export default Experience;