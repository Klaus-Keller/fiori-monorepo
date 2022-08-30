module.exports = function (config) {
    "use strict";

    config.set({
        // Make Karma work with pnpm.
        // See: https://github.com/pnpm/pnpm/issues/720#issuecomment-954120387
        plugins: Object.keys(require('./package').devDependencies).flatMap(
            (packageName) => {
                if (!packageName.startsWith('karma-')) return []
                return [require(packageName)]
            }
        ),
        frameworks: ["ui5"],
        ui5: {
            type: "application",
            configPath: "ui5.yaml",
            paths: {
                webapp: "webapp"
            }
        },
        browsers: ["Chrome"],
        browserConsoleLogOptions: {
            level: "error"
        }
    });
};
