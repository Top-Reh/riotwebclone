import React from 'react'

const Firstdiv = () => {
  return (
    <div className='firstdiv'>
      <div className='firstdivitems'>
        <img src="https://www.riotgames.com/darkroom/500/1fb874b4fd56bcfc9b3375e471b89150:18cb199391c6a3634193352f8533fce5/sm-sugar-logo-600px.png" alt="Arcane In-Game Preview: Come Play" />
        <h3>Arcane In-Game Preview:<br></br> Come Play</h3>
        <h5>Arcane's coming to all of Riot's games-- <br></br>learn how and when right here.</h5>
        <button className="shadow__btn">
            <a href='https://www.youtube.com/watch?v=rR5vyzjGwmk'>
            <i className="bi bi-arrow-right-circle-fill"></i>
            Watch Now</a>
        </button>
      </div>
    </div>
  )
}

export default Firstdiv
