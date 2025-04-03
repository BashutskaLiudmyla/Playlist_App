import { createPlaylistPageSelectors } from './selectors'

class CreatePlaylistPageAssertions {

 verifyPopulatedTextInSearchField(songName){
    return createPlaylistPageSelectors.getSearchField().should('have.value', songName.toLowerCase())
 }

 verifyThatSongIsInTrackList(songName){
    return createPlaylistPageSelectors.getValueFromTrackList(songName).should('have.text', songName)
 }

verifyThatSongsIsNotInTrackList(songNames){
    return songNames.forEach(songName => createPlaylistPageSelectors.getTrackList().should('not.contain', songName))
}

verifyThatSongIsInPlayList(songName){
    return createPlaylistPageSelectors.getValueFromPlayList(songName).should('have.text', songName)
}

veriTotalPlaylistDuration(){
    let totalSeconds = 0;

    createPlaylistPageSelectors.getAllDurationsInPlaylist()
      .each(($el) => {
        const timeText = $el.text().trim(); 
        const [minutes, seconds] = timeText.split(':').map(Number); 
        totalSeconds += minutes * 60 + seconds; 
      }).then(() => {
        createPlaylistPageSelectors.getTracksDurationValue().should('have.text', totalSeconds.toString())
      }) 
    }
}

export const createPlaylistPageAssertions = new CreatePlaylistPageAssertions()