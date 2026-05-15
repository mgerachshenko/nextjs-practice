import MainHeader from "../components/main-header";
import { submitForm } from "@/lib/actions";

export default function SubmitFormPage() {
    const countries = [
        "Canada",
        "United States",
        "Mexico"
    ];

    return (
        <>
            <MainHeader />
            <main className="min-h-screen flex flex-col items-center justify-center text-center">
                <header className="mb-3">
                    <h1 className="text-5xl font-bold">
                        Survey
                    </h1>

                    <p className="mt-2">
                        Tell Us What You Think of One More Time Part 2!
                    </p>
                </header>
                <form className="flex flex-col gap-4 w-[300px]" action={submitForm}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Your first name"
                        required
                        className="border p-2 rounded"
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Your last name"
                        required
                        className="border p-2 rounded"
                    />
                    <select
                        name="country"
                        className="border p-2 rounded"
                    >
                        {countries.map((country) => (
                            <option key={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required
                        className="border p-2 rounded"
                    />
                    <textarea
                        name="thoughts"
                        placeholder="Your thoughts"
                        rows={6}
                        required
                        className="border p-2 rounded "
                    />
                    <button
                        type="submit"
                        className="bg-teal-500 text-white p-2 rounded hover:bg-teal-700 transition"
                    >
                        Submit
                    </button>

                </form>
            </main>
        </>
    );
}