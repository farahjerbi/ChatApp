import { useState } from 'react';
import {Browser , Routes , Navigate , Route, BrowserRouter} from "react-router-dom";
import Chat from './components/chat';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Routes>
      <Route path="/chat" element={<Chat />} />
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
