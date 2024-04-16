import { useLocation } from "react-router-dom";

function ReidBack(){
    const location = useLocation();
    if (location.pathname !== '/'){
        return null;
    }


    return (

        <div
        className=''>
            <h1 className='header'>
                Reid Back
            </h1>
        </div>

    );
}