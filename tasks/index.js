'use strict';

var copyBrowserTo = require('copy-browser-modules');
var path = require('path');

module.exports = function dustjs(grunt) {
    grunt.registerMultiTask('copy-browser-modules', 'Copy browser modules from npm into a final place', function () {
        var options = this.options({
            root: process.cwd(),
            dest: 'public/components',
            docRoot: 'public'
        }, this.data);

        var done = this.async();

        copyBrowserTo({
            src: options.root,
            dest: path.relative(options.docRoot, options.dest),
            docRoot: options.docRoot,
            each: function (pkg) {
                grunt.verbose.ok('copied', pkg.name, 'to', options.dest);
            }
        }).then(function () {
            done();
        }).catch(done);
    });
};
