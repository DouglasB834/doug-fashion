const products = [
  {
    id: "6228fe63b7e6cb904bbe0265",
    price: 150.94,
    name: "Jaqueta de ziper ",
    description: "Jaqueta de ziper vermelho e azul para inverno.",
    imageUrl:
      "https://images.unsplash.com/photo-1576993537667-c6d2386f90a2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6228fe63b7e6cb904bbe0165",
    price: 150.99,
    name: "Suéter Branco",
    description: "Um elegante suéter branco para qualquer ocasião.",
    imageUrl:
      "https://images.unsplash.com/flagged/photo-1559502867-c406bd78ff24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
  },
  {
    id: "6228fe63b7e6cb904bbe0365",
    price: 254.99,
    name: "Jaqueta de Couro",
    description: "Jaqueta de couro para qualquer ocasião.",
    imageUrl:
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=1280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6228fec7b7e6cb904bbe016f",
    name: "Regata Azul",
    price: 99.99,
    description: "Uma regata azul leve e confortável para o verão.",
    imageUrl:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80s",
  },
  {
    price: 199.0,
    id: "6228ff71b7e6cb904bbe0135",
    imageUrl:
      "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?q=80&w=1241&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "tenis da Nike",
    description: "tenis da Nike ver para qualquer ocasião",
  },
  {
    price: 129.99,
    id: "6228ff71b7e6cb904bbe321",
    imageUrl:
      "https://images.unsplash.com/photo-1691315909393-c5c91e22760f?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Camisa e short  ",
    description: "Conjunto camisa amarelha e short azul vibrante  para verao .",
  },
  {
    price: 199.0,
    id: "6228ff71b7e6cb904bbe0175",
    imageUrl:
      "https://images.unsplash.com/photo-1584670747417-594a9412fba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Suéter Vermelho Vibrante",
    description: "Um suéter vibrante que se destaca em qualquer guarda-roupa.",
  },
  {
    name: "Camisa branca Feminina",
    price: 149.99,
    description: "Camisa branca de gola alta Feminina.",
    id: "6228ff93b7e6cb904bbe0111",
    imageUrl:
      "https://images.unsplash.com/photo-1522706604291-210a56c3b376?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: " Vestido Vermelho",
    price: 39.9,
    description: "Um vestido vermelho deslumbrante para ocasiões especiais.",
    imageUrl:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=746&q=80",
    id: "6228ff93b7e6cb904bbe0177",
  },
  {
    price: 249.99,
    id: "6228fe80b7e6cb904bbe0168",
    name: "Jaqueta Xadrez",
    description: "Uma Jaqueta xadrez clássica e atemporal.",
    imageUrl:
      "https://images.unsplash.com/photo-1525450824786-227cbef70703?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    price: 80,
    name: "Blusa Branca",
    id: "6228ff31b7e6cb904bbe0172",
    description: "Uma blusa branca versátil que combina com tudo.",
    imageUrl:
      "https://images.unsplash.com/photo-1624206112918-f140f087f9b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    price: 200,
    imageUrl:
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
    id: "62290014b7e6cb904bbe017c",
    name: "Calça Jeans Azul",
    description: "Calça jeans azul, um item essencial no guarda-roupa.",
  },
  {
    id: "6228ffa5b7e6cb904bbe047a",
    name: "Vestido Branco",
    description: "Vestido Branco de gola alta, perfeito para o verão.",
    price: 250,
    imageUrl:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
  {
    id: "6228ffa5b7e6cb904bbe010a",
    name: "Vestido preto ",
    description: "Vestido preto top transparente.",
    price: 59.99,
    imageUrl:
      "https://images.unsplash.com/photo-1700510079203-71faca181064?q=80&w=1003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6228ffa5b7e6cb904bbe019a",
    name: "Camisa Branco",
    description: "Camisa Branca de gola alta, ideal para um look sofisticado.",
    price: 25,
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6228ffa5b7e6cb904bbe117a",
    name: "Macacão jeans ",
    description: "Mcacaão jeans feminino.",
    price: 155.99,
    imageUrl:
      "https://images.unsplash.com/photo-1516765626489-6964eaab49e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default products;
