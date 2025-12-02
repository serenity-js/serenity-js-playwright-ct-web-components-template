import { Ensure, equals, isFalse, isTrue } from '@serenity-js/assertions';
import { notes, TakeNotes } from '@serenity-js/core';
import { Attribute, By, PageElement } from '@serenity-js/web';

import { default as PasswordComponent } from './Password.js';
import { Password } from './Password.serenity.js';

import { describe, it } from '../test-api';

describe('Password', () => {

    it('hides the password by default', async ({ mount, actor }) => {
        const passwordField = PageElement.from(await mount(PasswordComponent, {
            props: {
                placeholder: 'Enter password',
            },
        })).describedAs('password field')

        await actor.attemptsTo(
            Ensure.that(
                Password.isVisible().in(passwordField),
                isFalse()
            ),
        )
    });

    it('reveals the password when the eye icon is clicked', async ({ mount, actor }) => {
        const passwordField = PageElement.from(await mount(PasswordComponent, {
            props: {
                placeholder: 'Enter password',
            },
        })).describedAs('password field')

        await actor.attemptsTo(
            Ensure.that(Password.isVisible().in(passwordField), isFalse()),

            Password.reveal(passwordField),

            Ensure.that(Password.isVisible().in(passwordField), isTrue()),
        )
    });

    it('hides the password when the eye icon is clicked again', async ({ mount, actor }) => {
        const passwordField = PageElement.from(await mount(PasswordComponent, {
            props: {
                placeholder: 'Enter password',
            },
        })).describedAs('password field')

        await actor.attemptsTo(
            Password.reveal(passwordField),
            Ensure.that(Password.isVisible().in(passwordField), isTrue()),

            Password.hide(passwordField),

            Ensure.that(Password.isVisible().in(passwordField), isFalse()),
        )
    });

    it('allows typing a password', async ({ mount, actor }) => {
        const testPassword = 'SecurePassword123!';

        const passwordField = PageElement.from(await mount(PasswordComponent, {
            props: {
                placeholder: 'Enter password',
            },
        })).describedAs('password field')

        await actor.attemptsTo(
            Password.type(testPassword).into(passwordField),

            Ensure.that(
                Password.value().of(passwordField),
                equals(testPassword)
            ),
        )
    });


    it('triggers visibilitychange event when toggling', async ({ mount, actor }) => {
        function spy<Arguments extends any[]>(name: string): (spyArguments: Arguments) => void {
            return (spyArguments: Arguments) => TakeNotes.as(actor).notepad.set(name, spyArguments);
        }

        const passwordField = PageElement.from(await mount(PasswordComponent, {
            props: {
                placeholder: 'Enter password',
            },
            on: {
                visibilitychange: spy('visibilityState'),
            }
        })).describedAs('password field')

        await actor.attemptsTo(
            Password.toggle(passwordField),

            Ensure.eventually(notes().get('visibilityState'), isTrue()),

            Password.toggle(passwordField),

            Ensure.eventually(notes().get('visibilityState'), isFalse()),
        )
    });

    it('displays the placeholder text', async ({ mount, actor }) => {
        const placeholder = 'Enter your secure password';

        const passwordField = PageElement.from(await mount(PasswordComponent, {
            props: {
                placeholder,
            },
        })).describedAs('password field')

        await actor.attemptsTo(
            Ensure.that(
                Attribute.called('placeholder')
                    .of(PageElement.located(By.deepCss('.password-input')).of(passwordField)),
                equals(placeholder)
            ),
        )
    });
});

