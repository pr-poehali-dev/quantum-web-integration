export default function Footer() {
  return (
    <div
      id="contact"
      className="relative h-[500px] sm:h-[650px] lg:h-[850px] max-h-[850px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+500px)] sm:h-[calc(100vh+650px)] lg:h-[calc(100vh+850px)] -top-[100vh]">
        <div className="h-[500px] sm:h-[650px] lg:h-[850px] sticky top-[calc(100vh-500px)] sm:top-[calc(100vh-650px)] lg:top-[calc(100vh-850px)]">
          <div className="bg-neutral-900 py-6 sm:py-8 lg:py-10 px-4 sm:px-8 h-full w-full flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 lg:gap-24">
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-neutral-400 text-xs tracking-widest">Navigation</h3>
                <a href="#services" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm">
                  Services
                </a>
                <a href="#contact" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm">
                  Contact Us
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-neutral-400 text-xs tracking-widest">Contacts</h3>
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-neutral-400 text-xs uppercase tracking-wide mb-1">Phone / WhatsApp / Telegram</p>
                    <a
                      href="https://wa.me/79529934402"
                      className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm"
                    >
                      +7 952 993 4402
                    </a>
                  </div>
                  <div>
                    <p className="text-neutral-400 text-xs uppercase tracking-wide mb-1">Contact Person</p>
                    <p className="text-white text-sm">Mr. Evgeny Kostin</p>
                  </div>
                  <div>
                    <p className="text-neutral-400 text-xs uppercase tracking-wide mb-1">Email</p>
                    <a
                      href="mailto:costin.evgen@yandex.ru"
                      className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm"
                    >
                      costin.evgen@yandex.ru
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.85] text-white font-bold tracking-tight">
                  FORTIS
                </h1>
                <p className="text-neutral-500 text-xs uppercase tracking-widest mt-2">International Event Agency</p>
              </div>
              <p className="text-neutral-500 text-sm shrink-0">{new Date().getFullYear()} Fortis Company</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
