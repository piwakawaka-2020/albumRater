
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('albums').del()
    .then(function () {
      // Inserts seed entries
      return knex('albums').insert([
        {id: 1, name: 'Blonde', artist: 'Frank Ocean', year: '2016', cover: 'https://www.okayplayer.com/wp-content/uploads/2016/08/Blonde-4-715x715.jpg'},
        {id: 2, name: '3001: A Laced Odyssey', artist: 'Flatbush Zombies', year: '2016', cover: 'https://exclaim.ca//images/flatbush3001.png'},
        {id: 3, name: 'Luv is Rage 2', artist: 'Lil Uzi Vert', year: '2017', cover: 'https://images.genius.com/099e41c3c6e8f81359e0231aa0bf6018.1000x1000x1.png'},
        {id: 4, name: 'Magical Mystery Tour', artist: 'The Beatles', year: '1967', cover: 'https://d2s36jztkuk7aw.cloudfront.net/sites/default/files/tile/image/Magical_0.jpg'},
        {id: 5, name: 'Acid Rap', artist: 'Chance The Rapper', year: '2013', cover: 'https://img.discogs.com/Gl0G0dzqReqMGrTZF5NHKox0lhQ=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-9515906-1482336231-9129.png.jpg'},
        {id: 6, name: 'Doggystyle', artist: 'Snoop Dogg', year: '1993', cover: 'https://img.discogs.com/irV7nwQaOXXx6pcs86coL-BHYzU=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11979828-1526570585-8792.jpeg.jpg'},
        {id: 7, name: 'Dark Side of the Moon', artist: 'Pink Floyd', year: '1973', cover: 'http://4.bp.blogspot.com/-KeFZsTSanKY/TdCIZ77rU-I/AAAAAAAADyg/I79AGgHm81g/s1600/dark+side+of+the+moon.jpg'},
        {id: 8, name: 'Homework', artist: 'Daft Punk', year: '1996', cover: 'https://revoltmedianz.files.wordpress.com/2013/01/daft-punk-homework.jpg'},
        {id: 9, name: 'Blood Sugar Sex Magik', artist: 'Red Hot Chili Peppers', year: '1991', cover: 'http://4.bp.blogspot.com/-jB_XB0xYhRw/UmHvSZZMsBI/AAAAAAAAAU8/IzMtDWJFO_4/s1600/red_hot_chili_peppers_blood_sugar_sex_magik.jpeg'}
      ]);
    });
};
