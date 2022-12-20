function convertHtml(value) {
  var arr = value;
  console.log(arr);
  var html = "";
  for (var i = 0; i < value.length; i++) {
    html += value[i].props["children"].join("");
  }
  return html;
}
export default { convertHtml };
