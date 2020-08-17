import React, {useState} from "react";
import { axiosAuth } from './utils/axiosAuth';

const ContactForm = (props) => {
    const [contact, setContact] = useState({
        name:'',
        email:''
    })

    const handleChanges = (e) => {

        setContact({...contact, [e.target.name]:e.target.value})
        console.log(contact)
    }

    const handleSubmit = (e) => {
        e.prevenDefault();
        axiosAuth()
        .post('colors', contact)
        .then(res => {console.log(res.data)})
        .catch(err => console.log(err))
        props.history.push('/colors')

    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input onChange={handleChanges}
                    type="text"
                    value={contact.name}
                    placeholder="name"
                    name="name"
                    required>
            </input>
            <label htmlFor="Sound">Email</label>
            <input onChange={handleChanges}
                    type="text"
                    value={contact.email}
                    placeholder="sound"
                    name="sound"
                    required>
            </input>
            
            <button>Submit</button>
        </form>
        </div>
    )

}
export default ContactForm