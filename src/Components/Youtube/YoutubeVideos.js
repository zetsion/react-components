import React,{useState,useEffect} from 'react'
import "../../css/YoutubeVideos..css"

function YoutubeVideos() {

const[youtubeVideos, setVideos]=useState([])
useEffect(()=>{
    fetch(
    "https://www.googleapis.com/youtube/v3/search?key=AIzaSyD1SrJfo-Kicjn2Hcs1vZ6lbwJc0gXZjUs&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8"
  )
    .then((response) => response.json())
    .then((data) => {
      const youTubeVideosList = data.items;
      setVideos(youTubeVideosList);
    }).catch((err)=>{
        console.log(err);
    })
},[]);

    console.log(youtubeVideos);
    
  return (
    <div className="YoutubeVideosWraper">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper">Lates YouTube Vidoes
              </div>
           </div>

           {youtubeVideos.map((singleVid)=>{
            const vidId =singleVid.id.videoId;
            const vidLink =`https://www.youtube.com/watch?v=${vidId}`
            const title =singleVid.snippet.title;
            const desc =singleVid.snippet.description;
            // const thumb=singleVid.snippet.snippet.thumbnails.high.url;
            let vidWrapper=(
                <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="SingleVideoWrapper">
                  <div className="VideoThumbnail">
                     <a href={vidLink} target='_blank'><img src={singleVid.snippet.thumbnails.high.url} /></a>
                  </div>
                <div className="VideoInfoWrapper">
                  <div className="VideoTitle">
                    <a href="" target='_blank'>{title}</a>
                  </div>
                  <div className="VideoDescription">
                   <a href='#' target='_blank'>{desc}</a>
                  </div>
                </div>
                </div>
              </div>

            )   
            return vidWrapper
           })}
      </div>
      </div>
      </div>
  )
}

export default YoutubeVideos