ServerEvents.recipes(event => {
//event.remove({ id: `electrodynamics:smelting/coal_coke`})
	event.shaped(`wands:creative_wand`, [
		`  B`,
		` A `,
		`A  `
	  ], {
		A: `#c:rods/wooden`,
		B: `minecraft:nether_star`
	  })
    })