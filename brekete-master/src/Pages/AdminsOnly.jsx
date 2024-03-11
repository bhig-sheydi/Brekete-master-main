import React from 'react';
import { useState } from 'react';
import { storage } from '../config/firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

const AdminsOnly = () => {
  const [inpute, setInput] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImg = () => {
    if (inpute === null || loading) return;

    const inref = ref(storage, `song/${inpute.name + v4()}`);

    setLoading(true);

    uploadBytes(inref, inpute)
      .then(() => {
        alert('Song Uploaded');
      })
      .catch((error) => {
        console.error('Error uploading song:', error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <input type="file" onChange={(event) => setInput(event.target.files[0])} />
      <button onClick={uploadImg} disabled={loading}>
        {loading ? 'Uploading...' : 'Add Song'}
      </button>
      {loading && <div><h1>Loading......</h1></div>}
    </div>
  );
};


export default AdminsOnly;