module.exports = {
    purge: {
        enabled: false,
        content: ["./pages/**/*.js", "./components/**/*.js"],
    },
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            zIndex: {
                "-10": "-10",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
