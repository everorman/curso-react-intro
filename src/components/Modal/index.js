import React from 'react';
import {createPortal} from 'react-dom';

function Modal({children}){
    return createPortal(
        <div className='fixed inset-0 w-full h-full '>
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal }