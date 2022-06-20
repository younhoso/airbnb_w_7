import axios from "axios";

const api = axios.create({
	baseURL: "http://3.34.42.87",
	headers: {
		'content-type': 'application/json;charset=UTF-8',
		accept: 'application/json,',
	},
});

api.interceptors.request.use(function (config) {
	const accessToken = document.cookie.split('=')[1];
	config.headers.common['X-AUTH-TOKEN'] = `${accessToken}`;
	return config;
});

export const apis = {
	signup: (userId, password, passwordCheck, name, birth, gender) => api.post('/api/users/signup', {
		userId,
		password,
		passwordCheck,
		name,
		birth,
		gender
	}),
	dupcheck: (userId) => api.post('/api/users/dup_userId', { userId }),
	login: (userId, password) => api.post('/api/users/login', { userId, password }),
	add: (contents) => api.post('/api/accommodations', contents),
	edit: (id, contents) => api.put(`api/${id}`, contents),
	del: (id) => api.delete(`api/${id}`),
	lookups: () => api.get('/api/'),
	lookup: (id) => api.get(`http://localhost:5001/accommodation/${id}`),
	search: (value) => api.get(`/api/${value}`)
}
