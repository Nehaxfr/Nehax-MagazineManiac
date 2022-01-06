exports.mod = () => {
    let config = require("../config.json");
    let cached_items = fileIO.readParsed(db.user.cache.items);
    // set custom ammo capacity for enabled magazines
    if (config.MagazineCapacity) {
        config.MagazineCapacity.forEach(magazine => {
            if (magazine.enable) {
                for (let index_item in cached_items.data) {
                    let item = cached_items.data[index_item]
                    if (item._id == magazine.magazine_id) {
                        logger.logSuccess("[MOD] MagazineManiac - " + item._name)
                        item._props.Cartridges.forEach(cartridge => {
                            cartridge._max_count = magazine.new_capacity;
                        })
                    }
                }
            }
        })
    }
    fileIO.write(global.db.user.cache.items, cached_items);	
    logger.logSuccess("[MOD] MagazineManiac - MagazineCapacity loaded.");
}

