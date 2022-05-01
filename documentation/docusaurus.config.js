const path = require('path');

module.exports = {
    title: 'Hornet',
    url: '/',
    baseUrl: '/',
    themes: ['@docusaurus/theme-classic'],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'hornet-develop',
                path: path.resolve(__dirname, './docs'),
                routeBasePath: 'hornet',
                sidebarPath: path.resolve(__dirname, './sidebars.js'),
                editUrl: 'https://github.com/iotaledger/hornet/edit/develop/',
                remarkPlugins: [require('remark-code-import'), require('remark-import-partial'), require('remark-remove-comments')],
                versions: {
                    current: {
                        label: 'Develop',
                        path: 'develop',
                        banner: 'unreleased',
                        badge: true
                    },
                },
            }
        ],
    ],
    staticDirectories: [path.resolve(__dirname, './static')],
};