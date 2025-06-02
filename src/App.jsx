import { useEffect, useState } from 'react';

function App() {
  const [todayEvent, setTodayEvent] = useState(null);

  useEffect(() => {
    fetch('/nannohi_all.json')
      .then(res => res.json())
      .then(data => {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const todayStr = `${month}/${day}`;
        const match = data.find(item => item.date === todayStr);
        setTodayEvent(match);
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>にっちょくアプリ</h1>
      {todayEvent ? (
        <>
          <h2>{todayEvent.title}</h2>
          <p>{todayEvent.description}</p>
        </>
      ) : (
        <p>今日はなんの日か見つかりませんでした。</p>
      )}
    </div>
  );
}

export default App;
