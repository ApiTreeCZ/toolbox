import { defineConfig } from 'eslint/config';

import { base } from '@apitree.cz/eslint-config';
import { react } from '@apitree.cz/eslint-config-react';

export default defineConfig(base, react);
