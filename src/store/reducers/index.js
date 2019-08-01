import { combineReducers } from 'redux';

import content from './content';
import blog from './blog';

const rootReducer = combineReducers({
    content,
    blog,
});

export default rootReducer;
