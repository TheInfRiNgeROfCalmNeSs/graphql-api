const sessions = require('../data/sessions.json')
const { DataSource } = require('apollo-datasource')
const _ = require('lodash')

class SessionAPI extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {

    }

    getSessions({ input }) {
        return _.filter(sessions, { ...input });
    }

    getSessionById(myId) {
        const reSessions = _.filter(sessions, { id: parseInt(myId, 10) })
        return reSessions[0];
    }
}

module.exports = SessionAPI;