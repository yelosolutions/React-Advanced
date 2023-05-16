import React, {useState, useEffect} from 'react';

const url = 'https://api.github.com/users';


const UseEffectFetchData = () => {
    const [users, setUsers] = useState([]);

    //async function can't be defined inside useEffect hook
    const fetchUsers = async () => {
        const response  = await fetch(url);
        const users = await response.json();
        setUsers(users);
        //console.log(users);
    };

    //DON'T ADD A SET FUNCTION(eg. setUsers) INSIDE useEffect, it triggers re-render.
    //SOLN: ADD A SECOND PARAMETER(list of deps) AS AN EMPTY ARRAY [].
    //This calls useEffect only once.
    useEffect(() => {
        //console.log('useEffect');
        fetchUsers();
    }, []);

    //setUsers(users);

    //console.log('render');

    return (
        <>
            <h3>Github Users</h3>
            <ul className='users'>
                {users.map((user) => {
                    const {id, login, avatar_url, html_url} = user;
                    return (
                    <li key={id}>
                        <img src={avatar_url} alt="" />
                        <div>
                            <h4>{login}</h4>
                            <a href={html_url}>profile</a>
                        </div>
                    </li>
                    );
                })};
            </ul>
        </>
    );
};

export default UseEffectFetchData;