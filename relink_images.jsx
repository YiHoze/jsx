function RelinkImages() {
    var i, link, newFile,
    doc = app.activeDocument,
    links = doc.links, 
    newPath = Folder.selectDialog( 'Select the folder that contains image files you want to relink');
    newPath = newPath + "/"
    for ( i = 0; i < links.length; i++ ) { 
        link = links[i]; 
        newFile = new File(newPath + link.name); 
        if (newFile.exists) link.relink(newFile);
        try { 
            link.update();
        }
        catch(err) {}
    }
}

RelinkImages();