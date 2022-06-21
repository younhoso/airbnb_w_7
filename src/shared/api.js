import axios from "axios";

const api = axios.create({
<<<<<<< HEAD
	// baseURL: "http://localhost:5001",
=======
>>>>>>> 3cc811e1f78e27c379bd23e4f3d4851411b1aafe
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

	// post
	get: (postList) => api.get('/api/accommodations/', postList),
	add: (contents) => api.post('/api/accommodations', contents),
	edit: (id, contents) => api.put(`api/${id}`, contents),
	del: (id) => api.delete(`/api/${id}`),
	lookups: () => api.get('/accommodation'),
	lookup: (id) => api.get(`/api/accommodations/${id}`),
	search: (value) => api.get(`/api/${value}`),

	// comment
	addComment: (id, content) => api.post(`/api/${id}`, { content }),
	comments: (id) => api.get(`/api/reviews/${id}`),
	editComment: (id, content) => api.put(`/api/${id}`, { content }),
	delComment: (id) => api.delete(`/api/${id}`),
	
	// images
	addImages : function (content){ 
		console.log(content)
		return api.post(`/api/images`, content)
	}
}
