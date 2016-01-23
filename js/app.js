var alphaTorrent = {
	dt:{},
	torrentFiles:{},
	activeTorrents:{},
	nameMapping:{},
	intervalID:null,
	torrentUpdates: function(){
		new_stack = []
		for(var id in alphaTorrent.activeTorrents){
			var torrent = alphaTorrent.activeTorrents[id];
			new_stack.push([
				torrent.torrents[0].name,
				Math.round((torrent.torrents[0].length/(1024*1024)) * 10) / 10 + "MB",
				Math.round((torrent.torrents[0].downloadSpeed/(1024)) * 10) / 10 + "KB/s",
				Math.round((torrent.torrents[0].progress*(100)) * 10) / 10 + " %",
				torrent.torrents[0].swarm.numPeers,
				parseInt(torrent.torrents[0].timeRemaining/1000)+" Seconds",
				'<button class="btn btn-primary"><i class="fa fa-times"></i> Remove</button>'
			])
		}
		return new_stack;
	}

}