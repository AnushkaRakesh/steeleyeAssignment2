function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    plainTextPositions.map((obj) => {
        // extracting text to be highlighted from plainText
        const text = plainText.substring(obj.start, obj.end);
        let textLen = text.length;
        // finding which occurrence of this word needs to be hightlighted
        let occurrenceNo = 0, startIndx = 0, pos = 0;
        while((pos = plainText.indexOf(text, startIndx)) > -1) {
            occurrenceNo++;
            startIndx += pos + textLen;
            if(pos == obj.start) break;
        }
        // finding that occurrence in htmlContent
        startIndx = 0;
        while((pos = htmlContent.indexOf(text, startIndx)) > -1) {
            occurrenceNo--;
            startIndx += pos + textLen;
            if(occurrenceNo == 0) break;
        }
        // now pos has the position of right occurrence in htmlContent
        if(pos >= 0) {
            // now hightlight the correct string
            let contentLen = htmlContent.length;
            htmlContent = htmlContent.substring(0, pos) + "<mark>" + htmlContent.substring(pos, pos + textLen) + "</mark>" + htmlContent.substring(pos + textLen, contentLen);
        }
    });
    return htmlContent;
}

module.exports = highlightHTMLContent;

