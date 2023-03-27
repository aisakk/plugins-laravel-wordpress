import React, { useState } from 'react';

const Test = ( { user } ) => {
    return (<>
            <h1 className='text-3xl font-bold underline'>Hola {user.name}</h1>
      </>)
}

export default Test