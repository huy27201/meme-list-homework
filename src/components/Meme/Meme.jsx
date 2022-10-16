import React from 'react';
import Stack from 'react-bootstrap/esm/Stack';

function Meme({ name, imageUrl }) {
    return (
        <Stack className="col-12 col-sm-6 col-md-3 p-1 border">
            <img src={imageUrl} alt={name} />
            <p className="mt-auto">{name}</p>
        </Stack>
    );
};

export default Meme;