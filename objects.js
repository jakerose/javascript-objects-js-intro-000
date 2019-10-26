var playlist = {NSYNC: "Bye bye bye"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  var slice = playlist.slice(0, playlist.length - 1)
  return playlist
}
