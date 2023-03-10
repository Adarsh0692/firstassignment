import React from 'react'
import Card from './Card'

function User2Card(){
    const user2 = {
        name : 'Ruhi' ,
	image : 'https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' ,
	description : 'perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays, and other types of music groups. ' ,
	designation : 'Singer'

    }
    return(
        <Card
          name={user2.name}
          image= {user2.image}
          designation= {user2.designation}
          description= {user2.description}
        />
    )
}

export default User2Card