import { Form } from '@/lib/types';

type FormsGridProps = {
    forms: Form[];
};

import FormItem from './form-item';

export default function FormsGrid({ forms }: FormsGridProps) {
    return (
        <ul className="grid lg:grid-cols-3 p-6">
            {forms.map((form) => (
                <li key={form.id}>
                    <FormItem {...form} />
                </li>
            ))}
        </ul>
    );
}