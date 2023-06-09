import React, {useState, useEffect} from 'react';

const url = 'https://api.github.com/users/yelosolutions';

const MultipleReturns = () => {
    const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [user, setUser] = useState('default User');

	useEffect(()=>{
		//'then' method of response allows access and manipulation of promises(response)
		//'catch' handles methods that occur during fetch request
		fetch(url)
			.then((resp) => {
				if (resp.status >= 200 && resp.status <= 299){
					return resp.json();
				} else{
					setIsLoading(false);
					setIsError(true);
					throw new Error(resp.statusText);
				}	
			})
			.then((user) => {
				const {login} = user;
				setUser(login);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	if(isLoading){
		return (
		<div>
			<h2>Loading...</h2>
		</div>
    ); 
	}
	if(isError){
		return (
		<div>
			<h2>Error...</h2>
		</div>
    );
	}
	return (
    <h2>{user}</h2>
    );
};

export default MultipleReturns;