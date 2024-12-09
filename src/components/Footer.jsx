import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className='flex items-center justify-center my-2'>
            All Rights reserved to @Fatema Islam Prima {currentYear}
        </footer>
    );
};

export default Footer;