import img2 from '../images/img2.png'

export const gridContainer = {
    height: '100vh',
    padding: '2%',
    backgroundImage: `url('${img2}')`
}

export const imageStyle = {
    // width:''
}

export const griditem = {
    width: '100%',
    opacity: '1',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: { md: 'flex-start', sm: 'center', xs: 'center' },
}

export const typo = {
    fontWeight: 'bolder',
    fontFamily: 'Poppins',

}

export const ptypo = {
    fontFamily: 'Poppins',
    fontSize: '12px',
    marginTop: '5%',
    width: '100%'
}

export const ptypos = {
    fontFamily: 'Poppins',
    fontSize: '12px',
    marginTop: '5%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
}

export const textField = {
    width: '100%',
}

export const textFields = {
    width: '98%'
}

export const logo = {
    width: '100px',
    height: 'auto',
    objectFit: 'contain',
}

export const btn = {
    backgroundColor: 'white',
    color: 'black',
    borderWidth: '2px 2px 0px 2px',
    borderStyle: 'solid',
    borderColor: '#0000001c',
    borderRadius: '5px 5px 0px 0px',
}

export const btn2 = {
    backgroundColor: '#f2f2f2',
    color: 'black',
    borderWidth: '2px 2px 0px 2px',
    borderStyle: 'solid',
    borderColor: '#f2f2f2',
}

export const loginBtn = {
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    height: '50px',
    marginTop: '4%',
    "&:hover": {
        backgroundColor: 'black',
        color: 'white',
    }
}