import './Button.scss';
import React from 'react';

function Button({content, onClick}) {
   return (
      <div className='buttonContainer' onClick={onClick}>
        <button>{content}</button>
      </div>
   );
}

export default Button;