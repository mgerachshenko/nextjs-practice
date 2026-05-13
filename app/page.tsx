import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/blinkLogo.png';

export default function HomeScreen() {
    return (
        // min-h-screen centers hori, flex flex-col centers diag,items-center hor
        <main className="min-h-screen flex flex-col items-center justify-center">
            <div>
            <Image 
                src={Logo}
                alt="Blink-182 logo"
                width={120}
                height={120}
            />
            </div>
            <h1 className="text-5xl font-bold mb-6">
                Blink-182 Survey
            </h1>
            <div className="flex gap-4">
                <Link
                    href="/submitForm"
                    className="bg-teal-500 px-4 py-2 rounded-lg hover:bg-teal-700 transition text-white"
                >
                    Submit Your Form
                </Link>
                <br />
                <Link
                    href="/forms"
                    className="bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-700 transition text-white"
                >
                    View Your Surveys
                </Link>
            </div>
        </main>
    );
}