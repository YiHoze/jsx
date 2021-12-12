app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;

var myFolder = Folder.selectDialog('Select a folder that contains EPS files.', '~');
var width = prompt('Enter a width in the unit of millimeter:', '70');

try {
	if ( myFolder != null) {
		$.writeln(myFolder);
		var fileType = '*.eps';
		var myDoc, selectObj, x;
		myFiles = myFolder.getFiles(fileType);
		if (myFiles.length > 0) {
			for (var i=0;i<myFiles.length;i++) {
				app.open(myFiles[i]);
				myDoc = app.activeDocument;
                myDoc.layers[0].hasSelectedArtwork = true;
				selectObj = myDoc.selection[0];
				// replace 70 in the line below with your desired width. The unit is mm.
				x = (2.834645669 * width) * 100 / selectObj.width ;
				selectObj.resize(x, x, true, true, true, true, 1, Transformation.DOCUMENTORIGIN);
				var saveOpts = new EPSSaveOptions();
				saveOpts.pdfCompatible = true;
				myDoc.saveAs(myFiles[i], saveOpts);
				myDoc.close();
			}
		}
	} else {
		alert('The wrong folder is specified.', 'Error');
	}
} catch(e) {
	alert(e.line + ":" + e);
}

app.userInteractionLevel = UserInteractionLevel.DISPLAYALERTS;