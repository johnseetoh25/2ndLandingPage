function doGet(request) {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(formObject){
  var url="https://docs.google.com/spreadsheets/d/1ti-3TYy3luH5_9vEUYRSpBDuW6cwzaBo086Lv-WHGro/edit#gid=0";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheetByName("Data");

  ws.appendRow([
    //question answers
    // multi chossen answer in checkbox
    formObject.Question01Answer01,
    formObject.Question01Answer02,

    //one answer only in radio
    formObject.Question02,

    //student information
    formObject.Name,
    formObject.PhoneNumber,
    formObject.Email,

  ]);
}
