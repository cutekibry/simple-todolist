import './App.css'  
import TodoList from './components/TodoList.jsx';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

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
