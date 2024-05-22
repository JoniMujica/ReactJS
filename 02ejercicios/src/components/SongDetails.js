import React from 'react'
import SongArtist from './SongArtist'
import SongLyric from './SongLyric'
import Message from './Message'

const SongDetails = ({search,lyric,bio}) => {
  if (!lyric || !bio) return null;
  return (
    <>
        {lyric.error || lyric.err || lyric.name === "AbortError" ? <Message msg={`Error:No existe la cancion ${search.song}`}  bgColor="#dc3545" /> : <SongLyric title={search.song} lyrics={lyric.lyrics} />}
        {bio.artist?<SongArtist artist={bio.artist[0]}/> : <Message msg={`Error:No existe el interprete ${search.artist}`} bgColor="#dc3545" />}
    </>
  )
}

export default SongDetails