import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

function Filter (props){

return (
<div className="d-flex ">
<input onChange={(event)=>props.changeFn(event.target.value)}/>
&nbsp;&nbsp; by rating :&nbsp;&nbsp;
<ReactStars
count={5}
onChange={props.ratingFilter}
size={24}
activeColor="#ffd700"
/>
</div>
);
}
export default Filter;
