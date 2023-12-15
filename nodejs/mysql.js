var mysql = require('mysql2'); //모듈을 불러낸다.
var connection = mysql.createConnection({ //mysql 객체의 createConnection property를 쓴다.
  host: 'localhost',
  user: 'root', //또는 'moon'
  password: '1234',
  database: 'opentutorials'
}); //mysql client 인 monitor가 mysql 서버에 연결.

connection.connect(); //위의 property를 변수에 담아 .connect라는 메소드를 호출하면 접속이 됌.

connection.query('SELECT * FROM topic', function (error, results, fields) { //connection의 query라는 메소드를 호출하고 sql문이 첫번째 인자, 두번째 인자로 콜백을 주면 첫번째 인자의 sql 이 서버에 전송돼서 끝난 다음 -> results로 응답함 -> 그 다음 콜백이 호출됌. 
  if (error) {
    console.log(error);
  }
  console.log('results:', results); //topic 에 저장됀 데이터베이스가 객체 형태로 나타남.
  // console.log('The solution is: ', results[0].solution);
});

connection.end();