class CreatePlaylistPageSelectors {
    tracList = '#tracklist'
    playlist = '#playlist'

    getSearchField() {
        return cy.get(`[id = ':r0:']`)
    }

    getTrackList() {
        return cy.get(this.tracList)
    }

    getValueFromTrackList(value) {
        return cy.get(this.tracList).contains(value)
    }

    getAddSongBtn(id) {
        return cy.get(`${this.tracList} button`).eq(id)
    }

    getValueFromPlayList(value) {
        return cy.get(this.playlist).contains(value)
    }

    getTracksDurationValue() {
        return cy.get(`#playlist-duration`)
    }

    getAllDurationsInPlaylist() {
        return cy.get(`${this.playlist} .MuiGrid-item:nth-child(3) p`) 
    }

}

export const createPlaylistPageSelectors = new CreatePlaylistPageSelectors()