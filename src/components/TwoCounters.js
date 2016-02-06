import React from 'react';
import Counter from './Counter'

export default function (){
    return (
        <div>
            <Counter increment={0} color='black' />
            <Counter increment={0} color='red' />
        </div>
    )
}

