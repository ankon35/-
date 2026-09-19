import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('16:00');
  const [guests, setGuests] = useState('2');
  const [seating, setSeating] = useState('cozy-corner');
  const [notes, setNotes] = useState('');
  const [confirmedCode, setConfirmedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'AURORA-' + Math.floor(1000 + Math.random() * 9000);
    setConfirmedCode(code);
  };

  const handleReset = () => {
    setConfirmedCode(null);
    setName('');
    setPhone('');
    setDate('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-emerald-900/10 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#064e3b] text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-emerald-800/60 hover:bg-emerald-700 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>Table Booking</span>
          </div>
          <h3 className="font-serif text-2xl font-bold">Reserve at Aurora Café & Bistro</h3>
          <p className="text-xs text-emerald-100/80 mt-0.5">
            Full Market, Khulna • 11:00 AM – 11:00 PM Daily
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {confirmedCode ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#ecfdf5] text-[#059669] flex items-center justify-center mx-auto ring-8 ring-[#ecfdf5]/50">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
                  Reservation Request Received
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#064e3b]">
                  We look forward to hosting you, {name || 'Guest'}!
                </h4>
                <p className="text-xs text-[#1f3f33]/70 max-w-xs mx-auto">
                  Your table request is held under reference:
                </p>
                <div className="inline-block mt-2 px-4 py-2 rounded-xl bg-[#ecfdf5] border border-[#a7f3d0] font-mono text-lg font-bold text-[#065f46]">
                  {confirmedCode}
                </div>
              </div>

              <div className="bg-[#f8faf7] p-4 rounded-2xl border border-emerald-900/10 text-left text-xs space-y-1.5 text-[#1f3f33]/80">
                <p><strong>Party Size:</strong> {guests} {parseInt(guests) > 1 ? 'Guests' : 'Guest'}</p>
                <p><strong>Time:</strong> {time || 'Evening'} {date ? `on ${date}` : 'Today'}</p>
                <p><strong>Location:</strong> Full Market, Khulna</p>
                <p className="text-[11px] text-emerald-700 italic pt-1">
                  For immediate seat confirmation or group parties, you can also call our counter at 01303-886666.
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href={`tel:${CAFE_INFO.phone}`}
                  className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-[#059669] hover:bg-[#047857] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call {CAFE_INFO.phone}
                </a>
                <button
                  onClick={handleReset}
                  className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-[#064e3b] bg-[#ecfdf5] hover:bg-[#d1fae5] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#064e3b] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tanvir Ahmed"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl text-xs border border-emerald-900/15 focus:border-[#059669] focus:outline-none focus:ring-1 focus:ring-[#059669] bg-[#f8faf7]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#064e3b] mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 01700-000000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl text-xs border border-emerald-900/15 focus:border-[#059669] focus:outline-none focus:ring-1 focus:ring-[#059669] bg-[#f8faf7]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#064e3b] mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl text-xs border border-emerald-900/15 focus:border-[#059669] focus:outline-none bg-[#f8faf7]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#064e3b] mb-1">
                    Time Slot
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl text-xs border border-emerald-900/15 focus:border-[#059669] focus:outline-none bg-[#f8faf7]"
                  >
                    <option value="11:30">11:30 AM (Brunch)</option>
                    <option value="13:30">01:30 PM (Lunch)</option>
                    <option value="16:00">04:00 PM (Afternoon Coffee)</option>
                    <option value="18:30">06:30 PM (Evening Hangout)</option>
                    <option value="20:30">08:30 PM (Dinner & Bistro)</option>
                    <option value="21:30">09:30 PM (Late Coffee)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#064e3b] mb-1">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl text-xs border border-emerald-900/15 focus:border-[#059669] focus:outline-none bg-[#f8faf7]"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3-4 Persons</option>
                    <option value="6">5-6 Persons</option>
                    <option value="8">7-10+ (Group Party)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#064e3b] mb-1">
                  Seating Area Preference
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'cozy-corner', label: 'White Brick Reading Corner' },
                    { id: 'counter-view', label: 'Barista Counter View' },
                    { id: 'center-bistro', label: 'Central Bistro Seating' },
                    { id: 'quiet-nook', label: 'Quiet Study Table' },
                  ].map((s) => (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setSeating(s.id)}
                      className={`p-2 rounded-lg border text-left cursor-pointer transition-colors ${
                        seating === s.id
                          ? 'bg-[#ecfdf5] border-[#059669] text-[#064e3b] font-bold'
                          : 'bg-[#f8faf7] border-emerald-900/10 text-[#132a22]/70 hover:bg-emerald-50'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#064e3b] mb-1">
                  Special Notes or Occasions (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Birthday celebration, anniversary, extra quiet corner..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl text-xs border border-emerald-900/15 focus:border-[#059669] focus:outline-none bg-[#f8faf7]"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <a
                  href={`tel:${CAFE_INFO.phone}`}
                  className="text-xs text-[#059669] hover:underline flex items-center gap-1 font-medium"
                >
                  <Phone className="w-3 h-3" />
                  Or call directly
                </a>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-full text-xs font-semibold text-[#064e3b] bg-[#ecfdf5] hover:bg-[#d1fae5] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-full text-xs font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-xs transition-colors"
                  >
                    Confirm Reservation
                  </button>
                </div>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
