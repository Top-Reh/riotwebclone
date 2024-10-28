import React,{useState,useRef} from 'react';
import { thirddivdata } from './thirddivdata';

const Thirddiv = () => {
  const containerRef = useRef(null);
  const [activeleft,setActiveleft] = useState(true);
  const [activeright,setActiveright] = useState(false);

  const scrollleft =() => {
    containerRef.current.scrollBy({left:-2000,behavior: 'smooth'});
    setActiveleft(true);
    setActiveright(false)
  }

  const scrollright =() => {
    containerRef.current.scrollBy({left:2000,behavior: 'smooth'});
    setActiveleft(false);
    setActiveright(true)
  }

  return (
    <div className='thirddiv'>
      <div className='gamediv'>
        <h1>Games</h1>
        <div className='adsdivgame'>
          {
            thirddivdata[0].map((items, index) => (
              <div className="gamedivads" key={index} style={{backgroundImage: `url(${items.image})`}} >
                <a href='https://www.leagueoflegends.com/en-gb/'>
                <div className="logoandplay" >
                  <img src={items.logo} alt="Game Logo" />
                  <div className="companycanplay">
                    {items.icons.map((icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        dangerouslySetInnerHTML={{ __html: icon }}
                        className="icon-container"
                      />
                    ))}
                  </div>
                </div> </a>
                
              </div>
            ))
          }
        </div>
        <h1>Esports</h1>
        <div className='adsdivgame' style={{height:'30%'}}>
          {
            thirddivdata[1].map((items,index)=> (
              <div className="gamedivads" key={index} style={{backgroundImage: `url(${items.image})`}}>
                
                <a href='https://lolesports.com/en-US/'>
                <div className="logoandplay" >
                  <img src={items.logo} alt="Game Logo" />
                </div></a>
              </div>
            ))
          }
        </div>
        <h1>Entertainment</h1>
        <div className='adsdivgame' style={{height:'30%'}}>
          {
            thirddivdata[2].map((items,index)=> (
              <div className="gamedivads" key={index} style={{backgroundImage: `url(${items.image})`}}>
                
                <a href='https://www.arcane.com/en-gb/'>
                <div className="logoandplay" >
                  <img src={items.logo} alt="Game Logo" />
                </div></a>
              </div>
            ))
          }
        </div>
        <div className='riotlastads'>
          <h1>Riot Forge</h1>
          <div className='leftandrightarr'>
            <i onClick={scrollleft} className="bi bi-arrow-left leftarrscroll" style={{color: activeleft? 'white' :'gray'}}></i>
            <i onClick={scrollright} className="bi bi-arrow-right leftarrscroll" style={{color: activeright? 'white' :'gray'}}></i>
          </div>
        </div>
        <div className="adsdivforge" ref={containerRef}>
          {
            thirddivdata[3].map((items, index) => (
              <div
                key={index}
                className={`gamedivadslast ${index > 2 ? 'gthan3' : 'sthan3'}`}
                style={{ backgroundImage: `url(${items.image})` }}
              >
                <a href='https://www.bandletale.com/en-us/'>
                <div className="logoandplay">
                  <img src={items.logo} alt="Game Logo" />
                  <div className="companycanplay">
                    {items.icons.map((icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        dangerouslySetInnerHTML={{ __html: icon }}
                        className="icon-container"
                      />
                    ))}
                  </div>
                </div></a>
              </div>
            ))
          }
        </div>
        <div className='lastdots'>
          <i onClick={scrollleft} className="bi bi-dot scrollleftbtn" style={{color: activeleft? 'red' :'gray'}}></i>
          <i onClick={scrollright} className="bi bi-dot scrollleftbtn" style={{color: activeright? 'red' :'gray'}}></i>
        </div>
      </div>
    </div>
  )
}

export default Thirddiv
