// const baseURL = 'http://gestion.koders.mg/wp-json/api/v1';
const baseURL = 'http://localhost/coders/index.php/wp-json/api/v1';
export const useFetchData = async (request) => {
	return await $fetch(baseURL + request);
};
