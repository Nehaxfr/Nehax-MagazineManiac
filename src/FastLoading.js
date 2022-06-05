exports.mod = () => {
    logger.logSuccess("[MOD] Magazine Maniac loading...");
    let config = require("../config.json");
    // set loading to (default/multiplier) if enabled, use default value if not
    if (config.FastLoading.enable){
        logger.logSuccess("[MOD] Magazine Maniac - FastLoading: On - Applying speed multiplier.");  
        _database.globals.config.BaseLoadTime = parseFloat((0.85/config.FastLoading.speed_multiplier).toFixed(2));
    }
}
