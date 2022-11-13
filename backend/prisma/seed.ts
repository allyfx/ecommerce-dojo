import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Dev',
      email: 'dev@teste.com.br',
      password: '123456'
    }
  })

  const products = [
    {
      title: 'Abacaxi',
      imageUrl: 'https://cdn.awsli.com.br/600x700/305/305913/produto/10189815/abacaxi-1441a8b7.jpg',
      price: 5.20,
      stock: 5
    },
    {
      title: 'Maça',
      imageUrl: 'https://trimais.vteximg.com.br/arquivos/ids/1039824-1000-1000/foto_original.jpg?v=638010864173000000',
      price: 2.20,
      stock: 10
    },
    {
      title: 'Banana',
      imageUrl: 'https://frutasbrasilsul.com.br/wp-content/uploads/banana-nanica.png',
      price: 4.0,
      stock: 3
    },
    {
      title: 'Brócolis',
      imageUrl: 'https://www.infoescola.com/wp-content/uploads/2010/08/brocolis.jpg',
      price: 6.0,
      stock: 8
    },
    {
      title: 'Alface',
      imageUrl: 'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/1839128[1]-1000x1000.jpg',
      price: 2.50,
      stock: 4
    },
  ]

  products.forEach(async (product) => {
    await prisma.product.create({
      data: product
    })
  })
}

main()