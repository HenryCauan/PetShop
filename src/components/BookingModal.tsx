import { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
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
    'Consulta Veterinária',
    'Banho & Tosa',
    'Vacinação',
    'Cirurgia',
    'Fisioterapia Veterinária',
    'Pet Hotel'
  ];

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do agendamento
    console.log('Agendamento:', formData);
    alert('Agendamento realizado com sucesso! Entraremos em contato em breve.');
    onClose();
    setFormData({
      name: '',
      email: '',
      phone: '',
      petName: '',
      service: '',
      date: '',
      time: '',
      notes: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-petmimos-pink to-petmimos-lavender rounded-t-2xl">
          <h2 className="text-2xl font-bold text-white">Agendar Serviço</h2>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-petmimos-purple mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Seu Nome *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-petmimos-pink/30 rounded-lg focus:ring-2 focus:ring-petmimos-pink focus:border-transparent"
                placeholder="Digite seu nome"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-petmimos-purple mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                E-mail *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-petmimos-pink/30 rounded-lg focus:ring-2 focus:ring-petmimos-pink focus:border-transparent"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-petmimos-purple mb-2">
                <Phone className="w-4 h-4 inline mr-2" />
                Telefone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-petmimos-pink/30 rounded-lg focus:ring-2 focus:ring-petmimos-pink focus:border-transparent"
                placeholder="(11) 99999-9999"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-petmimos-purple mb-2">
                🐾 Nome do Pet *
              </label>
              <input
                type="text"
                name="petName"
                value={formData.petName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-petmimos-pink/30 rounded-lg focus:ring-2 focus:ring-petmimos-pink focus:border-transparent"
                placeholder="Nome do seu pet"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-petmimos-purple mb-2">
                Serviço Desejado *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-petmimos-pink/30 rounded-lg focus:ring-2 focus:ring-petmimos-pink focus:border-transparent"
              >
                <option value="">Selecione um serviço</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-petmimos-purple mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Data *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-petmimos-pink/30 rounded-lg focus:ring-2 focus:ring-petmimos-pink focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-petmimos-purple mb-2">
                <Clock className="w-4 h-4 inline mr-2" />
                Horário *
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-petmimos-pink/30 rounded-lg focus:ring-2 focus:ring-petmimos-pink focus:border-transparent"
              >
                <option value="">Selecione um horário</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time} className={formData.time === time ? "bg-petmimos-pink text-white" : ""}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-petmimos-purple mb-2">
              Observações
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 border border-petmimos-pink/30 rounded-lg focus:ring-2 focus:ring-petmimos-pink focus:border-transparent"
              placeholder="Alguma informação adicional sobre seu pet ou preferências..."
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-petmimos-pink text-petmimos-pink hover:bg-petmimos-pink hover:text-white"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 btn-primary"
            >
              Confirmar Agendamento
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
