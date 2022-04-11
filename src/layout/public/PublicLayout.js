import React from 'react';


export default function PublicLayout(props) {
    return (
        <>
            <div style={{ minHeight: 'calc(100vh - 200px)' }}>{props.children}</div>
        </>
    );
}
