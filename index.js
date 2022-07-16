tinymce.init({
              selector: 'textarea',
              height: 500,
              // plugins: 'a11ychecker advcode casechange export formatpainter image editimage linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tableofcontents tinycomments tinymcespellchecker',
              // toolbar: 'a11ycheck addcomment showcomments casechange checklist code export formatpainter image editimage pageembed permanentpen table tableofcontents',
              // toolbar_mode: 'floating',
              // tinycomments_mode: 'embedded',
              // tinycomments_author: 'Author name',
              plugins: 'advlist lists link autolink autosave code preview searchreplace wordcount media table image emoticons imagetools',
              toolbar: 'blocks bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent |link image media | forecolor backcolor emoticons | code preview',
              images_upload_url:'/'
});