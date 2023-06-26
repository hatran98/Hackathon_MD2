import './App.css';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoContact from './components/InfoContact';
import { useState } from 'react';

function App() {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [contact, setContact] = useState({
    name: '?',
    email: '?',
    phone: '?',
    email: '?',
  })
  console.log(contact)
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <div style={{ backgroundColor: 'darkblue', width: '20%' }}>
        <InfoContact contact={contact} />
      </div>
      <div style={{ width: '40%', textAlign: 'left', marginLeft: '30px' }} >
        <Contact info={info} setInfo={setInfo} setContact={setContact} />
      </div>

    </div>
  );
}

export default App;
