import ReactPlayer from 'react-player';
import React, { useRef } from 'react';


function PlayerComponent({ videoUrl}) {
   const playerRef = useRef(null);
   return (
      <>
         <ReactPlayer ref={playerRef} url={videoUrl} controls={true} width= '100%'
   height= '100%'/>
      </>
   )
};
export default PlayerComponent;