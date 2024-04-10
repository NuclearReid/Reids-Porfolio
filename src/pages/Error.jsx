import {useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div id='error-page' className='p-5'>
            <h1> Womp Womp!</h1>
            <p>You wont find anything here!</p>
            <p>
                <i>{error.statusText || error.message}</i>    
            </p>            
        </div>
    )
}