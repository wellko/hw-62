import React, { useState} from 'react';
import {CircleLoader} from "react-spinners";

let Height = document.documentElement.clientHeight;

const Education = () => {

    const [load, setLoad] = useState( false)

    return (
        <div className='container'>
            <div className='row'>
                {load? '' :  (<CircleLoader className='m-auto' size='200' color='#006ee6'/>)}
            <iframe title='Attractor' onLoad={()=>{setLoad(true)}} src='https://attractor-school.com/' width='100%' height={Height}/>

        </div></div>
    );
};

export default Education;