import React from 'react';
import errorImage from "../assets/error-404-D5a2U_1Y.png";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="bg-[#F0F0F0] w-full h-full flex flex-col justify-center items-center">
            <div className="mt-[80px] mb-[80px]">
                <figure className="p-10">
                    <img className="w-[500px] h-[500px]" src={errorImage} alt="Error 404" />
                </figure>

                <div className="flex flex-col items-center text-center">
                    <h1 className="text-[48px] font-semibold text-gray-800">Oops, page not found!</h1>
                    <p className="text-[20px] text-[#627382] mt-2">The page you are looking for is not available.</p>

                    <Link
                        to="/"
                        className="relative mt-6 inline-block px-8 py-3 text-lg font-bold text-white rounded-lg
                                   bg-gradient-to-r from-[#632EE3] to-[#9F62F2] shadow-md transition-all duration-300
                                   hover:scale-105 hover:shadow-[0_0_20px_rgba(159,98,242,0.6)]
                                   hover:from-[#7b3ff2] hover:to-[#b17cff]
                                   active:scale-95"
                    >
                        Go Back!
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
