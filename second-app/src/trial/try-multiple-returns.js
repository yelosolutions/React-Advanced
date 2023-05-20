import React, {useState, useEffect} from 'react';

const url = 'https://api.github.com/users/yelosolutions'

//demostrating multiple returns
const TryMultipleReturns = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [userName, setUserName] = useState('Default User');

	useEffect(() => {
		fetch(url)
		.then((resp) => {
			if(resp.status >= 200 && resp.status <= 299){
				return resp.json();
			}else {
				setIsError(true);
				throw new Error(resp.statusText);
			}
		})
		.then((user) => {
			const {login} = user;
			console.log(user);
			setUserName(login);
			setIsLoading(false);
		})
		.catch((error)=> console.log(error))
	}, []);

	if(isLoading){
		return <div>
			<h2>Loading...</h2>
		</div>
	}
	if(isError){
		return <div>
			<h2>Error...</h2>
		</div>
	}
	return (
		<h2>{userName}</h2>
	)
}

export default TryMultipleReturns;