import { useState } from "react";

const startingBooks = [
  { title: "Fourth Wing", author: "Rebecca Yarros" },
  { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
];

const BookShelf = () => {
  const [books, setBooks] = useState(startingBooks);
  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <label>
          Title:
          <input type="text" name="bookTitle" />
        </label>
        <br />
        <label>
          Author:
          <input type="text" name="bookAuthor" />
        </label>
        <br />
        <button>Add Book</button>
      </div>
      <div className="bookCardsDiv">
        {startingBooks.map((book) => (
          <div className="bookCard">
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookShelf;
