import React from 'react'
import ReactDOM from "react-dom"

//css
import './index.css';

const books = [{
  id:1,
  title: "Blessed Monsters: A Novel (Something Dark and Holy)",
  author: "DuncanEmily A. Duncan",
  img: "https://images-na.ssl-images-amazon.com/images/I/51JYBIooo3L._AC_SX368_.jpg"
},
{
  id:2,
  title: "Gathering Dark",
  author: "CANDICE FOX",
  img: "https://images-na.ssl-images-amazon.com/images/I/51BlTo5rKoL._AC_SX368_.jpg"
},
{
  id:3,
  title: "Crave",
  author: " Tracy Wolff ",
  img: "https://images-na.ssl-images-amazon.com/images/I/417FqUFOMcL._AC_SX368_.jpg"
}
]
const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book)=>{
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book " >
      <img src={img} alt="book" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  )
}

ReactDOM.render(
  <BookList />,
  document.getElementById('root')
)

