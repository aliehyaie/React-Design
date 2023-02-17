/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            black: '#000000',
            primary: '#1D82DD',
            'primary-dark': '#1767AF',
            'primary-darker': '#114C81',
            secondary: '#ffa41c',
            error: '#DC362E',
            'error-bg': '#FFFBF9',
            'error-bg-dark': '#FEF6F6',
            success: '#00BDB1',
            'success-bg': '#1DDDD708',
            warning: '#ffa41c',
            'warning-bg': '#fff2df',
            'warning-bg-dark': '#FFFAF3',
            info: '#1D82DD',
            'info-bg': '#F8FAFD',
            'info-bg-dark': '#F3F7FB',
            'info-bg-darker': '#E8F0F7',
            disabled: '#D3D9DD',
            text: '#041320',
            grey: {
                1: '#F7F8FA',
                2: '#E9ECEE',
                3: '#F9F9FB',
                4: '#7A8C9A',
                5: '#566571',
                6: '#F2F3F5',
                7: '#677887',
                8: '#9BA9B3',
                9: '#FBFBFC',
            },
        },
        screens: {
            '3xl': { max: '1650px' },
            // => @media (max-width: 1650px) { ... }

            '2xl': { max: '1440px' },
            // => @media (max-width: 1440px) { ... }

            xl: { max: '1280px' },
            // => @media (max-width: 1280px) { ... }

            lg: { max: '1024px' },
            // => @media (max-width: 1024px) { ... }
        },
        extend: {
            transitionProperty: {
                width: 'width',
                height: 'height',
            },
            flex: {
                2: '2 2 0%',
            },
            fontSize: {
                '2xs': '10px',
            },
            maxWidth: {
                886: '886px',
            },
        },
    },
    plugins: [],
};
