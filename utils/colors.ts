const light = {
    background: 'gray-200',
    highContrast: 'gray-900',
    mediumContrast: 'gray-700',
    lowContrast: 'gray-600',
};

const dark = {
    background: 'slate-900',
    highContrast: 'slate-200',
    mediumContrast: 'slate-400',
    lowContrast: 'slate-500',
}

export const colors = {
    background: `bg-${light.background} dark:bg-${dark.background}`,
    body: `text-${light.mediumContrast} dark:text-${dark.mediumContrast}`,
    heading: `text-${light.highContrast} dark:text-${dark.highContrast}`,
}

