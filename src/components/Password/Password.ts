import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('lit-eye-open-icon')
class EyeOpenIcon extends LitElement {
    render() {
        return html`
          <svg height="20" width="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 4C5.5 4 2 7 1 10c1 3 4.5 6 9 6s8-3 9-6c-1-3-4.5-6-9-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z"/>
          </svg>
        `;
    }
}

@customElement('lit-eye-closed-icon')
class EyeClosedIcon extends LitElement {
    render() {
        return html`
          <svg height="20" width="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 6.5c1.4 0 2.5 1.1 2.5 2.5 0 .4-.1.8-.3 1.1l1.5 1.5c.7-.8 1.1-1.8 1.1-2.9 0-2.2-1.8-4-4-4-1.1 0-2.1.4-2.9 1.1l1.5 1.5c.3-.2.7-.3 1.1-.3zm-7.9-2.4l1.4-1.4L17.3 16.5l-1.4 1.4-2.3-2.3c-1 .3-2.1.4-3.2.4-4.5 0-8-3-9-6 .6-1.7 1.8-3.2 3.3-4.2L3.1 4.1zm3.2 3.2l1.3 1.3c-.1.3-.1.6-.1.9 0 1.4 1.1 2.5 2.5 2.5.3 0 .6 0 .9-.1l1.3 1.3c-.7.3-1.4.5-2.2.5-2.2 0-4-1.8-4-4 0-.8.2-1.5.5-2.2zm4.3-.8l2.5 2.5V10c0-1.4-1.1-2.5-2.5-2.5h-.1z"/>
          </svg>
        `;
    }
}

@customElement('lit-password')
export default class Password extends LitElement {
    static styles = css`
        :host {
          display: inline-block;
        }
        .password-widget {
          text-align: left;
          border: 1px solid #ccc;
          position: relative;
          border-radius: 5px;
          display: inline-flex;
          align-items: center;
        }
        .password-input {
          border: none;
          outline: none;
          padding: 8px 10px;
          font-size: 14px;
          flex: 1;
          border-radius: 5px 0 0 5px;
          font-family: inherit;
        }
        .password-toggle-button {
          padding: 5px 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          color: #666;
          transition: color 0.2s;
        }
        .password-toggle-button:hover {
          color: #333;
        }
        .password-toggle-button:active {
          color: #000;
        }
    `;

    @property({ type: String }) placeholder = 'Enter password';
    @property({ type: String }) value = '';

    @state() private isPasswordVisible = false;

    private handleToggleVisibility() {
        this.isPasswordVisible = !this.isPasswordVisible;
        this.dispatchEvent(new CustomEvent('visibilitychange', {
            detail: this.isPasswordVisible,
            bubbles: true,
            composed: true
        }));
    }

    private handleInput(event: Event) {
        const input = event.target as HTMLInputElement;
        this.value = input.value;
        this.dispatchEvent(new CustomEvent('input', {
            detail: this.value,
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
          <div class="password-widget">
              <input
                type="${this.isPasswordVisible ? 'text' : 'password'}"
                class="password-input"
                .value="${this.value}"
                placeholder="${this.placeholder}"
                @input="${this.handleInput}"
              />
              <button
                type="button"
                @click="${this.handleToggleVisibility}"
                class="password-toggle-button"
                aria-label="${this.isPasswordVisible ? 'Hide password' : 'Show password'}"
              >
                ${this.isPasswordVisible 
                    ? html`<lit-eye-open-icon></lit-eye-open-icon>` 
                    : html`<lit-eye-closed-icon></lit-eye-closed-icon>`}
              </button>
          </div>
        `;
    }
}
