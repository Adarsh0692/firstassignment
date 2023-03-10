import React from 'react'
import Card from './Card'

function User1Card(){
    const user1 = {
        name : 'Amit' ,
	image : 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg' ,
	designation : 'Graphic Designer' ,
	description : 'Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design.'

    }
    return(
        <Card
          name={user1.name}
          image={user1.image}
          designation={user1.designation}
          description= {user1.description}
        />

    )
}

export default User1Card