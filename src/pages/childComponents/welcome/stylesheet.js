import { jss } from 'react-jss';
import  latoMedium  from '../../../assets/font/lato/Lato-Italic.ttf';
import  latoBold  from '../../../assets/font/lato/Lato-Bold_0.ttf';
export const style = {
    '@font-face':[
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
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        color: "#f5f5f5",
        height: "100%",
        flexDirection: "row",
        "@media (max-width: 1021px)": {
            flexDirection:"column",
            "@media (min-width: 0px) and (max-width: 1021px)": {
                flexDirection: "row",
            }
        }
        
    },
    title:({titleFontSize})=>({
        
        maxWidth: 500,
        fontSize: titleFontSize,
        color: "#f5f5f5",
        marginBottom: 20,
        fontFamily:"latoBold",
        width:"90%",
        textAlign: "left",
        "@media (max-width: 1021px)": {
    
        }
    }),
    paragraph: {
        width: "50%",
        height: "100%",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "left",
    },
    content :({fontSize})=>({
        wordWrap:"break-word",
        maxWidth: 500,
        fontSize: fontSize,
        color: "#B8B8B8",
        fontFamily:"latoMedium",
        width:"90%",
        textAlign: "left",
    }),
    imageContainer:{
        width: "50%",
        height: "100%",
        margin:20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    image:({width, height})=>({
        width: width,
        height: height,
        maxWidth:"1000px",
        outline:"1px solid #111111",
        boxShadow: "inset 0px 0px 0px 200px rgba(0,0,0,1)"
    })
};
export default style;