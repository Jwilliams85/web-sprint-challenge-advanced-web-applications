import React, {useState} from "react";
import { axiosAuth } from './utils/axiosAuth';
import { Link } from 'react-router-dom' 

const AddColor = (props) => {
    const { updateColors } = props;
    const [ColorState, setColorState] = useState({
        code:{
            hex:'',},
            color:'',
        
    })

    const handleChanges = (e) => {
        e.preventDefault();
        const code = {hex: e.target.value}
         [e.target.color] === 'code'
       ? setColorState ({
           code,
           ...ColorState,
       })
       : setColorState ({
           ...ColorState,
           [e.target.name] : e.target.value,
       })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosAuth()
        .post('/colors', ColorState)
        .then(res => updateColors(res.data))
        .catch(err => console.log(err))

        setColorState({
            code: {
                hex:'',
            },
            color: '',
        })
    }

    return(
        <div>
            <h2>Add Colors</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Color Name
            <input onChange={handleChanges}
                    type="text"
                    value={ColorState.color}
                    placeholder="color"
                    name="color"
                    required>
            </input>
            </label>
            <label htmlFor="hex">Hex-Code
            <input onChange={handleChanges}
                    type="text"
                    value={ColorState.code.hex}
                    placeholder="hex-code"
                    name="code"
                    required>
            </input>
            </label>
            <button>Submit</button>
            <Link to= '/colors'>
            <button>Color List</button>
            </Link>
        </form>
        </div>
    )

}
export default AddColor