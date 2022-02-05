import React, { useState, useEffect } from "react";
import './storyIndex.css';
import { Container, Paper, List, ListItem, Button} from '@mui/material';
import Chapters from '../chapters/Chapters'

const StoryIndex = (props) => {
    const { chapters } = props;

    const { currentPage, handlePageChange } = props;

    const [header, setHeader ] = useState('Hi');

    

    const _renderChapter = (item, index) => {
        
        setHeader(item.title);
        return (
            <div key={index}>
                {item.body}
                {console.log(item.title)}
            </div>
        )
    }

    const _renderTitles = (item, index) => {
        useEffect(() => {
            setHeader("Index")
        }, [])
       
        
        return (
            <List key={index} className="index-list">
                
                <ListItem className="index-item">
                    <Button className="index-button" onClick={() => setDisplay(_renderChapter(item, index))}>
                        {item.title}
                
                    </Button>
                </ListItem>
            </List>
        )

    }
    const [display, setDisplay] = useState(chapters.map(_renderTitles) );
    return (
        <Container className="index-container">
                <h2>{header}</h2>
                { display }
        </Container>
    )
}

export default StoryIndex;