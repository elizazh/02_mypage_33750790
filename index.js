const http = require("http");
const port = 8001;

const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>MyPage — 02_mypage_33750790</title>
  </head>
  <body>
    <h1>hi, i’m ELIZAHUSSAIN </h1>
    <h2>Dynamic Web Apps — MyPage</h2>

    <p><strong>about me:</strong> goldsmiths student (ehuss003), coffee-fueled, javascript-curious, and currently vibing with node + github. </p>

    <p>Node server running.</p>
  </body>
</html>`;

http
  .createServer((_, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.end(html);
  })
  .listen(port, () => console.log(`http://localhost:${port}`));

  