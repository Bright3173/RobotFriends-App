import React from 'React';
import Card from './Card';


const CardList= ({robots})=> {
if (false) {
	throw new Error ('NOOOOOOOOO!')
}
return 	(
	<div>
		{
		 	robots.map((user, i) => {
		    	return( 
		    		<Card 
		    		key={i} 
		     		id={robots[i].id} 
		     	    name={robots[i].name} 
		     		email={robots[i].email} /> 
		     	);
		    })
}
		</div>
);
}
export default CardList;