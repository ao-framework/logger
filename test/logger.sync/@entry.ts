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
import LoggerSync from "../../src/logger.sync";

export class MyLogger extends LoggerSync {
    public events = new EventEmitter();

    protected implementationSync(level: string, message: string) {
        super.implementationSync(level, message);
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
    test(template("emergencySync"), emergency)
    test(template("alertSync"), alert)
    test(template("criticalSync"), critical)
    test(template("errorSync"), error)
    test(template("warningSync"), warning)
    test(template("noticeSync"), notice)
    test(template("infoSync"), info)
    test(template("debugSync"), debug)
    test(template("logSync"), log)
}
