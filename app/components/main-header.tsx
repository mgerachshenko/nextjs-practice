import Link from "next/link";

// Main home header at the top of forms and submitForm pages
export default function MainHeader(){
    return (
        <header className="bg-black text-white p-4">
            <Link href="/">
                <h1 className="text-2xl font-bold hover:text-teal-400 transition">
                    Home
                </h1>
            </Link>
        </header>
    );
}