import React from 'react';

const CakeInput = (props) => {
	var array = [1,2,3,4,5]

	return(
		<section id="cake-input">
		<form>
			<label>Name:</label>
			<input type="text" name="name"/>
			<label>Image Url:</label>
			<input type="url" name="imageUrl"/>
			<label>Comment:</label>
			<input type="text-box" name="imageUrl"/>
			<label>Yum Factor</label>
			<select name="yumFactor">
				{array.map((number) =>{
					return(
						<option value={number}>{number}</option>
						)
				})}
			</select>
		</form>
			<textarea name="comment" form="usrform" placeholder="Enter comment here..."></textarea>
		</section>
		)
}
export default CakeInput;