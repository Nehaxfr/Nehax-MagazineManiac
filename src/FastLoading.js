exports.mod = () => {
    logger.logSuccess("[MOD] Magazine Maniac loading...");
    let config = require("../config.json");
    let db_globals = fileIO.readParsed(db.base.globals);
    // set loading to (default/multiplier) if enabled, use default value if not
    if (config.FastLoading.enable){
        logger.logSuccess("[MOD] Magazine Maniac - FastLoading: On - Applying speed multiplier.");  
        db_globals.data.config.BaseLoadTime = parseFloat((0.85/config.FastLoading.speed_multiplier).toFixed(2));
    }else{
        logger.logSuccess("[MOD] Magazine Maniac - FastLoading: Off - Default loading speed.");
        db_globals.data.config.BaseLoadTime = 0.85;
    }
    _database.globals.config.BaseLoadTime = db_globals.data.config.BaseLoadTime;
}