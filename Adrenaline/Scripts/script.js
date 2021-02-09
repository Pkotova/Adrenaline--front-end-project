
Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle("change");
    };
});

function validate() {
    if( document.myForm.Name.value === "" ) {
        alert( "Please provide your name!" );
        document.myForm.Name.focus() ;
        return false;
    }
    if( document.myForm.Email.value === "" ) {
        alert( "Please provide your email!" );
        document.myForm.Email.focus() ;
        return false;
    }
    if( document.myForm.Message.value === "" ) {
        alert( "Please provide your message!" );
        document.myForm.Message.focus() ;
        return false;
    }
}
