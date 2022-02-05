import React, { useState } from 'react';
import { Container, Paper } from '@mui/material';
import './page.css'
import StoryIndex from '../storyIndex/StoryIndex'
import Chapters from '../chapters/Chapters'


const Page = (props) => {
    const { chapters } = props;
    const [currentPage, setCurrentPage] = useState('StoryIndex');

    const _pageRender = () => {
        if (currentPage === 'Chapters') {
            return <Chapters chapters={chapters} />
        } else {
            return <StoryIndex 
                chapters={chapters}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                />
        }
    }
    const handlePageChange = (page) => setCurrentPage
    return (
        <Container className="page-container">
            <Paper className="page-paper">
                {_pageRender()}
            </Paper>
        </Container>
    )
}

export default Page;