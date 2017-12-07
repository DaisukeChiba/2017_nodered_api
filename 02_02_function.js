msg.topic = "SELECT id, name FROM users WHERE name LIKE '%" + encodeURI(msg.payload.data) + "%';"
return msg;
