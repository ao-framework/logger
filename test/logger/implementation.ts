import { MyLogger } from "./@entry";

export function implementation(done) {
    let logger = new MyLogger();
    logger.events.on("level", (level, message) => {
        expect(level).toBe("level");
        expect(message).toBe("message");
        done();
    });
    logger["implementation"]("level", "message");
}
