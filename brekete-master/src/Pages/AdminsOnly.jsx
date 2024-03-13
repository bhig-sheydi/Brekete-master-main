import React, { useState } from 'react';
import { storage } from '../config/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import "../Components/test.css"
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

const AdminsOnly = () => {
  const AlbumCollectionRef = collection(db, 'AlbumMetaData');
  const [inpute, setInput] = useState([]);
  const [inputeImg, setInputImg] = useState(null); // Changed to single file input
  const [loading, setLoading] = useState(false);
  const [downloadURLs, setDownloadURLs] = useState([]);
  const [albumTitle, setAlbumTitle] = useState("");
  const [SongTitle, SetSongTitle] = useState("");
  const [songsArray, setSongsArray] = useState([]);
  const [artist, setArtist] = useState("");

  const GetSongsT = (e) => {
    SetSongTitle(e.target.value);
  };



  const onSongAdd = async() => {

            await addDoc(AlbumCollectionRef, {albumImageUrl:inputeImg, albumTitle: albumTitle, artist:artist})

  }

  const getSongsArr = () => {
    setSongsArray([...songsArray, SongTitle]);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    setInput(Array.from(files)); // Convert FileList to an array
  };

  const handleFileChangeImg = (event) => {
    setInputImg(event.target.files[0]); // Accept single file
  };

  const uploadFiles = async () => {
    if (inpute.length === 0 || loading) return;

    setLoading(true);

    const promises = [];
    const urls = [];

    inpute.forEach((file) => {
      const storageRef = ref(storage, `${albumTitle}/${file.name + v4()}`);
      promises.push(
        uploadBytes(storageRef, file)
          .then((snapshot) => {
            return getDownloadURL(snapshot.ref);
          })
          .then((url) => {
            urls.push(url);
          })
      );
    });

    // Handle image upload separately
    if (inputeImg) {
      const imgStorageRef = ref(storage, `${albumTitle}/${inputeImg.name + v4()}`);
      promises.push(
        uploadBytes(imgStorageRef, inputeImg)
          .then((snapshot) => getDownloadURL(snapshot.ref))
          .then((url) => urls.push(url))
      );
    }

    Promise.all(promises)
      .then(async () => {
        setDownloadURLs(urls);
        alert('Songs Uploaded');

        // Add songs and image URLs to database
        const albumData = {
          artist,
          albumTitle,
          songs: songsArray,
          albumImageUrl: urls.find(url => url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png'))
        };

        const docRef = await addDoc(AlbumCollectionRef, albumData);
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error('Error uploading songs:', error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className='general'>
      <div className='general2'>
        <label htmlFor="">Add songs in correct order</label>
        <input type="file" onChange={handleFileChange} accept="audio/*" multiple />
        <label htmlFor="">Add Album Art In Correct Order</label>
        <input type="file" onChange={handleFileChangeImg} accept="image/*"  multiple/>
        <label htmlFor="">Add Artist</label>
        <input type="text" onChange={(e) => setArtist(e.target.value)} />
        <label htmlFor="">Add Album Title</label>
        <input type="text" onChange={(e) => setAlbumTitle(e.target.value)} />
        <label htmlFor="">Add SongTitle</label>
        <input type="text" onChange={GetSongsT} />
        <button onClick={getSongsArr}>Add Song Title</button>
        <button onClick={uploadFiles} disabled={loading}>
          {loading ? 'Uploading...' : 'Add Songs'}
        </button>
        {loading && <div><h1>Loading......</h1></div>}
        {downloadURLs.length > 0 && (
          <div className='mm'>
            <h2>Download URLs:</h2>
            {downloadURLs.map((url, index) => (
              <p key={index}>{url}</p>
            ))}
          </div>
        )}
      </div>
      <div className='general3'>
        <h1>Your Song Order</h1>
        <h4>Cross Check All Your Songs Before Adding Title</h4>
        {songsArray.map((songT, index) => (
          <ul key={index}>
            <li>{songT}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default AdminsOnly;
