import React from 'react'
import "./Home.css"
const HomeComponent = () => {
  return (
    <>
        <div className="home_container lg:flex-col ">
            <div className="introduction">
              <div className="intro_text flex-1">

                <h2>Here we have come up with best Clothing <br/> Store you've Ever visited</h2>
            
              </div>
              <div className="intro_img  flex-1">
                <img src="/fashion1.jpeg" alt=""  />
              </div>
            </div>
        </div>
    </>
  )
}

export default HomeComponent