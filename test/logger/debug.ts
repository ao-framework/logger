import { MyLogger } from "./@entry";
export function debug(done) {
    let logger = new MyLogger();
    logger.events.on("debug", (level, message) => {
        expect(level).toBe("debug");
        expect(message).toBe("debug-message");
        done();
    });
    logger.debug("debug-message");
}
