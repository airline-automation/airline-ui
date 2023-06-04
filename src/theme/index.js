const colors = {
    // 061526
    primary: "#232B38",
    primaryLight: "#2B3947",
    primaryFaded: "#647280",

    red: "#ef2636",
    white: "#ffffff",
    black: "#181C23",
    grey: "#6E7B89",
    lightGrey: "#f4f5f8",
    lightGreyFaded: "#F4F6F8",

    primaryDark: "#212121",

    secondary: "#00548a",
    secondaryLight: "#94ebd1",
    secondaryDark: "#1c8573",
    secondaryFaded: "#f0fff9",

    tertiary: "#fb99b4",
    tertiaryLight: "#ffedf1",
    tertiaryDark: "#ad5876",
    tertiaryFaded: "#fff0f1",

    smoke: "#d9d9d9",
    smokeLight: "#a6a6a6",
    smokeDark: "#727272",
    smokeFaded: "#b3b3b3",

    background: "#211D34",

    error: "#ff4d4f",
    warning: "#faad14",
    success: "#52c41a",
    link: "#1890ff",

    border: "#ececec",

    android: "#498d00",
    apple: "#4a4a4a",
    volcano: "#fa541c",
    orange: "#ff8300",
    gold: "#faad14",
    yellow: "#fadb14",
    yellowLight: "#fffb8f",
    lime: "#a0d911",
    green: "#5ad363",
    cyan: "#13c2c2",
    blue: "#00a6fb",
    geekblue: "#1a73e8",
    purple: "#9400ff",
    magenta: "#eb2f96",
};

const colorMap = {
    primary: colors.primary,
    "primary-light": colors.primaryLight,
    "primary-dark": colors.primaryDark,
    "primary-faded": colors.primaryFaded,

    secondary: colors.secondary,
    "secondary-light": colors.secondaryLight,
    "secondary-dark": colors.secondaryDark,
    "secondary-faded": colors.secondaryFaded,

    tertiary: colors.tertiary,
    "tertiary-light": colors.tertiaryLight,
    "tertiary-dark": colors.tertiaryDark,
    "tertiary-faded": colors.tertiaryFaded,

    smoke: colors.smoke,
    "smoke-light": colors.smokeLight,
    "smoke-dark": colors.smokeDark,
    "smoke-faded": colors.smokeFaded,

    background: colors.background,

    error: colors.error,
    success: colors.success,
    warning: colors.warning,
    border: colors.border,
    link: colors.link,

    red: colors.red,
    volcano: colors.volcano,
    orange: colors.orange,
    gold: colors.gold,
    yellow: colors.yellow,
    lime: colors.lime,
    green: colors.green,
    cyan: colors.cyan,
    blue: colors.blue,
    geekblue: colors.geekblue,
    purple: colors.purple,
    magenta: colors.magenta,
    white: colors.white,
    black: colors.black,
};

const getThemedColor = (color, cMap) => {
    const validColor = color || "primary";
    return cMap[validColor];
};

const theme = {
    colors,

    main: {
        xsMaxSize: 576,
        smMinSize: 576,
        mdMinSize: 768,
        lgMinSize: 992,
        xlMinSize: 1200,
        xxlMinSize: 1600,

        margin: 10,
        marginBig: 40,
        padding: 10,
        paddingBig: 40,
        borderRadius: 5,
    },

    // COMPONENTS

    typography: {
        family: {
            primary: "Prompt",
            secondary: "sans-serif",
        },
    },

    header: {
        bgColor: colors.background,
        height: 92,
        verticalPadding: 20,
        horizontalPadding: "",
        shadow: "0px 1px 2px 0px rgb(60 64 67 / 30%), 0px 1px 3px 1px rgb(60 64 67 / 15%)",
    },

    content: {
        bgColor: colors.background,
        verticalPadding: "",
        horizontalPadding: "",
        height: "100vh",
    },

    footer: {
        bgColor: colors.background,
        verticalPadding: "",
        horizontalPadding: "",
        height: "100vh",
    },

    shadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px - 3px, rgba(0, 0, 0, 0.05) 0px 4px 6px - 2px",

    button: {
        primary: {
            bgColor: colors.secondary,
            hoverColor: colors.white,
            textColor: colors.primary,
            hoverTextColor: colors.primary,
        },
        secondary: {
            bgColor: colors.white,
            hoverColor: colors.secondary,
            textColor: colors.primary,
            hoverTextColor: colors.white,
        },
    },

    getThemedColor(color) {
        return getThemedColor(color, colorMap);
    },

    getThemedWeight(weight) {
        return weight;
    },
};

export default theme;
