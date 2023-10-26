module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            'nativewind/babel',
            [
                'babel-plugin-module-resolver',
                {
                    alias: {
                        '@': './src',
                        '@elements': './src/components/elements',
                        '@pages': './src/components/pages',
                    },
                },
            ],
        ],
    };
};
