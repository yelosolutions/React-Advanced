import React, {useState, useEffect} from 'react';

const url = 'https://api.github.com/users';

//fetch users data from github
const FetchData = () => {
    //create and manipulate state values 
    const [users, setUsers] = useState([]);

    //define async/await function OUTSIDE useEffect callback function
    //since the useuseState triggers a re-render, which calls useEffect by default  
    const fetchUsers = async() => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        console.log(users);
    };

    //allows side effects(fetching data from github in this case)
    useEffect(() => {
        fetchUsers();

        //the empty list of dependencies below is IMPORTANT
    }, []); //it ensures useEffect is called only on the initial render

    return <> 
    <h3> Github Accounts</h3>
    <ul className='users'>
    {users.map((user) =>{
        const {id, avatar_url, login, html_url} = user;
        return <li key={id}>
            <img src={avatar_url} alt="" />
            <div>
                <h4> {login}</h4>
                <a href={html_url}>Github</a>
            </div>
        </li>
    })
    }
    </ul>
    </>
};

export default FetchData; 