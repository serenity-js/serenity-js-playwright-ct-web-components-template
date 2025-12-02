import { Answerable, d, QuestionAdapter, Task } from '@serenity-js/core';
import { By, Click, Enter, PageElement, Value } from '@serenity-js/web';

export class Password {
    private static componentSelector = () => By.deepCss('.password-widget')

    static component = <NET = any>() =>
        PageElement.located<NET>(this.componentSelector()).describedAs('password field')

    static components = <NET = any>() =>
        PageElement.located<NET>(this.componentSelector()).describedAs('password fields')

    private static inputField = () =>
        PageElement.located(By.deepCss('.password-input'))
            .describedAs('input field')

    private static toggleButton = () =>
        PageElement.located(By.deepCss('.password-toggle-button'))
            .describedAs('toggle visibility button')

    static value = () => ({
        of: (passwordField: QuestionAdapter<PageElement>) =>
            Value.of(Password.inputField())
                .of(passwordField)
                .describedAs('password value')
    })

    static type = (password: Answerable<string>) => ({
        into: (passwordField: QuestionAdapter<PageElement>) =>
            Task.where(d`#actor types password into ${passwordField}`,
                Enter.theValue(password).into(Password.inputField().of(passwordField)),
            )
    })

    static reveal = (passwordField: QuestionAdapter<PageElement>) =>
        Task.where(`#actor reveals the password in ${passwordField}`,
            Click.on(Password.toggleButton().of(passwordField)),
        )

    static hide = (passwordField: QuestionAdapter<PageElement>) =>
        Task.where(`#actor hides the password in ${passwordField}`,
            Click.on(Password.toggleButton().of(passwordField)),
        )

    static toggle = (passwordField: QuestionAdapter<PageElement>) =>
        Task.where(`#actor toggles password visibility in ${passwordField}`,
            Click.on(Password.toggleButton().of(passwordField)),
        )

    static isVisible = () => ({
        in: (passwordField: QuestionAdapter<PageElement>) =>
            Password.inputField()
                .of(passwordField)
                .attribute('type')
                .describedAs('password visibility state')
                .as(type => type === 'text')
    })
}

