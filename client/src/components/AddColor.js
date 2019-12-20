import React, {useState, useEffect} from 'react';

import { axiosWithAuth } from '../axiosWithAuth';


const AddColor = () => {
    const [color, setColor] = useState({
        color: "",
        code: {hex: ""},
        id: Math.random().toFixed(2)
    });

    const handleChange = event => {
        setColor({...color, [event.target.name]:event.target.value});
    }

    const handleChangeHex = event => {
        setColor({...color, code:{
                                hex: event.target.value}})
        console.log(color);
    }

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth().post("http://localhost:5000/api/colors", color)
        .then(response => {
            console.log(response.data)
        })

    }
    return (
        <>

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="color"
                placeholder="color"
                onChange={handleChange}
                />
            <input
                type="text"
                name="code"
                placeholder="code"
                onChange={handleChangeHex}
                />

            <button> Add Color </button>

        </form>
        </>
    )
}

export default AddColor;
