import React from "react";

import { Container, Paper, List, ListItem, Button} from '@mui/material';

const Chapters = (props) => {
    const { chapters } = props;

    const _renderTitles = (item, index) => {
        return (
            <List key={index} className="index-list">
                <ListItem className="index-item">
                    <Button className="index-button">
                        {console.log(props)}
                
                    </Button>
                </ListItem>
            </List>
        )

    }
    return (
        <Container className="index-container">
                <h2>Contents</h2>
                {console.log(props)}
        </Container>
    )
}

export default Chapters;