import { useState } from "react";

const startingBooks = [
  { title: "Fourth Wing", author: "Rebecca Yarros" },
  { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
];

const BookShelf = () => {
  const [books, setBooks] = useState(startingBooks);
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const clickHandler = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <label>
          Title:
          <input type="text" name="title" onChange={changeHandler} />
        </label>
        <br />
        <label>
          Author:
          <input type="text" name="author" onChange={changeHandler} />
        </label>
        <br />
        <button onClick={clickHandler}>Add Book</button>
      </div>
      <div className="bookCardsDiv">
        {books.map((book) => (
          <div className="bookCard">
            <h2>{book.title}</h2>
            <p>by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookShelf;
