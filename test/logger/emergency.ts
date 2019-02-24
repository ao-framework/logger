import { MyLogger } from "./@entry";
export function emergency(done) {
    let logger = new MyLogger();
    logger.events.on("emergency", (level, message) => {
        expect(level).toBe("emergency");
        expect(message).toBe("emergency-message");
        done();
    });
    logger.emergency("emergency-message");
}
