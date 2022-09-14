function keisan() {
    var w = document.form1.w.options[document.form1.w.selectedIndex].value;
	var m = document.form1.m.options[document.form1.m.selectedIndex].value;
    var s = document.form1.s.options[document.form1.s.selectedIndex].value;
    var w2 = document.form1.w2.options[document.form1.w2.selectedIndex].value;
    //換算計算 単位は秒
    var total = parseInt(w) * ((parseInt(m)*60) + parseInt(s)) / parseInt(w2);
    if(total > 59){
        //60秒以上の時　計算して表示
        var minit = total / 60;     //秒を分に戻す
        var second = total % 60;    //秒を分に戻す時のあまり(秒数)を取り出す
        document.form1.field_result.value = parseInt(minit);
        document.form1.field_second.value = parseInt(second);
    }else{
        //59秒以下の時　計算させずにそのまま表示
        var result = total;
        document.form1.field_result.value = parseInt(minit) || 0;
        document.form1.field_second.value = parseInt(result) || 0;
    }
}



