import Header from '../components/Header.jsx';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function AddBookPage() {
    const navigate = useNavigate()
    const pageTitle = "Add Book";
   const AddBookHandler=(e)=>{
    e.preventDefault();
    alert('book added');
    navigate("/")
   }

   const booksnew = useSelector(state=>state.addbook.books)
   console.log('xxxxxxxxxxxxxxx',booksnew);
   

    return (
      <>
        <div className="container">
            <Header pageTitle={pageTitle} />

            <form className="add-form" onSubmit={AddBookHandler}>
                <div className="form-control">
                    <label>Title *</label>
                    <input type="text" name="title" placeholder="Add Book Title" />
                </div>
                <div className="form-control">
                    <label>Book Cover *</label>
                    <input type="text" name="cover" placeholder="Add Cover" />
                </div>

                <div className="form-control">
                <label>Author *</label>
                <input
                    type="text" name="author" placeholder="Add Author" />
                </div>

                <div className="form-control">
                <label>Synopsis *</label>
                <textarea
                    type="text" name="synopsis" placeholder="Add a synopsis..." />
                </div>
                
                <button type='submit' className="btn btn-block">Save Book</button>
            </form>

        </div>

        
      </>
    )
  }
  
  export default AddBookPage
  