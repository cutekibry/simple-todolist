import './App.css'  
import TodoList from './Todolist.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <div className="app">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App
