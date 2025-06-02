import React, { useEffect, useState } from 'react';
import nannohiData from './nannohi.json';

function NannohiApp() {
  const [todayInfo, setTodayInfo] = useState(null);

  useEffect(() => {
    const today = new Date();
    const mmdd = today.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
    });

    const info = nannohiData.find((item) => item.date === mmdd);
    setTodayInfo(info);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>にっちょくアプリ</h1>
      {todayInfo ? (
        <>
          <h2>{todayInfo.name}</h2>
          <p>{todayInfo.description}</p>
        </>
      ) : (
        <p>今日はなんの日か見つかりませんでした。</p>
      )}
    </div>
  );
}

export default NannohiApp;
