import type { Form } from '@/lib/types';

export default function FormItem({
    firstName,
    lastName,
    country,
    email,
    thoughts
}: Form) {
    return (
        <article>
            <h2>
                {firstName} {lastName}
            </h2>

            <p>{country}</p>
            <p>{email}</p>
            <p>{thoughts}</p>
        </article>
    );
}