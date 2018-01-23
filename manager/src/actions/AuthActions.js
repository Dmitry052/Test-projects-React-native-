import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    SET_EMAIL,
    SET_PASSWORD,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from "./types";

export const emailChanged = (text) => {
    return {
        type: SET_EMAIL,
        data: text
    }
}

export const passwordChanged = (pass) => {
    return {
        type: SET_PASSWORD,
        data: pass
    }
}

export const loginUser = ({ email, password }) => {
    return(dispatch) => {
        dispatch({ type: LOGIN_USER });
        // loginUserSuccess(dispatch, {});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() =>
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch))
            );
    };
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_USER_SUCCESS, user });
    Actions.employeeList();
}

