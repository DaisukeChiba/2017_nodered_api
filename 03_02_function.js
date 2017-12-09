// 今日の日付を取得
var now = new Date();
// 年・月・日を抽出
var y = now.getFullYear();
var m = now.getMonth() + 1;
var d = now.getDate();
// 月・日が1桁のとき先頭0を付加
m = ('0' + m).slice(-2);
d = ('0' + d).slice(-2);
// YYYY-MM-DD形式に整形
var ymd = y + "-" + m + "-" + d;

// NHK Program Genre API問い合わせURLを生成
msg.url = "http://api.nhk.or.jp/v2/pg/genre/" + encodeURI(msg.payload.area) + "/g1/" + encodeURI(msg.payload.genre) +  "/" + ymd + ".json?key=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

return msg;
