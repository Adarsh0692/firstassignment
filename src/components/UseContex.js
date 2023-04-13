import React, { useContext, useEffect,useState } from 'react'
import axios from 'axios';

const ShopContext= React.createContext();
const useShop = () => {
    return useContext(ShopContext);
  };

export default function UseContex() {
    const [post, setPost] = useState([]);
  const [datas, setDetas] = useState([]);
    useEffect(()=>{
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => setPost(response.data));
        
    },[])

    const addToCart = (data) => {
        console.log(data.userId)
        setDetas([
          ...datas,
          {
            postId: data.id,
            userId: data.userId,
            body:  data.body,
          },
        ]);
      };

    const value = {
        post,
        datas,
        addToCart,
      };
  return (
    <>
      <ShopContext.Provider value={value}>
      <tr>
        <td>
            <h1>Posts</h1>
          <Posts />
        </td>
        <td>
            <h1>Details</h1>
          <Details />
        </td>
      </tr>
    </ShopContext.Provider>
    </>
  )
}

function Posts(){
    const {post}= useShop();
    // console.log(post)
    return (
        <>
          <ul>
            {post.map((p) => (
              <Titles key={p.id} data={p} />
            ))}
          </ul>
        </>
      );
}

function Titles({ data }) {
    // console.log(data)
    return (
      <li>
        {data.title} <AddToCartButton data={data} />
      </li>
    );
  }

  function AddToCartButton(props) {
    // console.log(props)
    const { addToCart } = useShop();
  
    return <button onClick={() => addToCart(props.data)}>+</button>;
  }

  function Details() {
    const { datas } = useShop();
  
    return (
      <div>
        <ul>
          {datas.map((p) => (
            <li>
              ID : {p.postId} - UserId : {p.userId} - Story : {p.body}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  