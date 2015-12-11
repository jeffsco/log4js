How to build log4js for TractDB
===============================

*Dec 10, 2015*

0.  Need to start with node and ant installed. I installed them using
    homebrew:

    $ brew install node
    $ brew install ant

1.  Start in the log4js top directory (where this BUILDME.md file is
    located).

    $ ls -C
    BUILDME.md              build.properties        log4js-solr
    CHANGELOG.txt           build.xml               nbproject
    INSTALL.txt             lib                     node_modules
    LICENSE.txt             log4js                  package.json
    NOTICE.txt              log4js-examples         tools
    README.md               log4js-servlet
    build                   log4js-site

2.  Install the grunt cli:

    $ npm install grunt-cli

    ((Grunt is unhappy it's not being installed globally....))

3. Add node packages to PATH:

    $ PATH=$PATH:$(pwd)/node_modules/.bin

    (This lets ant run the grunt cli.)

4.  Install all the node packages listed in package.json

    $ npm install
    (( Installs many many packages... ))

5.  Install all the node packages listed in log4js/package.json

    $ cd log4js
    $ npm install
    (( Installs many many packages... ))

6.  Back to the log4js top directory.

    $ cd ..

7.  Build log4js with ant:

    $ ant release
    Buildfile: /Users/jeffsco/Work/Health/log4js/build.xml

    init:

    -compile-win:

    -compile-unix:
         [exec] Running "concat:build" (concat) task
         [exec] File target/files/log4js/js/log4js.combined.js created.
         [exec] 
         [exec] Running "uglify:build" (uglify) task
         [exec] File target/log4js.min.js created: 69.9 kB → 30.35 kB
         [exec] 
         [exec] Done, without errors.

    -compile-mac:

    BUILD FAILED
    /Users/jeffsco/Work/Health/log4js/build.xml:106: Sorry, MAC is not supported.

    Total time: 1 second

    (Things worked fine, it just complains whenever you try to do
    anything on a Mac.)

8.  The minified version of log4j is now in `log4js/target/log4js.min.js`:

    $ ls -l log4js/target/log4js.min.js 
    -rw-r--r--+ 1 jeffsco  staff  30352 Dec 10 16:23 log4js/target/log4js.min.js
