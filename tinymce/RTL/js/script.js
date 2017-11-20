tinymce.init({
    selector: 'textarea.tinymce',
    min_height: 350,
    plugins: "table , link , lists , hr , paste , print , textcolor , code , emoticons , searchreplace , spellchecker , directionality",
    toolbar1: "undo redo | styleselect | fontsizeselect | searchreplace spellchecker | bold italic | emoticons hr | link unlink | forecolor backcolor | alignleft aligncenter alignright alignjustify | ltr rtl | bullist numlist outdent indent ",
    //toolbar2: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
    directionality : 'rtl',
    language : 'fa_IR'
});