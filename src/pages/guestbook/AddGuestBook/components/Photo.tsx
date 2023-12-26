import React from 'react';
import { Link } from 'react-router-dom';

const Photo = () => {
  return (
    <div>
      Photo Page
      <Link to="/add-guestbook/desc">다음</Link>
    </div>
  );
};

export default Photo;