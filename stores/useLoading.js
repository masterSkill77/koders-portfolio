import { defineStore } from 'pinia';

export const useLoading = defineStore('loading', () => {
	const loading = ref(true);
	const setLoading = (load) => {
		loading.value = load;
	};
	return {
		setLoading,
		loading,
	};
});
