import { useEffect, useState } from "react"
import "./Home.css"
export default function FakerData() {
    let [cards, setCards] = useState([])


    const getData =async () =>{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        let jResponse = await response.json()
        console.log(jResponse)
        setCards(jResponse)
    }

    useEffect(()=>{
        getData()
    },[])
    return(
        <>
        <div className="navbar">
            <p>Home</p>
            <p>Contact</p>
            <p>About Us</p>
        </div>

        <div className="container">
            {cards.map((data)=>{
                return <div key={data.id} className="card">
                    <h2>{data.title}</h2>
                    <p>{data.body}</p>
                    <p>id: {data.id}</p>

                </div>
            })}
        </div>
        <div className="footer">
                <p>Copyright @C</p>
                <div className="footer-link">
                    <a>Linkedin</a> <br />
                    <a>Instagram</a> <br />
                    <a>Facebook</a> <br />
                </div>
                
        </div>
        </>
    )
}