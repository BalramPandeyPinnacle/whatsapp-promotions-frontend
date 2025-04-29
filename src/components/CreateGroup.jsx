import React, { useState } from 'react';
import { createGroup } from '../services/api';
import styles from '../styles/CreateGroup.module.css';

function CreateGroup() {
  const [groupName, setGroupName] = useState('');
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');

  const handleCreate = async () => {
    const criteria = {};
    if (city) criteria.city = city;
    if (category) criteria.category = category;

    await createGroup({ name: groupName, criteria });
    alert('Group created successfully!');
  };

  return (
    <div className={styles.container}>
      <h2>Create Group</h2>
      <input
        type="text"
        placeholder="Group Name"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={handleCreate}>Create Group</button>
    </div>
  );
}

export default CreateGroup;
