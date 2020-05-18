import { jss } from 'react-jss';
import latoMedium from '../../../assets/font/lato/Lato-Italic.ttf';
import latoBold from '../../../assets/font/lato/Lato-Bold_0.ttf';
export const style = {
    '@font-face': [
        {
            fontFamily: 'latoMedium',
            src: `url(${latoMedium})`,
        },
        {
            fontFamily: 'latoBold',
            src: `url(${latoBold})`,
        }
    ],
    container: {
        width: "33.3%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        color: "#f5f5f5",
        flexDirection: "row",
    },
    Column: ({ bgcolor }) => ({
        backgroundColor: bgcolor,
        width: "100%",
        height: "100vh",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        textAlign: "left",
    }),
    paragraph: {
        width: "90%",
        height: "100%",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

    },
    title: {
        fontSize: '40px',
        color: "#f5f5f5",
        marginBottom: 20,
        fontFamily: "latoBold",
        "@media (max-width: 1021px)": {
            padding: 40,
        }
    },
    content: {
        maxWidth: "100%",
        fontSize: '20px',
        color: "#B8B8B8",
        fontFamily: "latoMedium",
        textAlign: "left",
    },
    link: {
        maxWidth: "40%",
        marginTop: 20,
        color: "#ffffff",
        fontFamily: "latoMedium",
        cursor: 'pointer',
    },
    imageContainer: {
        width: "50%",
        height: "100%",
        padding: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    image: ({ width, height }) => ({
        width: width,
        height: height,
        maxWidth: "1000px",
        outline: "1px solid #111111",
        boxShadow: "inset 0px 0px 0px 200px rgba(0,0,0,1)"
    })
};
export default style;