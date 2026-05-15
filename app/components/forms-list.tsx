// forms-list.tsx: FETCHING DATA AND HANDLIGN SERVER LOGIC

import { getForms } from "@/lib/forms";
import FormsGrid from "./forms-grid";

// Async server component for fetching survey data
export default async function FormsList() {
    // Imported function that gets all survey forms from the SQLite database
    const forms = await getForms();

    // Returns the forms in a styled grid formation via formsGrid component
    return <FormsGrid forms={forms} />;
}