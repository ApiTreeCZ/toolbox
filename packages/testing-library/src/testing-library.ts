import type { Queries, RenderHookOptions, RenderOptions } from '@testing-library/react';
import { render, renderHook } from '@testing-library/react';
import type { ReactElement } from 'react';

export interface CreateRenderersProps {
  /**
   * The default wrapper to use for rendering components (e.g. a `ThemeProvider`).
   */
  defaultWrapper?: RenderOptions['wrapper'] | undefined;
}

/**
 * Create custom component and hook renderers that use a default wrapper.
 */
export const createRenderers = ({
  defaultWrapper = function DefaultWrapper({ children }) {
    return children;
  },
}: CreateRenderersProps = {}) => {
  const customRender = <
    Q extends Queries = Queries,
    Container extends DocumentFragment | Element = HTMLElement,
    BaseElement extends DocumentFragment | Element = Container,
  >(
    ui: ReactElement,
    options?: RenderOptions<Q, Container, BaseElement>,
  ) => {
    const { wrapper = defaultWrapper } = options ?? {};
    return render<Q, Container, BaseElement>(ui, { ...options, wrapper });
  };

  const customRenderHook = <
    Result,
    Props,
    Q extends Queries = Queries,
    Container extends DocumentFragment | Element = HTMLElement,
    BaseElement extends DocumentFragment | Element = Container,
  >(
    render: (initialProps: Props) => Result,
    options?: RenderHookOptions<Props, Q, Container, BaseElement>,
  ) => {
    const { wrapper = defaultWrapper } = options ?? {};
    return renderHook<Result, Props, Q, Container, BaseElement>(render, {
      ...options,
      wrapper,
    });
  };

  return { render: customRender, renderHook: customRenderHook };
};

export { queries, screen } from '@testing-library/dom';
export { render, renderHook } from '@testing-library/react';
