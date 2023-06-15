import React, { useState, useEffect } from 'react';
// import { jobs } from '../jobs'

const url = 'https://course-api.com/react-tabs-project';

const Experience = () => {
    const [loading, setLoading] = useState(true);
    const [positions, setPositions] = useState([]);
    const [value, setValue] = useState(0);

    const fetchJobs = async() => {
        const response = await fetch(url);
        const newJobs = await response.json();
        setPositions(newJobs);
        setLoading(false);
    };

    useEffect(() => {
        fetchJobs();
    }, []);
    console.log(positions);

    if (loading) {
        return(
            <section>
                <h2>Loading...</h2>
            </section>
        )
    }
    const {id, duties, dates, company, title} = positions[value];
    return (
        <div key={id} className='jobs'>
            <div className="jobs-buttons">
                <button>
                    {company}
                </button>
            </div>
            <div className="jobs-main">
                <h3>{title}</h3>
                <p>{dates}</p>
                {duties.map((task) => {
                    return ( <article>
                        <p>{task}</p>
                    </article>
                    )
                })}
                
            </div>
            
        </div>
    );
};

export default Experience;