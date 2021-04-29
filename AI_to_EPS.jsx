// Save AI as EPS
var destFolder, sourceFolder, files, sourceDoc, saveOpts, targetFile;
saveOpts = new EPSSaveOptions();
saveOpts.pdfCompatible = true;
saveOpts.embedAllFonts = true;

sourceFolder = Folder.selectDialog('Select a folder to convert all AI files in it to EPS.'); 

if ( sourceFolder != null )
{
	files = new Array();
	files = sourceFolder.getFiles( '*.ai' )	
	if (files.length > 0) 
	{
		destFolder = Folder.selectDialog( 'Select a folder where to save converted EPS files.' );
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
		alert('No AI files found.');
	}
}

function getNewName()
{
	var ext, docName, newName, saveInFile;
	docName = sourceDoc.name;
	ext = '.eps'; 
	newName = "";
	for ( var i = 0 ; docName[i] != "." ; i++ )
	{
		newName += docName[i];
	}
	newName += ext; 
	saveInFile = new File( destFolder + '/' + newName );
	return saveInFile;
}