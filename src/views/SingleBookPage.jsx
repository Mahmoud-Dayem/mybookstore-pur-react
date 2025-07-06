import { use } from 'react';
import Notes from '../components/Notes.jsx'
import { useParams } from 'react-router-dom';
import {books} from './BooksPage'
import { NavLink } from 'react-router-dom';
function SingleBookPage() {
    const {id} = useParams();
    const book = books.find(book=>book.id===Number(id)) 
    console.log(id);
    
    console.log(book);
    
    
 
    
    return (
      <>
        <div className="container">
          <NavLink to ='/'>

                <button className="btn">
                    ← Back to Books
                </button>
          </NavLink>
            
            <div className="single-book">
                    <div className="book-cover">
                        <img src={book.cover} />
                    </div>

                    <div className="book-details">
                        <h3 className="book-title">{ book.title }</h3>
                        <h4 className="book-author">{ book.author }</h4>
                        <p>{book.synopsis}</p>
                        <div className="read-checkbox">
                            <input type="checkbox" defaultChecked={book.isRead} />
                            <label>{ book.isRead ? "Already Read It" : "Haven't Read it yet" }</label>
                        </div>
                        <div className="erase-book">
                            Erase book
                        </div>
                    </div>
            </div>

            <Notes />

        </div>

        
      </>
    )
  }
  
  export default SingleBookPage
  