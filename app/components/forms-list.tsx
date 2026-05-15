import { getForms } from "@/lib/forms";
import FormsGrid from "./forms-grid";

export default async function FormsList() {
    const forms = await getForms();

    return <FormsGrid forms={forms} />;
}