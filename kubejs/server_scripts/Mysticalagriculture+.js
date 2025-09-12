ServerEvents.recipes((event) => {
  event.remove({ id: `mysticalagriculture:awakened_draconium_seeds` })
  event.custom({
        type: `mysticalagriculture:infusion`,
    ingredients: [
      {
        'item': `draconicevolution:awakened_draconium_block`
      },            
      {
        'item': `mysticalagradditions:insanium_block`
      },
      {
        'item': `draconicevolution:awakened_draconium_block`
      },      
      {
        'item': `mysticalagradditions:insanium_block`
      },
      {
        'item': `draconicevolution:awakened_draconium_block`
      },      
      {
        'item': `mysticalagradditions:insanium_block`
      },
      {
        'item': `draconicevolution:awakened_draconium_block`
      },      
      {
        'item': `mysticalagradditions:insanium_block`
      },
    ],
    'input': {
      'item': `mysticalagriculture:prosperity_seed_base`
    },
    'result': {
      'count': 1,
      'id': `mysticalagriculture:awakened_draconium_seeds`,
    }
  });
});