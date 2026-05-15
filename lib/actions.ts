'use server';
import { redirect } from "next/navigation";
import { saveForm } from "./forms";
import xss from "xss";

// Checks if a text field is empty or only contains a space
function isInvalidText(text: string) {
    return !text || text.trim() === '';
}

// Server action for handling survey form submissions from the user
export async function submitForm(_prevState: any, formData: FormData) {
        // Form object from the submitted user form data
        const form = {
            firstName: String(formData.get('firstName')),
            lastName: String(formData.get('lastName')),
            country: String(formData.get('country')),
            email: String(formData.get('email')),
            thoughts: String(formData.get('thoughts')),
        };

        // Server side validation for all the fields
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
        
        // Sanitizes user input using xss
        form.firstName = xss(form.firstName);
        form.lastName = xss(form.lastName);
        form.country = xss(form.country);
        form.email = xss(form.email);
        form.thoughts = xss(form.thoughts);

        // Saves the validated form into the database
        await saveForm(form);

        // Logs the form into the terminal for reference
        console.log(form);

        // Redirects user to see the form in the forms page
        redirect('/formsPage');
    }