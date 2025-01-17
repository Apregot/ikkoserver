import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', {
	state: () => {
		return {
			collection: {}
		};
	},
	getters: {
		getById: (state) => {
			return (categoryId) => state.collection[categoryId];
		}
	},
	actions: {
		setCategories(categories)
		{
			this.collection = { ...categories };
		},
	}
})
