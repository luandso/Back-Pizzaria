var clientes = { 
    dados:
    [
        {
            id: '1',
            nome: 'Luan',
            img: '',
            telefone: '(11) 96622-6090', 
            email: 'luandsoliveira@gmail.com',
            senha: 'luan10101010',
            endereco: 'Rua Japão, Vale do Sol, Barueri',
            cidade: 'Barueri-SP',
        },
        {
            id: '2',
            nome: 'McQueen',
            img: '',
            telefone: '(11) 96622-6095', 
            email: 'mcqueen0101@gmail.com',
            senha: 'mcqueen10101010',
            endereco: 'Radiator Springs, Rota 66, EUA',
            cidade: 'Radiator Springs',
        },
        {
            id: '3',
            nome: 'Stip Weathers',
            img: '',
            telefone: '(11) 96622-6043', 
            email: 'theking43@gmail.com',
            senha: 'theking10101010',
            endereco: 'Dinoco, Vale da Disney, EUA',
            cidade: 'Dinoco',
        },
        {
            id: '4',
            nome: 'Chick Hicks',
            img: '',
            telefone: '(11) 96622-6086', 
            email: 'IhateMcqueen01@gmail.com',
            senha: 'cachuga10101010',
            endereco: 'HRB, Vale da Inveja, Disney',
            cidade: 'HRB',
        },
    ]
}

var categorias = {
    categoria:
        [
            {
                id: 1,
                nome_categoria: 'Geral',
                icon: ''
            },
            {
                id: 2,
                nome_categoria: 'Pizza',
                icon: ''
            },
            {
                id: 3,
                nome_categoria: 'Bebida',
                icon: ''
            },
            {
                id: 4,
                nome_categoria: 'Sobremesa',
                icon: ''
            },
            {
                id: 5,
                nome_categoria: 'Favoritos',
                icon: ''
            }

        ]
}

var produtos = {
    dados:
    [
        {
            id: '1',
            titulo: 'Pizza Quatro Queijos',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            preco: 'R$ 25,00',
            imagem: '',
            categoria: categorias[0],
            qtd_estrela: 5
            
        },
        {
            id: '2',
            titulo: 'Pizza Vegana',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            preco: 'R$ 20,00',
            imagem: '',
            categoria: categorias[0],
            qtd_estrela: 5
        },
        {
            id: '3',
            titulo: 'Pizza de Frango',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            preco: 'R$ 20,00',
            imagem: '',
            categoria: categorias[0],
            qtd_estrela: 5
        },
        {
            id: '4',
            titulo: 'Pizza MCqueen',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            preco: 'R$ 95,00',
            imagem: '',
            categoria: categorias[0],
            qtd_estrela: 5
        },
        {
            id: '5',
            titulo: 'Pizza Doce',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            preco: 'R$ 20,00',
            imagem: '',
            categoria: categorias[0],
            qtd_estrela: 5
        }
    ]
    
}
module.exports = {
    clientes,
    categorias,
    produtos,
    comentarios
}