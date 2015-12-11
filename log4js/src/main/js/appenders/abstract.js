/**
 * Abstract Appender writing the log through provided functions.
 * 
 * @extends Log4js.Appender 
 * @constructor
 * @param appendfn function to append a string to log
 * @param clearfn function to clear the log
 * @author Jeffrey Scofield jeffsco@cse.uw.edu
 */
Log4js.AbstractAppender = function(appendfn, clearfn) {
    this.layout = new Log4js.SimpleLayout();
    this.appendfn = appendfn;
    this.clearfn = clearfn;
};

Log4js.AbstractAppender.prototype = Log4js.extend(new Log4js.Appender(), /** @lends Log4js.AbstractAppender# */ {  
    /**
     * @param loggingEvent event to be logged
     * @see Log4js.Appender#doAppend
     */
    doAppend: function(loggingEvent) {
        try {
            this.appendfn(this.layout.format(loggingEvent));
        } catch (e) {
            log4jsLogger && log4jsLogger.error(e);
        }
    },
    /**
     * @see Log4js.Appender#doClear
     */
    doClear: function() {
        try {
            this.clearfn();
        } catch (e) {
            log4jsLogger && log4jsLogger.error(e);
        }
    },
	
    /** 
     * toString
     */
     toString: function() {
        return "Log4js.AbstractAppender"; 
     }
});
