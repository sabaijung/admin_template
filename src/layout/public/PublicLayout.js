import React from 'react';

export default function PublicLayout(props) {
    return (
        <div>
            <div className="w-full h-screen flex items-center justify-center bg-pastel-blue-50">{props.children}</div>
        </div>
    );
}