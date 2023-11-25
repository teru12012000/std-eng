import { style } from '@vanilla-extract/css'

const styles = {
    container: style({
        width: '75%',
        margin: '50px auto',
    }),
    titleBox: style({
        textAlign: 'center',
    }),
    titleText: style({
        fontSize: '40px',
        fontWeight: 'bold',
    }),
    alertBox: style({
        marginTop: '20px',
        marginBottom: '20px',
    }),
}

export default styles
