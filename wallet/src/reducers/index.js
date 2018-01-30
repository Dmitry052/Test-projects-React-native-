import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import MainFormReducer from './MainFormReducer';
import UserProfile from './UserProfile';

export default combineReducers({
    auth: AuthReducer,
    main: MainFormReducer,
    user: UserProfile,
});