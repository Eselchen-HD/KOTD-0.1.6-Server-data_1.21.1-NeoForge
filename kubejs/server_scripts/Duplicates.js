ServerEvents.recipes(event => {

	event.remove({ id: `electrodynamics:smelting/coal_coke`})
	event.remove({ id: `bigreactors:blasting/graphite_from_coal`})
	event.remove({ id: `bigreactors:blasting/graphite_from_charcoal`})
	event.remove({ id: `car:blastfurnace`})
	event.shaped(`car:blastfurnace`, [
		` A `,
		`ABA`,
		`AAA`
	  ], {
		A: `#c:ingots/iron`,
		B: `minecraft:furnace`
	  })
	event.remove({ id: `simplyswords:iron_sai`})
	event.shaped(`simplyswords:iron_sai`, [
		`A A`,
		` B `,
		`   `
	  ], {
		A: `#c:ingots/iron`,
		B: `minecraft:stick`
	  })		

	event.remove({ id: `simplyswords:gold_sai`})
	event.shaped(`simplyswords:gold_sai`, [
		`A A`,
		` B `,
		`   `
	  ], {
		A: `#c:ingots/gold`,
		B: `minecraft:stick`
	  })		

	event.remove({ id: `simplyswords:diamond_sai`})
	event.shaped(`simplyswords:diamond_sai`, [
		`A A`,
		` B `,
		`   `
	  ], {
		A: `#c:gems/diamond`,
		B: `minecraft:stick`
	  })			

	event.remove({ id: `electrodynamics:insulation`})
	event.shaped(` 12x electrodynamics:insulation`, [
		`   `,
		`AA `,
		`   `
	  ], {
		A: `minecraft:leather`
	  })		  

	event.remove({ id: `electrodynamics:insulation`})
	event.shaped(` 12x electrodynamics:insulation`, [
		`   `,
		`AA `,
		`   `
	  ], {
		A: `minecraft:leather`
	  })	
})