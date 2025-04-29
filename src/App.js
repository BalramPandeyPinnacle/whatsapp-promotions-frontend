import React from 'react';
import UploadCSV from './components/UploadCSV';
import CreateGroup from './components/CreateGroup';
import SendMessage from './components/SendMessage';

function App() {
  return (
    <div>
      <UploadCSV />
      <CreateGroup />
      <SendMessage />
    </div>
  );
}

export default App;
