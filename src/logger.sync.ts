/**
 * Abstract class definition for the creating
 * custom loggers where the developer only has
 * to handle the implementation
 * 
 * Inspired by PSR-3 created by the PHP-FIG team.
 * Thanks!!
 */
export default abstract class LoggerSync {

    /**
     * Method to handle interpolation to recursively combine
     * a context with a message. Usually this is done directly
     * with javascript. However, there maybe times when a piece of 
     * code would smell better using this version of interpolation.
     * 
     * @param message The message to use in the interpolation
     * @param context The context data to use with the message
     */
    protected interpolate(message: string, context?: object) {
        if (typeof context === "object" && (context !== null && context !== undefined)) {
            return message.replace(/\$\{(.*?)\}/g, (match, capture: string) => {
                return capture.split('.')
                    .reduce((context, level) => context[level], context)
            })
        }
        return message;
    }

    /**
     * Create the implementation of this specific logger
     * 
     * @param level The level of the log entry 
     * @param message The message to log
     * @param context The context data to use with the message
     */
    protected implementationSync(level: string, message: string): any { }

    /**
     * System is unusable.
     * 
     * @param message The message to log
     * @param context The context data to use with the message
     */
    public emergencySync(message: string, context?: object) {
        return this.implementationSync("emergency", this.interpolate(message, context));
    }

    /**
     * Action must be taken immediately.
     *
     * Example: Entire website down, database unavailable, etc. This should
     * trigger the SMS alerts and wake you up.
     * 
     * @param message The message to log
     * @param context The context data to use with the message
     */
    public alertSync(message: string, context?: object) {
        return this.implementationSync("alert", this.interpolate(message, context));
    }

    /**
     * Critical conditions.
     *
     * Example: Application component unavailable, unexpected exception.
     * 
     * @param message The message to log
     * @param context The context data to use with the message
     */
    public criticalSync(message: string, context?: object) {
        return this.implementationSync("critical", this.interpolate(message, context));
    }

    /**
     * Runtime errors that do not require immediate action but should typically
     * be logged and monitored.
     * 
     * @param message The message to log
     * @param context The context data to use with the message
     */
    public errorSync(message: string, context?: object) {
        return this.implementationSync("error", this.interpolate(message, context));
    }

    /**
     * Exceptional occurrences that are not errors.
     *
     * Example: Use of deprecated APIs, poor use of an API, undesirable things
     * that are not necessarily wrong.
     * 
     * @param message The message to log
     * @param context The context data to use with the message
     */
    public warningSync(message: string, context?: object) {
        return this.implementationSync("warning", this.interpolate(message, context));
    }

    /**
     * Normal but significant events.
     * 
     * @param message The message to log
     * @param context The context data to use with the message
     */
    public noticeSync(message: string, context?: object) {
        return this.implementationSync("notice", this.interpolate(message, context));
    }

    /**
     *  Interesting events.
     *
     * Example: User logs in, SQL logs.
     * 
     * @param message The message to log
     * @param context The context data to use with the message
     */
    public infoSync(message: string, context?: object) {
        return this.implementationSync("info", this.interpolate(message, context));
    }

    /**
     * Detailed debug information.
     * 
     * @param message The message to log
     * @param context The context data to use with the message
     */
    public debugSync(message: string, context?: object) {
        return this.implementationSync("debug", this.interpolate(message, context));
    }

    /**
     * Logs with an arbitrary level.
     * 
     * @param level The level of the log entry 
     * @param message The message to log
     * @param context The context data to use with the message
     */
    public logSync(level: string, message: string, context?: object) {
        return this.implementationSync(level, this.interpolate(message, context));
    }
}
