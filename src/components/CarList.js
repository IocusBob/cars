import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {removeCar} from '../store';
import { formReducer } from '../store/slices/formSlice';

const CarList = () => {
  const dispatch = useDispatch();
  const {cars, name} = useSelector(({form, cars: {data, searchTerm}}) => {
    const filteredCars =  data.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))

    return {
      cars: filteredCars,
      name: form.name
    }
  });
  

const handleCarDelete = car =>{
  dispatch(removeCar(car.id));
}

  const renderedCars = cars.map(car => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {car.name} - £{car.cost}
        </p>
        <button onClick={() => handleCarDelete(car)} className='button is-danger'>
          Delete
        </button>
      </div>
    )
  })

  return (
    <div className='car-list'>
      {renderedCars}
      <hr />
    </div>
  )
}

export default CarList;