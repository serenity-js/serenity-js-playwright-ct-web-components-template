import './Dropdown.js';

import type { DropdownOption } from './Dropdown.js';

export const Default = (props: { placeholder?: string; options?: DropdownOption[]; allowMultiple?: boolean }) => {
    const el = document.createElement('lit-dropdown') as import('./Dropdown.js').default;
    if (props.placeholder) el.placeholder = props.placeholder;
    if (props.options) el.options = props.options;
    if (props.allowMultiple) el.allowMultiple = props.allowMultiple;
    return el;
};

export const WithOnChange = (props: { placeholder?: string; options?: DropdownOption[]; allowMultiple?: boolean }) => {
    const el = document.createElement('lit-dropdown') as import('./Dropdown.js').default;
    if (props.placeholder) el.placeholder = props.placeholder;
    if (props.options) el.options = props.options;
    if (props.allowMultiple) el.allowMultiple = props.allowMultiple;

    // Record change events into a hidden input so tests can read the value
    const recorder = document.createElement('input');
    recorder.type = 'hidden';
    recorder.id = 'change-recorder';
    el.addEventListener('change', (event: Event) => {
        recorder.value = JSON.stringify((event as CustomEvent).detail);
    });

    const wrapper = document.createElement('div');
    wrapper.appendChild(el);
    wrapper.appendChild(recorder);
    return wrapper;
};
