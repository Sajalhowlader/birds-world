import React from 'react';

const ShowBirds = (props) => {
    console.log(props)
    const { name, price, picture, } = props.bird
    return (
        <div>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h3>{price}</h3>
        </div>
    );
};

export default ShowBirds;