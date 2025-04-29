import React, { useState } from 'react';
import { uploadUsers } from '../services/api';
import styles from '../styles/UploadCSV.module.css';

function UploadCSV() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert('Please select a file.');
    
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      const rows = text.split('\n');
      const headers = rows[0].split(',').map(h => h.trim());
      const users = rows.slice(1).map(row => {
        const values = row.split(',');
        const user = {};
        headers.forEach((h, idx) => user[h] = values[idx]?.trim());
        return user;
      });
      await uploadUsers(users);
      alert('Users uploaded successfully!');
    };
    reader.readAsText(file);
  };

  return (
    <div className={styles.container}>
      <h2>Upload Users (CSV)</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadCSV;
