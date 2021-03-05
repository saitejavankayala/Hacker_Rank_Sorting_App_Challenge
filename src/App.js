import React,{useState} from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
const [sorted,setSorted]=useState(0);
let a1=()=>{
  if(sorted===0){
    return articles.sort((a,b)=>(b.upvotes>a.upvotes)?1:((a.upvotes>b.upvotes)?-1:0));
  }else{
    return articles.sort((a,b)=>(new Date(b.date)>new Date(a.date))?1:((new Date(a.date)>new Date(b.date) )?-1:0))
  }
}
articles=a1();
    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={()=>setSorted(0)}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={()=>setSorted(1)}>Most Recent</button>
            </div>
            <Articles articles={articles}/>
        </div>
    );

}

export default App;
