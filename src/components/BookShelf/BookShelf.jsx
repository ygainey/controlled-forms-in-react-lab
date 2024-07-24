import { useState } from 'react';

const BookShelf = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    });

    const handleInputChange = (event) => {
        setNewBook({...newBook, [event.target.name] : event.target.value})
        console.log(newBook)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({
            title: '',
            author: '',
        })

    };
    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='title'>Book Title: </label>
                    <input id='title' name='title' value={newBook.title} onChange={handleInputChange} />
                    <label htmlFor='author'></label>
                    <input id='author' name='author' value={newBook.author} onChange={handleInputChange} />
                    <button type='submit'>Add</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {console.log(books)}
                {books.map((book, index) => {
                    return(
                    <>
                        <h2>Book {index+1}</h2>
                        <p>{book.title}</p>
                        <p>{book.author}</p>
                    </>)
                })}   
            </div>
            
        </div>

    )
};

export default BookShelf