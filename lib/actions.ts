'use server';
import { saveForm } from "./forms";

export async function submitForm(formData: FormData) {
        'use server';

        const form = {
            firstName: String(formData.get('firstName')),
            lastName: String(formData.get('lastName')),
            country: String(formData.get('country')),
            email: String(formData.get('email')),
            thoughts: String(formData.get('thoughts')),
        };

        await saveForm(form);

        console.log(form);
    }