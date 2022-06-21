// post.js
import { apis } from "../shared/api";
import axios from "axios";
import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// Actions
const GETPOST = "post/GETPOST"

// Action Creators
const getPost = createAction(GETPOST, (postList) => ({ postList }))

const initialState = {
    list: []
}

// middlewares
export const getpostDB = (category) => {
    console.log(category)
    if (category) {
        return function (dispatch, getState, { history }) {
            axios.get(`http://3.34.42.87/api/accommodations/category/${category}`)
                .then((res) => {
                    dispatch(getPost(res.data))
                }).catch((error) => {
                    console.log(error)
                })
        }
    }
    // 전체목록 가져오기
    return function (dispatch) {
        apis.get()
            .then((res) => {
                dispatch(getPost(res.data))
            })
            .catch((err) => {
                console.error(err)
            })
    }
}

export default handleActions(
    {
        [GETPOST]: (state, action) => produce(state, (draft) => {
            draft.list = action.payload.postList
        }),
    },
    initialState
)