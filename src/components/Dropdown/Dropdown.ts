import clsx from 'clsx';
import { css,html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

export interface DropdownOption {
    value: string;
    label: string;
}

@customElement('lit-expand-options-icon')
class ExpandOptionsIcon extends LitElement {
    render() {
        return html`
          <svg height="20" width="20" viewBox="0 0 20 20">
              <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
          </svg>
        `;
    }
}

@customElement('lit-remove-option-icon')
class RemoveOptionIcon extends LitElement {
    render() {
        return html`
          <svg height="20" width="20" viewBox="0 0 20 20">
              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
          </svg>
        `;
    }
}

@customElement('lit-dropdown')
export default class Dropdown extends LitElement {
    static styles = css`
        :host {
          display: inline-block;
        }
        .dropdown-widget {
          text-align: left;
          border: 1px solid #ccc;
          position: relative;
          border-radius: 5px;
        }
        .dropdown-input {
          padding: 5px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          user-select: none;
        }
        .dropdown-input .dropdown-expand-icon {
          transition: transform .5s ease-in-out;
        }
        .dropdown-expanded .dropdown-input .dropdown-expand-icon {
          transform: rotate(-180deg);
        }
        .dropdown-available-options {
          position: absolute;
          transform: translateY(4px);
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 5px;
          overflow: auto;
          max-height: 150px;
          background-color: #fff;
          z-index: 99;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        .dropdown-available-option {
          padding: 5px;
          cursor: pointer;
        }
        .dropdown-available-option:hover {
          background-color: #9fc3f870;
        }
        .dropdown-available-option.selected {
          background-color: #0d6efd;
          color: #fff;
        }
        .dropdown-selected-options {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          padding: 0;
          margin: 0;
        }
        .dropdown-selected-option {
          background-color: #ddd;
          padding: 2px 4px;
          border-radius: 2px;
          display: flex;
          align-items: center;
        }
        .dropdown-deselect-option {
          display: flex;
          align-items: center;
        }
    `;

    @property({ type: String }) placeholder = 'Select option';
    @property({ type: Array }) options: DropdownOption[] = [];
    @property({ type: Boolean }) allowMultiple = false;

    @state() private expandOptionsDropdown = false;
    @state() private selectedOptions: DropdownOption[] = [];

    private handleExpandMenu() {
        this.expandOptionsDropdown = ! this.expandOptionsDropdown;
    }

    private handleOptionDeselected(event: Event, option: DropdownOption) {
        event.stopPropagation();
        this.selectedOptions = this.selectedOptions.filter(current => current.value !== option.value);
        this.emitChange();
    }

    private handleOptionSelected(option: DropdownOption) {
        this.selectedOptions = this.isSelected(option)
            ? this.selectedOptionsWithout(option)
            : [ ...this.selectedOptions, option ];

        this.emitChange();
    }

    private selectedOptionsWithout(option: DropdownOption): DropdownOption[] {
        return this.selectedOptions.filter(current => current.value !== option.value);
    }

    private isSelected(option: DropdownOption): boolean {
        return this.selectedOptions.some(current => current.value === option.value);
    }

    private emitChange() {
        this.dispatchEvent(new CustomEvent('change', { detail: this.selectedOptions }));
    }

    private renderSelectedOptionsOrPlaceholder() {
        if (this.selectedOptions.length === 0) {
            return html`<span class="dropdown-placeholder">${this.placeholder}</span>`;
        }

        return html`
          <ul class="dropdown-selected-options">
              ${this.selectedOptions.map(option => html`
                <li class="dropdown-selected-option">
                    <span>${option.label}</span>
                    ${this.allowMultiple ? html`
                      <span
                        @click=${(event: Event) => this.handleOptionDeselected(event, option)}
                        class="dropdown-deselect-option">
                        <lit-remove-option-icon />
                      </span>
                    ` : ''}
                </li>
              `)}
          </ul>
        `;
    }

    render() {
        return html`
          <div class="dropdown-widget ${ this.expandOptionsDropdown ? 'dropdown-expanded' : '' }">
              <div @click=${ this.handleExpandMenu } class="dropdown-input">

                ${ this.renderSelectedOptionsOrPlaceholder() }
        
                <div class="dropdown-expand-icon">
                  <lit-expand-options-icon />
                </div>
              </div>
              ${ this.expandOptionsDropdown ? html`
                <ul class="dropdown-available-options">
                  ${ this.options.map(option => html`
                    <li
                      @click=${() => this.handleOptionSelected(option)}
                      class="${ clsx('dropdown-available-option', this.isSelected(option) && 'selected') }">
                      ${option.label}
                    </li>
                  `)}
                </ul>
              ` : '' }
          </div>
        `;
    }
}
