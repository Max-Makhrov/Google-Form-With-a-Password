function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Forms App')
      .addItem('Generate a list of passwords and refresh the form', 'setUserPasswordsToForm')
      .addToUi();  
}
