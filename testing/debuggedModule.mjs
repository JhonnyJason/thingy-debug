import * as db from "../output/index.js"
const {log, olog} = db.createLogFunctions("debuggedModule")

export function leFunction(obj) {
    log("leFunction called!")
    olog({obj})
    
    return
}