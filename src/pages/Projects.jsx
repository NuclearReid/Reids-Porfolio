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
        <div className="mt-5">
            <h1 id="pageH1">What I've been working on!</h1>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <a href='https://github.com/NuclearReid/Green-Thumbs' target="_blank" rel="noopener noreferrer">
                            <img id='projectLogo' src='../assets/greenThumbsLogo.jpeg' alt='Green Thumbs Logo' />
                        </a>
                        <br/>
                        <Button id="projectButton" onClick={() => handleShow('Green thumbs was a group project I helped build while enrolled in a full stack bootcamp. I was the project manager and was responsible for creating the backend and ensure our API was working optimally and for retrieving and storing the information sent to it by the users')}>
                            About Green thumbs!
                        </Button>
                    </div>
                    <div className="col text-center">
                        <a href='https://reids-blog-6b81b14466fd.herokuapp.com/' target="_blank" rel="noopener noreferrer">
                            <img id='projectLogo' src='../assets/aSimpleTechBlog.png' alt='Your Other Project Logo' />
                        </a>
                        <br/>
                        <Button id="projectButton" onClick={() => handleShow('A little Tech blog using mySQL for the database, sequelize for user login, etc etc')}>
                            About A Simple Tech Blog!
                        </Button>
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