import './globals.css';

export const metadata = {
    title: 'PttP Tools',
    description: 'Perth to the Peak Tools & Services',
};

const RootLayout = ({ children }) => {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
