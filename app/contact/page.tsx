'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Calendar,
  Layers,
  Sparkles,
  Building,
  User,
  Database,
  Trash2
} from 'lucide-react';

export default function Contact() {
  const [selectedBranch, setSelectedBranch] = useState<'tashkent' | 'samarkand'>('tashkent');
  
  // Appointment form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('11:00');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Stored Leads preview list state for the developer/client to test!
  const [testLeads, setTestLeads] = useState<any[]>([]);

  // Load leads from localStorage once on client mount with a deferred microtask to satisfy rules
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const leads = JSON.parse(localStorage.getItem('evro_leads') || '[]');
      const timer = setTimeout(() => {
        setTestLeads(leads);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const branches = {
    tashkent: {
      title: 'Главный офис продаж (Ташкент)',
      address: 'Узбекистан, г. Ташкент, Мирабадский район, ул. Амира Темура, д. 1',
      phones: ['+998 71 200-00-00', '+998 71 200-11-11'],
      email: 'tashkent@evroplaza.uz',
      hours: 'Пн – Сб: 09:00 – 19:00, Вс: Выходной',
      mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80',
    },
    samarkand: {
      title: 'Региональный офис (Самарканд)',
      address: 'Узбекистан, г. Самарканд, набережная реки Сиаб, ул. Дагбитская, д. 24',
      phones: ['+998 66 300-00-00', '+998 71 200-00-00'],
      email: 'samarkand@evroplaza.uz',
      hours: 'Пн – Сб: 09:00 – 18:00, Вс: Выходной',
      mapImage: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&q=80',
    }
  };

  const handleBookMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date) return;
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);

      const targetBranch = branches[selectedBranch].title;
      const leads = JSON.parse(localStorage.getItem('evro_leads') || '[]');
      const newLead = {
        id: 'L-' + Date.now(),
        name,
        phone,
        email: 'appointment@sales.uz',
        project: `Визит в Офис: ${targetBranch} (Дата: ${date}, Время: ${time})`,
        date: new Date().toLocaleDateString('ru-RU'),
        status: 'Назначен визит'
      };
      leads.push(newLead);
      localStorage.setItem('evro_leads', JSON.stringify(leads));
      setTestLeads(leads);
    }, 1000);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setDate('');
    setNotes('');
    setSuccess(false);
  };

  const handleClearLeads = () => {
    if (confirm('Очистить все тестовые лиды из памяти?')) {
      localStorage.removeItem('evro_leads');
      setTestLeads([]);
    }
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* ================= HEADER SECTION ================= */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-8">
        <span className="text-xs uppercase tracking-widest text-[#C4A47C] font-mono">Контакты и Офисы / EVRO PLAZA</span>
        <h1 className="text-3xl sm:text-5xl font-bold font-heading uppercase text-white tracking-tight">Свяжитесь с Нами</h1>
        <p className="text-gray-400 text-sm font-light leading-relaxed">
          Запишитесь на визит в наши демонстрационные залы, закажите буклет с планировками или напрямую свяжитесь с дежурным руководителем отдела продаж.
        </p>
      </section>

      {/* ================= MAIN INTERACTIVE BODY (OFFICES VS MAP) ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Dynamic Branch selector detail column */}
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-widest text-[#C4A47C] font-semibold">Выберите филиал</h3>
            
            {/* Quick switcher buttons */}
            <div className="flex p-1 bg-white/5 border border-white/5 rounded-sm">
              <button
                onClick={() => setSelectedBranch('tashkent')}
                className={`flex-1 text-center py-3 text-xs uppercase tracking-widest font-semibold transition-all focus:outline-none cursor-pointer ${
                  selectedBranch === 'tashkent' ? 'bg-[#C4A47C] text-black rounded-sm' : 'text-gray-400 hover:text-white'
                }`}
              >
                Ташкент
              </button>
              <button
                onClick={() => setSelectedBranch('samarkand')}
                className={`flex-1 text-center py-3 text-xs uppercase tracking-widest font-semibold transition-all focus:outline-none cursor-pointer ${
                  selectedBranch === 'samarkand' ? 'bg-[#C4A47C] text-black rounded-sm' : 'text-gray-400 hover:text-white'
                }`}
              >
                Самарканд
              </button>
            </div>

            {/* Selected Branch detail lines list */}
            <motion.div
              key={selectedBranch}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 bg-white/[0.01] border border-white/5 p-6 sm:p-8 rounded-sm"
            >
              <h4 className="text-white text-base sm:text-lg font-bold font-heading uppercase tracking-tight">
                {branches[selectedBranch].title}
              </h4>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-[#C4A47C] mt-0.5 shrink-0" />
                  <span>{branches[selectedBranch].address}</span>
                </div>

                <div className="flex items-start space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-[#C4A47C] mt-0.5 shrink-0" />
                  <div className="space-y-1 font-mono">
                    {branches[selectedBranch].phones.map((phone, pidx) => (
                      <a key={pidx} href={`tel:${phone.replace(/\s+/g, '')}`} className="block hover:text-[#C4A47C] transition-colors">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-[#C4A47C] mt-0.5 shrink-0" />
                  <a href={`mailto:${branches[selectedBranch].email}`} className="hover:text-[#C4A47C] transition-colors">
                    {branches[selectedBranch].email}
                  </a>
                </div>

                <div className="flex items-start space-x-3 text-gray-300">
                  <Clock className="w-5 h-5 text-[#C4A47C] mt-0.5 shrink-0" />
                  <span>{branches[selectedBranch].hours}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick legal/corporate parameters card footer */}
          <div className="bg-white/5 border border-white/5 p-5 sm:p-6 rounded-sm text-xs space-y-2">
            <span className="text-[#C4A47C] font-mono font-bold block uppercase text-[10px]">Важное примечание:</span>
            <p className="text-gray-400 font-light leading-relaxed">
              Для посещения строительных участков в целях безопасности обязательно требуется закрытая обувь. Посещения согласуются за 24 часа. Снаряжение (каски, светоотражающие жилеты) выдаются в Офисе.
            </p>
          </div>
        </div>

        {/* Dynamic Architectural Location map mockup */}
        <div className="lg:col-span-7 relative min-h-[350px] rounded-sm overflow-hidden border border-white/5 shadow-2xl flex flex-col justify-end">
          <Image
            src={branches[selectedBranch].mapImage}
            alt="Office Location Abstract Art style map"
            fill
            className="object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          {/* Aesthetic map overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />
          
          <div className="absolute inset-4 border border-dashed border-[#C4A47C]/20 rounded-sm pointer-events-none" />

          {/* Custom vector representation mock pin */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-black border border-[#C4A47C] text-[#C4A47C] rounded-full flex items-center justify-center shadow-2xl mx-auto animate-bounce">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="bg-black/95 border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-semibold text-white uppercase tracking-wider shadow">
                {selectedBranch === 'tashkent' ? 'Мирабадский р-н, у метро Космонавтов' : 'Набережная р. Сиаб'}
              </span>
            </div>
          </div>

          <div className="relative p-6 sm:p-8 z-10 m-4 bg-black/90 border border-white/10 rounded-sm max-w-sm">
            <p className="text-[#C4A47C] font-mono text-xs uppercase tracking-wider font-semibold mb-1">Как добраться</p>
            <p className="text-gray-300 text-xs font-light leading-relaxed">
              Наш головной офис в Ташкенте имеет удобный въезд со стороны проспекта Шарафа Рашидова, предусмотрен закрытый подземный гостевой паркинг для клиентов.
            </p>
          </div>
        </div>
      </section>

      {/* ================= APPOINTMENT SCHEDULER FORM ================= */}
      <section id="appointment-form-block" className="max-w-4xl mx-auto">
        <div className="bg-[#1a1a1d] border border-white/10 rounded-sm p-8 sm:p-12 shadow-2xl relative">
          
          <div className="text-center space-y-4 mb-10">
            <span className="text-[#C4A47C] text-xs font-mono uppercase tracking-widest bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              Запись на аудит и экскурсию
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white uppercase tracking-tight">
              Забронировать Презентацию
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm font-light max-w-md mx-auto leading-relaxed">
              Выберите желаемую дату и время, чтобы закрепить за собой персонального эксперта, проработать индивидуальный финансовый расчет и уехать на экскурсию.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!success ? (
              <motion.form
                key="booking-meeting"
                onSubmit={handleBookMeeting}
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullname" className="text-xs uppercase tracking-wider text-gray-400 font-mono">Ваше имя</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                      <input
                        id="fullname"
                        type="text"
                        required
                        placeholder="Александр или Санжар"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-black/60 border border-white/10 rounded-sm pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#C4A47C] focus:ring-1 focus:ring-[#C4A47C]/45 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label htmlFor="phonenumber" className="text-xs uppercase tracking-wider text-gray-400 font-mono">Номер телефона</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                      <input
                        id="phonenumber"
                        type="tel"
                        required
                        placeholder="+998 (__) ___-__-__"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-black/60 border border-white/10 rounded-sm pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#C4A47C] focus:ring-1 focus:ring-[#C4A47C]/45 transition-all font-sans font-mono"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date selection field */}
                  <div className="space-y-1.5">
                    <label htmlFor="select-date" className="text-xs uppercase tracking-wider text-gray-400 font-mono">Желаемая дата встречи</label>
                    <div className="relative">
                      <input
                        id="select-date"
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-black/60 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C4A47C] transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Hour slots selection dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="select-time" className="text-xs uppercase tracking-wider text-gray-400 font-mono">Время приема</label>
                    <select
                      id="select-time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-black/60 border border-white/10 rounded-sm px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#C4A47C] transition-all cursor-pointer font-sans"
                    >
                      <option value="10:00">10:00 (Начало приема)</option>
                      <option value="11:30">11:30</option>
                      <option value="14:00">14:00 (После обеда)</option>
                      <option value="16:00">16:00</option>
                      <option value="17:30">17:30 (Финальный слот)</option>
                    </select>
                  </div>
                </div>

                {/* Additional custom message note feedback */}
                <div className="space-y-1.5">
                  <label htmlFor="notes-field" className="text-xs uppercase tracking-wider text-gray-400 font-mono">Пожелания / Уточнения</label>
                  <textarea
                    id="notes-field"
                    rows={3}
                    placeholder="Например: Интересуют квартиры только после 10 этажа с видом во внутренний двор..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#C4A47C] focus:ring-1 focus:ring-[#C4A47C]/45 transition-all font-sans"
                  />
                </div>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#C4A47C] text-black font-semibold uppercase py-4 text-xs tracking-wider hover:bg-neutral-100 transition-colors rounded-sm focus:outline-none cursor-pointer"
                  >
                    {submitting ? 'Резервирование в календаре продаж..' : 'Подтвердить визит'}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-black/40 border border-green-900/40 p-8 rounded text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-green-950/40 border border-green-500/40 flex items-center justify-center mx-auto text-green-400">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-heading text-white uppercase tracking-tight">Запись Подтверждена!</h3>
                <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed max-w-sm mx-auto">
                  Благодарим за Ваш выбор, <strong className="text-white">{name}</strong>. Мы зарезервировали время на <strong className="text-[#C4A47C] font-semibold">{date} в {time}</strong>. Элитный консультант созвонится с вами по номеру <strong className="text-white font-mono">{phone}</strong> для окончательного подтверждения и подготовки пропуска.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="text-xs font-mono text-gray-400 hover:text-white transition-colors underline bg-transparent border-none cursor-pointer"
                  >
                    Записаться еще раз
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ================= HIGHLY DETAILED REAL-TIME LEADS TRACKER (PROTOTYPE PANEL DEV TOOL) ================= */}
      <section className="bg-white/[0.01] border border-white/5 rounded-sm p-6 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 pb-4 gap-4">
          <div className="flex items-center space-x-3 text-white">
            <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded">
              <Database className="w-5 h-5 text-[#C4A47C]" />
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider font-heading">Система отслеживания лидов / CRM (Инструмент тестирования)</h4>
              <p className="text-gray-500 text-[10px] sm:text-xs">
                Этот раздел собирает лиды из LocalStorage, полученные при тестировании форм. Помогает проверить корректную запись лидов.
              </p>
            </div>
          </div>
          {testLeads.length > 0 && (
            <button
              onClick={handleClearLeads}
              className="text-red-400 text-xs font-mono hover:text-red-300 transition-colors flex items-center space-x-1 border border-red-900/30 px-3 py-1.5 rounded-sm bg-red-950/10 hover:bg-red-950/25 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Очистить лог лидов</span>
            </button>
          )}
        </div>

        {/* List render logs */}
        {testLeads.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-xs text-left text-gray-400">
              <thead className="bg-[#121214] uppercase text-[10px] tracking-wider text-gray-500 font-mono border-b border-white/5">
                <tr>
                  <th className="py-3 px-4">ID лида</th>
                  <th className="py-3 px-4">Имя Клиента</th>
                  <th className="py-3 px-4">Телефон</th>
                  <th className="py-3 px-4">Связанный Объект / Визит</th>
                  <th className="py-3 px-4">Дата запроса</th>
                  <th className="py-3 px-4">Статус CRM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {testLeads.map((lead, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.01]">
                    <td className="py-3.5 px-4 font-mono text-[10px] text-gray-500">{lead.id || 'N/A'}</td>
                    <td className="py-3.5 px-4 font-semibold text-gray-200">{lead.name}</td>
                    <td className="py-3.5 px-4 font-mono text-gray-300">{lead.phone}</td>
                    <td className="py-3.5 px-4 text-gray-300 italic">{lead.project || 'Общие контакты'}</td>
                    <td className="py-3.5 px-4 font-mono text-[10px]">{lead.date || new Date().toLocaleDateString('ru-RU')}</td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-medium ${
                        lead.status?.includes('визит') ? 'bg-indigo-950/40 text-indigo-400 border border-indigo-500/20' : 'bg-green-950/40 text-green-400 border border-green-500/10'
                      }`}>
                        {lead.status || 'Новый'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-10 bg-black/20 rounded border border-dashed border-white/5">
            <span className="text-gray-600 font-mono text-xs block">Список тестовых запросов пуст. Заполните любую форму на сайте, чтобы увидеть лог.</span>
          </div>
        )}
      </section>

    </div>
  );
}
