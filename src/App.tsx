import React from 'react';
import NavBar from "./Components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Education from "./Components/Education/Education";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contacts from "./Components/Contacts/Contacts";
import ContactsForm from "./Components/Contacts/ContactsForm/ContactsForm";
import Work2 from "./Components/work2/Work2";
import Work1 from "./Components/work1/Work1";
import Work3 from "./Components/work3/Work3";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path='/' element={(<Home/>)}/>

                <Route path='/education' element={(<Education/>)}/>

                <Route path='/portfolio' element={(<Portfolio/>)}>
                    <Route path='work1' element={(<Work1/>)}/>
                    <Route path='work2' element={(<Work2/>)}/>
                    <Route path='work3' element={(<Work3/>)}/>
                </Route>

                <Route path='/contacts' element={(<Contacts/>)}>
                    <Route path='sent' element={(<ContactsForm/>)}/>
                </Route>

            </Routes>
        </div>
    );
}

export default App;
