import { Ensure, equals } from '@serenity-js/assertions';
import { describe, it } from '@serenity-js/playwright-test';
import { ExecuteScript, LastScriptExecution, PageElement } from '@serenity-js/web';

import type { DropdownOption } from './Dropdown.js';
import { Dropdown } from './Dropdown.serenity.js';

describe('Dropdown', () => {

    const labels = [
        'First',
        'Second',
        'Third',
    ];

    const options: DropdownOption[] = labels.map(label => ({
        value: label.toLowerCase(),
        label,
    }));

    it('shows the placeholder when no option is selected yet', async ({ story, actor }) => {
        const placeholder = 'Select option';

        const dropdownComponent = story('components/Dropdown/Default', {
            placeholder,
            options,
        });

        await actor.attemptsTo(
            Ensure.eventually(
                Dropdown.placeholder().of(dropdownComponent),
                equals(placeholder),
            ),
        )
    });

    it('shows the available options when the menu is expanded', async ({ story, actor }) => {
        const dropdownComponent = story('components/Dropdown/Default', {
            options,
        });

        await actor.attemptsTo(
            Dropdown.open(dropdownComponent),

            Ensure.eventually(
                Dropdown.availableOptions().of(dropdownComponent),
                equals(labels),
            ),
        )
    });

    it('selects the desired options', async ({ story, actor }) => {
        const dropdownComponent = story('components/Dropdown/Default', {
            allowMultiple: true,
            options,
        });

        await actor.attemptsTo(
            Dropdown.select([
                'First',
                'Third'
            ]).from(dropdownComponent),

            Ensure.that(Dropdown.selectedOptions().of(dropdownComponent), equals([
                'First',
                'Third',
            ])),
        );
    });

    it('triggers onChange with selected options', async ({ story, actor }) => {
        const dropdownComponent = story('components/Dropdown/WithOnChange', {
            allowMultiple: true,
            options,
        });

        await actor.attemptsTo(
            Dropdown.select([
                'First',
                'Third'
            ]).from(dropdownComponent),

            ExecuteScript.sync(`return JSON.parse(document.getElementById('change-recorder').value)`),
            Ensure.eventually(LastScriptExecution.result<DropdownOption[]>(), equals([
                { label: 'First', value: 'first' },
                { label: 'Third', value: 'third' },
            ])),
        )
    });

    it('allows for selected options to be deselected', async ({ story, actor }) => {
        const dropdownComponent = story('components/Dropdown/Default', {
            allowMultiple: true,
            options,
        });

        await actor.attemptsTo(
            Dropdown.select([
                'First',
                'Third',
                'Second',
            ]).from(dropdownComponent),

            Dropdown.deselect([
                'First',
            ]).from(dropdownComponent),

            Ensure.that(Dropdown.selectedOptions().of(dropdownComponent), equals([
                'Third',
                'Second',
            ])),
        );
    });

    it('goes back to showing the placeholder when all the selected options get deselected', async ({ story, actor }) => {
        const placeholder = 'Select option';

        const dropdownComponent = story('components/Dropdown/Default', {
            allowMultiple: true,
            placeholder,
            options,
        });

        await actor.attemptsTo(
            Dropdown.select([
                'First',
                'Second',
            ]).from(dropdownComponent),

            Dropdown.deselect([
                'First',
                'Second',
            ]).from(dropdownComponent),

            Ensure.that(Dropdown.selectedOptions().of(dropdownComponent).length, equals(0)),
            Ensure.that(
                Dropdown.placeholder().of(dropdownComponent),
                equals(placeholder),
            ),
        );
    });
});
