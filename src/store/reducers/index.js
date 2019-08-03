import { combineReducers } from 'redux';

import content from './content';
import blog from './blog';
import user from './user';

const rootReducer = combineReducers({
    content,
    blog,
    user,
});

export default rootReducer;
