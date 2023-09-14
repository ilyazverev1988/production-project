import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoader} from "./buildLoader";
import {buildResolve} from "./buildResolve";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;
return {
    mode,
    entry: paths.entry,
    output: {
        filename: '[name].[contenthash].js',
        path: paths.build,
        clean: true
    },
    plugins: buildPlugins(paths.html),
    module: {
        rules: buildLoader(options),
    },
    resolve: buildResolve(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options): undefined
}
}
