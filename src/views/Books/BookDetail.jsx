import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Book from '../../components/book/Book'
import { getBookById } from '../../services/books'

function BookDetail() {
  // const id = useParams() // TODO: Use id from route
  const [book, setBook] = useState(null)
  const { booksId } = useParams()

  useEffect(() => {
    getBookById(booksId).then(({ data }) => setBook(data))
  }, [booksId])

  if (!book) return <h3>Loading book...</h3>

  return (
    <>
      <Book book={book} showDetail />
      <p>Book Detail: {booksId} </p>
      <p>
        <Link to="../books">Back to Catalog</Link>
      </p>
    </>
  )
}

export default BookDetail
