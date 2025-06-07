import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import Racao from '../assets/Ração Grannature Premium Cães Pequenas Raças Frango 10_1kg.jpeg'
import Brinquedo from '../assets/kit de 4 Brinquedo mordedor para cachorros pequenos bola corda pet.jpeg'
import Coleira from '../assets/Conjunto de arnês e coleira Fida para passear com cães e gatos rosa XXXS.jpeg'
import Shampoo from '../assets/Kit Condicionador + Shampoo Filhote Pet Clean Cachorro Gato.jpeg'
import Cama from '../assets/Sofá cama ortopédica para perros – Camas ultra cómodas para perros medianos.jpeg'
import KitDental from '../assets/Kit Talco Cachorro Fêmea Creme Dental Sabores e Escova de Dentes - Higiene a Seco e Bucal Pet Clean.jpeg'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const { addToCart } = useCart();

  const categories = [
    { id: 'todos', name: 'Todos os Produtos' },
    { id: 'racao', name: 'Ração Premium' },
    { id: 'brinquedos', name: 'Brinquedos' },
    { id: 'acessorios', name: 'Acessórios' },
    { id: 'higiene', name: 'Higiene & Beleza' },
    { id: 'medicamentos', name: 'Medicamentos' },
  ];

  const products = [
    {
      id: 1,
      name: 'Ração Premium Royal Canin',
      price: 189.90,
      oldPrice: 219.90,
      category: 'racao',
      src: Racao,
      alt: 'Gato laranja e branco deitado - ração premium para felinos',
      badge: 'Bestseller',
      description: 'Alimentação completa e balanceada para cães adultos'
    },
    {
      id: 2,
      name: 'Brinquedo Interativo Kong',
      price: 79.90,
      category: 'brinquedos',
      src: Brinquedo,
      alt: 'Gatinho cinza - brinquedo interativo para estimular pets',
      badge: 'Novo',
      description: 'Brinquedo resistente para estimular a mente do seu pet'
    },
    {
      id: 3,
      name: 'Coleira de Couro Premium',
      price: 149.90,
      category: 'acessorios',
      src: Coleira,
      alt: 'Cachorro com coleira - acessório de couro premium para pets',
      description: 'Coleira elegante em couro legítimo com detalhes dourados'
    },
    {
      id: 4,
      name: 'Shampoo Hipoalergênico',
      price: 59.90,
      category: 'higiene',
      src: Shampoo,
      alt: 'Produto de higiene pet - shampoo hipoalergênico para animais',
      badge: 'Promoção',
      description: 'Fórmula suave para peles sensíveis'
    },
    {
      id: 5,
      name: 'Cama Ortopédica Deluxe',
      price: 299.90,
      oldPrice: 349.90,
      category: 'acessorios',
      src: Cama,
      alt: 'Gato relaxando - cama ortopédica confortável para pets',
      description: 'Cama com espuma ortopédica para maior conforto'
    },
    {
      id: 6,
      name: 'Kit Dental Completo',
      price: 89.90,
      category: 'higiene',
      src: KitDental,
      alt: 'Gatinho sorrindo - kit dental para higiene bucal de pets',
      description: 'Kit completo para higiene dental do seu pet'
    }
  ];

  const filteredProducts = selectedCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Bestseller': return 'bg-petmimos-primary text-white';
      case 'Novo': return 'bg-green-500 text-white';
      case 'Promoção': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.src
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[color:#80c7d9] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4">
            Produtos Premium
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Seleção exclusiva dos melhores produtos para o bem-estar e felicidade do seu animal de estimação
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "btn-primary" : "hover:border-petmimos-primary hover:text-petmimos-primary"}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gradient-to-br from-white to-petmimos-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="card-hover border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-64 flex items-center justify-center">
                    <img 
                      src={product.src}
                      alt={product.alt}
                      className="max-h-full max-w-full object-scale-down"
                    />
                    {product.badge && (
                      <Badge className={`absolute top-4 left-4 ${getBadgeColor(product.badge)}`}>
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-petmimos-neutral-dark mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-petmimos-primary-dark">
                          R$ {product.price.toFixed(2).replace('.', ',')}
                        </span>
                        {product.oldPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            R$ {product.oldPrice.toFixed(2).replace('.', ',')}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full btn-primary"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Adicionar ao Carrinho
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white ">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-4 gradient-text">
            Receba ofertas exclusivas
          </h2>
          <p className="text-xl mb-8 text-black/60">
            Cadastre-se e seja o primeiro a saber sobre novos produtos e promoções especiais
          </p>
          <div className="flex flex-col items-center sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Seu e-mail"
              className="flex-1 px-4 py-3 rounded-full btn-primary placeholder:text-white outline-none"
            />
            <Button className="btn-primary text-white hover:bg-petmimos-accent px-8 py-4 rounded-full">
              Cadastrar
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
