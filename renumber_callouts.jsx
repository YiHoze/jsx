function RenumberCallout() {
    
    var doc = app.activeDocument;
    var TextFrames = doc.textFrames;
    var step = 1;
    
    if (arguments.length != 3) {
        alert("입력이 올바르지 않습니다.");
        return;
    } else {
        var startString = arguments[0];
        var eNum = arguments[1];
        var aNum = arguments[2];        
    }   
    
    block = startString.split("-");
    if ( block.length > 1) {
        searchPrefix = "^" + block[0] + "\-";
        sNum = Number(block[1]);
        replacePrefix = block[0] + "-";
    } else {
        searchPrefix = "^";
        sNum = Number(startString);
        replacePrefix = "";
    }
    
    if ( sNum > eNum ) {
        step = -1;
        eNum--; 
    } else {
        eNum++;
    }

    i = sNum;
    do {
        searchString =  searchPrefix + String(i) + "$";
        re = RegExp(searchString);
        replaceString = replacePrefix + String(i + aNum);        
        for (j=0; j<TextFrames.length; j++) {
            aTextFrame = TextFrames[j];
            aTextFrame.contents = aTextFrame.contents.replace(re, replaceString);            
        }
        i += step
    } while ( i != eNum );    
}

RenumberCallout("9-1", 10, 20);
RenumberCallout("35-11", 15, 10);
RenumberCallout("10", 20, -2);
RenumberCallout("40", 30, 2);


///var input = prompt("Enter start number, end number, and addend with spaces:", "20 30 -2");
//var range = input.split(" ");
//RenumberCallout(range[0], Number(range[1]), Number(range[2]));
