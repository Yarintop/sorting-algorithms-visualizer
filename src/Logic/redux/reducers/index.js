import arrayReducers from './arrayReducers';

import { combineReducers } from "redux";

export default combineReducers({
    array: arrayReducers,
});

export {
    arrayReducers
}