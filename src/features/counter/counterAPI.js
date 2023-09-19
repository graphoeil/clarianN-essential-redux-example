// Mock amount function
export const fetchCount = (amount = 1) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			return resolve({ data:amount });
		}, 3000);
	})
};