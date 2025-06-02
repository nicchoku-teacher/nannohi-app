import React, { useEffect, useState } from 'react';

function NannohiPage() {
  const [today, setToday] = useState('');
  const [dayName, setDayName] = useState('');
  const [nannohi, setNannohi] = useState(null);

  useEffect(() => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const youbi = ['日', '月', '火', '水', '木', '金', '土'][now.getDay()];

    setToday(`れいわ${yyyy - 2018}年${mm}月${dd}日（${youbi}よう日）`);
    setDayName(`${mm}/${dd}`);
  }, []);

  useEffect(() => {
    fetch('/nannohi.json')
      .then(res => res.json())
      .then(data => {
        const match = data.find(item => item.date === dayName);
        setNannohi(match);
      });
  }, [dayName]);

  return (
    <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>今日はなんの日？</h1>
      <p style={{ fontSize: '1.5rem', color: '#1e3' }}>{today}</p>
      {nannohi ? (
        <div>
          <h2 style={{ fontSize: '2rem', marginTop: '1rem' }}>{nannohi.title}</h2>
          <p style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>{nannohi.description}</p>
        </div>
      ) : (
        <p style={{ marginTop: '1rem' }}>データが見つかりませんでした。</p>
      )}
    </div>
  );
}

export default NannohiPage;
