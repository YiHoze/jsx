function RenumberCallout(sNum, eNum, aNum) {
    var doc = app.activeDocument;
    var TextFrames = doc.textFrames;

    for (i=sNum; i<eNum+1; i++) {
        searchString =  "^"+String(i)+"$";
        re = RegExp(searchString);
        replaceString = String(i + aNum);
        for (j=0; j<TextFrames.length; j++) {
            aTextFrame = TextFrames[j];
            aTextFrame.contents = aTextFrame.contents.replace(re, replaceString);            
        }
    }
}

var input = prompt("Enter start number, end number, and addend with spaces:", "20 30 -2");
var range = input.split(" ");
RenumberCallout(Number(range[0]), Number(range[1]), Number(range[2]));