ServerEvents.recipes(event => {
  //event.shaped(`4x pipez:infinity_upgrade`, [
  //   `UNU`,
  //   `NSN`,
  //   `UNU`
  // ], {
  //   S: `kubejs:kotd_crystal_shard`,
  //   N: `#forge:storage_blocks/allthemodium`,
  //   U: `pipez:ultimate_upgrade`
  // })

  event.remove({ id: `pipez:basic_upgrade`})
  event.shaped(`4x pipez:basic_upgrade`, [
     `ABA`,
     `BCB`,
     `ABA`
   ], {
     A: `#c:nuggets/iron`,
     B: `#c:ingots/iron`,
     C: `minecraft:redstone`
   })
   
  event.remove({ id: `pipez:improved_upgrade`})
  event.shaped(`4x pipez:improved_upgrade`, [
     `ABA`,
     `BCB`,
     `ABA`
   ], {
     A: `#c:ingots/gold`,
     B: `pipez:basic_upgrade`,
     C: `minecraft:redstone_block`
    })   

  event.remove({ id: `pipez:advanced_upgrade`})
  event.shaped(`4x pipez:advanced_upgrade`, [
     `ABA`,
     `BCB`,
     `ABA`
   ], {
     A: `#c:gems/diamond`,
     B: `pipez:improved_upgrade`,
     C: `minecraft:redstone_block`
    })  

  event.remove({ id: `pipez:ultimate_upgrade`})
  event.shaped(`4x pipez:ultimate_upgrade`, [
     `ABA`,
     `BCB`,
     `ABA`
   ], {
     A: `#c:ingots/netherite`,
     B: `pipez:advanced_upgrade`,
     C: `minecraft:redstone_block`
    })  

  event.shaped(`4x pipez:infinity_upgrade`, [
     `ABA`,
     `BCB`,
     `ABA`
   ], {
     B: `#c:storage_blocks/netherite`,
     C: `minecraft:nether_star`,
     A: `pipez:ultimate_upgrade`
   })
})

