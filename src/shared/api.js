import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:5001",
	headers: {
		'content-type': 'application/json;charset=UTF-8',
		accept: 'application/json,',
	},
});

api.interceptors.request.use(function(config) {
	const accessToken = document.cookie.split('=')[1];
	config.headers.common['X-AUTH-TOKEN'] = `${accessToken}`;
	return config;
});

export const apis = {
	add: (contents) => api.post('/api/accommodations', contents),
	edit: (id, contents) => api.put(`api/${id}`, contents),
	del: (id) => api.delete(`api/${id}`),
	lookups: () => api.get('/accommodation'),
	lookup: (id) => api.get(`/accommodation/${id}`),
	search: (value) => api.get(`/api/${value}`),

	// comment
	addComment: (id, content) => api.post(`/api/${id}`, { content }),
	comments: (id) => api.get(`/reviews/${id}`),
	editComment: (id, content) => api.put(`/api/${id}`, { content }),
	delComment: (id) => api.delete(`/api/${id}`),
}
