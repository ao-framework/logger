import { MyLogger } from "./@entry";

export function warning(done) {
    let logger = new MyLogger();
    logger.events.on("warning", (level, message) => {
        expect(level).toBe("warning");
        expect(message).toBe("warning-message");
        done();
    });
    logger.warningSync("warning-message");
}
