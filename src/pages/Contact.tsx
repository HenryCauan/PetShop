
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Contact as ContactIcon } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você pode adicionar a lógica para enviar o formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      title: 'Telefone',
      info: '(11) 9999-9999',
      description: 'Atendimento de Seg-Sáb: 8h às 18h',
      icon: '📞'
    },
    {
      title: 'WhatsApp',
      info: '(11) 99999-9999',
      description: 'Disponível 24h para emergências',
      icon: '💬'
    },
    {
      title: 'E-mail',
      info: 'contato@petlux.com.br',
      description: 'Resposta em até 2 horas',
      icon: '📧'
    },
    {
      title: 'Endereço',
      info: 'Rua Premium, 123',
      description: 'São Paulo - SP, CEP: 01234-567',
      icon: '📍'
    }
  ];

  const hours = [
    { day: 'Segunda-feira', hours: '8:00 - 18:00' },
    { day: 'Terça-feira', hours: '8:00 - 18:00' },
    { day: 'Quarta-feira', hours: '8:00 - 18:00' },
    { day: 'Quinta-feira', hours: '8:00 - 18:00' },
    { day: 'Sexta-feira', hours: '8:00 - 18:00' },
    { day: 'Sábado', hours: '8:00 - 18:00' },
    { day: 'Domingo', hours: '9:00 - 17:00' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Estamos aqui para ajudar você e seu pet. Entre em contato conosco para dúvidas, agendamentos ou emergências
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-br from-white to-petlux-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-petlux-blue mb-2">{item.title}</h3>
                  <p className="font-medium text-gray-900 mb-1">{item.info}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Form and Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <ContactIcon className="w-6 h-6 text-petlux-blue mr-3" />
                  <h2 className="font-serif text-2xl font-bold text-petlux-blue">
                    Envie sua Mensagem
                  </h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Seu Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="petName">Nome do Pet</Label>
                      <Input
                        id="petName"
                        name="petName"
                        value={formData.petName}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Assunto *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-1"
                      placeholder="Conte-nos como podemos ajudar você e seu pet..."
                    />
                  </div>

                  <Button type="submit" className="btn-primary w-full text-lg py-3">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Hours and Map */}
            <div className="space-y-8">
              {/* Hours */}
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-petlux-blue mb-6">
                    Horário de Funcionamento
                  </h3>
                  <div className="space-y-3">
                    {hours.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="font-medium text-gray-700">{item.day}</span>
                        <span className="text-petlux-blue font-semibold">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-700 mb-2">Emergências 24h</h4>
                    <p className="text-red-600 text-sm">
                      Para emergências fora do horário comercial, entre em contato pelo WhatsApp: (11) 99999-9999
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-petlux-blue mb-6">
                    Nossa Localização
                  </h3>
                  <div className="aspect-video bg-gradient-to-br from-petlux-sage-light to-petlux-blue-light rounded-lg flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📍</div>
                      <p className="font-semibold">Rua Premium, 123</p>
                      <p>São Paulo - SP</p>
                      <p className="text-sm mt-2">CEP: 01234-567</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600 text-sm">
                      📍 Localização privilegiada com fácil acesso e estacionamento gratuito para clientes
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold gradient-text mb-4">
              Perguntas Frequentes
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: 'Preciso agendar consulta?',
                answer: 'Sim, recomendamos agendamento para garantir o melhor atendimento. Para emergências, atendemos sem agendamento.'
              },
              {
                question: 'Vocês atendem todos os tipos de animais?',
                answer: 'Atendemos cães, gatos, aves e animais exóticos. Nossa equipe é especializada em diversas espécies.'
              },
              {
                question: 'Como funciona o Pet Hotel?',
                answer: 'Oferecemos hospedagem com quartos climatizados, alimentação controlada e cuidados 24h. Visitas são permitidas.'
              },
              {
                question: 'Vocês fazem entrega de produtos?',
                answer: 'Sim! Fazemos entregas na região metropolitana. Frete grátis para compras acima de R$ 150.'
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-petlux-blue mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
