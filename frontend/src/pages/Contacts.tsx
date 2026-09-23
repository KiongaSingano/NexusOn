import { useState } from "react";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  CheckCircle2,
  X,
} from "lucide-react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ChatAssistant from "../components/chatbot/ChatAssistant";

import "leaflet/dist/leaflet.css";
import locationImage from "../assets/nexuson-local.jpg";

const locations = [
  {
    city: "Cabinda",
    address: "1º de Maio, Cabinda",
    phone: "+244 946 614 043",
    lat: -5.556,
    lng: 12.191,
  },
  {
    city: "Huambo",
    address: "Fátima Urbano, Largo Wassanjuca, Huambo",
    phone: "+244 946 614 043",
    lat: -12.776,
    lng: 15.739,
  },
];

const contacts = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+244 946 614 043",
    href: "https://wa.me/244946614043",
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "+244 946 614 043",
    href: "tel:+244946614043",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "apoio.nexuson@outlook.com",
    href: "mailto:apoio.nexuson@outlook.com",
  },
];

const markerIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      width:38px;
      height:38px;
      border-radius:50% 50% 50% 0;
      background:#2563eb;
      border:4px solid white;
      box-shadow:0 5px 18px rgba(15,23,42,.28);
      transform:rotate(-45deg);
      display:flex;
      align-items:center;
      justify-content:center;
    ">
      <div style="
        width:10px;
        height:10px;
        border-radius:50%;
        background:white;
      "></div>
    </div>
  `,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
});

export default function Contacts() {
  const [selected, setSelected] = useState<
    (typeof locations)[number] | null
  >(null);

  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-blue-200/50 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-100/70 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 pb-14 text-center sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Contactos
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Fala
              <span className="text-blue-600"> connosco.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Tens uma dúvida, uma ideia ou queres começar um
              projeto? Estamos disponíveis para conversar.
            </p>
          </div>
        </section>

        {/* CONTACTOS + FORM */}
        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-3xl bg-[#071A33] p-6 text-white shadow-xl sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                Encontra-nos
              </p>

              <h2 className="mt-3 text-2xl font-extrabold">
                Os nossos contactos
              </h2>

              <div className="mt-8 space-y-5">
                {contacts.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target={
                        item.title === "WhatsApp"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.title === "WhatsApp"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                        <Icon size={18} />
                      </div>

                      <div>
                        <p className="text-xs text-slate-400">
                          {item.title}
                        </p>

                        <p className="mt-1 text-sm font-semibold">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Localizações
                </p>

                <div className="mt-4 space-y-2">
                  {locations.map((location) => (
                    <button
                      key={location.city}
                      type="button"
                      onClick={() => setSelected(location)}
                      className="flex w-full gap-3 rounded-xl p-2 text-left text-sm transition hover:bg-white/10"
                    >
                      <MapPin
                        size={18}
                        className="mt-0.5 shrink-0 text-blue-300"
                      />

                      <span>
                        <strong>{location.city}</strong>
                        <br />
                        {location.address}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* FORMULÁRIO */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Enviar mensagem
              </p>

              <h2 className="mt-3 text-2xl font-extrabold text-slate-950">
                Como podemos ajudar?
              </h2>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <input
                  required
                  placeholder="Nome"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />

                <input
                  required
                  type="email"
                  placeholder="E-mail"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />

                <input
                  required
                  placeholder="Assunto"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 sm:col-span-2"
                />

                <textarea
                  required
                  rows={6}
                  placeholder="Escreve a tua mensagem..."
                  className="resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 sm:col-span-2"
                />

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white hover:bg-blue-700 sm:col-span-2"
                >
                  Enviar mensagem
                  <Send size={17} />
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* MAPA */}
        <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 lg:px-8">
          <div className="mb-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Onde estamos
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">
              As nossas localizações
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <MapContainer
              center={[-8.8, 13.5]}
              zoom={5}
              scrollWheelZoom={false}
              className="h-[380px] w-full sm:h-[450px]"
            >
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {locations.map((location) => (
                <Marker
                  key={location.city}
                  position={[location.lat, location.lng]}
                  icon={markerIcon}
                  eventHandlers={{
                    click: () => setSelected(location),
                  }}
                />
              ))}
            </MapContainer>
          </div>

          <p className="mt-3 text-center text-xs text-slate-400">
            Clica num marcador para consultar os detalhes da localização.
          </p>
        </section>
      </main>

      <Footer />
      <ChatAssistant />

      {/* MODAL DA LOCALIZAÇÃO */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Fechar"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-500 shadow-sm backdrop-blur hover:text-slate-900"
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-2">
              {/* IMAGEM */}
              <div className="h-56 md:h-full">
                <img
                  src={locationImage}
                  alt={`NexusOn ${selected.city}`}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* DETALHES */}
              <div className="p-6 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <MapPin size={22} />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  NexusOn
                </p>

                <h2 className="mt-2 text-2xl font-extrabold text-slate-950">
                  {selected.city}
                </h2>

                <div className="mt-6 space-y-4 text-sm text-slate-600">
                  <div className="flex gap-3">
                    <MapPin
                      size={18}
                      className="shrink-0 text-blue-600"
                    />
                    <span>{selected.address}</span>
                  </div>

                  <div className="flex gap-3">
                    <Phone
                      size={18}
                      className="shrink-0 text-blue-600"
                    />
                    <span>{selected.phone}</span>
                  </div>

                  <div className="flex gap-3">
                    <MessageCircle
                      size={18}
                      className="shrink-0 text-blue-600"
                    />
                    <span>Atendimento por WhatsApp</span>
                  </div>
                </div>

                <div className="mt-7 rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold text-slate-400">
                    Atendimento
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-700">
                    Fala connosco para saber mais sobre os
                    nossos serviços e projetos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE ENVIO */}
      {sent && (
        <div
          onClick={() => setSent(false)}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-slate-950/50 p-5 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-3xl bg-white p-7 text-center shadow-2xl"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={28} />
            </div>

            <h2 className="mt-5 text-xl font-extrabold text-slate-950">
              Mensagem preparada
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              O formulário está pronto para ser ligado ao
              sistema de mensagens do NexusOn.
            </p>

            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}