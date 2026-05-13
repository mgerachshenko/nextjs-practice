import Header from './components/header';
import Link from 'next/link';

export default function HomeScreen(){ 
    return ( 
    <main>
        <Header />
        <p>Submit a form <Link href="/submitForm"> here</Link></p>
        <p>View previous forms <Link href="/forms"> here</Link></p>
    </main>
); 
}