import React from 'react';


const ItemLists = (props) => {
	// console.log(props.songinfo)

	return (
    <div>
      <ul>
      {
      	props.songinfo.map((song, i) => {
	      	console.log(song);
	      	return <div> <li key={i}>{song.artist} <br/>{song.title}</li><br/> </div>
	      })
      }    
      </ul>
    </div>
  )
}


export default ItemLists


