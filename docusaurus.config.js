const path = require('path');

module.exports = {
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'eu-projects',
                path: path.resolve(__dirname, 'docs'),
                routeBasePath: 'eu-projects',
                sidebarPath: path.resolve(__dirname, 'sidebars.js'),
                editUrl: ({
                        docPath
                    }) =>
                    `https://github.com/Cores-ts/fundingbox.eu-projects.docs/edit/main/docs/${docPath}`,
                remarkPlugins: [require('remark-code-import'), require('remark-import-partial')],
            }
        ],
    ],
    staticDirectories: [path.resolve(__dirname, 'assets')],
};