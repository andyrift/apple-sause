getFavoritePosts = ({ quantity, excludePostIds }, callback) => {
	let data = { quantity, excludePostIds };
	fetch(/favorites/, {
		method: 'POST',
  	body: JSON.stringify(data),
  	headers: {
		'Content-Type': 'application/json'
	}
	})
	.then(res => {
		res.json()
		.then(data => {
			if(res.status === 200){
				callback(data.posts);
			} else {
				document.write(data.body);
			}
		})
		.catch(err => console.log(err));
	})
	.catch(err => console.log(err));
}