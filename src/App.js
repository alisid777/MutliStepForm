import React, {useState} from 'react';


import './App.css';
import Page1 from './Form/Page1';
import Page2 from './Form/Page2';
import Page3 from './Form/Page3';






function App() {
  const [page, setPage] = useState(1)

  return (
    <div className="container mt-4">
      <center>
        <h2>Multi Step Form</h2>
        <p>page {page} / 3</p>
      </center>

      <div>

        {page == 1 ? <Page1/> : page == 2 ? <Page2/> : page == 3 ? <Page3/> : null}

        <center>

          {
            page > 1 && (
            <button className='btn btn-primary mx-4' onClick={()=>{
            const nextPage = page-1;
            setPage(nextPage);
            }}>Prev</button>
            )
          }
          {
            page < 3 && (
              <button className='btn btn-primary' onClick={()=>{
                const nextPage = page+1;
                setPage(nextPage);
              }}>Next</button>
            )
          }

        </center>


      </div>
      
      

</div>
  );
}

export default App;
