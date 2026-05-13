import './globals.css';

// Basic layout file
export default function RootLayout({ children }: {children: React.ReactNode;}) { 
    return ( 
    <html lang='en'> 
        <body>{children}</body> 
    </html> 
    ); 
}