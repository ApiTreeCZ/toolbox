// WARNING: The order of these overrides matters. The most specific overrides should be last.
import { javascript } from './javascript';
import { tests } from './tests';
import { typescript } from './typescript';

export const overrides = [javascript, typescript, tests];
