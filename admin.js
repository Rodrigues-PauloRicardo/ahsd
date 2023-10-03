function salvarTextos() {
    // Obtenha o novo título do campo de entrada
    const novoTitulo = document.getElementById('novoTitulo').value;


    const newTitle = document.getElementById('newTitle').value ;
   
    

    // Salve o novo título no armazenamento local (localStorage)
    localStorage.setItem('novoTitulo', novoTitulo);
    localStorage.setItem('newTitle', newTitle);

    // Exiba uma mensagem de confirmação (substitua por sua própria lógica de salvamento)
    alert('Título atualizado com sucesso!');
}
// JavaScript para obter o novo título do armazenamento local (localStorage)
const novoTitulo = localStorage.getItem('novoTitulo');
if (novoTitulo) {
    document.getElementById('titleTeste2').textContent = novoTitulo;
    

}


const newTitle = localStorage.getItem('newTitle');



if (newTitle) {
    document.getElementById('title1').textContent = newTitle;
    title1.style.color = 'blue';
    title1.style.fontWeight = 'bold';
}