import "jest";
import LoggerTests from "./logger/@entry";
import LoggerSyncTests from "./logger.sync/@entry"

describe("@ao-framework/logger", () => {
    describe("logger", LoggerTests)
    describe("logger.sync", LoggerSyncTests)
})
