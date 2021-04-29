// Export EPS to JPG
var destFolder, sourceFolder, files, sourceDoc, saveOpts, targetFile; 
var options = new ExportOptionsJPEG();
options.antiAliasing = false;
options.qualitySetting = 100;
options.optimization = true;
options.artBoardClipping = false;
options.horizontalScale = 250;
options.verticalScale = 250;

sourceFolder = Folder.selectDialog( 'Select a folder to convert all EPS files in it to JPG.' );

if ( sourceFolder != null )
{
  files = new Array();
	files = sourceFolder.getFiles( '*.eps' );
	if ( files.length > 0 )
	{
    destFolder = Folder.selectDialog( 'Select a folder where to save converted JPG files.' );
		for ( i = 0; i < files.length; i++ )
		{
			sourceDoc = app.open(files[i]); 
			targetFile = getNewName();
      		sourceDoc.exportFile(targetFile, ExportType.JPEG, options);
			sourceDoc.close(SaveOptions.DONOTSAVECHANGES);
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
	ext = '.jpg'; 
	newName = "";
	for ( var i = 0 ; docName[i] != "." ; i++ )
	{
		newName += docName[i];
	}
	newName += ext; 
	saveInFile = new File( destFolder + '/' + newName );
	return saveInFile;
}