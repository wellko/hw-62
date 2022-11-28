import React from 'react';
import NavBar from "./Components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Education from "./Components/Education/Education";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contacts from "./Components/Contacts/Contacts";
import ContactsForm from "./Components/Contacts/ContactsForm/ContactsForm";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path='/' element={(<Home/>)}/>
                <Route path='/education' element={(<Education/>)}/>
                <Route path='/portfolio' element={(<Portfolio/>)}/>
                <Route path='/contacts' element={(<Contacts/>)}>
                    <Route path='sent' element={(<ContactsForm/>)}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
