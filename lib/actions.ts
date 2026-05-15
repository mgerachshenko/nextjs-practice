'use server';
import { redirect } from "next/navigation";
import { saveForm } from "./forms";

function isInvalidText(text: string) {
    return !text || text.trim() === '';
}

export async function submitForm(_prevState: any, formData: FormData) {
        'use server';

        const form = {
            firstName: String(formData.get('firstName')),
            lastName: String(formData.get('lastName')),
            country: String(formData.get('country')),
            email: String(formData.get('email')),
            thoughts: String(formData.get('thoughts')),
        };
        
        if (
            isInvalidText(form.firstName) ||
            isInvalidText(form.lastName) ||
            isInvalidText(form.country) ||
            isInvalidText(form.email) ||
            isInvalidText(form.thoughts) ||
            !form.email.includes('@')
        ) {
            return{
                errorMessage: 'Input is invalid, please try again.',
                successMessage: ''
            }
        }

        await saveForm(form);

        console.log(form);

        redirect('/formsPage');
    }