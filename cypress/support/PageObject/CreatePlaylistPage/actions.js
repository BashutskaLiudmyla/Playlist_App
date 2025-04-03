import { createPlaylistPageSelectors } from './selectors'
import { createPlaylistPageAssertions } from './assertions'

class CreatePlaylistPageActions {

    typeSongInSearch(songName) {
        return createPlaylistPageSelectors.getSearchField().clear().type(songName)
        .then(() => createPlaylistPageAssertions.verifyPopulatedTextInSearchField(songName))
    }

    addSongToPlayList(songId) {
        return createPlaylistPageSelectors.getAddSongBtn(songId).click()
    }

    addSongsToPlayList(songIds) {
        return cy.then(() => songIds.forEach(songId => this.addSongToPlayList(songId)))
    }

}

export const createPlaylistPageActions = new CreatePlaylistPageActions()