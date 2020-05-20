
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('takedown').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('takedown').insert([
        {name: 'Double Leg', description:'Standing in front of your opponent, shoot in by steeping forward and aiming to land your knee on the ground between their legs. Wrap your hands around their thighs, just above their knees and hold them in tight to your chest. Step your rear leg up and drive forward.', image_url:'https://cdn.pixabay.com/photo/2020/02/11/03/51/arts-4838225_960_720.jpg', user_id:1}
     
      ]);
    });
};
