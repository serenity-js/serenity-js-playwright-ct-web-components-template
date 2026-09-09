import './Dropdown.js';

import type { DropdownOption } from './Dropdown.js';

export const Default = (properties: { placeholder?: string; options?: DropdownOption[]; allowMultiple?: boolean }) => {
    const element = document.createElement('lit-dropdown') as import('./Dropdown.js').default;
    if (properties.placeholder) element.placeholder = properties.placeholder;
    if (properties.options) element.options = properties.options;
    if (properties.allowMultiple) element.allowMultiple = properties.allowMultiple;
    return element;
};

export const WithOnChange = (properties: { placeholder?: string; options?: DropdownOption[]; allowMultiple?: boolean }) => {
    const element = document.createElement('lit-dropdown') as import('./Dropdown.js').default;
    if (properties.placeholder) element.placeholder = properties.placeholder;
    if (properties.options) element.options = properties.options;
    if (properties.allowMultiple) element.allowMultiple = properties.allowMultiple;

    // Record change events into a hidden input so tests can read the value
    const recorder = document.createElement('input');
    recorder.type = 'hidden';
    recorder.id = 'change-recorder';
    element.addEventListener('change', (event: Event) => {
        recorder.value = JSON.stringify((event as CustomEvent).detail);
    });

    const wrapper = document.createElement('div');
    wrapper.append(element);
    wrapper.append(recorder);
    return wrapper;
};
