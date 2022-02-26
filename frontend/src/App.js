import React, {useEffect, useState} from "react";
import './App.css';
import axios from "axios";

function App() {
    const [userName, setUsername] = useState('')

    const getNames = async() => {
        const response = await axios.get('http://localhost:5000/names')
        console.log(response);
        setUsername(response.data);
    }

    useEffect(() => {
        getNames();
    }, [])

    return (
        <>
            <h1>My frontend</h1>
            <h3>My name is {userName}</h3>
        </>
    );
}

export default App;
