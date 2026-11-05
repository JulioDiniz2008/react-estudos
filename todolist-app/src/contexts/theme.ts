import IconSun from '/images/icon-sun.svg';
import MoonIcon from '/images/icon-moon.svg';


export const themeConfig = {
    light: {
        name: 'light',
        layout: {
            heroClass: 'theme-light',
            backgroundColor:
            'bg-purple-100',
            textColor: 'text-gray-300'
        },
        todo: {
            backgroundColor: 'bg-gray-50',
            borderColor: 'border-gray-600',
            textColor: 'text-navy-950'
        },
        icon: MoonIcon
    },
       dark: {
        name: 'dark',
        layout: {
            heroClass: 'theme-dark',
            backgroundColor:
            'bg-navy-950',
            textColor: 'text-gray-600'
        },
        todo: {
            backgroundColor: 'bg-navy-900',
            borderColor: 'border-gray-600',
            textColor: 'text-purple-300'
        },
        icon: IconSun
    },
};