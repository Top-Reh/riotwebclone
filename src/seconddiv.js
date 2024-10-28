import React from 'react';
import { adsmoredata } from './adsmoredata';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Oneads = styled(motion.div)`
  &:hover {
      box-shadow: 0 8px 16px rgb(31, 31, 31);
    }
`;

const Seconddiv = () => {
  return (
    <div className='seconddiv'>
      <div className='happening'>
        <h1>What's happening?</h1>
        <button>SEE MORE</button>
      </div>
      <div className='secondads'>
        <div className='adsfirst'>
          
          <a href='https://www.youtube.com/watch?v=xi10SuaE49I'><div className='happeningimg'></div></a>
          <h2>Find a Worlds 2024 Watch Party Near You</h2>
          <div className='lolnews'>
            <span class="icon lolicon" aria-hidden="true" style={{width:'39px',height:'39px',lineHeight:'21px'}}>
              <svg viewBox="0 0 20 20" fill="none" style={{width:'20px'}}>
                <path d="M10.901 2.674c3.55.457 6.299 3.57 6.299 7.341a7.52 7.52 0 0 1-.994 3.749h-1.903a5.88 5.88 0 0 0 .897-1.493 5.908 5.908 0 0 0 .442-2.256c0-.785-.149-1.543-.442-2.255a5.817 5.817 0 0 0-1.209-1.844 5.588 5.588 0 0 0-3.09-1.623V2.674zM5.408 15.711v-2.328a5.953 5.953 0 0 1-.609-1.112 5.91 5.91 0 0 1-.441-2.256c0-.785.148-1.543.441-2.255.163-.396.367-.77.609-1.112V4.316a7.456 7.456 0 0 0-2.608 5.7 7.448 7.448 0 0 0 2.608 5.694zM9.825 2H5.697l.79 1.657v12.705L5.708 18h9.355l.853-3.131h-6.09V2z" fill="#C28F2C"></path>
              </svg>
            </span>
            <h6>NEWS</h6>
          </div>
        </div>
        <div className='adsmore'>
        {
          adsmoredata.map(data => (
            
            
            <Oneads className='oneads'
              initial={{y:0}}
              animate={{y:5}}
              whileHover={{ y: -5 }} 
              transition={{ duration: 2, type: 'spring', stiffness: 70 }}
            >
              <a href='https://www.riotgames.com/en/news/worlds-watch-parties-list-2024'>
              <div className='oneadstext'>
                <h6>{data.title}</h6>
                <div className='oneadstextlogo'>
                  <span class="icon lolicon" aria-hidden="true" style={{width:'30px',height:'30px',lineHeight:'21px'}}>
                    {data.logo}
                  </span>
                  <h6>{data.text}</h6>
                </div>
              </div>
              <img src={data.image}></img>
              </a>
            </Oneads>
          ))
        }
        </div>
      </div>
    </div>
  )
}

//<img src='https://www.riotgames.com/darkroom/1000/773b7704606501a148fd450c6319c282:7310e5f5a3026648d0942268d24d568b/54059618374-38677da016-o.png'></img>

export default Seconddiv
