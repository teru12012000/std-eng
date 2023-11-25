import { style } from '@vanilla-extract/css'

const styles = {
    containar: style({
        width: '75%',
        margin: '50px auto',
    }),
    titleBox: style({
        fontSize: '40px',
        fontWeight: 'bold',
        textAlign: 'center',
    }),
    menuBox: style({
        marginTop: '20px',
        textAlign: 'center',
    }),
    subTitle: style({
        fontSize: '30px',
        fontWeight: 'bold',
    }),
    menuList: style({
        marginTop: '5px',
    }),
}

export default styles
