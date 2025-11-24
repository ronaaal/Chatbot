// Script mínimo: sólo inicializa el año en el footer.
(function(){
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();
})();
