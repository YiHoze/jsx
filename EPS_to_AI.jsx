// Save EPS as AI
var destFolder, sourceFolder, files, sourceDoc, saveOpts, targetFile; 
saveOpts = new IllustratorSaveOptions();

sourceFolder = Folder.selectDialog( 'Select a folder to convert all EPS files in it to AI.' );

if ( sourceFolder != null )
{
  	files = new Array();
	files = sourceFolder.getFiles( '*.eps' );
	if ( files.length > 0 )
	{
        destFolder = Folder.selectDialog( 'Select a folder where to save converted AI files.' );
		for ( i = 0; i < files.length; i++ )
		{
			sourceDoc = app.open(files[i]); 
			targetFile = getNewName();
			sourceDoc.saveAs( targetFile, saveOpts );
			sourceDoc.close();
		}
		alert( files.length + ' file(s) processed' );
	}
	else
	{
		alert( 'No EPS files found.' );
	}
}

function getNewName()
{
	var ext, docName, newName, saveInFile;
	docName = sourceDoc.name;
	ext = '.ai'; 
	newName = "";
	for ( var i = 0 ; docName[i] != "." ; i++ )
	{
		newName += docName[i];
	}
	newName += ext; 
	saveInFile = new File( destFolder + '/' + newName );
	return saveInFile;
}