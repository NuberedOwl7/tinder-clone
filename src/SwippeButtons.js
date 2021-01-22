import React from 'react';
import './SwipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton  from '@material-ui/core/IconButton';


function SwippeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButton>
                <ReplayIcon fontSize='large' className="swipeButtons_repeat" />
            </IconButton>

            <IconButton>
                <CloseIcon fontSize='large' className="swipeButtons_left" />
            </IconButton>

            <IconButton>
                <StarRateIcon fontSize='large' className="swipeButtons_star" />
            </IconButton>

            <IconButton>
                <FavoriteIcon fontSize='large' className="swipeButtons_right" />
            </IconButton>

            <IconButton>
                <FlashOnIcon fontSize='large' className="swipeButtons_lightning" />
            </IconButton>

        </div>
    )
}

export default SwippeButtons
