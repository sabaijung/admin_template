import React from 'react';
import Authen from '../../views/public/authentication/Authen';

export default function PublicLayout(props) {
    return (
        <div>
            <div className="w-full h-screen flex items-center justify-center bg-pastel-blue-50"><Authen /></div>
        </div>
    );
}