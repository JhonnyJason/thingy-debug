import * as db from "../output/index.js"

export function switchOn() {
    db.debugOn("debuggedModule")
    
}

export function switchOff() {
    db.debugOff("debuggedModule")

}