import { Ensure, equals } from '@serenity-js/assertions';
import { notes, TakeNotes } from '@serenity-js/core';
import { PageElement } from '@serenity-js/web';

import { default as DropdownComponent, DropdownOption } from './Dropdown.js';
import { Dropdown } from './Dropdown.serenity.js';

import { describe, it } from '../test-api';

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

    it('shows the placeholder when no option is selected yet', async ({ mount, actor }) => {
        const placeholder = 'Select option';

        const dropdownComponent = PageElement.from(await mount(DropdownComponent, {
            props: {
                placeholder,
                options,
            },
        })).describedAs('dropdown')

        await actor.attemptsTo(
            Ensure.eventually(
                Dropdown.placeholder().of(dropdownComponent),
                equals(placeholder),
            ),
        )
    });

    it('shows the available options when the menu is expanded', async ({ mount, actor }) => {
        const dropdownComponent = PageElement.from(await mount(DropdownComponent, {
            props: {
                options,
            },
        })).describedAs('dropdown')

        await actor.attemptsTo(
            Dropdown.open(dropdownComponent),

            Ensure.eventually(
                Dropdown.availableOptions().of(dropdownComponent),
                equals(labels),
            ),
        )
    });

    it('selects the desired options', async ({ mount, actor }) => {
        const dropdownComponent = PageElement.from(await mount(DropdownComponent, {
            props: {
                allowMultiple: true,
                options,
            },
        })).describedAs('dropdown')

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

    it('triggers onChange with selected options', async ({ mount, actor }) => {

        // The web component under test lives in the browser context, the test script runs in Node.js,
        // and the two contexts don't share memory. To communicate between the two, we can use the notepad
        // and a simple wrapper function like this one:
        function spy<Arguments extends any[]>(name: string): (spyArguments: Arguments) => void {
            return (spyArguments: Arguments) => TakeNotes.as(actor).notepad.set(name, spyArguments);
        }

        const dropdownComponent = PageElement.from(await mount(DropdownComponent, {
            props: {
                allowMultiple: true,
                options,
            },
            on: {
                change: spy('selectedOptions'),
            }
        })).describedAs('dropdown')

        await actor.attemptsTo(
            Dropdown.select([
                'First',
                'Third'
            ]).from(dropdownComponent),

            Ensure.eventually(notes().get('selectedOptions'), equals([
                { label: 'First', value: 'first' },
                { label: 'Third', value: 'third' },
            ])),
        )
    });

    it('allows for selected options to be deselected', async ({ mount, actor }) => {
        const dropdownComponent = PageElement.from(await mount(DropdownComponent, {
            props: {
                allowMultiple: true,
                options,
            },
        })).describedAs('dropdown')

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

    it('goes back to showing the placeholder when all the selected options get deselected', async ({
                                                                                                       mount,
                                                                                                       actor
                                                                                                   }) => {
        const placeholder = 'Select option';

        const dropdownComponent = PageElement.from(await mount(DropdownComponent, {
            props: {
                allowMultiple: true,
                placeholder,
                options,
            },
        })).describedAs('dropdown')

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
