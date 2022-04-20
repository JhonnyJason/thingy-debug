import * as db from "../output/index.js"

const modulesToDebug = {
    main: true,
    debuggedModule: true
}

db.addModulesToDebug(modulesToDebug)