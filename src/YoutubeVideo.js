import React from 'react'

const YoutubeVideo = (props) => {
  const src = `https://www.youtube.com/embed/${props.src}?rel=0`
  return(
    <div class="video-responsive">
      <iframe width="560" height="315" src={src} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  )
}


export default YoutubeVideo
