export default function Contacts() {
  return (
    <div id="contacts" className="bg-white px-6 py-20 border-t border-neutral-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-3">Get in Touch</h2>
        <p className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12">Contacts</p>
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
          <div>
            <p className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Phone / WhatsApp / Telegram</p>
            <a
              href="https://wa.me/79529934402"
              className="text-2xl font-semibold text-neutral-900 hover:text-neutral-500 transition-colors duration-300"
            >
              +7 952 993 4402
            </a>
            <p className="text-neutral-500 text-sm mt-2">Mr. Evgeny Kostin</p>
          </div>
          <div>
            <p className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Email</p>
            <a
              href="mailto:costin.evgen@yandex.ru"
              className="text-2xl font-semibold text-neutral-900 hover:text-neutral-500 transition-colors duration-300"
            >
              costin.evgen@yandex.ru
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
