export default abstract class Logger {

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
     * Manage the implementation
     * @param type 
     * @param message 
     * @param context 
     */
    protected implementation(level: string, message: string) {
        //silence is not golden
    }

    /**
     * System is unusable.
     * @param message 
     * @param context 
     */
    public emergency(message: string, context?: object) {
        this.implementation("emergency", this.interpolate(message, context));
    }

    /**
     * Action must be taken immediately.
     *
     * Example: Entire website down, database unavailable, etc. This should
     * trigger the SMS alerts and wake you up.
     * @param message 
     * @param context 
     */
    public alert(message: string, context?: object) {
        this.implementation("alert", this.interpolate(message, context));
    }

    /**
     * Critical conditions.
     *
     * Example: Application component unavailable, unexpected exception.
     * @param message 
     * @param context 
     */
    public critical(message: string, context?: object) {
        this.implementation("critical", this.interpolate(message, context));
    }

    /**
     * Runtime errors that do not require immediate action but should typically
     * be logged and monitored.
     * @param message 
     * @param context 
     */
    public error(message: string, context?: object) {
        this.implementation("error", this.interpolate(message, context));
    }

    /**
     * Exceptional occurrences that are not errors.
     *
     * Example: Use of deprecated APIs, poor use of an API, undesirable things
     * that are not necessarily wrong.
     * @param message 
     * @param context 
     */
    public warning(message: string, context?: object) {
        this.implementation("warning", this.interpolate(message, context));
    }

    /**
     * Normal but significant events.
     * @param message 
     * @param context 
     */
    public notice(message: string, context?: object) {
        this.implementation("notice", this.interpolate(message, context));
    }

    /**
     *  Interesting events.
     *
     * Example: User logs in, SQL logs.
     * @param message 
     * @param context 
     */
    public info(message: string, context?: object) {
        this.implementation("info", this.interpolate(message, context));
    }

    /**
     * Detailed debug information.
     * @param message 
     * @param context 
     */
    public debug(message: string, context?: object) {
        this.implementation("debug", this.interpolate(message, context));
    }

    /**
     * Logs with an arbitrary level.
     * @param level 
     * @param message 
     * @param context 
     */
    public log(level: string, message: string, context?: object) {
        this.implementation(level, this.interpolate(message, context));
    }
}
