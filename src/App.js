import React from 'react'
import './components/profile.css'
import ProfileData from './components/Profiledata';


function App(props) {
   
  
  return (
    <div className='maindiv' >
      <h1>Know your mentors</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, ut libero dolorem nihil esse quia dolorum eveniet vel, aliquid repellendus aut ipsa aspernatur rerum nisi earum. Ratione mollitia soluta placeat!</p>
     <div className='profiles'>
      <ProfileData name='Adarsh' />
      <ProfileData name='Akash' />
      <ProfileData name='Anil' />
      <ProfileData name='Atul' />
      <ProfileData name='Akhil' />
      <ProfileData name='Ashish' />
      <ProfileData name='Aman' />
      
      </div>

    </div>
  );
}

export default App;
