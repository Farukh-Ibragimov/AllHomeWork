import logo from './logo.svg';
import './App.css';
import Description from "./components/description/Description";
import AboutPage from "./pages/aboutPage/AboutPage";
import MainPage from "./pages/mainPage/MainPage";
import TodosPage from "./pages/todosPage/TodosPage";

function App() {
  return (
    <div className="App">
      <AboutPage/>
      <MainPage/>
      <TodosPage/>
    </div>
  );
}

export default App;
