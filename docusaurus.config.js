const path = require('path');

module.exports = {
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'spaces',
                path: path.resolve(__dirname, 'docs'),
                routeBasePath: 'spaces',
                sidebarPath: path.resolve(__dirname, 'sidebars.js'),
                editUrl: ({
                        docPath
                    }) =>
                    `https://github.com/Cores-ts/fundingbox.spaces.faqs/edit/main/docs/${docPath}`,
                remarkPlugins: [require('remark-code-import'), require('remark-import-partial')],
            }
        ],
    ],
    staticDirectories: [path.resolve(__dirname, 'assets')],
};