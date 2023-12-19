import { useFetchData } from '~/composables/useFetchData';

export default defineEventHandler(async (event) => {
	return await useFetchData('/teams');
});
