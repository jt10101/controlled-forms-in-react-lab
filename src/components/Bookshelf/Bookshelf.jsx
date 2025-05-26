import { useState } from "react";

startingBooks = [
  { title: "Fourth Wing", author: "Rebecca Yarros" },
  { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
];

const BookShelf = () => {
  const [books, setBooks] = useState(startingBooks);
  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form>
          <input type="text" name="bookTitle"></input>
        </form>
      </div>
      <div className="bookCardsDiv">{/* Book cards will display here */}</div>
    </div>
  );
};

export default BookShelf;
