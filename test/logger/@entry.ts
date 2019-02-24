import Logger from "../../src";
import { EventEmitter } from "events";
import { interpolate } from "./interpolate";
import { implementation } from "./implementation";
import { emergency } from "./emergency";
import { alert } from "./alert";
import { critical } from "./critical";
import { error } from "./error";
import { warning } from "./warning";
import { notice } from "./notice";
import { info } from "./info";
import { debug } from "./debug";
import { log } from "./log";

export class MyLogger extends Logger {
    public events = new EventEmitter();

    protected implementation(level: string, message: string) {
        super.implementation(level, message);
        this.events.emit(level, level, message);
    }

    public testInterpolation(message: string, context: object) {
        return this.interpolate(message, context);
    }
}

export default function () {
    const template = (method: string) => `logger.${method}`
    test(template("interpolate"), interpolate)
    test(template("implementation"), implementation)
    test(template("emergency"), emergency)
    test(template("alert"), alert)
    test(template("critical"), critical)
    test(template("error"), error)
    test(template("warning"), warning)
    test(template("notice"), notice)
    test(template("info"), info)
    test(template("debug"), debug)
    test(template("log"), log)
}
