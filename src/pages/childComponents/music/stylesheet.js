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
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        color: "#f5f5f5",
        flexWrap: "wrap",
        "@media (max-width: 1021px)": {
            flexDirection: "row",
          
        }

    },
    musicFrame: {
        backgroundColor: "rgba(57, 44, 114, 0.60)",
        margin: 10,
        alignItems: "center",
        textAlign: "center",
        width: "150px",
        height: "150px",
        borderRadius: "20px",
        padding: 1,
        "&:hover": {
            transition: "250ms",
            backgroundColor: "rgba(57, 44, 114, .8)",
            boxShadow: "0px 0px 0px 2px rgba(255,255,255,0.5)",
        }
    },
    icoFrame: {
        fontSize: "50px",
        height: "50%",
        padding: 10,
        color: "#d2d2d2",
    },
    titleFrame: {
        margin: 10,
        color: "#d2d2d2",
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

    })
};
export default style;