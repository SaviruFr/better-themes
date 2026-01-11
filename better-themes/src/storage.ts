export interface StorageInterface {
	getItem(key: string): string | null;
	setItem(key: string, value: string): void;
}

class LocalStorageAdapter implements StorageInterface {
	getItem(key: string): string | null {
		try {
			return localStorage.getItem(key);
		} catch {
			return null;
		}
	}

	setItem(key: string, value: string): void {
		try {
			localStorage.setItem(key, value);
		} catch {
			// localStorage might not be available
		}
	}
}

class SessionStorageAdapter implements StorageInterface {
	getItem(key: string): string | null {
		try {
			return sessionStorage.getItem(key);
		} catch {
			return null;
		}
	}

	setItem(key: string, value: string): void {
		try {
			sessionStorage.setItem(key, value);
		} catch {
			// sessionStorage might not be available
		}
	}
}

const localStorageAdapter = new LocalStorageAdapter();
const sessionStorageAdapter = new SessionStorageAdapter();

export const createStorageAdapter = (
	storageType: "localStorage" | "sessionStorage",
): StorageInterface => {
	return storageType === "sessionStorage"
		? sessionStorageAdapter
		: localStorageAdapter;
};
