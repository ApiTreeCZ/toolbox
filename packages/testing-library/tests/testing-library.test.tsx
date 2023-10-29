import type { PropsWithChildren } from 'react';
import { describe, expect, it } from 'vitest';

import { createRenderers, screen } from '../src/testing-library.js';

describe('createRenderers', () => {
  it('creates React Testing Library renderers', () => {
    const { render, renderHook } = createRenderers();
    render(<div />);
    expect(renderHook).toBeTypeOf('function');
  });
  it('creates React Testing Library render function with a default wrapper', () => {
    const defaultWrapper = ({ children }: PropsWithChildren) => (
      <div data-testid="default-wrapper">{children}</div>
    );
    const { render } = createRenderers({ defaultWrapper });
    render(<div data-testid="render-content" />);
    expect(screen.getByTestId('default-wrapper')).toContainElement(
      screen.getByTestId('render-content'),
    );
  });
  it('creates React Testing Library renderHook function with a default wrapper', () => {
    const defaultWrapper = ({ children }: PropsWithChildren) => (
      <div data-testid="default-wrapper">{children}</div>
    );
    const { renderHook } = createRenderers({ defaultWrapper });
    renderHook(() => 'hook-content');
    expect(screen.getByTestId('default-wrapper')).toBeEmptyDOMElement();
  });
});
