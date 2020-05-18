import { jss } from 'react-jss';
import  couret  from '../../../../../assets/font/fab.otf';
import  background  from '../../../../../assets/images/1.jpg';
export const style = {
    '@font-face': {
        fontFamily: 'couret',
        fontWeight: 'normal',
        fontStyle: 'normal',
        src: `url(${couret})`,
    },
    container: {
        width: "100%",
        backgroundColor: "#27282C",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        color: "#f5f5f5",
        listStyle: "none",
        justifyContent: "space-between",
        fontFamily:"couret",
        flexDirection:"column",
        height: "100vh",
        flexWrap:"wrap",
        "@media (max-width: 1021px)": {
            flexDirection:"column",
       }
    },
    background:{
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.80)",
        display:"flex",
        flexDirection: "column",
    },
    Column: ({ bgcolor }) => ({
        backgroundColor: bgcolor,
        paddingTop:50,
        width: "100%",
        height: "50%",
        display: "flex",
        flexDirection: "wraps",
        textAlign: "left",
        "@media (max-width: 1021px)": {
            height: "60%",
        }
    }),
    musicColumn: ({ bgcolor }) => ({
        backgroundColor: bgcolor,
        width: "100%",
        height: "50%",
        padding: 20,
        display: "flex",
        flexWrap: "wrap",
        textAlign: "left",
        marginTop:20,
        "@media (max-width: 1021px)": {
   
       }
    }),
};
export default style;


