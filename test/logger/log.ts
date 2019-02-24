import { MyLogger } from "./@entry";
export function log(done) {
    let logger = new MyLogger();
    logger.events.on("something-special", (level, message) => {
        expect(level).toBe("something-special");
        expect(message).toBe("something-special-message");
        done();
    });
    logger.log("something-special", "something-special-message");
}
