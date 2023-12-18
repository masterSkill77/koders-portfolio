// import { useAuth } from './../stores/useAuth';

export const useFetchData = async (request, options) => {
	return await useFetch(request, {
		baseURL: import.meta.env.VITE_API_BASE_URL,
		...options,
		onRequest({ request, options }) {
			options.headers = options.headers || {};
			if (process.client) {
				options.headers.accept = 'application/json';
			}
		},
	});
};
