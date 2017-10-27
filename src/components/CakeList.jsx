import React from 'react';

const CakeList = (props) => {

	const cakeList = props.cakeData.map((cake, index) => {
		return(
			<article onClick={()=>{props.getCakeData(cake.id)}} className="cake" key={index}>
				<img alt="A tasty cake" className="image" src={cake.imageUrl}/>
				<h4>{cake.name}</h4>
			</article>
			)
	})
	

	return(
		<section id="cake-list">
			{cakeList}
		</section>
		)
}
export default CakeList;