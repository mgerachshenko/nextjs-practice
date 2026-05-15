// forms-grid.tsx: DISPLAYING/LAYING OUT THE DATA

import { Form } from '@/lib/types';
import FormItem from './form-item';

// Props type for the FormsGrid component
type FormsGridProps = {
    forms: Form[];
};

// Component for showing all survey forms in a grid
export default function FormsGrid({ forms }: FormsGridProps) {
    return (
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            {forms.map((form) => (
                <li
                    key={form.id}
                    className="border border-black rounded-xl p-4 hover:shadow-xl transition"
                >
                    <FormItem {...form} />
                </li>
            ))}
        </ul>
    );
}