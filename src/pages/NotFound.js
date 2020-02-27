import React from 'react';

import { NavToHome } from '../components/NavToHome'

export const NotFound = () => (
    <div>
        <h1 className='title'>404</h1>
        <h2 className='subtitle'>La ruta a la que quieres accerder, no existe!!!</h2>
        <NavToHome />
    </div>
)