
/* Máscaras ER */
function mascara( v_obj ){
  setTimeout( function() {
    v_obj.value = mtel( v_obj.value );
  }, 1 );
}

function mtel( v ) {
  v = v.replace(/\D/g,"");
  v = v.replace(/^(\d{2})(\d)/g,"($1) $2");
  v = v.replace(/(\d)(\d{4})$/,"$1-$2");
  
  return v;
}