/**
 * ### @ao-framework > logger
 * 
 * Abstract class definition for the creating
 * custom loggers where the developer only has
 * to handle the implementation
 */
export default abstract class Logger {

    /**
     * ### @ao-framework > logger > interpolate
     * 
     * Method to handle interpolation to recursively combine
     * a context with a message. Usually this done directly
     * in javascript. However, there maybe times when code 
     * would smell better using this interpolation
     * @param message 
     * @param context 
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
     * ### @ao-framework > logger > implementation
     * 
     * Manage the implementation
     * 
     * This is specific the logger the developer
     * is trying to create.
     * @param type 
     * @param message 
     * @param context 
     */
    protected implementation(level: string, message: string): Promise<any> {
        return Promise.resolve()
    }

    /**
     * ### @ao-framework > logger > emergency
     * 
     * System is unusable.
     * @param message 
     * @param context 
     */
    public emergency(message: string, context?: object) {
        return this.implementation("emergency", this.interpolate(message, context));
    }

    /**
     * ### @ao-framework > logger > alert
     * 
     * Action must be taken immediately.
     *
     * Example: Entire website down, database unavailable, etc. This should
     * trigger the SMS alerts and wake you up.
     * @param message 
     * @param context 
     */
    public alert(message: string, context?: object) {
        return this.implementation("alert", this.interpolate(message, context));
    }

    /**
     * ### @ao-framework > logger > critical
     * 
     * Critical conditions.
     *
     * Example: Application component unavailable, unexpected exception.
     * @param message 
     * @param context 
     */
    public critical(message: string, context?: object) {
        return this.implementation("critical", this.interpolate(message, context));
    }

    /**
     * ### @ao-framework > logger > error
     * 
     * Runtime errors that do not require immediate action but should typically
     * be logged and monitored.
     * @param message 
     * @param context 
     */
    public error(message: string, context?: object) {
        return this.implementation("error", this.interpolate(message, context));
    }

    /**
     * ### @ao-framework > logger > warning
     * 
     * Exceptional occurrences that are not errors.
     *
     * Example: Use of deprecated APIs, poor use of an API, undesirable things
     * that are not necessarily wrong.
     * @param message 
     * @param context 
     */
    public warning(message: string, context?: object) {
        return this.implementation("warning", this.interpolate(message, context));
    }

    /**
     * ### @ao-framework > logger > notice
     * 
     * Normal but significant events.
     * @param message 
     * @param context 
     */
    public notice(message: string, context?: object) {
        return this.implementation("notice", this.interpolate(message, context));
    }

    /**
     * ### @ao-framework > logger > info
     * 
     *  Interesting events.
     *
     * Example: User logs in, SQL logs.
     * @param message 
     * @param context 
     */
    public info(message: string, context?: object) {
        return this.implementation("info", this.interpolate(message, context));
    }

    /**
     * ### @ao-framework > logger > debug
     * 
     * Detailed debug information.
     * @param message 
     * @param context 
     */
    public debug(message: string, context?: object) {
        return this.implementation("debug", this.interpolate(message, context));
    }

    /**
     * ### @ao-framework > logger > log
     * 
     * Logs with an arbitrary level.
     * @param level 
     * @param message 
     * @param context 
     */
    public log(level: string, message: string, context?: object) {
        return this.implementation(level, this.interpolate(message, context));
    }
}
