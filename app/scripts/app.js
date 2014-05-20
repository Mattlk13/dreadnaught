'use strict';

requirejs.config({
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery'
    },
    map: {
        // make jQuery work in no conflict mode
        '*': {'jquery': 'jquery-private'},
        'jquery-private': {'jquery': 'jquery'}
    }
});

// Load the main app module to start the app
requirejs(['main']);