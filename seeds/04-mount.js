
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('mount').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('mount').insert([
        {name:'Arm bar', description:'Put your right hand on your opponents chest. Grab their right arm with your left. Put all your weight on your opponents chest and swing your left foot around the top of your oponents head. You should now be in a sitting position, perpendicular to your opponent, with your left leg across their neck and right leg across their chest. Holding your opponents right arms close to your chest and making sure their thumb is pointing up, lay back and lift your hips off the ground until they tap.', image_url:'pixabay.com/photo/2020/02/11/03/51/arts-4838225_960_720.jpg'}
      ]);
    });
};
