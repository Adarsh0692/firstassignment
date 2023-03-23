import React from 'react'
import styles from './components/profiledata.module.css'
import ProfileData from './components/Profiledata';


function App() {
  const profileData =[{
    name: "Adarsh",
    companyName: "Google",
    designation: "Product maganer",
    experience: "4 years"
  },
  {
    name: "Akash",
    companyName: "flipkart",
    designation: "frontend",
    experience: "4 years"
  },
  {
    name: "Atul",
    companyName: "amazon",
    designation: "backend",
    experience: "4 years"
  },
  {
    name: "Raj",
    companyName: "Paytm",
    designation: "fullstack",
    experience: "4 years"
  } ]
   
  
  return (
    <div className={styles.maindiv} >
      <h1>Know your mentors</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, ut libero dolorem nihil esse quia dolorum eveniet vel, aliquid repellendus aut ipsa aspernatur rerum nisi earum. Ratione mollitia soluta placeat!</p>
     <div className={styles.profiles}>
      {
        profileData.map((data) => (
          <ProfileData key={data.name} profiles= {data}/>
        ))
      }
      
      </div>

    </div>
  );
}

export default App;
