// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.on('add', function() {
      if(this.length === 1)
      this.playFirst();
    },this);

    // when we enqueue something, we want to check if current song is set to something
    // if it isn't set to anything, then play the song that we just enqueued
    // else keep on playing the current song but queue the one that was just clicked
    // when the current song ends, then play the first song in the queue and dequeue that song from the list
  },


  playFirst: function(){
    if(this.at(0)){
      this.at(0).play();
    }
  }

});
