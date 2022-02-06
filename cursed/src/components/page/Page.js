import React from 'react';
import { Container, Paper } from '@mui/material';
import './page.css'
import StoryIndex from '../storyIndex/StoryIndex'



const Page = (props) => {
    const { chapters } = props;


    return (
        <Container className="page-container">
            <Paper className="page-paper">
                <StoryIndex chapters={chapters}/>
            </Paper>
        </Container>
    )
}

export default Page;