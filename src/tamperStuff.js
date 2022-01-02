exports.mod = () => {
    logger.logSuccess("[MOD] Magazine Maniac loading...");
    let config = require("../config.json");
    let db_globals = fileIO.readParsed(db.base.globals);

    if (config.fastloading.enable){

        logger.logSuccess("[MOD] Magazine Maniac - FastLoading: On - Applying speed multiplier");
        // set loading to default / multiplier
        db_globals.config.BaseLoadTime = parseFloat((0.85/config.fastloading.speed_multiplier).toFixed(2));
        logger.logSuccess(db_globals.config.BaseLoadTime);

    }else{

        logger.logSuccess("[MOD] Magazine Maniac - FastLoading: Off - Default loading speed");
        // set loading to default
        db_globals.config.BaseLoadTime = 0.85;
    }
    fileIO.write(db.base.globals, db_globals);
}