import React from 'react'
import TextField from '@mui/material/TextField';
import '../App.css'
function TextAreas() {
    return (
        <div className='txtAreas'>
            <div className='txtArea'>
            <TextField id="standard-basic" type='number' label="Telefon Numarası" variant="standard" />
            </div>
            <div className='txtArea'>
            <TextField id="standard-basic" type='password' label="Şifre" variant="standard" />
            </div>
        </div>
    )
}

export default TextAreas