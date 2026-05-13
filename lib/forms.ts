import xss from "xss"
import { db } from "@/initdb";
import { SqliteError } from "better-sqlite3";

type Form = {
    firstName: string;
    lastName: string;
    country: string;
    email: string;
    thoughts: string;
};

export function saveForm(form: Form) {
    form.firstName = xss(form.firstName);
    form.lastName = xss(form.lastName);
    form.country = xss(form.country);
    form.email = xss(form.email);
    form.thoughts = xss(form.thoughts);

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

    console.log(form);

    const surveys = db.prepare(`
        SELECT * FROM surveys
    `).all();

    console.log(surveys);
}