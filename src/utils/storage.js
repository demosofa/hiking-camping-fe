export const setStorage = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = (key) => {
	const value = localStorage.getItem(key);
	if (!value) return null;
	return JSON.parse(value);
};

export const removeStorage = (key) => localStorage.removeItem(key);
