import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { validateEmail } from '../../src/utils/helpers';

export default function Something() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [messageBody, setBody] = useState('');
    const [isHoveredLinked, setIsHoveredLinked] = useState(false);
    const [isHoveredGit, setIsHoveredGit] = useState(false);


    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email' && inputValue.length <=40) {
            setEmail(inputValue);
        } else if (inputType === 'messageBody' && inputValue.length <=500) {
            setBody(inputValue);
        } else if (inputType === 'name' && inputValue.length <=30){
            setName(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email');
            return;
        }

        setEmail('');
        setBody('');
    };

    const handleImageHoverGit = () => {
        setIsHoveredGit(!isHoveredGit);
    };
    const handleImageHoverLinked = () => {
        setIsHoveredLinked(!isHoveredLinked);
    }

    return (
        <div className="m-5 text-center">
            <h1 id='pageH1'> Contact me! </h1>
            <div className='col contactForm'>
                <form className="form" onSubmit={handleFormSubmit}>
                <div className='mb-3'>
                        <input
                            value={email}
                            name='name'
                            onChange={handleInputChange}
                            type='text'
                            placeholder='Your Name'
                        />
                    </div>
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


                    <a 
                        href='https://www.linkedin.com/' 
                        target="_blank" 
                        rel='noopener noreferrer'
                        onMouseEnter={handleImageHoverLinked}
                        onMouseLeave={handleImageHoverLinked}
                    >
                        
                        <img 
                        id='socialLogo' 
                        src={isHoveredLinked ? '../assets/linkedinLogo.png' : '../assets/linkedinLogoInverse.png'} alt='linkedin logo' />
                    </a>
                    <Button className='mx-3' id='projectButton' type='submit'>Send an Email</Button>
                    {/* github logo/link */}
                    <a
                        className='mt-1'
                        href='https://github.com/NuclearReid'
                        target="_blank"
                        rel='noopener noreferrer'
                        onMouseEnter={handleImageHoverGit}
                        onMouseLeave={handleImageHoverGit}
                    >
                        <img id='socialLogo' 
                        src={isHoveredGit ? '../assets/gitHubLogoInverse.png' : '../assets/gitHubLogo.png'} 
                        alt='github logo' />
                    </a>
                </form>
            </div>
        </div>
    );
}