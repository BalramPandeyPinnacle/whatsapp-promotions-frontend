import React from 'react';
import UploadCSV from './components/UploadCSV';
import CreateGroup from './components/CreateGroup';
import SendMessage from './components/SendMessage';
import SendToUser from './components/SendToUser';

function App() {
  return (
    <div>
       <SendToUser />
      <UploadCSV />
      <CreateGroup />
      <SendMessage />
    </div>
  );
}

export default App;
