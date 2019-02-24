import { MyLogger } from "./@entry";

export function critical(done) {
    let logger = new MyLogger();
    logger.events.on("critical", (level, message) => {
        expect(level).toBe("critical");
        expect(message).toBe("critical-message");
        done();
    });
    logger.critical("critical-message");
}
