import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';

import {Car} from '../../components';
import {carActions} from '../../redux/slice/car.slice';

const Cars = () => {

    const {cars} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
}

export {Cars};
