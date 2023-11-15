const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // 'public' 폴더에서 정적 파일 제공

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});