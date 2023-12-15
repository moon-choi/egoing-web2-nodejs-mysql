module.exports = {
  HTML: function (title, list, body, control) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },
  list: function (files) {
    var list = '<ul>';
    var i = 0;
    while (i < files.length) {
      list = list + `<li><a href="/?id=${files[i].id}">${files[i].title}</a></li>`;
      i = i + 1;
    }
    list = list + '</ul>';
    return list;
  },
  authorPicker: function (authors, author_id) {
    var tag = '';
    var i = 0;
    while (i < authors.length) {
      var OP = ''
      if (authors[i].id === author_id) { //authors[i].id는 원래 게시자, author_id: 업데이트됀 게시자
        OP = 'selected';
      }
      tag = tag + `<option value="${authors[i].id}" ${OP}>${authors[i].name}</option>`
      i++;
    }
    return `<select name="author">
      ${tag}
    </select>`
  }
}
