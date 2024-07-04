import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return(
        <div className='h-lvh flex flex-col justify-center items-center'>
            <h1 className='font-bold text-2xl'> Oops! </h1>
            <span className='mt-5 font-semibold'>
                 Sorry, an unexpected error has occurered 
            </span>
            <span className='mt-7 text-gray-400'>
                <i>{error.statusText || error.message}</i>
            </span>
        </div>
    )
}

export default ErrorPage;