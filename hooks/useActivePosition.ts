import { useEffect, useState } from 'react';

const useActivePosition = (sectionIds: string[]) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            
            sectionIds.forEach((sectionId) => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(sectionId);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sectionIds]);

    return {activeSection, setActiveSection};
};

export default useActivePosition;
