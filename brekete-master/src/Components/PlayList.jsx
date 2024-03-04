
import { useContext } from "react"
import PlayerContext from "../Components/PlayerContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCirclePlay, faDownload , faHeart} from "@fortawesome/free-solid-svg-icons";
import "../Components/PlayList.css"


import React from 'react';


const PlayList = () => {

  // const {albumList, currentAlbum, setCurrentAlbum} = useContext(PlayerContext)

  const {currentSong, setCurrent , albumList, currentAlbum} = useContext(PlayerContext)

  console.log(albumList[currentAlbum]. AlbumCuntent)
  console.log(albumList[currentAlbum].AlbumCuntent[currentSong])


  


  // Inside the same component or context
const handleDownload = (fileUrl,title) => {
  // Create a temporary anchor element
  const downloadLink = document.createElement('a');
  downloadLink.href = albumList[currentAlbum].AlbumCuntent[currentSong].FileUrl;
  downloadLink.download = getFileNameFromUrl(albumList[currentAlbum].AlbumCuntent[currentSong].FileUrl); // You need to implement getFileNameFromUrl function
  downloadLink.download = getFileNameFromTitle(title); 
  downloadLink.click();





  console.log('Downloading:', fileUrl);
  console.log('File Name:', getFileNameFromUrl(fileUrl));
};


const getFileNameFromTitle = (title) => {
  return `${albumList[currentAlbum].AlbumCuntent[currentSong].title}`; // You can customize the file name format here
};

const getFileNameFromUrl = (url) => {
  if (url) {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 1];
  }
  return 'unknown_filename';
};

  return (
  
        <ul className='playList'>
          
      {
        albumList[currentAlbum].AlbumCuntent.map((songs, i)=>{
            return <li className={'listContainer ' + (currentSong === i ? "selected" : "") }
            key={i}
            onClick={()=>setCurrent(i)}
            
            >
              <div className='div1'> 
                    <FontAwesomeIcon icon={faCirclePlay}/>
              </div>

              <div className='div2'>
                  <span>{songs.title}</span>
                  <span>{songs.Artist}</span>
              </div>

              <div className='div3'>
                  <FontAwesomeIcon icon={faHeart}/>
                  <FontAwesomeIcon icon={faDownload}  title={`Download ${songs.title}`}  onClick={() => handleDownload(songs.FileUrl, songs.title)}/>
                
              </div>
            </li>
        })
      }
        </ul>
    
  )
}

export default PlayList
