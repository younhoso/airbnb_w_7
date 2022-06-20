import {createAction, handleActions} from "redux-actions";
import produce from "immer";
import { apis } from "../shared/api";

// action
const LOAD = 'lodgment/LOAD';
const LOAD_ID = 'lodgment/LOAD_Id';
const ADD_LODGMENT = 'lodgment/ADD_LODGMENT';
const EDIT = 'lodgment/EDIT';
const SEARCH = 'lodgment/SEARCH';

// action creator
const loadLodgments = createAction(LOAD, (lodgments) => ({lodgments}));
const loadLodgmentGetId = createAction(LOAD_ID, (id) => ({id}));
const addLodgment = createAction(ADD_LODGMENT, (lodgments) => ({lodgments}));
const editLodgment = createAction(EDIT, (id, newLodgment) => ({
	id,
	newLodgment,
}));
const searchLodgment = createAction(SEARCH, (lodgments) => ({ lodgments }));

// Thunk function
// 데이터 서버로 전송
export const lodgmentAdd = (content) => {
	console.log(content)
	return function (dispatch, getState, { history }) {
		apis
			.add(content)
			.then(() => {
				dispatch(addLodgment(content));
				history.push('/');
			})
			.catch((err) => {
				window.alert('로그인한 회원만 작성할 수 있습니다!');
			});
	};
};

// 해당 id의 데이터를 서버에 전송(수정).
export const lodgmentEdit = (id, newLodgment) =>
	async (dispatch, getState, { history }) => {
		try {
			await apis.edit(id, newLodgment);
			dispatch(editLodgment(id, newLodgment));
			history.goBack();
		} catch (e) {
			// console.log(e);
		}
	};

// 전체 데이터 받아옴.
export const lodgmentsGet = () => 
	async (dispatch, getState, {history}) => {
		try {
			const { data } = await apis.lookups();
			dispatch(loadLodgments(data));
		} catch (e) {
			// console.log(`아티클 조회 오류 발생!${e}`);
		}
	};

// 해당 id의 데이터 받아옴.
export const lodgmentGetId = (id) =>
	async (dispatch, getState, { history }) => {
		try {
			const { data } = await apis.lookup(id);
			dispatch(loadLodgmentGetId(data.accommodation));
		} catch (e) {
			// console.log(`개별 아티클 조회 오류 발생!${e}`);
		}
	};

// 검색 데이터 받아옴.
export const lodgmentSearch = (value) => {
	return function (dispatch, getState, { history }) {
		apis
			.search(value)
			.then((res) => {
				dispatch(searchLodgment(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

// 해당 id의 데이터 삭제.
export const lodgmentDel = (id) =>
	async (dispatch, getState, { history }) => {
		try {
			await apis.del(id);
			history.replace('/');
		} catch (e) {}
	};

// initialState
const initialState = {
	photos: [],
	category: '',
  accName: '',
	openAt: '',
	closeAt: '',
	address: '',
  desc1_hanmadi: '',
	desc2_surroundings: '',
	desc3_notice: '',
	desc4_basics: '',
	facilities: [],
	charge: 0,
  rating: 0,
}

// reducer
export default handleActions(
	{
		[LOAD]: (state, action) => {
			return {
				...state,
				list: action.payload.lodgments,
			};
		},
		[LOAD_ID]: (state, action) => {
			return {
				...state,
				lodgment: action.payload.id,
			};
		},
		[ADD_LODGMENT]: (state, action) =>
			produce(state, (draft) => {
				draft.list.push(action.payload.lodgments);
			}),
		[EDIT]: (state, action) => {
			return {
				...state,
				// 상태관리할 필요가 없는 것 같다...
			};
		},
		[SEARCH]: (state, action) =>
			produce(state, (draft) => {
				draft.list = action.payload.lodgments;
			}),
	},
	initialState,
);

const articleActions = {
	lodgmentAdd,
};

export { articleActions };
