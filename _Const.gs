var C_EVAL = 'eval';

// Declare
var STR_DELIMEER1; // delim1
var STR_PASSWORDS; // The list of passwords
var STR_RANGE_PASSWORDS; // The range to store passwords
var STR_SHEETNAME_EMPL; // The name of the sheet with employees
var NUM_PASS_LENGTH; // The total length of a password
var NUM_PASS_NUMPART; // The number of digits at the end of a password
var STR_HELP_TEXT_PASS; // Help text for a password, the tip, user will see it if he or she enters the wrong text
var STR_IDSHEET_FORMS; // The id of a sheet with forms
var NUM_INDEX_PASSWORD_QUESTION; // The index of a question with the password (1-st question is index 0)
function getSettings_() {
  
  if (STR_DELIMEER1 === ';') { return -1; }
  
  var file = SpreadsheetApp.getActive();
  var range = file.getRangeByName(C_EVAL);
  var val = range.getValue();
  var data = JSON.parse(val);
  
// Assign
STR_DELIMEER1 = data[0];
STR_PASSWORDS = data[1];
STR_RANGE_PASSWORDS = data[2];
STR_SHEETNAME_EMPL = data[3];
NUM_PASS_LENGTH = data[4];
NUM_PASS_NUMPART = data[5];
STR_HELP_TEXT_PASS = data[6];
STR_IDSHEET_FORMS = data[7];
NUM_INDEX_PASSWORD_QUESTION = data[8];
}
