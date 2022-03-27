import React, { useEffect, useState } from 'react';

export default function App() {
  const [scrollTop, setScrollTop] = useState();
  const [scrolling, setScrolling] = useState();

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  useEffect(() => {
    console.log(scrolling);
  }, [scrolling]);

  return (
    <div>
      {Array(50)
        .fill('foo')
        .map((a, i) => {
          return <p key={i}>{a}</p>;
        })}
    </div>
  );
}

