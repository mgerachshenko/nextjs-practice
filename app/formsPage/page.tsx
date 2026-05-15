import MainHeader from "../components/main-header";
import { getForms } from "@/lib/forms";
import FormsGrid from "../components/forms-grid";

export default async function FormsPage(){ 
    const forms = await getForms();

    return ( 
    <main>
        <MainHeader/>
        <p>Here's all your forms!</p>
        <FormsGrid forms={forms}/>
    </main>
); 
}