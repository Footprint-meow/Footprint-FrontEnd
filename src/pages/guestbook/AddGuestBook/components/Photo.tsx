import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { IGuesetBookState } from "../../interfaces";

const Photo = () => {
  const { guestbook, setGuestbook } = useOutletContext<IGuesetBookState>();

  console.log("photo: ", guestbook);
  // const location = useLocation();
  // const receivedData = location.state;
  // console.log(receivedData);
  // const { guestbook, setGuestbook } = receivedData;

  // console.log(
  //   "[In Photo] guestbook: ",
  //   guestbook,
  //   " setGuestbook: ",
  //   setGuestbook
  // );
  return (
    <div>
      Photo Page
      <Link to="/add-guestbook/desc">다음</Link>
    </div>
  );
};

export default Photo;
