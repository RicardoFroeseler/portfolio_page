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

// Função para enviar mensagem pelo WhatsApp
function sendMessage() {
    const message = document.getElementById('whatsappMessage').value;  // Captura o texto da mensagem
    if (message.trim() !== "") {  // Verifica se a mensagem não está vazia
        const phoneNumber = "5531985266186";  // Substitua pelo número do WhatsApp (inclua o código do país)
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;  // Gera o link para WhatsApp com a mensagem
        window.open(url, '_blank');  // Abre o WhatsApp em uma nova aba
        closePopup();  // Fecha o modal após o envio
    } else {
        alert("Por favor, digite uma mensagem.");  // Alerta caso o campo de mensagem esteja vazio
    }
}
