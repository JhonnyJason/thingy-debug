import * as db from "../output/index.js"
import * as mtdb from "./modulesToDebug.mjs"
import * as switcher from "./debuggerSwitcher.mjs"
import * as debugged from "./debuggedModule.mjs"

const {log, olog} = db.createLogFunctions("main")

const sampleObj = {hello:"world!"}

async function run() {
    log("hello!")
    
    debugged.leFunction(sampleObj)
    log("ran debugged leFunction with batch switchOn")
    
    switcher.switchOff("debuggedModule")
    debugged.leFunction(sampleObj)
    log("ran debugged leFunction after switchOff")

    switcher.switchOn("debuggedModule")
    debugged.leFunction(sampleObj)
    log("ran debugged leFunction after switchOn")
    

}

run()
