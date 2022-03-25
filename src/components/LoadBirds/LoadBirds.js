import React, { useEffect, useState } from 'react';
import ShowBirds from '../ShowBirds/ShowBirds';

const LoadBirds = () => {
    const [birds, setBirds] = useState([])
    useEffect(() => {
        fetch('birds.json')
            .then(res => res.json())
            .then(data => setBirds(data))

    }, [])
    return (
        <div>
            <div>
                {
                    birds.map(bird => <ShowBirds key={bird.id} bird={bird}></ShowBirds>)
                }
            </div>
        </div>
    );
};

export default LoadBirds;