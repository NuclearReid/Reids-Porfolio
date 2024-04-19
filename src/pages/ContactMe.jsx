import { useState } from 'react';

import { validateEmail } from '../../src/utils/helpers'

export default function Something() {

    const [email, setEmail] = useState('');
    const [messageBody, setBody] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.inputValue;

        if( inputType === 'email'){
            setEmail(inputValue);
        } else if( inputType === 'messageBody'){
            setBody(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)){
            setErrorMessage('please enter a valid email');
            return;
        }
        setEmail('');
        setBody('');
    }
    
    return(
        <div className="m-5">
            <h1 id='pageH1'> Contact me! </h1>
            <div className='col'>
                <form className="form" onSubmit={handleFormSubmit}>
                    <div className='mb-3'> 
                        <input
                        value={email}
                        name='email'
                        onChange={handleInputChange}
                        type='email'
                        placeholder='Your Email'
                            />
                    </div>
                    <div className='mb-1 border-rounded'>
                        <textarea 
                        id='messageBody' 
                        value={messageBody}
                        name='messageBody'
                        onChange={handleInputChange}
                        type='text'
                        placeholder='Send me a message!'
                        
                        />
                    </div>
                    <button id='projectButton' type='submit'>Submit</button>
                </form>
            </div>

        </div>
    )
}