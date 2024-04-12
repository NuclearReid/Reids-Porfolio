export default function Home() {

        // the image for the header. I know it's inline styling but seems easier for setting the path for header img
        const headerStyle = {
            backgroundImage: `url(./assets/header.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeate: 'no-repeate',
            height: '66vh'

        }

    return (
        <header className="bg-dark text-white" style={headerStyle}>
            <div className="container h-50">
                <div className="row h-100 d-flex justify-content-center align-items-center">
                    <div className="col-12 text-center">
                        <h1 className="display-4">Home</h1>
                    </div>
                </div>
            </div>
        </header>
    );
}