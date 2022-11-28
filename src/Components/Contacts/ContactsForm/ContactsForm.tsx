import React, {useState} from 'react';
import {MailForm} from "../../../types";


const ContactsForm = () => {
    const [text, setText] = useState<MailForm>({mail:'', text:''})

    const FormSent = (e:React.FormEvent) => {
        e.preventDefault();
        setText(({mail:'' , text:''}));
    }
    return (
        <div className='container'>
        <form className='row' onSubmit={FormSent}>
            <div className="mb-3 row">
                <label htmlFor="Email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" placeholder='Enter your E-mail' className="form-control" id="Email" onChange={(e) => setText(prev => ({...prev, mail: e.target.value}))}/>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="Textarea" className="form-label">Message:</label>
                <textarea placeholder='Message to Kwon Valerii' value={text.text} className="form-control" id="Textarea" rows={5} onChange={(e) => setText(prev => ({...prev, text: e.target.value}))}></textarea>
            </div>
            <button type='submit' className='btn btn-outline-primary w-25 ms-auto'>Send</button>
        </form></div>
    );
};

export default ContactsForm;