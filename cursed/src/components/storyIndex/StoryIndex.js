import React, { useState } from "react";
import './storyIndex.css';
import { Container, List, ListItem, Button} from '@mui/material';


const StoryIndex = (props) => {
    const { chapters } = props;

    const [header, setHeader ] = useState('Index');

    const _renderChapter = (item, index) => {
        
        setHeader(item.title);
        return (
            <Container key={index}>
                {item.body}
                {console.log(item.title)}
                <Button onClick={() => setDisplay(chapters.map(_renderTitles))}> Back to Index </Button>
            </Container>
        )
    }

    const _renderTitles = (item, index) => {

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