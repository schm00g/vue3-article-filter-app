module.exports = {
    configureWebpack: {
        externals: {
            vue: "Vue",
        },
        // resolve: {
        //     extensions: [ '.tsx', '.ts', '.js', '.vue' ],
        //     alias: {
        //         'vue': '@vue/runtime-dom'
        //     }
        // }
    }
}