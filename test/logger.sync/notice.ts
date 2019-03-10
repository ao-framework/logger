import { MyLogger } from "./@entry";

export function notice(done) {
    let logger = new MyLogger();
    logger.events.on("notice", (level, message) => {
        expect(level).toBe("notice");
        expect(message).toBe("notice-message");
        done();
    });
    logger.noticeSync("notice-message");
}
