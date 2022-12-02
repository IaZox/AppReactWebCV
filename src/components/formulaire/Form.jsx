import { useEffect, useState } from "react"

export default function Form(props) {

    
    const [named, setName] = useState("")

    const addLeter = () => {
        setName(named + "a");
    }

    return (
        <section>
            <p id="Na">{named}</p>
            <button className="BtnAdda" onClick={addLeter}>Ajouter une lettre</button>
            <div>
                <label htmlFor="name">Nom :</label>
                <input type="text" id="name" name="user_name" defaultValue={props.name}/>
            </div>
            <div>
                <label htmlFor="mail">e-mail&nbsp;:</label>
                <input type="email" id="mail" name="user_mail" defaultValue={props.mail}/>
            </div>
            <div>
                <label htmlFor="msg">Message :</label>
                <textarea id="msg" name="user_message" defaultValue={props.message}></textarea>
            </div>          
        </section>
    )

    
} 
