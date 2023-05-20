import React, {useState, useEffect} from 'react'

const url = 'https://api.github.com/users/yelosolutions';

const User = () => {
    const [user, setUser] = useState({});

    const getProfile = async() => {
        const response = await fetch(url);
        const user = await response.json();
        setUser(user);
    }

    
    useEffect(() => {
        getProfile();
    }, []);

    return <>
        <article key={user.id} className='jay'>
            <img src={user.avatar_url} alt="" />
            <div>
                <h4>{user.login}</h4>
                <a href={user.html_url}>Github Link</a>
            </div>
        </article>
    </>   
};




export default User;