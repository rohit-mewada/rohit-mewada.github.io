import React, { FC } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AnimatedSection: FC<{children: React.ReactNode, id: string, className?: string}> = ({ children, id, className = 'section' }) => {
    const [ref, entry] = useIntersectionObserver({ threshold: 0.1 });
    const isVisible = !!entry;

    return (
        <section ref={ref} id={id} className={`${className} ${isVisible ? 'visible' : ''}`}>
            {children}
        </section>
    );
};

export default AnimatedSection;
