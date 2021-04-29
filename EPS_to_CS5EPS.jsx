// Save as CS5 EPS
var destFolder, sourceFolder, files, sourceDoc, saveOpts, targetFile;
saveOpts = new EPSSaveOptions();
saveOpts.compatibility = Compatibility.ILLUSTRATOR15
saveOpts.pdfCompatible = true;
saveOpts.embedAllFonts = true;

sourceFolder = Folder.selectDialog( 'Select a folder that contains EPS files.' );

if ( sourceFolder != null )
{
  	files = new Array();
	files = sourceFolder.getFiles( '*.eps' );
	
	if ( files.length > 0 )
	{
        destFolder = Folder.selectDialog( 'Select a folder where to save CS5 EPS files.');
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
	var saveInFile = new File( destFolder + '/' + sourceDoc.name );
	return saveInFile;
}