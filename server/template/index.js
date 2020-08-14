module.exports = (info) => {
  const today = new Date().getDay()
  return `
  <!DOCTYPE html> 
  <html>
    <head>
      <meta charset="utf-8">
      <title>PDF template</title>
      <style>
        .context {
          margin: 0 auto;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="context">
        <div>${today} </div>
        <div>
          名字：${info.name}
        </div>
        <div>
          年龄：${info.age}
        </div>
        <div>
          身高：${info.height}
        </div>
        <div>
          体重：${info.weight}
        </div>
      </div>
    </body>
  </html>
  `
}