'use strict';

var copyBrowserTo = require('copy-browser-modules');

module.exports = function dustjs(grunt) {
    grunt.registerMultiTask('copy-browser-modules', 'Copy browser modules from npm into a final place', function () {
        var options = this.options({
            root: process.cwd(),
            dest: 'public/components/'
        }, this.data);

        var done = this.async();

        copyBrowserTo(options.root, options.dest, function (pkg) {
            grunt.verbose.ok('copied', pkg.name, 'to', options.dest);
        }).then(function () {
            done();
        }).catch(done);
    });
};
