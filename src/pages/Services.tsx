import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

const Services = () => {
  const navigate = useNavigate();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const services = [
    {
      id: 1,
      name: 'Consulta Veterinária',
      description: 'Exames completos e diagnósticos precisos com veterinários especializados',
      price: 'A partir de R$ 120',
      duration: '30-45 min',
      features: ['Exame clínico completo', 'Orientação nutricional', 'Plano de vacinação', 'Receituário quando necessário'],
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&h=300',
      badge: 'Mais Procurado'
    },
    {
      id: 2,
      name: 'Banho & Tosa',
      description: 'Cuidados completos de higiene e beleza para seu pet',
      price: 'A partir de R$ 80',
      duration: '1-2 horas',
      features: ['Banho com produtos premium', 'Tosa higiênica ou completa', 'Corte de unhas', 'Limpeza de ouvidos'],
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=400&h=300',
      badge: 'Promoção'
    },
    {
      id: 3,
      name: 'Vacinação',
      description: 'Imunização completa seguindo cronograma veterinário',
      price: 'A partir de R$ 60',
      duration: '15-20 min',
      features: ['Vacinas importadas', 'Cartão de vacinação', 'Avaliação pré-vacinal', 'Orientações pós-vacina'],
      image: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?auto=format&fit=crop&w=400&h=300'
    },
    {
      id: 4,
      name: 'Pet Hotel',
      description: 'Hospedagem confortável e segura para seu animal de estimação',
      price: 'A partir de R$ 100/dia',
      duration: 'Por dia',
      features: ['Quartos climatizados', 'Alimentação controlada', 'Passeios diários', 'Monitoramento 24h'],
      image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838?auto=format&fit=crop&w=400&h=300',
      badge: 'Premium'
    },
    {
      id: 5,
      name: 'Cirurgias',
      description: 'Procedimentos cirúrgicos com equipamentos modernos',
      price: 'Consulte valores',
      duration: 'Variável',
      features: ['Centro cirúrgico equipado', 'Anestesia segura', 'Monitoramento completo', 'Cuidados pós-operatórios'],
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&h=300'
    },
    {
      id: 6,
      name: 'Fisioterapia Veterinária',
      description: 'Reabilitação e terapias especializadas para pets',
      price: 'A partir de R$ 150',
      duration: '45-60 min',
      features: ['Hidroterapia', 'Laser terapia', 'Acupuntura', 'Exercícios terapêuticos'],
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=400&h=300',
      badge: 'Especializado'
    }
  ];

  const emergencyServices = [
    {
      title: 'Atendimento 24h',
      description: 'Pronto-socorro veterinário disponível todos os dias',
      icon: '🚨'
    },
    {
      title: 'Transporte Pet',
      description: 'Serviço de ambulância para emergências',
      icon: '🚗'
    },
    {
      title: 'Telemedicina',
      description: 'Consultas online para orientações rápidas',
      icon: '💻'
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Mais Procurado': return 'bg-petmimos-beige text-white';
      case 'Premium': return 'bg-petmimos-taupe text-white';
      case 'Promoção': return 'bg-red-500 text-white';
      case 'Especializado': return 'bg-petmimos-sage text-petmimos-taupe';
      default: return 'bg-gray-500 text-white';
    }
  };

  const handleBookingClick = () => {
    navigate('/booking');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[color:#80c7d9] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4">
            Nossos Serviços
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Cuidados veterinários especializados e serviços de bem-estar para garantir a saúde e felicidade do seu pet
          </p>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-12 bg-red-50 border-l-4 border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-red-700 mb-6 text-center">
            Serviços de Emergência
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyServices.map((service, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-3xl mb-2">{service.icon}</div>
                <h3 className="font-semibold text-petmimos-taupe mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-white to-petmimos-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold gradient-text mb-4">
              Serviços Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nossa equipe de profissionais qualificados oferece o melhor cuidado para seu animal de estimação
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="card-hover border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <div className="md:w-1/3 relative">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-48 md:h-full object-cover"
                      />
                      {service.badge && (
                        <Badge className={`absolute top-4 left-4 ${getBadgeColor(service.badge)}`}>
                          {service.badge}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-serif text-xl font-semibold text-petmimos-taupe">
                          {service.name}
                        </h3>
                        <div className="text-right">
                          <p className="font-bold text-petmimos-rose-dark">{service.price}</p>
                          <p className="text-sm text-gray-500">{service.duration}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-petmimos-taupe mb-2">Inclui:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <span className="text-petmimos-sage mr-2">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button 
                        className="btn-primary w-full"
                        onClick={handleBookingClick}
                      >
                        Agendar Serviço
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold gradient-text mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600">
              Processo simples para cuidar do seu pet
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Agendamento', description: 'Escolha o serviço e horário' },
              { step: '2', title: 'Check-in', description: 'Recepção acolhedora para você e seu pet' },
              { step: '3', title: 'Atendimento', description: 'Cuidado profissional e carinhoso' },
              { step: '4', title: 'Acompanhamento', description: 'Orientações e cuidados continuados' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[color:#80c7d9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="font-semibold text-petmimos-taupe mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold mb-6 gradient-text">
            Pronto para agendar?
          </h2>
          <p className="text-xl mb-8 text-black/70">
            Entre em contato conosco e garante o melhor cuidado para seu animal de estimação
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-petmimos-taupe btn-primary hover:bg-petmimos-cream text-lg px-8 py-4 rounded-full"
              onClick={handleBookingClick}
            >
              Agendar Online
            </Button>
            <Button variant="outline" className="border-white btn-primary text-white hover:bg-white hover:text-petmimos-taupe text-lg px-8 py-4 rounded-full">
              (11) 9999-9999
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

export default Services;
