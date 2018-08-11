import React from 'react';


const ItemLists = (props) => {
		console.log(props.data.artist)

	const songDetails = props.data;

	return (
    <div>
      <ul>
        {
        	Object.keys(songDetails).map((key,i) => {
        		return (<li key={i}> {songDetails[key]} </li>)
          })
        }
      </ul>
    </div>
  )
}


export default ItemLists