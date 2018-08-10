function setUserPasswordsToForm()
{
  getSettings_();
  
  var range = SpreadsheetApp.getActive().getRangeByName(STR_RANGE_PASSWORDS);
  var currentPasswords = range.getValues();  
  var passwords = getUserPasswords_(currentPasswords, NUM_PASS_LENGTH, NUM_PASS_NUMPART); 
  range.setValues(passwords);
  
  // send passwords to form
  var fileId = STR_IDSHEET_FORMS;
  var i = NUM_INDEX_PASSWORD_QUESTION;
  var regex = passwords.join('|');
  var helpText = STR_HELP_TEXT_PASS;  
  setFormElementValidationRegex_(fileId, i, regex, helpText);  
  
}

/**
   currentPasswords -- 2D array (from range values)
   
   returns          -- 2D array   
*/   
function getUserPasswords_(currentPasswords, length, l2)
{
  
  // get the nubmer of passwords needed
  var getNumEmpty_ = function(accumulator, currentValue) 
  {
    if (currentValue == '') { return accumulator + 1; } else { return accumulator; }  
  }
  var numberPasswordsNeeded = currentPasswords.reduce(getNumEmpty_, 0);
  
  if (numberPasswordsNeeded === 0) { return currentPasswords; } // no need in new passwords

  var newPasswords = generatePasswords_(numberPasswordsNeeded, length, l2);
  
  var nextPass = 0;
  var fillNewPasswords_ = function (elt)
  {
    if (elt == '') 
    { 
      var pass = newPasswords[nextPass];
      nextPass++;
      return [pass];
    } 
    else return [elt];    
  }  
  var passwords = currentPasswords.map(fillNewPasswords_);
    
  return passwords;
     
}




