import * as api from '../api'

export const getFood = () => async (dispatch) => {
    try {
        const { food } = await api.getFood();

        dispatch({ type: 'FETCH', payload: food ? food : null });
    } catch (e) {
        console.log(e.message);
    }
}
