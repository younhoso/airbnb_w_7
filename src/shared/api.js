import axios from "axios";

const api = axios.create({
	baseURL: "http://3.34.42.87",
	headers: {
		'Content-type': 'application/json;charset=UTF-8',
		accept: 'application/json,',
	},
});

api.interceptors.request.use((config)=> {
	config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
	return config;
}, (err) => {
	return Promise.reject(err);
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

	// post
	get: (postList) => api.get('/api/accommodations', postList),
	add: (contents) => api.post('/api/accommodations', contents),
	edit: (id, contents) => api.put(`/api/accommodations/${id}`, contents),
	del: (id) => api.delete(`/api/accommodations/${id}`),
	lookups: () => api.get('/accommodation'),
	lookup: (id) => api.get(`/api/accommodations/${id}`),
	search: (value) => api.get(`/api/${value}`),

	// comment
	addComment: (id, content) => api.post(`/api/reviews/${id}`, content),
	comments: (id) => api.get(`/api/reviews/${id}`),
	editComment: (id, content) => api.put(`/api/${id}`, { content }),
	delComment: (id) => api.delete(`/api/${id}`),
}
