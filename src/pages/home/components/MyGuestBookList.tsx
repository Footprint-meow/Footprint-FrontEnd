import AddGuestBookBtn from "./AddGuestBook";

const MyGuestBookList = () => {
  const guestbooks = ["원쥬의 홈", "사무실"];

  if (guestbooks.length < 3) {
    guestbooks.push("add");
  }

  return (
    <div className="flex flex-col items-start justify-between px-7 py-5 h-1/3 w-screen overflow-x-auto whitespace-nowrap">
      <p className="text-xl font-bold pb-4">나의 방명록</p>
      <div>
        <ul className="flex gap-4">
          {guestbooks.map((book, index) =>
            book !== "add" ? (
              <li key={index}>
                <div className="w-32 h-32 overflow-hidden rounded-full">
                  <img
                    src="/src/assets/dummy1.png"
                    alt="dummy"
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="pt-2">{book}</p>
              </li>
            ) : (
              <AddGuestBookBtn key={index} />
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default MyGuestBookList;
