import {useDispatch} from 'react-redux';

import {carActions} from '../../redux';

const Car = ({car}) => {
    const {id, model, price, year} = car;

    const dispatch = useDispatch();

    return (
        <div>
            <p>id: {id}</p>
            <p>model: {model}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update car</button>
            <button onClick={() => dispatch(carActions.deleteCar({id}))}>delete</button>
            <hr/>
        </div>
    );
};

export {Car};