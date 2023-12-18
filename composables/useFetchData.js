export const useFetchData = async (request) => {
	return await $fetch(import.meta.env.VITE_API_BASE_URL + request);
};
