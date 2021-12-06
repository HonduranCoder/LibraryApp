import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import './App.css'

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Router>
        <h1>Library Catalog</h1>
        <Switch>
          <Route path="/books/:booksId" component={BookDetail} />
          <Route path="/books" component={BookList} />
        </Switch>
      </Router>
    </main>
  )
}

export default App
