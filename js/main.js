$("#register").on("click", function() {
  let name = $("#name").val();
  let memo = $("#memo").val();

  if (name == "" || memo == "") {
    alert("入力してください");
  } else {
    newPostRef.push({
      ToDo名: name,
      メモ: memo
    });

    $("#name").val(""); //入力内容を空にする
    $("#memo").val(""); //入力内容を空にする
  }
});

// 受信処理
newPostRef.on("child_added", function(data) {
  let v = data.val(); //ここに保存されたデータが全て入ってくる
  console.log(v); // vの変数に入っているオブジェクトを全て確認する
  let str = `<div class="todo" ><dt class="name"><label for="checkbox"><input type="checkbox" value="" id="checkbox" />${v.ToDo名}</label></dt><dd class="memo">${v.メモ}</dd></div>`;
  //ここでデータをhtmlに埋め込む
  $("#list").prepend(str);
});
