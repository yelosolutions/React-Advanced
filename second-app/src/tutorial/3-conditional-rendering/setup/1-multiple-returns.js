import React, {useState, useEffect} from 'react';

const url = 'https://api.github.com/users/yelosolutions';

const MultipleReturns = () => {
    const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [user, setUser] = useState('default User');

	useEffect(()=>{
		fetch(url)
		.then((resp) => resp.json())
		.then((user) => {
			const {login} = user;
			setUser(login);
			setIsLoading(false);
		} )
		.catch((error) => {
			console.log(error);
			setIsError(true);
		});
	}, []);

	if(isLoading){
		return (
		<div>
			<h2>Loading...</h2>
		</div>
    ); 
	}
	if(isLoading){
		return (
		<div>
			<h2>Loading...</h2>
		</div>
    );
	}
	return (
    <h2>{user}</h2>
    );
};

export default MultipleReturns;