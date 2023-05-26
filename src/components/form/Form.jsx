import { useState } from "react"
import validation from "./validation"

export default function Form (props) {

    const [userData, setUserData] = useState({email:"", password:""})



    const handleChange = (event) => {
        const {name , value} = event.target;
        
        setUserData({
            ...userData,
            [name] : value
        })
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        props.login (userData);
    }   

    return(
        <div>
            <form action="">
                <label htmlFor="">Email: </label>

                <input 
                type="text" 
                name="email"
                value={userData.email}
                onChange={handleChange}
                />
                <p>
                    
                </p>

                <label htmlFor="">Password: </label>

                <input 
                type="text" 
                name="password"
                value={userData.password}
                onChange={handleChange}
                />

                <button
                onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}