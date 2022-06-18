import axios from "axios";

const api = axios.create({
	baseURL: "http://3.34.42.87",
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
	lookups: () => api.get('/api/'),
	lookup: (id) => api.get(`/api/${id}`),
	search: (value) => api.get(`/api/${value}`),
	
}
