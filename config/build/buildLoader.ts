import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoader (options: BuildOptions): webpack.RuleSetRule[] {
    const typeScriptLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        };
    const cssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: ((resourcePath: string) => Boolean(resourcePath.includes('.module.'))),
                            localIdentName: options.isDev ? '[path][name]___[local]' : '[hash:base64:8]',
                        }
                    },
                },
                // Compiles Sass to CSS
                "sass-loader",
            ],
        };
 return [
     typeScriptLoader,
     cssLoader,
 ]
}
