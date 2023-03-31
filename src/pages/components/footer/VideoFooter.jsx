import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className='videoFooter'>
        <div className='text'>
            <h3>@Rafael Faust</h3>
            <p>Descrisão do video</p>
            <div className='music'>
            <MusicNoteIcon className='icon'/>
                <div className='musicText'>
                    <p>Titulo da musica</p>
                </div>
            </div>
        </div>
        <img 
            className='record'
            alt='vinil'
            src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png'        
        />
    </div>
  )
}

export default VideoFooter