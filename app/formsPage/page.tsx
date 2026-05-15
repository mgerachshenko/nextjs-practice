import MainHeader from "../components/main-header";
import { getForms } from "@/lib/forms";
import FormsList from "../components/forms-list";
import { Suspense } from "react";

export default async function FormsPage(){ 
    return ( 
    <main>
        <MainHeader/>
        <p>Here's all your forms!</p>
        <Suspense fallback={<p>Loading forms...</p>}>
                <FormsList />
            </Suspense>
    </main>
); 
}