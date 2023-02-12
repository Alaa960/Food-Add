import './App.css';
import FoodCard from './components/FoodCard';
import FoodInfo from './components/FoodInfo'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<FoodCard/>}/>
        <Route path='/:MealId' element={<FoodInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
