
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

const Index = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const features = [
    {
      title: 'Produtos Premium',
      description: 'Seleção exclusiva dos melhores produtos para seu pet',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&h=300'
    },
    {
      title: 'Cuidados Especializados',
      description: 'Serviços veterinários e estética com profissionais qualificados',
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=400&h=300'
    },
    {
      title: 'Ambiente Acolhedor',
      description: 'Espaço confortável e seguro para o bem-estar do seu animal',
      image: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?auto=format&fit=crop&w=400&h=300'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      text: 'O atendimento na PetMimos é excepcional. Minha gata sempre fica linda após os serviços!',
      rating: 5
    },
    {
      name: 'João Santos',
      text: 'Produtos de qualidade superior e equipe muito atenciosa. Recomendo!',
      rating: 5
    },
    {
      name: 'Ana Costa',
      text: 'O melhor petshop da região. Meu cachorro adora vir aqui!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Mimos Premium para seu 
                <span className="block text-petmimos-peach"> Melhor Amigo</span>
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Na PetMimos, oferecemos produtos e serviços de alta qualidade para garantir o bem-estar e felicidade do seu animal de estimação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-white text-petmimos-pink-dark hover:bg-petmimos-cream text-lg px-8 py-4 rounded-full">
                  <Link to="/products">Explorar Produtos</Link>
                </Button>
                <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-petmimos-pink-dark text-lg px-8 py-4 rounded-full">
                  <Link to="/services">Nossos Serviços</Link>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1501286353178-1ec881214838?auto=format&fit=crop&w=600&h=600" 
                alt="Pet feliz" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl font-bold gradient-text mb-4">
              Por que escolher a PetMimos?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combinamos paixão por animais com excelência em atendimento para oferecer a melhor experiência para você e seu pet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-petmimos-purple mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-petmimos-lavender-light/30 to-petmimos-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold gradient-text mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600">
              Cuidados completos para a saúde e beleza do seu pet
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Consultas Veterinárias', 'Banho & Tosa', 'Vacinação', 'Pet Hotel'].map((service, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg card-hover">
                <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🐾</span>
                </div>
                <h3 className="font-semibold text-petmimos-purple mb-2">{service}</h3>
                <p className="text-gray-600 text-sm">Serviço especializado com carinho</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="btn-primary text-lg">
              <Link to="/services">Ver Todos os Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold gradient-text mb-4">
              O que nossos clientes dizem
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg card-hover">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-petmimos-peach text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-petmimos-purple">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Pronto para cuidar melhor do seu pet?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Entre em contato conosco e descubra como podemos ajudar a manter seu animal de estimação feliz e saudável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-petmimos-pink-dark hover:bg-petmimos-cream text-lg px-8 py-4 rounded-full">
              <Link to="/contact">Fale Conosco</Link>
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-petmimos-pink-dark text-lg px-8 py-4 rounded-full"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Agendar Consulta
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
