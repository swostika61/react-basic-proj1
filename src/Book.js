import React from 'react';

const Book = (props) => {
    const { img, title, author } = props;
  
    const clickHandler=()=>{
      alert("thanks")
    }
  
    return (
      <article className="book " >
        <img src={img} alt="book" />
        <h1>{title}</h1>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}>Buy</button>
      </article>
    )
  }

  export default Book;