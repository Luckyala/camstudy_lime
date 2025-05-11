import React, { useState } from 'react';
import { auth, db, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const AttendancePanel = () => {
  const [user, setUser] = useState(null);
  const [checkInTime, setCheckInTime] = useState(null);
  const [totalTime, setTotalTime] = useState(0);

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (err) {
      alert("로그인 실패");
    }
  };

  const handleCheckIn = () => {
    setCheckInTime(Date.now());
  };

  const handleCheckOut = async () => {
    if (!checkInTime || !user) return;

    const checkOut = Date.now();
    const duration = Math.floor((checkOut - checkInTime) / 1000); // seconds
    setTotalTime(duration);

    await addDoc(collection(db, 'attendance'), {
      uid: user.uid,
      name: user.displayName,
      checkIn: Timestamp.fromMillis(checkInTime),
      checkOut: Timestamp.fromMillis(checkOut),
      duration: duration
    });

    alert(`총 ${duration}초 동안 공부했어요!`);
    setCheckInTime(null);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      {!user ? (
        <button onClick={login}>Google로 로그인</button>
      ) : (
        <>
          <p>환영합니다, {user.displayName}님</p>
          {!checkInTime ? (
            <button onClick={handleCheckIn}>출석 시작</button>
          ) : (
            <button onClick={handleCheckOut}>퇴장(출석 종료)</button>
          )}
          {totalTime > 0 && <p>이번 세션 시간: {totalTime}초</p>}
        </>
      )}
    </div>
  );
};

export default AttendancePanel;
