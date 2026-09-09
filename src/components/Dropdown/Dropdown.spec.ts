import { Ensure, equals } from '@serenity-js/assertions';
import { describe, it } from '@serenity-js/playwright-test';
import { ExecuteScript, LastScriptExecution } from '@serenity-js/web';

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

        const dropdown = story('components/Dropdown/Dropdown/Default', {
            placeholder,
            options,
        }).as(Dropdown);

        await actor.attemptsTo(
            Ensure.eventually(
                dropdown.placeholder(),
                equals(placeholder),
            ),
        );
    });

    it('shows the available options when the menu is expanded', async ({ story, actor }) => {
        const dropdown = story('components/Dropdown/Dropdown/Default', {
            options,
        }).as(Dropdown);

        await actor.attemptsTo(
            dropdown.open(),

            Ensure.eventually(
                dropdown.availableOptions(),
                equals(labels),
            ),
        );
    });

    it('selects the desired options', async ({ story, actor }) => {
        const dropdown = story('components/Dropdown/Dropdown/Default', {
            allowMultiple: true,
            options,
        }).as(Dropdown);

        await actor.attemptsTo(
            dropdown.select([
                'First',
                'Third',
            ]),

            Ensure.that(dropdown.selectedOptions(), equals([
                'First',
                'Third',
            ])),
        );
    });

    it('triggers onChange with selected options', async ({ story, actor }) => {
        const dropdown = story('components/Dropdown/Dropdown/WithOnChange', {
            allowMultiple: true,
            options,
        }).as(Dropdown);

        await actor.attemptsTo(
            dropdown.select([
                'First',
                'Third',
            ]),

            ExecuteScript.sync(`return JSON.parse(document.getElementById('change-recorder').value)`),
            Ensure.eventually(LastScriptExecution.result<DropdownOption[]>(), equals([
                { label: 'First', value: 'first' },
                { label: 'Third', value: 'third' },
            ])),
        );
    });

    it('allows for selected options to be deselected', async ({ story, actor }) => {
        const dropdown = story('components/Dropdown/Dropdown/Default', {
            allowMultiple: true,
            options,
        }).as(Dropdown);

        await actor.attemptsTo(
            dropdown.select([
                'First',
                'Third',
                'Second',
            ]),

            dropdown.deselect([
                'First',
            ]),

            Ensure.that(dropdown.selectedOptions(), equals([
                'Third',
                'Second',
            ])),
        );
    });

    it('goes back to showing the placeholder when all the selected options get deselected', async ({ story, actor }) => {
        const placeholder = 'Select option';

        const dropdown = story('components/Dropdown/Dropdown/Default', {
            allowMultiple: true,
            placeholder,
            options,
        }).as(Dropdown);

        await actor.attemptsTo(
            dropdown.select([
                'First',
                'Second',
            ]),

            dropdown.deselect([
                'First',
                'Second',
            ]),

            Ensure.that(dropdown.selectedOptions().length, equals(0)),
            Ensure.that(
                dropdown.placeholder(),
                equals(placeholder),
            ),
        );
    });
});
