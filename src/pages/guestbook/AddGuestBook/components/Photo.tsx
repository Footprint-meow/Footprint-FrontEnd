import React from "react";
import { Link, useLocation } from "react-router-dom";

const Photo = () => {
  const location = useLocation();
  const receivedData = location.state;
  const { guestbook, setGuestbook } = receivedData;

  console.log(
    "[In Photo] guestbook: ",
    guestbook,
    " setGuestbook: ",
    setGuestbook
  );
  return (
    <div>
      Photo Page
      <Link to="/add-guestbook/desc">다음</Link>
    </div>
  );
};

export default Photo;
