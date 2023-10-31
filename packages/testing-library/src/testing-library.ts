import type {
  Queries,
  RenderHookOptions,
  RenderOptions,
  queries,
} from '@testing-library/react';
import { render, renderHook } from '@testing-library/react';
import type { ReactElement } from 'react';

export interface CreateRenderersProps {
  /**
   * The default wrapper to use for rendering components (e.g. a `ThemeProvider`).
   */
  defaultWrapper?: RenderOptions['wrapper'] | undefined;
}

export const createRenderers = ({
  defaultWrapper = function defaultWrapper({ children }) {
    return children;
  },
}: CreateRenderersProps = {}) => {
  const customRender = <
    Q extends Queries = typeof queries,
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
    Q extends Queries = typeof queries,
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

export * from '@testing-library/react';
export * from '@testing-library/user-event';
