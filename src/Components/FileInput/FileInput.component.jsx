import React from 'react';
import './FileInput.styles.scss';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/Camera';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    button: {
        borderRadius: '100%',
    },
    icon: {
        margin: '0',
        padding: '0'
    },
    camera: {
        backgroundColor: 'green',
        color: 'white',
        padding: '8px 20px',

        '&:hover': {
            backgroundColor: 'darkgreen'
        }
    },
    Loading: {
        color: 'white',
        height: '100%',
        width: '100%'
    }
})

function FileInput({ handleChange, value, isLoading, isButton, ...otherProps }) {
    const classes = useStyles()
    return (
        <div className={`${isButton ? 'is-button' : 'file-input'}`}>
            <label htmlFor={value}>
                <input
                    style={{ display: 'none' }}
                    id={value}
                    name="upload-photo"
                    type="file"
                    onChange={e => handleChange(e.target.files[0])}
                    {...otherProps}
                />

                <Button className={isButton ? classes.camera : classes.button} variant="contained" component="span">
                    {!isLoading ?
                        isButton ?
                            'Upload Photo'
                            :
                            <CameraIcon className={classes.icon} />
                        :
                        <CircularProgress size={25} className={classes.Loading} />
                    }
                </Button>
            </label>
        </div>
    )
}

export default FileInput
