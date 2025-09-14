ServerEvents.recipes(event => {
	event.shaped(`lootboxesplus:uncommon_loot_bag`, [
		`AAA`,
		`AAA`,
		`AAA`
	  ], {
		A: `lootboxesplus:common_loot_bag`
	  })
	event.shaped(`lootboxesplus:rare_loot_bag`, [
		`AAA`,
		`AAA`,
		`AAA`
	  ], {
		A: `lootboxesplus:uncommon_loot_bag`
	  })
	event.shaped(`lootboxesplus:epic_loot_bag`, [
		`AAA`,
		`AAA`,
		`AAA`
	  ], {
		A: `lootboxesplus:rare_loot_bag`
	  })
})