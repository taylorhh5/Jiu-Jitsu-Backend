
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sidemount').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sidemount').insert([
        {name:'Arm triangle choke', description:'Using the arm that is closest to your opponents head, slide your hand under your opponents head and bring your other hand across their chest and behind their arm, locking your hands together. Keep this grip and hop your body to the other side of their body. Use your hear to push their trapped arm across their throat and squeeze your hands together until your opponent taps.', image_url:'https://cdn.pixabay.com/photo/2020/02/11/03/51/arts-4838225_960_720.jpg'}
      ]);
    });
};
