import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Trophy, Users, Zap, MapPin, Mail, Instagram, Calendar, Flame } from "lucide-react";
import { useState } from "react";

/**
 * Balanced Design: Clean + Sophisticated + Impactful
 * - Background: White (#FFFFFF) - Clean, Modern
 * - Primary: Electric Blue (#0066FF) - Professional, Trustworthy
 * - Secondary: Gold (#FFD700) - Energy, Celebration, Highlight
 * - Accent: Light Blue (#F0F4FF) - Subtle, Sophisticated
 * - Elements: Gradients, elevated cards, decorative lines, sophisticated shadows
 */

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-sm leading-tight text-foreground">Atlética</span>
              <span className="font-bold text-sm text-primary leading-tight">Pitbulls</span>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <a href="#eventos" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Eventos</a>
            <a href="#esportes" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Esportes</a>
            <a href="#loja" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Loja</a>
            <a href="#contato" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-in-left">
              <div className="inline-block badge-accent px-4 py-2 rounded-full text-sm font-semibold">
                🐾 Associação Atlética Acadêmica
              </div>
              <div>
                <h1 className="text-6xl lg:text-7xl font-black mb-4 text-foreground leading-tight">
                  Pitbulls<br />
                  <span className="text-gradient">UFBA</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed font-medium">
                  Força, coragem e lealdade. Somos a atlética da Escola de Administração da UFBA, representando os cursos de Administração, Secretariado Executivo e Administração Pública e Gestão Social.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-primary hover:bg-primary/90 text-white gap-2 h-12 px-8 font-semibold button-glow shadow-lg">
                  Conheça Nossos Eventos <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-slide-in-right">
              <div className="hero-overlay rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/10">
                <img
                  src="/images/hero-pitbull.jpg"
                  alt="Pitbull em movimento"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-blue-600 rounded-full opacity-10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-card to-muted border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Seguidores", value: "1.5K", icon: Users },
              { label: "Posts", value: "310+", icon: Zap },
              { label: "Eventos/Ano", value: "20+", icon: Calendar },
              { label: "Comunidade", value: "Ativa", icon: Trophy },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="icon-box mx-auto mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="stat-number">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eventos Section */}
      <section id="eventos" className="py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-black mb-4 text-foreground">
              <span className="accent-line">Nossos Eventos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              Celebramos a comunidade acadêmica com eventos memoráveis que reúnem energia, diversão e espírito de equipe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pit House",
                description: "Nossa festa principal com open bar, DJ e muita celebração",
                image: "/images/event-pit-house.jpg",
                icon: Flame,
              },
              {
                title: "Trote",
                description: "Calourada com atividades, integração e diversão para os novos membros",
                image: "/images/community-team.jpg",
                icon: Users,
              },
              {
                title: "Pitbulls 2000",
                description: "Festa temática que resgata o melhor da década com muita energia",
                image: "/images/event-pit-house.jpg",
                icon: Zap,
              },
            ].map((event, i) => (
              <Card
                key={i}
                className="card-elevated overflow-hidden border-0 cursor-pointer"
                onMouseEnter={() => setHoveredCard(`event-${i}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="icon-box-accent">
                      <event.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 font-medium">{event.description}</p>
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-muted font-semibold">
                    Saiba Mais
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Esportes Section */}
      <section id="esportes" className="py-24 bg-gradient-to-br from-card to-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-black mb-4 text-foreground">
                  <span className="accent-line">Competição e Espírito</span>
                </h2>
                <p className="text-lg text-muted-foreground font-medium">
                  Participamos ativamente de competições esportivas, representando a EAUFBA com dedicação e paixão.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { sport: "Futsal", description: "Liga de Futsal Lauro de Freitas (LFLF) e JUFBA" },
                  { sport: "Jiu Jitsu", description: "Treinos e competições de Jiu Jitsu" },
                  { sport: "Outros Esportes", description: "Participação em diversos eventos esportivos" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:shadow-md transition-all">
                    <div className="icon-box flex-shrink-0">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.sport}</h4>
                      <p className="text-sm text-muted-foreground font-medium">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="hero-overlay rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/10">
                <img
                  src="/images/sports-futsal.jpg"
                  alt="Futsal Pitbulls"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loja Section */}
      <section id="loja" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 text-foreground">
              <span className="accent-line">Pitshop - Nossa Loja</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              Adquira produtos exclusivos da Atlética Pitbulls com o branding oficial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
            <Card className="card-elevated border-0 p-8 text-center">
              <div className="text-6xl mb-4">👕</div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Camisetas</h3>
              <p className="text-muted-foreground text-sm mb-6 font-medium">
                Camisetas oficiais com design exclusivo
              </p>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                Ver Produtos
              </Button>
            </Card>

            <Card className="card-elevated border-0 p-8 text-center">
              <div className="text-6xl mb-4">🎽</div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Acessórios</h3>
              <p className="text-muted-foreground text-sm mb-6 font-medium">
                Bonés, mochilas e outros itens
              </p>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                Ver Produtos
              </Button>
            </Card>
          </div>

          <div className="text-center">
            <a href="https://www.instagram.com/shop.pitbulls/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-muted font-semibold">
                <Instagram className="w-4 h-4 mr-2" />
                Visite @shop.pitbulls
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-24 bg-gradient-to-br from-card to-muted">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-black mb-4 text-foreground">
              <span className="accent-line">Entre em Contato</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium">
              Quer conhecer mais sobre a Atlética Pitbulls? Nos encontre nas redes sociais ou envie uma mensagem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <a
              href="https://www.instagram.com/atleticapitbulls/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-elevated p-6 rounded-lg text-center border-0 cursor-pointer"
            >
              <div className="icon-box mx-auto mb-4">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="font-bold text-foreground block mb-2">Instagram</span>
              <span className="text-sm text-muted-foreground font-medium">@atleticapitbulls</span>
            </a>

            <div className="card-elevated p-6 rounded-lg text-center border-0">
              <div className="icon-box mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="font-bold text-foreground block mb-2">Localização</span>
              <span className="text-sm text-muted-foreground font-medium">UFBA - Salvador, BA</span>
            </div>

            <div className="card-elevated p-6 rounded-lg text-center border-0">
              <div className="icon-box mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="font-bold text-foreground block mb-2">Email</span>
              <span className="text-sm text-muted-foreground font-medium">atleticapitbulls@ufba.br</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-foreground">Atlética Pitbulls UFBA</span>
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              © 2026 Atlética Pitbulls. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/atleticapitbulls/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-primary hover:text-primary/80 transition-colors" />
              </a>
              <a href="https://www.instagram.com/shop.pitbulls/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-primary hover:text-primary/80 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
