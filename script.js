// Seleciona todos os links do menu
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Evita o comportamento padrão do link

        // Obtém o ID da seção alvo
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });

        // Remove a classe ativa de todos os links
        document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active'));
        
        // Adiciona a classe ativa ao link clicado
        this.classList.add('active');
    });
});
