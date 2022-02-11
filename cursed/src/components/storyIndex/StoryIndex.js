import React, { useState } from "react";
import './storyIndex.css';
import { Container, List, ListItem, Button} from '@mui/material';


const StoryIndex = (props) => {
    const { chapters } = props;
    // console.log(chapters[0 + 1])

    const [header, setHeader ] = useState();
    let newBodyArray = [];
    let newChapter = [];
    
    

    const clear = () => {
        setDisplay();
        newBodyArray = [];
        newChapter = [];
    }
    
    const nextItem = (item, index) => {
        index += 1;
        console.log(chapters.indexOf(item))
        let i = chapters.findIndex(chapter => chapter.id === index);
        console.log(i)
        if(i >= 1 && i <= chapters.length ) {
            console.log('this chapter', chapters[i])
            console.log('this chapter title:', chapters[i].title)
            console.log('this chapter body:', chapters[i].body)
            let storyBody = chapters[i].body;
            clear()
            newChapter.push(chapters[i])
            newBodyArray.push(storyBody);
            
            
            
        }
        return (
            _renderNextChapter(item, index)
            )
        }
        const _renderNextChapter = (item, index) => {
        
            console.log(item);
            console.log(newChapter)
            setHeader(newChapter[0].title)
            
 
            return(
                <Container key={index}>
                { newBodyArray }
                <Button onClick={() => {
                    setDisplay(chapters.map(_renderTitles))
                    setHeader('Index')
                }
                }
                > Back to Index </Button>
            <Button onClick={() => setDisplay(nextItem(item, index))}> Next Chapter </Button>
        </Container>
        )
    }

    const _renderChapter = (item, index) => {
        
        setHeader(item.title);
        return (
            <Container key={index}>
                {item.body}
                {/* {console.log(chapters[item + 1])} */}
                <Button onClick={() => {
                    setDisplay(chapters.map(_renderTitles))
                    setHeader('Index')
                }
                }
                > Back to Index </Button>
                    
                <Button onClick={() => { 
                    
                    setDisplay(nextItem(item, index))}}> Next Chapter </Button>
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