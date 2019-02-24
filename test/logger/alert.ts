import { MyLogger } from "./@entry";
export function alert(done) {
    let logger = new MyLogger();
    logger.events.on("alert", (level, message) => {
        expect(level).toBe("alert");
        expect(message).toBe("alert-message");
        done();
    });
    logger.alert("alert-message");
}
