// https://github.com/words/an-array-of-english-words/blob/master/corpus/twosies.txt
var C_TWOCIES = ['ad', 'ae', 'ah', 'ai', 'am', 'an', 'ao', 'ar', 'as', 'at', 'aw', 'ax', 'ay', 'ba', 'be', 'bi', 'bo', 'by', 'ch', 'da', 'di', 'do', 'ea', 'ee', 'eh', 'el', 'em', 'en', 'er', 'es', 'ex', 'fa', 'fy', 'gi', 'go', 'gu', 'ha', 'he', 'hi', 'ho', 'id', 'if', 'in', 'io', 'is', 'it', 'jo', 'ka', 'ko', 'ky', 'la', 'li', 'lo', 'ma', 'me', 'mi', 'mo', 'mu', 'my', 'na', 'ne', 'no', 'nu', 'ny', 'ob', 'od', 'oe', 'of', 'oh', 'oi', 'om', 'on', 'oo', 'op', 'or', 'os', 'ou', 'ow', 'ox', 'oy', 'pa', 'pi', 'po', 'qi', 're', 'sh', 'si', 'SJ', 'so', 'st', 'ta', 'te', 'ti', 'to', 'ua', 'ug', 'uk', 'um', 'un', 'up', 'ur', 'us', 'ut', 'we', 'wo', 'xi', 'xu', 'ye', 'yo', 'yu', 'zo']; 

function test()
{
 var pass = generatePassword(6,2);
  Logger.log(pass);
  
}


function generatePassword(length, l2) {
  length = length || 8;
  l2 = l2 || 0;
  if (length < 2) throw 'too weak password';
  var charset = "0123456789";
  var retVal = "";  
  
  var l1 = length - l2;
  if ((parseInt(l1 / 2) * 2) !== l1)
  {
    l1 = l1+1;
  }
  
  var l2 = length - l1;
  
  
  // get 'alaword' part
  for (var i = 0, n = C_TWOCIES.length; i < (l1 / 2); i++)
  {
    retVal += C_TWOCIES[Math.floor(Math.random() * n)];    
  }
  
  // get numeric part  
  for (var i = 0, n = charset.length; i < l2; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  
  return retVal;
}

function test_generatePasswords()
{
 Logger.log(generatePasswords_(100, 6, 2));   
}

function generatePasswords_(numPass, l, l2) {
  
  var oPass = {};
  var numGot = 0;
  var pass = '';
  
  while (numGot < numPass)
  {
    pass = generatePassword(l, l2)
    if (!(pass in oPass))
    {
      numGot++;
      oPass[pass] = '';     
    }        
  }
  
  return Object.keys(oPass);
  
  
}
