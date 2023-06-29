function songs(data) {
   let numberOfSongs = data.shift();
   let typeListOfaAll = data[numberOfSongs];
   let currentSong = [];

   class Song {
      constructor(typeList, name, time) {
         this.typeList = typeList;
         this.name = name;
         this.time = time;
      }
   }

   for (let index = 0; index < numberOfSongs; index++) {
      currentSong = data[index];
      currentSong = currentSong.split("_");

      let typeList = currentSong[0];
      let name = currentSong[1];
      let time = currentSong[2];

      let mySong = new Song(typeList, name, time);

      if (typeListOfaAll === `all`) {
         console.log(mySong.name);
      } else if(mySong.typeList === typeListOfaAll) {
         console.log(mySong.name);
      }
   }   
}
 songs([3,
   'favourite_DownTown_3:14',
   'favourite_Kiss_4:16',
   'favourite_Smooth Criminal_4:01',
   'favourite']);

console.log(`--------------------`);
songs([4,
   'favourite_DownTown_3:14',
   'listenLater_Andalouse_3:24',
   'favourite_In To The Night_3:58',
   'favourite_Live It Up_3:48',
   'listenLater']);