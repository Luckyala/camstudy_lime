import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AttendancePanel from './AttendancePanel';
import CamStudyRoom from './CamStudyRoom';

const HomePage = () => {
  const createRoom = () => {
    const roomId = Math.random().toString(36).substring(2, 8);
    window.location.href = `/room/${roomId}`;
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>Cam Study 홈페이지</h1>
      <button
        onClick={createRoom}
        style={{
          fontSize: '20px',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '8px',
          backgroundColor: '#4f46e5',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        스터디방 만들기
      </button>

      <div style={{ marginTop: '40px' }}>
        <AttendancePanel />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room/:roomId" element={<CamStudyRoom />} />
      </Routes>
    </Router>
  );
}

export default App;



