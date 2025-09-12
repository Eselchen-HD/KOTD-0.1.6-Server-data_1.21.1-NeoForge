ServerEvents.recipes(event => {
	event.shaped(`minecraft:hopper`, [
		`ABA`,
		`ABA`,
		` A `
	  ], {
		A: `#c:ingots/iron`,
		B: `#minecraft:logs`
	  })

	event.shaped(`minecraft:chest`, [
		`AAA`,
		`A A`,
		`AAA`
	  ], {
		A: `#minecraft:logs`
	  })
    })