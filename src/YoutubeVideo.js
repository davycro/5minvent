import React from 'react'

const YoutubeVideo = (props) => {
  const src = `https://www.youtube.com/embed/${props.src}?rel=0`
  return(
    <div className="video-responsive">
      <iframe width="560" height="315" src={src} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    </div>
  )
}


export default YoutubeVideo
