module.exports = {
    lintOnSave: false,
    configureWebpack: {
        // Configuration applied to all builds
        devtool: 'source-map'
    },
    pluginOptions: {
        electronBuilder: {
            chainWebpackMainProcess: config => {
                // Chain webpack config for electron main process only
            },
            chainWebpackRendererProcess: config => {
                // Chain webpack config for electron renderer process only
                // The following example will set IS_ELECTRON to true in your app
                config.plugin('define').tap(args => {
                    args[0]['IS_ELECTRON'] = true
                    return args
                })
            },
            // Use this to change the entrypoint of your app's main process
            mainProcessFile: 'src/background.js',
            // Provide an array of files that, when changed, will recompile the main process and restart Electron
            // Your main process file will be added by default
            mainProcessWatch: [],
            // [1.0.0-rc.4+] Provide a list of arguments that Electron will be launched with during "electron:serve",
            // which can be accessed from the main process (src/background.js).
            // Note that it is ignored when --debug flag is used with "electron:serve", as you must launch Electron yourself
            // Command line args (excluding --debug, --dashboard, and --headless) are passed to Electron as well
            // mainProcessArgs: ['--arg-name', 'arg-value']
            builderOptions: {
                "appId": "com.mybmi.app",
                "productName": "myBMI身体指数计算器",//项目名，也是生成的安装文件名，即aDemo.exe
                "copyright": "Copyright © 2019 柳叶刀",//版权信息
                "directories": {
                    "output": "./dist"//输出文件路径
                },
                "win": {//win相关配置
                    "icon": "./public/app.ico",//图标，当前图标在根目录下，注意这里有两个坑
                    "target": [
                        {
                            "target": "nsis",//利用nsis制作安装程序
                            "arch": [
                                "x64",//64位
                                "ia32"//32位
                            ]
                        }
                    ]
                },
                "nsis": {
                    "oneClick": false, // 是否一键安装
                    "allowElevation": true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
                    "allowToChangeInstallationDirectory": true, // 允许修改安装目录
                    "installerIcon": "./public/app.ico",// 安装图标
                    "uninstallerIcon": "./public/app.ico",//卸载图标
                    "installerHeaderIcon": "./public/app.ico", // 安装时头部图标
                    "createDesktopShortcut": true, // 创建桌面图标
                    "createStartMenuShortcut": true,// 创建开始菜单图标
                    "shortcutName": "myBMI", // 图标名称
                },
            }

        }
    }
}