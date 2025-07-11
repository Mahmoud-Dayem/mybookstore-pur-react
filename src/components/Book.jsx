 
import { NavLink } from "react-router-dom"
export default function Book({book}) {
    
 

  return (
    <NavLink to={`/book/${book.id}`}>
        <div className="book">
            {
                book.isRead && 
                <div className="readIt">
                    <i className="fa-solid fa-eye"></i>
                </div>
            }
            
            <div className="book-cover">
                <img src={book.cover} alt={book.title} />

                <button className={book.isRead ? 'isRead' : ''}>
                    <i className="fa-solid fa-eye"></i>
                    <span>{ book.isRead ? "Already Read It" : "Haven't Read it yet" }</span>
                </button>
            </div>

            <div className="book-details">
                <p className="book-author">{ book.author }</p>
                <h3 className="book-title">{ book.title }</h3>
            </div>
        </div>

    </NavLink>
  )
}