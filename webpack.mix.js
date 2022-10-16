let mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js")
    // .sass("resources/sass/app.scss", "public/css")
    .postCss("resources/css/app.css", "public/css", [require("tailwindcss")])
    .webpackConfig({
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.mp4$/,
                    use: "file-loader?name=videos/[name].[ext]"
                }
                // {
                //     test: /\.(png|jpg|gif)$/i,
                //     use: [
                //         {
                //             loader: "url-loader",
                //             // options: {
                //             //     limit: 8192
                //             // }
                //         }
                //     ]
                // }
            ]
        },
        node: {
            fs: "empty"
        },
        resolve: {
            extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"]
        }
    })
    .babelConfig({
        plugins: ["@babel/plugin-proposal-optional-chaining"]
    });
