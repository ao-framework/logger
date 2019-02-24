import { MyLogger } from "./@entry";

export function error(done) {
    let logger = new MyLogger();
    logger.events.on("error", (level, message) => {
        expect(level).toBe("error");
        expect(message).toBe("error-message");
        done();
    });
    logger.error("error-message");
}
