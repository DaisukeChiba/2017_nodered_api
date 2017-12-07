msg.topic = "INSERT INTO users(name) VALUES('" + msg.payload.data + "');";
return msg;
