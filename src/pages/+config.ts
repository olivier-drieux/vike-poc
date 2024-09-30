import vikeReact from 'vike-react/config';
import type { Config } from 'vike/types';
import Layout from '../layouts/LayoutDefault.js';
import vikeReactQuery from 'vike-react-query/config';

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
    // https://vike.dev/Layout
    Layout,

    // https://vike.dev/head-tags
    title: 'Vike POC',
    description: 'Demo showcasing Vike',

    extends: [vikeReact, vikeReactQuery],
} satisfies Config;