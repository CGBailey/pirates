
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('pirates').del(),

    // Inserts seed entries
    knex('pirates').insert({ name: 'Lincoln', poison: "grog", accessory: "talking parrot", image_url:"someurl.jpg"}),
    knex('pirates').insert({ name: 'Dunkaroo Daniel', poison: "grog", accessory: "tinder", image_url:"someurl.jpg"}),
    knex('pirates').insert({ name: 'Black Beard', poison: "rum", accessory: "his Beard", image_url:"someurl.jpg"}),
    knex('pirates').insert({ name: 'Calico Jack', poison: "tea", accessory: "fancy coat", image_url:"someurl.jpg"})
  );
};
