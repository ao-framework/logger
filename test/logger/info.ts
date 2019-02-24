import { MyLogger } from "./@entry";

export function info(done) {
    let logger = new MyLogger();
    logger.events.on("info", (level, message) => {
        expect(level).toBe("info");
        expect(message).toBe("info-message");
        done();
    });
    logger.info("info-message");
}
