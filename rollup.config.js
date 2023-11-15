const { default: commonjs } = require("@rollup/plugin-commonjs");

module.exports = {
    input: 'attachmediastream.js',
    output: {
        file: 'attachmediastream.esm.js',
        format: 'esm'
    },
    external: ['webrtc-adapter'],
    plugins: [commonjs()]
};
