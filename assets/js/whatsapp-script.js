// Função para abrir o popup com transição suave
function openPopup() {
    const modal = document.getElementById('whatsappModal');
    modal.style.display = 'block';  // Tornamos visível
    setTimeout(() => {
        modal.classList.add('show');  // Adicionamos a classe para a transição
    }, 10);  // Um pequeno atraso para a transição funcionar
}

// Função para fechar o popup com transição suave
function closePopup() {
    const modal = document.getElementById('whatsappModal');
    modal.classList.remove('show');  // Remove a classe com a transição
    setTimeout(() => {
        modal.style.display = 'none';  // Esconde o modal após a transição
    }, 300);  // O tempo aqui deve ser o mesmo que o tempo da transição em CSS (0.3s = 300ms)
}
