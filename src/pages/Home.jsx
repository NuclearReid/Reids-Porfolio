export default function Home() {

        // the image for the header. I know it's inline styling but seems easier for setting the path for header img
        // const headerStyle = {
        //     backgroundImage: `url(./assets/sunrise.png)`,
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //     backgroundRepeate: 'no-repeate',
        //     height: '66vh'

        // }

    return (
        <header className="text-black d-flex " /*style={headerStyle}*/>
            <div className="container h-50">
                <div className="row h-100 d-flex justify-content-center align-items-center">
                    <div className="col-12 text-start mt-5 homePageDiv">
                        <h1 className="display-4" id="homeH1">Home</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nulla aperiam rerum deleniti sapiente eius distinctio blanditiis tempora dolore inventore, veritatis odio accusamus? Rem enim cumque modi architecto voluptatibus veniam?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure illo itaque modi commodi odio corporis labore, voluptatum ea assumenda quasi natus unde possimus! Omnis voluptate natus, sequi quasi culpa accusamus!</p>
                    </div>
                </div>
            </div>
        </header>
    );
}