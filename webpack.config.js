module.exports = {
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: `./src/index.js`,
  
    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: `${__dirname}/dist`,
        // 出力ファイル名
        filename: "main.js"
    },

    // production(デフォルト) → 本番用。容量低、ビルド時間長、コメント省略
    // development → 開発用。ソースマップ有効
    //mode: "development"

    devServer: {
        static: "dist",
        open: true
    }
};