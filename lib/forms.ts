import { db } from "@/initdb";
import type { Form } from '@/lib/types';

// Saves submitted form to the SQlite database
export function saveForm(form: Form) {
    // Inserts use data into "surveys" table
    db.prepare(`
        INSERT INTO surveys
        (firstName, lastName, country, email, thoughts)
        VALUES (
            @firstName,
            @lastName,
            @country,
            @email,
            @thoughts
        )
    `).run(form);

    // Logs form into terminal
    console.log(form);

    // Fetches all surveys from the database
    const surveys = db.prepare(`
        SELECT * FROM surveys
    `).all();

    // Logs all surveys to the server console
    console.log(surveys);
}

// Function for adding a simulated loading delay and 
// fetching all surveys from surveys table to prepare to display on forms page
export async function getForms(){
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return db.prepare('SELECT * FROM surveys').all() as Form[];
}