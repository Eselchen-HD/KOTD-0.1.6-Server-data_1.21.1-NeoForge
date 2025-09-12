ServerEvents.recipes(event => {

//Dark|Red Matter
	event.remove({ id: `projecte:dark_matter`})
  event.remove({ id: `projecte:red_matter`})

//Energy Condenser MK1
	event.remove({ id: `projecte:condenser_mk1` })
	event.remove({ id: `projecte:condenser_mk2` })

//Anti-Matter Collector|Relay
  event.remove({ id: `projecte:collector_mk1`})
  event.remove({ id: `projecte:collector_mk2`})
  event.remove({ id: `projecte:collector_mk3`})

  event.remove({ id: `projecte:relay_mk1`})
  event.remove({ id: `projecte:relay_mk2`})
  event.remove({ id: `projecte:relay_mk3`})

//Repair Talisman  
  event.remove({ id: `projecte:repair_talisman_alt`})
//Philosophers Stone
	event.remove({ id: `projecte:philosophers_stone` })
  event.remove({ id: `projecte:philosophers_stone_alt` })

 //Transmutation Table
	event.remove({ output: `projecte:transmutation_table` })

//Transmutation Tablet
	event.remove({ output: `projecte:transmutation_tablet` })

//Tome of Knowledge
	event.remove({ id: `projecte:tome` })

 })