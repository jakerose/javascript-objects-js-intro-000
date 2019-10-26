var playlist = {NSYNC: "Bye bye bye", My Bloody Valentine: "Sometimes"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
delete playlist.NSYNC
delete playlist.PhilOchs
delete playlist.MyBloodyValentine
}
