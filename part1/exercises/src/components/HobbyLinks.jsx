

import React from 'react';

function HobbyLinks() {
  const hobbyLinks = [
    'https://en.wikipedia.org/wiki/Video_game',
    'https://mostateparks.com/activity/hiking',
  ];

  return (
    <div>
      <h1>Hobbies</h1>
      <a href={hobbyLinks[0]}>Video games</a>
      <br />
      <a href={hobbyLinks[1]}>Hiking</a>
    </div>
  );
}

export default HobbyLinks;
