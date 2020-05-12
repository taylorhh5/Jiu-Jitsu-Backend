
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('back').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('back').insert([
        {name:'Rear naked choke', description:'While behind your opponent, wrap your right hand around their neck and grip your left bicep. Feed your left hand behind your opponents head and grap your right shoulder. Squeeze until your opponent taps.', image_url:'https://cdn.pixabay.com/photo/2020/02/11/03/51/arts-4838225_960_720.jpg'}
      ]);
    });
};
