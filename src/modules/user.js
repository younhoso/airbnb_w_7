// user.js
import { apis } from "../shared/api";
import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// Actions
const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";

const initialState = {
    user: null,
    is_login: false,
};

// Action Creators
const loginUser = createAction(LOGIN, (user) => ({ user }))
const logOutUser = createAction(LOGOUT, (user) => ({ user }))

// middlewares
export const signupDB = (userId, password, passwordCheck, name, birth, gender) => {
    console.log(userId, password, passwordCheck, name, birth, gender)
    return async function (dispatch, { history }) {
        apis.signup(userId, password, passwordCheck, name, birth, gender)
            .then((res) => {
                console.log(res)
                window.alert(res.data.message)
                // history.push("/login")
                window.location.assign("/login")
            })
            .catch((error) => {
                console.log(error)
                window.alert(error.response.data.errorMessage)
            })
    }
}

// 아이디 중복체크
export const idcheckDB = (userId) => {
    return async function (dispatch, getState, { history }) {
        apis.dupcheck(userId)
            .then((res) => {
                console.log(res)
                window.alert(res.data.message)
            })
            .catch((error) => {
                console.log(error)
                window.alert(error.response.data.errorMessage)
            })
    }
}

//로그인
export const loginDB = (userId, password) => {
    return function (dispatch, getState, { history }) {
        apis.login(userId, password)
            .then((res) => {
                console.log("로그인정보", res)
                localStorage.setItem("token", res.data.token);
                dispatch(loginUser({ userId, password }))
                window.alert("환영합니다:)")
                window.location.assign("/")
            })
            .catch((error) => {
                console.log("로그인에러", error)
                window.alert(error.response.data.errorMessage)
            })
    }
}

export const loginCheck = () => {
    return function (dispatch) {
        const userToken = localStorage.getItem("token");
        if (userToken) {
            dispatch(loginUser({ userToken }));
        }
    };
};


//로그아웃
export const logoutDB = () => {
    return function (dispatch, getState, { history }) {
        localStorage.clear();
        dispatch(logOutUser());
        window.alert("로그아웃 됐습니다")
        history.push("/")
    }
}

// Reducer
export default handleActions(
    {
        [LOGIN]: (state, action) =>
            produce(state, (draft) => {
                draft.user = action.payload.user;
                draft.is_login = true;
            }),
        [LOGOUT]: (state, action) =>
            produce(state, (draft) => {
                draft.user = {};
                draft.is_login = false;
            })
    },
    initialState
)

const actionCreators = {
    signupDB,
}

export { actionCreators };