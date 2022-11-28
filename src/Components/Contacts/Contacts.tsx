import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Contacts = () => {
    return (
        <>
            <div className='container'>
                <h1>Contacts</h1>
                <p>Kyrgyzstan, Bishkek city, Abay st. 104 </p>
                <p> tel. : +996 550 902 353</p>
                <p> Email: wellko24@gmail.com   <Link to='sent' className='btn btn-primary p-0'> contact  </Link></p>

            </div>
            <Outlet/>
        </>
    );
};

export default Contacts;