import React, { useState, useEffect } from 'react';
import { sendMessage, getUsers } from '../services/api';
import styles from '../styles/SendMessage.module.css';

function SendMessage() {
  const [groupId, setGroupId] = useState('');
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [groups, setGroups] = useState([]);

  const handleSend = async () => {
    await sendMessage({ groupId, text, imageUrl, pdfUrl });
    alert('Message sent successfully!');
  };

  useEffect(() => {
    // Fetch groups if you build it (for now enter groupId manually)
  }, []);

  return (
    <div className={styles.container}>
      <h2>Send Message</h2>
      <input
        type="text"
        placeholder="Group ID"
        value={groupId}
        onChange={(e) => setGroupId(e.target.value)}
      />
      <textarea
        placeholder="Message Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL (optional)"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="PDF URL (optional)"
        value={pdfUrl}
        onChange={(e) => setPdfUrl(e.target.value)}
      />
      <button onClick={handleSend}>Send Message</button>
    </div>
  );
}

export default SendMessage;
