import React from 'react'
import { Link } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import './footer.css';




const Footer = () => {

    return (
        <footer id="footer">

            <div>
                <Link className="footer-links" href="https://github.com/HeatMarie" target="_blank">
                <GitHubIcon style={{ fontSize: 40 }}></GitHubIcon>

                </Link>
                <Link className="footer-links" href="https://www.linkedin.com/in/heather-bjoin-bb833761/" target="_blank">
                <LinkedInIcon style={{ fontSize: 40 }}></LinkedInIcon>

                </Link>
                <Link className="footer-links" href="https://heatmarie.com/" target="_blank">
                <BookOutlinedIcon style={{ fontSize: 40 }}></BookOutlinedIcon>

                </Link>
            </div>
            <div className="footer">
            <p className="footer-h3">Where i<span className='magic'>mag</span>inat<span className="magic">i</span>on be<span className='magic'>c</span>omes</p>
            <p className="footer-span">reality</p>
            <p className="footer-p"> { '\u00A9' } Heather Bjoin</p>
            </div>
        </footer>
    )
}

export default Footer