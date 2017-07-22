$(document).ready(function(){
	//code here...
	var code = $(".codemirror-textarea")[0];
	var editor = CodeMirror.fromTextArea(code, {
		lineNumbers : true,
        mode: "css"
	});
	default_value_editor = editor.getValue();
	$("#custom-css").val(default_value_editor);
	editor.on("change" , function(){
		var custom_css = editor.getValue();
		$("#custom-css").val(custom_css);
	});
});