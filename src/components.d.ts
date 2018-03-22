/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */
declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }

  interface HTMLAttributes {}
}


import {
  OpenPaywall as OpenPaywall
} from './components/open-paywall/open-paywall';

declare global {
  interface HTMLOpenPaywallElement extends OpenPaywall, HTMLStencilElement {
  }
  var HTMLOpenPaywallElement: {
    prototype: HTMLOpenPaywallElement;
    new (): HTMLOpenPaywallElement;
  };
  interface HTMLElementTagNameMap {
    "open-paywall": HTMLOpenPaywallElement;
  }
  interface ElementTagNameMap {
    "open-paywall": HTMLOpenPaywallElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "open-paywall": JSXElements.OpenPaywallAttributes;
    }
  }
  namespace JSXElements {
    export interface OpenPaywallAttributes extends HTMLAttributes {
      accessToken?: string;
      action?: string;
      cost?: number;
      provider?: string;
      serverUrl?: string;
      user?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
