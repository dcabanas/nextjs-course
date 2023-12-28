const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

/*
    It is recommended to inject and use ENV variables
    directly in Vercel (or any other deployment server)
    instead of using this file
 */
module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'maximilian',
                mongodb_password: '2YkcXq43KyPk0vqp',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'my-site-dev'
            }
        }
    }

    return {
        env: {
            mongodb_username: 'maximilian',
            mongodb_password: '2YkcXq43KyPk0vqp',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'my-site'
        }
    }
}