import { useEffect } from 'react';

function handleClickOutside(event, element, handler) {
    if (element && !element.contains(event.target)) {
        handler(false);
    }
}

function useClickOutside(id, handler) {
    useEffect(() => {
        const element = document.getElementById(id);
        const isSupported = element && element.addEventListener;
        if (!isSupported) return;

        const eventListener = (event) =>
            handleClickOutside(event, element, handler);

        window.addEventListener('mousedown', eventListener);
        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('mousedown', eventListener);
        };
    }, [id, handler]);
}

export default useClickOutside;
