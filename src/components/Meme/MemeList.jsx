import React, { useState, useEffect } from 'react';
import Meme from './Meme';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack'

function MemeList() {
    const [memeData, setMemeData] =  useState([]);
    const [loading, setLoading] = useState(false);

    const getMemeList = async () => {
        setLoading(true);
        await fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(res => setMemeData(res.data.memes))
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        });
    };

    const handleGenerateMemeList = () => {
        getMemeList();
    };

    useEffect(() => {
        getMemeList();
    }, []);

    return (
        <Container fluid>
            <h1>Meme Gallery</h1>
            <Button 
                variant="primary" 
                size="sm" 
                onClick={() => handleGenerateMemeList()}
                className="mb-4"
            >
                Generate meme list
            </Button>
            <Stack direction="horizontal" style={{ flexWrap: 'wrap' }}>
            {
                !loading ? memeData.map(meme => 
                    <Meme 
                        key={meme.id} 
                        name={meme.name} 
                        imageUrl={meme.url}
                    />
                ) :  <p>Loading...</p>
            }
            </Stack>

        </Container>
    );
};

export default MemeList;