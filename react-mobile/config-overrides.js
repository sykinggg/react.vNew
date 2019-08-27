const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addBundleVisualizer,
    addWebpackAlias,
    adjustWorkbox,
    fixBabelImports,
    addLessLoader
} = require("customize-cra");
const path = require("path");

module.exports = override(
    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),

    // disable eslint in webpack
    disableEsLint(),

    // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
    process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),

    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: 'css'
    }),
    // add an alias for "ag-grid-react" imports
    // addWebpackAlias({
    //     ["ag-grid-react$"]: path.resolve(__dirname, "src/shared/agGridWrapper.js")
    // }),
    // addWebpackAlias({
    //     ["antd-mobile$"]: path.resolve(__dirname, "node_modules/antd-mobile/dist/antd-mobile.min.js")
    // }),

    // adjust the underlying workbox
    adjustWorkbox(wb =>
        Object.assign(wb, {
            skipWaiting: true,
            exclude: (wb.exclude || []).concat("index.html")
        })
    )
);