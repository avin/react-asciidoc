const path = require('path');

module.exports = (storybookBaseConfig, configType) => {
    storybookBaseConfig.resolve.alias = {
        ...storybookBaseConfig.resolve.alias,
        fs: path.resolve(__dirname, 'fsMock.js'),
    };
    storybookBaseConfig.externals = [
        {
            xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}',
        },
    ];

    return storybookBaseConfig;
};
