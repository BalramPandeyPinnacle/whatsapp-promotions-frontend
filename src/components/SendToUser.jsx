import React, { useState } from 'react';
import { sendMessageToUser } from '../services/api';
import styles from '../styles/SendToUser.module.css';

function SendToUser() {
  const [phone, setPhone] = useState('');
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');

  const handleSend = async () => {
    if (!phone) {
      alert('Phone number is required!');
      return;
    }
    await sendMessageToUser({ phone, text, imageUrl, pdfUrl });
    alert('Message sent to user!');
  };

  return (
    <div className={styles.container}>
      <h2>Send Message to User</h2>
      <input
        type="text"
        placeholder="Phone Number (with country code)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
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

export default SendToUser;
