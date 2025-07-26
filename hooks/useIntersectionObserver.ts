import { useState, useEffect, useRef } from 'react';

export const useIntersectionObserver = (options: IntersectionObserverInit): [React.RefObject<HTMLElement>, IntersectionObserverEntry | null] => {
    const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setEntry(entry);
                observer.unobserve(node);
            }
        }, options);

        observer.observe(node);

        return () => {
            if (node) {
                observer.unobserve(node);
            }
        };
    }, [options]);

    return [ref, entry];
};
