import React from 'react'
import "./Footer.css"
import { NavbarLinks } from "@/public/NavbarLinks";
import Link from 'next/link';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="columns-4">
          <div className="company">
            <div className="name">
            CharmNova
            </div>
            <div className="description">
                "CharmNova" is not only a fashion brand but a lifestyle infused with elegance, uniqueness, and a touch of enchantment.
            </div>
          </div>
          <div className="products main-footer-column">
          <div className="title">
            Products
          </div>
          <div className="list">

              <ul>
             <li><Link href="fasion-men">Men's Wear</Link></li>
             <li><Link href="fasion-women">Men's Wear</Link></li>
             <li><Link href="latest">Latest</Link></li>
             <li><Link href="kids">Kid's Wear</Link></li>
            
              </ul>

          </div>

          </div>
          <div className="usefull-links main-footer-column">
          <div className="title">
            Usefull Links
          </div>
          <ul>
             <li><Link href="fasion-men">Your Account</Link></li>
             <li><Link href="fasion-women">Your Orders</Link></li>
             <li><Link href="latest">Favorites</Link></li>
             <li><Link href="kids">Help</Link></li>
            
              </ul>
          </div>
          <div className="contact main-footer-column">
          <div className="title">
           Social
          </div>
          <ul>
             <li><Link href="Facebook">Facebook</Link></li>
             <li><Link href="Telegram">Telegram</Link></li>
             <li><Link href="Instagram">Instagram</Link></li>
             <li><Link href="linkdIn">linkdIn</Link></li>
            
              </ul>
          
          </div>
        </div>




        <div className='Resp-Footer'>

        
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Description</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Mens Wear</Typography>
                  <Typography>Mens Wear</Typography>
                  <Typography>Mens Wear</Typography>
                  <Typography>Mens Wear</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Description</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Mens Wear</Typography>
                  <Typography>Mens Wear</Typography>
                  <Typography>Mens Wear</Typography>
                  <Typography>Mens Wear</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Description</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Mens Wear</Typography>
                  <Typography>Mens Wear</Typography>
                  <Typography>Mens Wear</Typography>
                  <Typography>Mens Wear</Typography>
                </AccordionDetails>
              </Accordion>


        </div>
      </div>
    </>
  )
}

export default Footer