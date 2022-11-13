# Ecommerce Dojo!
E aí dev! Pronto(a) para um desafio maior? Este repositório contém o desafio dojo avançado onde você, dev, trabalha em um projeto ecommerce e precisa cumprir uma demanda urgente de um _hotfix_*. Abaixo estão as instruções para instalação e configuração do projeto. Boa sorte!

*_Hotfix_: uma tarefa específica para correção de um problema crítico no sistema.

## O desafio
A plataforma E-Quitanda é uma loja virtual de venda de frutas e verduras. Na plataforma o usuário consegue visualizar os itens disponíveis, adicioná-los à sua sacola e realizar uma compra completamente online.

Porém, a principal funcionalidade - adicionar à sacola e finalizar a compra - não funciona devidamente. Atualmente ao clicar para adicionar um item na sacola este item é adicionado e listado na sacola, mas não é possível alterar quantidade, remover o produto ou até mesmo finalizar a compra.

Sua tarefa é fazer com que:
- [ ] Seja possível alterar a quantidade de produtos adicionados à sacola.
- [ ] Seja possível remover um produto da sacola.
- [ ] Finalizar um pedido (isso requer a criação de uma _order_ no banco de dados).

#### Lembre-se:
- Ao finalizar uma compra o estoque dos produtos é reduzido.
- Só é possível realizar uma compra com um usuário logado.

## Setup do projeto
### Backend
- Após fazer um clone do projeto na sua máquina, entre na pasta backend e execute o comando de sua preferência para instalação de bibliotecas (por exemplo `npm i`).
- Crie um arquivo `.env` e preencha as variáveis utilizando o modelo `.env.example`.
- No terminal rode o comando `npx prisma migrate dev` para gerar as migrations do banco de dados utilizando o prisma.
- Ainda no terminal, rode o comando `npx prisma db seed` para gerar a seed do projeto.
	- O usuário de testes possui as credenciais:
	Email: dev@teste.com.br
	Senha: 123456
- Rode o comando `npm run dev` para inicializar o projeto (você pode utilizar o gerenciador de pacotes que preferir).

Prontinho!

### Frontend
- Na pasta de clone do projeto entre na pasta frontend e execute o comando de instalação de bibliotecas utilizando um gerenciador de pacotes (por exemplo `npm i`).
- No terminal rode o comando `npm run dev` para inicializar o projeto (você pode utilizar o gerenciador de pacotes que preferir).
- No seu navegador abra o `localhost` na porta em que o projeto foi inicializado.

Pronto!

## Comunidade
Este desafio foi idealizado pela comunidade do Space Squad, codado especialmente para que você possa evoluir suas habilidades como dev. Boa sorte e bora codar!

Não esquece de compartilhar o resultado nas redes sociais. Usa a hashtag #dojospacesquad!

<hr />

_- with love by Space Squad 💜_