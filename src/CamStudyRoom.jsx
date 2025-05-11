import React from 'react';
import { useParams } from 'react-router-dom';
import AttendancePanel from './AttendancePanel';

const CamStudyRoom = () => {
  const { roomId } = useParams();

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* 좌측: Jitsi */}
      <div style={{ flex: 7 }}>
        <iframe
          src={`https://meet.jit.si/${roomId}`}
          allow="camera; microphone; fullscreen; display-capture"
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Cam Study Room"
        ></iframe>
      </div>

      {/* 우측: 출석 패널 */}
      <div
        style={{
          flex: 3,
          padding: '30px',
          backgroundColor: '#f9f9f9',
          overflowY: 'auto',
          boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)',
        }}
      >
        <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>출석 패널</h2>
        <AttendancePanel />
      </div>
    </div>
  );
};

export default CamStudyRoom;

