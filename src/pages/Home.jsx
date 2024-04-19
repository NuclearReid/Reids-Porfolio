export default function Home() {

    return (
    <header className="text-black d-flex align-items-center justify-content-center">
        <div className="container">
            <div className="row">
                <div className="col-12 mt-5 homePageDiv">
                    <h1 className="display-4" id="pageH1">Reid Back</h1>
                    <img src="../assets/me.png" alt="a picture of me" height='300rem' width='300rem' className="rounded-circle"></img>
                    <p className="text-left">
                        Hey, I'm Reid. A current Nuclear Medicine Technologist and aspiring web developer. After spending the better part of a decade in medicine I have felt stagnated and wanting to branch out and try to use my brain a bit more. I have recently completed a full stack web development bootcamp through the University of Sydney. In these past 6 months I have gone from never writing a line of code to learning and implementing many different technologies. I have worked with express, node.js, mySQL and MongoDB, to React, and many many more.
                    </p>
                    <p className="text-left">
                        Take a look at 'My Work' to either see my deployed applications (if there is a front end) or the github repository if it's only a backend project. If you like the look of my work and would like to work with me, feel free to reach out and send me an email or contact me on github or linkedIn!
                    </p>
                   
                </div>
            </div>
        </div>
    </header>
    );
}