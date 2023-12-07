import { mdx } from './mdx';
import { styles } from './styles';
import { tests } from './tests';
import { typescript } from './typescript';

// WARNING: The order of these overrides matters. The most specific overrides should be last.
export const overrides = [typescript, styles, mdx, ...tests];
