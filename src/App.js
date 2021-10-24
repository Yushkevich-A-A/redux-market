import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import FormAddGoods from './components/FormAddGoods/FormAddGoods';
import GoodsList from './components/GoodsList/GoodsList';
import { serviceTriggerForm } from './actions/actions';

function App() {
  const { open } = useSelector( state => state.serviceOpen);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(serviceTriggerForm(true));
  }

  return (
    <div className="App app-container">
      {open && <FormAddGoods />}
      <button className='button-add-goods' onClick={handleClick}>Добавить товар</button>
      <GoodsList />
    </div>
  );
}

export default App;
