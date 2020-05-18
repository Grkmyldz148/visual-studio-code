import { jss } from 'react-jss';

export const style = {
    button: {
        letterSpacing: "0.7px",
        border: "none",
        outline: "none",
        borderRadius: "5px",
        margin: "4px",
        cursor: "pointer",
        transition: "box-shadow 0.1s, background 0.1s, transform 0.1s",
        "&:hover": {
            boxShadow: "0px 0px 8px rgba(0,0,0,0.25)",
            transition: "box-shadow 0.1s, background 0.1s, transform 0.1s"
        },
        "&:active": {
            boxShadow: "none",
            transition: "transform 0.1s, box-shadow 0.1s"
        },
        "&:focus": {
            border: "1.5px solid #c26500"
        }
    },
    primary: {
        background: "#00c2a9",
        color: "#f5f5f5",
        "&:hover": {
            background: "#00d8bb"
        }
    },
    secondary: {
        background: "#f5f5f5",
        color: "#444444",
        "&:hover": {
            background: "#f8f8f8"
        }
    },
    dark: {
        background: "#272727",
        color: "#00c2a9",
        "&:hover": {
            background: "#5f5f5f"
        }
    },
    sm: {
        padding: "8px 16px",
        fontSize: "16px",
        fontFamily: "Lato-Semibold"
    },
    md: {
        padding: "8px 18px",
        fontSize: "20px",
        fontFamily: "Lato-Semibold"
    },
    lg: {
        padding: "8px 20px",
        fontSize: "24px",
        fontFamily: "Lato-Regular"
    },
    icon: {
        margin: "0",
        padding: "0",
        minWidth: "42px",
        minHeight: "42px",
        maxWidth: "75px",
        maxHeight: "75px",
        fontSize: "20px",
        "&:focus": {
            border: "none"
        }
    }
}
export default style;


