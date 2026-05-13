import MainHeader from "../components/main-header";

export default function SubmitForm() {
    return (
        <>
            <MainHeader/>
            <header>
                <h1>Survey</h1>
                <p>Tell Us What You Think of One More Time Part 2</p>
            </header>

            <main className="min-h-screen flex flex-col items-center justify-center">
                <form>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                    />
                    <br/>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required
                    />
                    <br/>
                    <textarea
                        name="description"
                        placeholder="Your answer"
                        rows={6}
                        required
                    />
                    <br/>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </main>
        </>
    );
}