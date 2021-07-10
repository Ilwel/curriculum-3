const projects = [

    {
        tag:"meu-curriculum-vitae",
        name:'Meu Curriculum Vitae',
        about:'Essa página frontend feita em React é um dos meus primeiros projetos web, nela eu aplico um pouco os conceitos de SPA (Single Page Application) que o React da suporte, usando os estados para gerenciar o conteúdo presente na página. Além disso procuro explorar diversa técnicas pra desenvolver layout em CSS como flex, grid, e box-model. Se ler a documentação verá que utlilizei BEM e SMACSS ao escrever o arquivo CSS. ',
        tags:[
            
            {name:'React', tag:'react'},
            {name:'Javascript', tag:'js'},
            {name:'HTML', tag:'html'},
            {name:'CSS', tag:'css'},
        ],
        link:'https://github.com/Ilwel/curriculum-2',

    },
    {
        tag:"lista-encadeada-c",
        name:'Lista Encadeada em C',
        about:'Criei o desafio de implementar essa clássica estrutura de dados seguindo a forte sintaxe dessa linguagem. Já tinha implementado esta estrutura de dados em C++ junto de outras clássicas como pilha e fila. Contudo, quis fazer de objeto de estudo implementar essa estrutura em um paradigma Estruturado em vez do Orientado a Objeto que utilizei anteriormente',
        tags:[
            
            {name:'C', tag:'c'},
            {name:'Data Structured', tag:'c'},
        ],
        link:'https://github.com/Ilwel/listaEncadeadaC',

    },
    {

        tag:"smc-crud",
        name:'SMC CRUD',
        about:'Fiz um simples CRUD em Express para gerenciar fichas de rpg armazenadas em um banco de dados mySql. Fiz esse projeto para estudar um modelo de arquitetura de projeto no qual o backend envia a página HTML para o client em vez de enviar dados para um aplicação frontend. Esse foi meu primeiro porjeto web, e o que aprendi nele é um ótimo rascunho para quando eu reformular este projeto',
        tags:[
            
            {name:'NodeJS', tag:'node'},
            {name:'Javascript', tag:'js'},
            {name:'mySQL', tag:'mysql'},
            {name:'Bootstrap', tag:'bt'},
        ],
        link:'https://github.com/Ilwel/smc_crud',

    },

]

export default projects;