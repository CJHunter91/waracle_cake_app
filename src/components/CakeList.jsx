import React from 'react';
import {Link} from 'react-router-dom';

const CakeList = (props) => {

	const cakeList = props.cakeData.map((cake, index) => {
		return(
			<Link key={index} to={`/${cake.id}`}>
			<article className="cake" >
				<img alt="A tasty cake" className="image" src={cake.imageUrl}/>
				<h4>{cake.name}</h4>
			</article>
			</Link>
			)
	})
	

	return(
		<section id="cake-list">
			{cakeList}
		</section>
		)
}
export default CakeList;