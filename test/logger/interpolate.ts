import { MyLogger } from "./@entry";
export function interpolate() {
    let logger = new MyLogger();
    let logmessage = logger.testInterpolation("Hello ${name}", { name: "J.D. Crowe" });
    let logmessageTwo = logger.testInterpolation("Hello", null);
    let logmessageThree = logger.testInterpolation("Hello ${user.name}", {
        user: {
            name: "J.D. Crowe"
        }
    })
    expect(logmessage).toBe("Hello J.D. Crowe");
    expect(logmessageTwo).toBe("Hello");
    expect(logmessageThree).toBe("Hello J.D. Crowe");
}
