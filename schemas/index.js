import mongoose from 'mongoose'; // 몽고DB 사용하기위한 라이브러리
import dotenv from 'dotenv'; // 환경변수 사용하기 위한 라이브러리.

dotenv.config(); // .env 파일의 환경 변수 로드

// mongoose 생성자.
const connect = () => {
  mongoose
    .connect(
      process.env.MONGO_URI, // 주소
      {
        dbName: process.env.DB_NAME, // todo_memo 데이터베이스명을 사용합니다.
      }
    )
    .then(() => console.log('MongoDB 연결에 성공하였습니다.'))
    .catch((err) => console.log(`MongoDB 연결에 실패하였습니다. ${err}`));
};

// MongoDB 연결 중 발생할 수 있는 에러를 처리
mongoose.connection.on('error', (err) => {
  console.error('MongoDB 연결 에러', err);
});

// 외부에 연결하기 위한 용도.
export default connect;
