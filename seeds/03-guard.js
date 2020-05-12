
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('guard').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('guard').insert([
        {name:'Triangle choke', description:'Grab your opponents wrists.Push one wrist in towards their body while pulling their other arm towards your head to stretch your opponent out. Next, take the leg that is on the opposite side of the stretched out arm, and wrap it over your opponents head. Bring your opponents stretched out arm across your body and across their neck. Bring your free leg over your other leg to lock the position and squeeze tight', image_url:'https://cdn.pixabay.com/photo/2020/02/11/03/51/arts-4838225_960_720.jpg'}
      ]);
    });
};
