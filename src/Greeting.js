import React,{useState} from 'react'

export default function Greeting(){
    const Greetings= [
        'Hello', 'Welcome', 'Good Morning', 'Good Afternoon', 'Good Evening', 'Good Night'
      ]
      const [greetingIndex, setGreetingIdex] = useState(0)
    
      function handleClick(){
        
        if(greetingIndex<5){
        setGreetingIdex(greetingIndex+1)
        } else {
          setGreetingIdex(0)
        }
        
      }
      return (
        <div>
          <h1>{Greetings[greetingIndex]}</h1>
          <button onClick={handleClick}>Greeting message</button>
          
        </div>
      );
}