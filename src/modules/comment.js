import { createAction, handleActions } from 'redux-actions';
import { apis } from '../shared/api';

// action
const ADD = 'comment/ADD';
const LOAD = 'comment/LOAD';
const DELETE = 'comment/DELETE';
const EDIT = 'comment/EDIT';

// action creator
const addComment = createAction(ADD, (comment) => ({comment}));
const getComments = createAction(LOAD, (comment) => ({comment}));
const delComment = createAction(DELETE, (coId) => ({ coId }));
const editComment = createAction(EDIT, (coId, newContent) => ({
	coId,
	newContent,
}));

// Thunk function
export const __commentAdd = (id, content) =>
	async (dispatch) => {
		try {
			const { data } = await apis.addComment(id, content);
			dispatch(addComment(data));
		} catch (e) {}
	};

export const __commentsGet = (id) =>
	async (dispatch, getState, { history }) => {
		try {
			const { data } = await apis.comments(id);
			dispatch(getComments(data));
		} catch (e) {
			// console.log(`코멘트 불러오기 실패! ${e}`);
		}
	};

export const __commentEdit = (id, coId, newContent, setEditMode) => async (dispatch) => {
		const { data } = await apis.editComment(id, coId, newContent);
		dispatch(editComment(coId, data));
		setEditMode(false);
	};

export const __commentDel = (id, coId) => (dispatch) => {
	try {
		apis.delComment(id, coId);
		dispatch(delComment(coId));
	} catch (e) {}
};

// initalState
const initialState = {
	comment: null,
	comments: [],
	message: ''
};

// reducer
export default handleActions(
	{
		[ADD]: (state, action) => {
			return {
				...state,
				message: action.payload.comment.message,
			};
		},
		[LOAD]: (state, action) => {
			return {
				...state,
				comments: action.payload.comment.review
			};
		},
		
		[EDIT]: (state, action) => {
			// 배열에서 특정값을 찾아서 불변성 유지하면서 수정해주기
			const data = action.payload.newContent;
			return {
				...state,
				comments: state.comments.map((comment, idx) => {
					if (comment.id === data.id) {
						return (state.comments[idx] = data);
					} else {
						return comment;
					}
				}),
			};
		},

		[DELETE]: (state, action) => {
			return {
				...state,
				comments: state.comments.filter(
					(comment) => comment.id !== action.payload.coId,
				),
			};
		},
	},
	initialState,
);
