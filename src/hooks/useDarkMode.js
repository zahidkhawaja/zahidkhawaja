import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage("darkmode", false);

    useEffect(() => {
        // If "darkmode" value is true, add the "dark-mode" class to body. If false, remove the "dark-mode" class
        return value ? document.body.classList.add("darkmode") : document.body.classList.remove("darkmode");
        // We are adding "value" to the dependency array below to run this side effect anytime the state changes
    }, [value]);

    return [value, setValue];
}