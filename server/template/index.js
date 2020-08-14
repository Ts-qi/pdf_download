module.exports = (info) => {
  const today = new Date()
  return `
    <!DOCTYPE html> 
    <html>
      <head>
        <meta charset="utf-8">
        <title>PDF template</title>
        <style>
          * {
            color: red;
          }
        </style>
      </head>
      <body>
        <div>
          ${today} --${info.name}
        </div>
      </body>
    </html>
  `
}