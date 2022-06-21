// import { createAction, handleActions } from 'redux-actions';
// import produce from 'immer';
// import { apis } from '../shared/api';

// const PREVIEW = 'image/PREVIEW';
// const UPLOAD = 'image/UPLOAD';

// const setPreview = createAction(PREVIEW, (preview) => ({preview}));
// const imageUpload = createAction(UPLOAD, (imageUrl) => ({imageUrl}));

// // Thunk function
// export const imageAdd = (content) => {
// 	console.log(content)
// 	return function (dispatch, getState, { history }) {
// 		apis
// 			.addImages(content)
// 			.then(() => {
// 				dispatch(imageUpload(content));
// 				history.push('/');
// 			})
// 			.catch((err) => {
// 				window.alert('로그인한 회원만 작성할 수 있습니다!');
// 			});
// 	};
// };

// const initialState = {
// 	imageUrl: null,
// 	preview: null,
// }

// // reducer
// export default handleActions({
// 	[UPLOAD]: (state, action) =>
// 		produce(state, (draft) => {
// 			draft.imageUrl = action.payload.imageUrl;
// 		}),
// 	[PREVIEW]: (state, action) =>
// 		produce(state, (draft) => {
// 			draft.preview = action.payload.preview;
// 		}),
// 	initialState,
// })