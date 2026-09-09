import { contain, containAtLeastOneItemThat, Ensure, includes, not, startsWith } from '@serenity-js/assertions'
import { Answerable, Check, d, List, Question, QuestionAdapter, Task, Wait } from '@serenity-js/core'
import { By, Click, CssClasses, isVisible, PageElement, PageElements, Text } from '@serenity-js/web'

export class Dropdown {
    private readonly rootElement;

    constructor(rootElement: Answerable<PageElement>) {
        this.rootElement = PageElement.createAdapter(rootElement);
    }

    private widget = () =>
        this.rootElement.element(By.deepCss('.dropdown-widget'))
            .describedAs('widget');

    private input = () =>
        this.rootElement.element(By.deepCss('.dropdown-input'))
            .describedAs('input field');

    private placeholderElement = () =>
        PageElement.located(By.deepCss('.dropdown-placeholder'))
            .of(this.input());

    placeholder = (): QuestionAdapter<string> =>
        Text.of(this.placeholderElement())
            .describedAs('placeholder');

    private availableOptionsList = () =>
        this.rootElement.element(By.deepCss('.dropdown-available-options'));

    private availableOptionElements = () =>
        PageElements.located(By.deepCss('.dropdown-available-option'))
            .of(this.availableOptionsList());

    availableOptions = (): Question<Promise<string[]>> =>
        Text.ofAll(this.availableOptionElements())
            .describedAs('available options');

    private availableOptionCalled = (name: Answerable<string>) =>
        this.availableOptionElements()
            .where(Text, includes(name))
            .first();

    private selectedOptionElements = () =>
        PageElements.located(By.deepCss('.dropdown-selected-option'))
            .of(this.input());

    selectedOptions = (): Question<Promise<string[]>> =>
        Text.ofAll(this.selectedOptionElements())
            .map(name => name.trim())
            .describedAs('selected options');

    private selectedOptionElementCalled = (name: Answerable<string>) =>
        this.selectedOptionElements()
            .where(Text, includes(name))
            .first();

    private deselectButton = () =>
        PageElement.located(By.deepCss('.dropdown-deselect-option'))
            .describedAs('deselect button');

    select = (options: Answerable<string[]>): Task =>
        Task.where(d`#actor selects ${ options }`,
            List.of(options).forEach(({ item, actor }) =>
                actor.attemptsTo(
                    this.selectOne(item),
                ),
            ),
        );

    deselect = (options: Answerable<string[]>): Task =>
        Task.where(d`#actor deselects ${ options }`,
            List.of(options).forEach(({ item, actor }) =>
                actor.attemptsTo(
                    this.deselectOne(item),
                ),
            ),
        );

    private selectOne = (option: Answerable<string>): Task =>
        Task.where(d`#actor selects ${ option }`,
            this.open(),
            Click.on(this.availableOptionCalled(option)),
            Ensure.that(Text.ofAll(this.selectedOptionElements()), containAtLeastOneItemThat(startsWith(option))),
        );

    private deselectOne = (option: Answerable<string>): Task =>
        Task.where(d`#actor deselects ${ option }`,
            Click.on(this.deselectButton().of(this.selectedOptionElementCalled(option))),
            Ensure.that(Text.ofAll(this.selectedOptionElements()), not(contain(option))),
        );

    open = (): Task =>
        Task.where('#actor opens the dropdown',
            Check.whether(CssClasses.of(this.widget()), not(contain('dropdown-expanded')))
                .andIfSo(
                    Click.on(this.input()),
                    Wait.until(this.availableOptionsList(), isVisible()),
                ),
        );

    close = (): Task =>
        Task.where('#actor closes the dropdown',
            Check.whether(CssClasses.of(this.widget()), contain('dropdown-expanded'))
                .andIfSo(Click.on(this.input())),
        );
}
