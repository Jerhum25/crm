import './Button.scss';
import React from 'react';

function Button({content, onClick, dataSuppr}) {
   return (
      <div className='buttonContainer' onClick={onClick}>
        <button data-suppr={dataSuppr ? true : undefined}>{content}</button>
      </div>
   );
}

export default Button;