'use strict';

/**
 * @ngdoc function
 * @name torrentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 */
angular.module('torrentApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //Initialize data table
    var dt = alphaTorrent.dt = $('#torrentTable').DataTable({ordering: true});


    if(dt.column(0).data().length){
    	$("#torrentTable, #torrentTable_wrapper").show();
    	$("#noTable").hide();
    }else{
    	$("#torrentTable, #torrentTable_wrapper").hide();
    	$("#noTable").show();
    }

    
    var torrentFiles = alphaTorrent.torrentFiles = new Dropzone("div#uploadTorrent", { url: "/", maxFilesize: 2, autoProcessQueue:false});
    
    //Clear all files
	$("#addTorrent").on("click", function (e) {
		torrentFiles.removeAllFiles(true);
	});

	//Add files to table on add
	$("#addUploaded").on("click", function(e){
		clearInterval(alphaTorrent.intervalID);
		$("#uploader").modal('hide');

		if(alphaTorrent.torrentFiles.getQueuedFiles().length >= 1){
			$("#torrentTable, #torrentTable_wrapper").show();
    		$("#noTable").hide();
		}

		alphaTorrent.torrentFiles.getQueuedFiles().forEach(function(file){
			if (!Object.keys(alphaTorrent.torrentFiles)){
				var name = Math.max.apply(null,Object.keys(alphaTorrent.torrentFiles))+1;
			}else{
				var name = 1;
			}
			alphaTorrent.nameMapping[name] = file.name;
			alphaTorrent.activeTorrents[name] = new WebTorrent();
			alphaTorrent.activeTorrents[name].add(file);
		});

		alphaTorrent.intervalID = setInterval(function(){
			alphaTorrent.dt.clear().draw()
		 	alphaTorrent.dt.row.add(alphaTorrent.torrentUpdates()[0]).draw();
		 },800)
	});






  });
