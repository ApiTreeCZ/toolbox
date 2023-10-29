import type { RenderHookOptions, RenderOptions } from '@testing-library/react';
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
  const customRender = (ui: ReactElement, options?: RenderOptions) => {
    const { wrapper = defaultWrapper } = options ?? {};
    return render(ui, { ...options, wrapper });
  };
  const customRenderHook = <Result, Props>(
    render: (initialProps: Props) => Result,
    options?: RenderHookOptions<Props>,
  ) => {
    const { wrapper = defaultWrapper } = options ?? {};
    return renderHook(render, { ...options, wrapper });
  };
  return { render: customRender, renderHook: customRenderHook };
};

export { queries } from '@testing-library/dom';
export * from '@testing-library/react';
export * from '@testing-library/user-event';
