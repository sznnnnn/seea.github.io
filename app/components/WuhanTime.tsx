'use client';
import { useState, useEffect } from 'react';

const WuhanTime = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Shanghai',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      };

      const wuhanTime = new Date().toLocaleString('zh-CN', options);
      setTime(wuhanTime);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return <span>{time}</span>;
};

export default WuhanTime; 