import React from "react"

import "./layout.css"

const Footer = () => (
  <footer className="pa4 mt5 w-100 flex gray-d justify-between flex-column flex-row-ns">
    © 2021 Jonatas Guerci Maia

  <div>
    {/* <a className='ma2 gray-d underline-link' target="_blank" href="mailto: tasgmaia@gmail.com"> tasgmaia@gmail.com </a> */}
    <a className='ma2 gray-d underline-link' target="_blank" href="https://medium.com/@tasguerci"> Medium </a>
    <a className='ma2 gray-d underline-link' target="_blank" href="https://github.com/tasgmaia"> Github </a>
    <a className='ma2 gray-d underline-link' target="_blank" href="https://dribbble.com/tasguerci"> Dribbble </a>
    <a className='ma2 gray-d underline-link' target="_blank" href="https://www.linkedin.com/in/tasguerci/"> Linkedin </a>
  </div>
  </footer>
)
export default Footer