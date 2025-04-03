import { createPlaylistPageActions } from '../support/PageObject/CreatePlaylistPage/actions'
import { createPlaylistPageAssertions } from '../support/PageObject/CreatePlaylistPage/assertions'
import { SONG_IDS, SONG_NAMES } from '../support/PageObject/CreatePlaylistPage/constants'

describe('Playlist App', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('TC01 - Search Functionality', () => {
        createPlaylistPageActions.typeSongInSearch(SONG_NAMES.SUMMER_BREEZE)
        createPlaylistPageAssertions.verifyThatSongIsInTrackList(SONG_NAMES.SUMMER_BREEZE)
        createPlaylistPageAssertions.verifyThatSongsIsNotInTrackList([SONG_NAMES.AUTUMN_LEAVES, SONG_NAMES.WINTER_WINDS, SONG_NAMES.SPRING_DANCE, SONG_NAMES.RAINY_MOOD])
    })

    it('TC02 - Add Track Using "+" Button', () => {
        createPlaylistPageActions.addSongToPlayList(SONG_IDS.SUMMER_BREEZE)
        createPlaylistPageAssertions.verifyThatSongIsInPlayList(SONG_NAMES.SUMMER_BREEZE)
    })  

    it('TC03 - Verify Total Duration of the Playlist in Seconds', () => {
      createPlaylistPageActions.addSongsToPlayList([SONG_IDS.SUMMER_BREEZE, SONG_IDS.AUTUMN_LEAVES, SONG_IDS.WINTER_WINDS, SONG_IDS.SPRING_DANCE, SONG_IDS.RAINY_MOOD]).then(() => {
        createPlaylistPageAssertions.veriTotalPlaylistDuration()
      })
    })  

})    