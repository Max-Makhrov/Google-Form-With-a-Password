/**
  sets validation as a regex to the forms quesuin (short text)
  
  fileId   -- the id of a spreadsheet with the form
  i        -- the index of a question (1-st question is index 0)
  regex    -- regular expression to set
  helpText -- the tip, user will see it if he or she enters the wrong text
  
*/
function setFormElementValidationRegex_(fileId, i, regex, helpText)
{
  var form = getFormByFile_(fileId);
  var qs = form.getItems();
  
  var textValidation = FormApp.createTextValidation()
  .setHelpText(helpText)
  .requireTextMatchesPattern(regex)
  .build();    
  var element = qs[i].asTextItem().setValidation(textValidation);   
}


function getFormByFile_(fileId)
{
  var sheet = SpreadsheetApp.openById(fileId);
  var formUrl = sheet.getFormUrl();
  var form = FormApp.openByUrl(formUrl);
  return form;    
}