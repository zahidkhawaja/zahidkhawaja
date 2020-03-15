import { useState } from "react";
// Dark mode preference is stored in local storage
export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        // Get data from local storage and store it
        const localItem = window.localStorage.getItem(key);
        // If there's a stored value, set it as state (keeping the user's preference). If it's null, use the initial value instead
        return localItem ? JSON.parse(localItem) : initialValue;
    });

    const setValue = value => {
        // Save state
        setStoredValue(value);
        // Save to localStorage 
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];
}