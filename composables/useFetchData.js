const baseURL = 'https://gestion.koders.mg/wp-json/api/v1';
export const useFetchData = async (request) => {
	return await $fetch(baseURL + request);
};
