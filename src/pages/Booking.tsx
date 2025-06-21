
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, User, Phone, Mail, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  const services = [
    {
      id: 'consulta',
      name: 'Consulta Veterinária',
      price: 'R$ 120',
      duration: '30-45 min',
      description: 'Exame completo com veterinário especializado',
      popular: true
    },
    {
      id: 'banho-tosa',
      name: 'Banho & Tosa',
      price: 'R$ 80',
      duration: '1-2 horas',
      description: 'Cuidados completos de higiene e beleza'
    },
    {
      id: 'vacinacao',
      name: 'Vacinação',
      price: 'R$ 60',
      duration: '15-20 min',
      description: 'Imunização seguindo cronograma veterinário'
    },
    {
      id: 'cirurgia',
      name: 'Cirurgias',
      price: 'Consulte',
      duration: 'Variável',
      description: 'Procedimentos cirúrgicos especializados'
    },
    {
      id: 'fisioterapia',
      name: 'Fisioterapia',
      price: 'R$ 150',
      duration: '45-60 min',
      description: 'Reabilitação e terapias especializadas'
    },
    {
      id: 'hotel',
      name: 'Pet Hotel',
      price: 'R$ 100/dia',
      duration: 'Por dia',
      description: 'Hospedagem confortável e segura'
    }
  ];

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  const steps = [
    { number: 1, title: 'Serviço', description: 'Escolha o serviço' },
    { number: 2, title: 'Data & Hora', description: 'Selecione quando' },
    { number: 3, title: 'Seus Dados', description: 'Informações pessoais' },
    { number: 4, title: 'Confirmação', description: 'Revisar agendamento' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceSelect = (serviceId: string) => {
    setFormData({ ...formData, service: serviceId });
    setCurrentStep(2);
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Agendamento:', formData);
    alert('Agendamento realizado com sucesso! Entraremos em contato em breve.');
  };

  const selectedService = services.find(s => s.id === formData.service);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Serviços
          </Link>
          <h1 className="font-serif text-4xl font-bold mb-4">
            Agendar Consulta
          </h1>
          <p className="text-xl text-white/90">
            Escolha o melhor horário para cuidar do seu pet
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium ${
                  currentStep >= step.number 
                    ? 'bg-petmimos-taupe text-cyan-500' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {currentStep > step.number ? <Check className="w-5 h-5" /> : step.number}
                </div>
                <div className="ml-3 hidden sm:block">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.number ? 'text-petmimos-taupe' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-petmimos-taupe' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-gradient-to-br from-white to-petmimos-cream/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="font-serif text-2xl gradient-text text-center">
                  Escolha o Serviço
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => handleServiceSelect(service.id)}
                      className="p-4 border border-petmimos-sage/30 rounded-lg hover:border-petmimos-taupe hover:shadow-md cursor-pointer transition-all relative"
                    >
                      {service.popular && (
                        <Badge className="absolute top-2 right-2 bg-petmimos-rose-dark text-white">
                          Popular
                        </Badge>
                      )}
                      <h3 className="font-semibold text-petmimos-taupe mb-2">{service.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-petmimos-rose-dark">{service.price}</span>
                        <span className="text-xs text-gray-500">{service.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Date & Time */}
          {currentStep === 2 && (
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="font-serif text-2xl gradient-text text-center">
                  Selecione Data e Horário
                </CardTitle>
                {selectedService && (
                  <p className="text-center text-gray-600">
                    Serviço: <span className="font-semibold text-petmimos-taupe">{selectedService.name}</span>
                  </p>
                )}
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-petmimos-taupe mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Data
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-petmimos-sage/30 rounded-lg focus:ring-2 focus:ring-petmimos-taupe focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-petmimos-taupe mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Horário
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setFormData({ ...formData, time })}
                        className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                          formData.time === time
                            ? 'bg-petmimos-secondary-dark text-white border-petmimos-taupe'
                            : 'border-petmimos-sage/30 hover:border-petmimos-taupe hover:bg-petmimos-sage/10'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(1)}
                    className="border-petmimos-taupe text-petmimos-taupe hover:bg-petmimos-taupe hover:text-white"
                  >
                    Voltar
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!formData.date || !formData.time}
                    className="btn-primary"
                  >
                    Continuar
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Personal Information */}
          {currentStep === 3 && (
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="font-serif text-2xl gradient-text text-center">
                  Seus Dados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-petmimos-taupe mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-petmimos-sage/30 rounded-lg focus:ring-2 focus:ring-petmimos-taupe focus:border-transparent"
                      placeholder="Digite seu nome"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-petmimos-taupe mb-2">
                      🐾 Nome do Pet *
                    </label>
                    <input
                      type="text"
                      name="petName"
                      value={formData.petName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-petmimos-sage/30 rounded-lg focus:ring-2 focus:ring-petmimos-taupe focus:border-transparent"
                      placeholder="Nome do seu pet"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-petmimos-taupe mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-petmimos-sage/30 rounded-lg focus:ring-2 focus:ring-petmimos-taupe focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-petmimos-taupe mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-petmimos-sage/30 rounded-lg focus:ring-2 focus:ring-petmimos-taupe focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-petmimos-taupe mb-2">
                    Observações
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-petmimos-sage/30 rounded-lg focus:ring-2 focus:ring-petmimos-taupe focus:border-transparent"
                    placeholder="Alguma informação adicional sobre seu pet..."
                  />
                </div>

                <div className="flex justify-between mt-6">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(2)}
                    className="border-petmimos-taupe text-petmimos-taupe hover:bg-petmimos-taupe hover:text-white"
                  >
                    Voltar
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!formData.name || !formData.email || !formData.phone || !formData.petName}
                    className="btn-primary"
                  >
                    Revisar
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="font-serif text-2xl gradient-text text-center">
                  Confirmar Agendamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-petmimos-cream/50 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-petmimos-taupe mb-4">Resumo do Agendamento</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Serviço:</span> {selectedService?.name}</p>
                    <p><span className="font-medium">Data:</span> {new Date(formData.date).toLocaleDateString('pt-BR')}</p>
                    <p><span className="font-medium">Horário:</span> {formData.time}</p>
                    <p><span className="font-medium">Cliente:</span> {formData.name}</p>
                    <p><span className="font-medium">Pet:</span> {formData.petName}</p>
                    <p><span className="font-medium">Telefone:</span> {formData.phone}</p>
                    <p><span className="font-medium">E-mail:</span> {formData.email}</p>
                    {formData.notes && (
                      <p><span className="font-medium">Observações:</span> {formData.notes}</p>
                    )}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(3)}
                    className="border-petmimos-taupe text-petmimos-taupe hover:bg-petmimos-taupe hover:text-white"
                  >
                    Voltar
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    className="btn-primary"
                  >
                    Confirmar Agendamento
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
