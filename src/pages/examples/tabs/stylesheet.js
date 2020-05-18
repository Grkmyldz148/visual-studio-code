import { jss } from 'react-jss';
import  latoMedium  from '../../../assets/font/lato/Lato-Regular_0.ttf';
import  latoBold  from '../../../assets/font/lato/Lato-Bold_0.ttf';

export const style = {
    '@font-face':[ {
        fontFamily: 'latoMedium',
        fontWeight: 'normal',
        fontStyle: 'normal',
        src: `url(${latoMedium})`,
    },
    {
        fontFamily: 'latoBold',
        fontWeight: 'normal',
        fontStyle: 'normal',
        src: `url(${latoBold})`,
     }
],

    navbar: {
        width: "100%",
        marginTop:100
    },
    navbarGradient:{
        width: "100%",
        height: "100%",
        padding:"15px",
        background: "rgba(0,0,0,0.50)",
        display:"flex",
        justifyContent: "space-between",
        color: "#f5f5f5",
       
        listStyle: "none",
        alignItems: "center",
        fontFamily:"latoMedium",
        outline:"1px solid #1a1a1a",
        "@media (min-width: 0px) and (max-width: 450px)": {
            flexDirection: "column",
            position:"relative"
        }
    },
    navbarTxt: {
        display: "flex",
        alignItems: "center",
        cursor: 'pointer',
        marginRight: "15px",
        fontFamily: "latoMedium",
        color: "#929397",
        '& li:hover': {
            transition: "300ms",
            color: "#f5f5f5",
            borderBottom: "1px solid #f5f5f5",
        }
    },

};
export default style;


