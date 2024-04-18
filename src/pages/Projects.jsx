import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function Projects() {
    const [show, setShow] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (content) => {
        setModalContent(content);
        setShow(true);
    };

    return (
        <div className="m-5">
            <h1 id="pageH1">My Work!</h1>
            <p> Click the logos for the deployed application!</p>
            <div className="container">
                <div className="row">
                    {/* Green thumbs */}
                    <div className="col text-center">
                        <a href='https://afternoon-shore-14413-3943e17402c9.herokuapp.com/' target="_blank" rel="noopener noreferrer">
                            <img id='projectLogo' src='../assets/greenThumbsLogo.jpeg' alt='Green Thumbs Logo' />
                        </a>
                        <br/>
                        <div className='row'>
                            <div className='col-md'>
                                <Button id="projectButton" onClick={() => handleShow('Green thumbs was a group project I helped build while enrolled in a full stack bootcamp. I was the project manager and was responsible for creating the backend and ensure our API was working optimally and for retrieving and storing the information sent to it by the users')}>
                                    About Green thumbs!
                                </Button>
                            </div>
                            <div className='col-md'>
                            <Button  id='projectButton'>
                                    <a href="https://github.com/NuclearReid/Green-Thumbs"> The github repo</a>
                                </Button>
                            </div>
                         </div>
                    </div>
                    {/* Tech Blog */}
                    <div className="col text-center">
                        <a href='https://reids-blog-6b81b14466fd.herokuapp.com/' target="_blank" rel="noopener noreferrer">
                            <img id='projectLogo' src='../assets/aSimpleTechBlog.png' alt='A Simple Tech Blog Logo' />
                        </a>
                        <br/>
                        <div className='row'>
                            <div className='col-md'>
                                <Button id="projectButton" onClick={() => handleShow('This is a simple tech blog I created on my own primarily with mySQL for the backend, and handlebars for the front end. It allows for users to create an account, make posts, comment on posts, and to modify or delete the posts they have created')}>
                                    About my Tech Blog!
                                </Button>
                            </div>
                            <div className='col-md'>
                                <Button className='ml-2' id='projectButton'>
                                    <a href="https://github.com/NuclearReid/Reids-Blog?tab=readme-ov-file"> The github repo</a>
                                </Button>
                            </div>
                         </div>
                    </div>
                    {/* Movie Picker */}
                    <div className="col text-center">
                        <a href='https://nuclearreid.github.io/Movie-Picker/' target="_blank" rel="noopener noreferrer">
                            <img id='projectLogo' src='../assets/moviePickerLogo.png' alt='Movie Picker Logo' />
                        </a>
                        <br/>
                        <div className='row'>
                            <div className='col-md'>
                                <Button id="projectButton" onClick={() => handleShow('This is a website made to help a user select a random movie based on a couple parameters chosen by the user. Once they click the Generate Movie button, they will be given a movie title, the year it came out, a description, and the youtube trailer is shown too. I was the project manager and responsible for the logic used to select the movie, and retrieving the data from the OMDB and Youtube API ')}>
                                    About Movie Picker!
                                </Button>
                            </div>
                            <div className='col-md'>
                                <Button className='ml-2' id='projectButton'>
                                    <a href="https://github.com/NuclearReid/Green-Thumbs"> The github repo</a>
                                </Button>
                            </div>
                         </div>
                    </div>
                    {/* ReadMe generator */}
                    <div className="col text-center">
                        <a href='https://github.com/NuclearReid/Create-a-Readme-with-inquirer' target="_blank" rel="noopener noreferrer">
                            <img id='projectLogo' src='../assets/readmeLogo.png' alt='README generator Logo' />
                        </a>
                        <br/>
                        <div className='row'>
                            <div className='col-md'>
                                <Button id="projectButton" onClick={() => handleShow('This is a README generator, using inquirer, it asks the user a number of questions about the project, such as, the license, installation instructions, description, etc, and creates a formated README using the provided answers. The README for this portfolio website was created with this README generator')}>
                                    About my README generator!
                                </Button>
                            </div>
                            <div className='col-md'>
                                <Button className='ml-2' id='projectButton'>
                                    <a href="https://github.com/NuclearReid/Create-a-Readme-with-inquirer"> The github repo</a>
                                </Button>
                            </div>
                         </div>
                    </div>

                    <div className="col text-center">
                        <a href='https://afternoon-shore-14413-3943e17402c9.herokuapp.com/' target="_blank" rel="noopener noreferrer">
                            <img id='projectLogo' src='../assets/greenThumbsLogo.jpeg' alt='Green Thumbs Logo' />
                        </a>
                        <br/>
                        <div className='row'>
                            <div className='col-md'>
                                <Button id="projectButton" onClick={() => handleShow('Green thumbs was a group project I helped build while enrolled in a full stack bootcamp. I was the project manager and was responsible for creating the backend and ensure our API was working optimally and for retrieving and storing the information sent to it by the users')}>
                                    About Green thumbs!
                                </Button>
                            </div>
                            <div className='col-md'>
                                <Button className='ml-2' id='projectButton'>
                                    <a href="https://github.com/NuclearReid/Green-Thumbs"> The github repo</a>
                                </Button>
                            </div>
                         </div>
                    </div>

                    <div className="col text-center">
                        <a href='https://afternoon-shore-14413-3943e17402c9.herokuapp.com/' target="_blank" rel="noopener noreferrer">
                            <img id='projectLogo' src='../assets/greenThumbsLogo.jpeg' alt='Green Thumbs Logo' />
                        </a>
                        <br/>
                        <div className='row'>
                            <div className='col-md'>
                                <Button id="projectButton" onClick={() => handleShow('Green thumbs was a group project I helped build while enrolled in a full stack bootcamp. I was the project manager and was responsible for creating the backend and ensure our API was working optimally and for retrieving and storing the information sent to it by the users')}>
                                    About Green thumbs!
                                </Button>
                            </div>
                            <div className='col-md'>
                                <Button className='ml-2' id='projectButton'>
                                    <a href="https://github.com/NuclearReid/Green-Thumbs"> The github repo</a>
                                </Button>
                            </div>
                         </div>
                    </div>
                    
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>About the Project!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalContent}
                </Modal.Body>
                <Modal.Footer>
                    <Button id="projectButton" variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}