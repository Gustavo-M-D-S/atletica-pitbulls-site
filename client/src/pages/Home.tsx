import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Trophy, Users, Zap, MapPin, Phone, Mail, Instagram } from "lucide-react";
import { useState } from "react";

/**
 * Energy & Movement Design System
 * - Primary: Electric Blue (#0066FF) - Power, Technology, Confidence
 * - Secondary: Gold (#FFD700) - Energy, Celebration, Highlight
 * - Background: Deep Black (#0A0E27) - Sophistication, Contrast
 * - Animations: Diagonal cuts, dynamic transitions, parallax effects
 */

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center">
              <span className="text-background font-bold text-lg">P</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">Atlética Pitbulls</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#eventos" className="text-sm hover:text-accent transition-colors">Eventos</a>
            <a href="#esportes" className="text-sm hover:text-accent transition-colors">Esportes</a>
            <a href="#loja" className="text-sm hover:text-accent transition-colors">Loja</a>
            <a href="#contato" className="text-sm hover:text-accent transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-in-left">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary rounded-full">
                <span className="text-primary text-sm font-semibold">🐾 Associação Atlética Acadêmica</span>
              </div>
              <h1 className="display-title mb-4 text-white">
                Pitbulls<br />
                <span className="gradient-accent-text">UFBA</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Força, coragem e lealdade. Somos a atlética da Escola de Administração da UFBA, representando Administração, Secretariado, Administração Pública e APGS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
                  Conheça Nossos Eventos <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  Sócio-Torcedor
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-slide-in-right">
              <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl">
                <img
                  src="/images/hero-pitbull.jpg"
                  alt="Pitbull em movimento"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50 border-t border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Seguidores", value: "1.5K", icon: Users },
              { label: "Posts", value: "310+", icon: Zap },
              { label: "Eventos/Ano", value: "20+", icon: Trophy },
              { label: "Comunidade", value: "Ativa", icon: Users },
            ].map((stat, i) => (
              <div key={i} className="text-center animate-slide-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-accent" />
                <div className="text-2xl font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eventos Section */}
      <section id="eventos" className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="display-subtitle mb-4">Nossos Eventos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Celebramos a comunidade acadêmica com eventos memoráveis que reúnem energia, diversão e espírito de equipe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Pit House",
                description: "Nossa festa principal com open bar, DJ e muita celebração",
                image: "/images/event-pit-house.jpg",
                color: "from-primary to-accent",
              },
              {
                title: "Trote",
                description: "Calourada com atividades, integração e diversão para os novos membros",
                image: "/images/community-team.jpg",
                color: "from-accent to-primary",
              },
              {
                title: "Pitbulls 2000",
                description: "Festa temática que resgata o melhor da década com muita energia",
                image: "/images/event-pit-house.jpg",
                color: "from-primary via-accent to-primary",
              },
            ].map((event, i) => (
              <Card
                key={i}
                className="overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setHoveredCard(`event-${i}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-48 overflow-hidden bg-card">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-accent">{event.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                  <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent/10">
                    Saiba Mais
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Esportes Section */}
      <section id="esportes" className="py-20 bg-card/30 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="display-subtitle mb-4">Competição e Espírito</h2>
              <p className="text-muted-foreground mb-6">
                Participamos ativamente de competições esportivas, representando a EAUFBA com dedicação e paixão.
              </p>
              <div className="space-y-4">
                {[
                  { sport: "Futsal", description: "Liga de Futsal Lauro de Freitas (LFLF) e JUFBA" },
                  { sport: "Jiu Jitsu", description: "Treinos e competições de Jiu Jitsu" },
                  { sport: "Outros Esportes", description: "Participação em diversos eventos esportivos" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.sport}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="rounded-2xl overflow-hidden border-2 border-primary/30">
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
      <section id="loja" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="display-subtitle mb-4">Pitshop - Nossa Loja</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Adquira produtos exclusivos da Atlética Pitbulls com o branding oficial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="border-border/50 hover:border-accent/50 transition-all duration-300 p-6 text-center">
              <div className="text-4xl mb-4">👕</div>
              <h3 className="text-xl font-bold mb-2">Camisetas</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Camisetas oficiais com design exclusivo
              </p>
              <Button size="sm" className="bg-accent text-background hover:bg-accent/90">
                Ver Produtos
              </Button>
            </Card>

            <Card className="border-border/50 hover:border-accent/50 transition-all duration-300 p-6 text-center">
              <div className="text-4xl mb-4">🎽</div>
              <h3 className="text-xl font-bold mb-2">Acessórios</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Bonés, mochilas e outros itens
              </p>
              <Button size="sm" className="bg-accent text-background hover:bg-accent/90">
                Ver Produtos
              </Button>
            </Card>
          </div>

          <div className="text-center mt-8">
            <a href="https://www.instagram.com/shop.pitbulls/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                <Instagram className="w-4 h-4 mr-2" />
                Visite @shop.pitbulls
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-card/30 border-t border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="display-subtitle mb-4">Entre em Contato</h2>
            <p className="text-muted-foreground">
              Quer conhecer mais sobre a Atlética Pitbulls? Nos encontre nas redes sociais ou envie uma mensagem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <a
              href="https://www.instagram.com/atleticapitbulls/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300"
            >
              <Instagram className="w-8 h-8 text-accent" />
              <span className="font-semibold">Instagram</span>
              <span className="text-sm text-muted-foreground">@atleticapitbulls</span>
            </a>

            <div className="flex flex-col items-center gap-3 p-6 rounded-lg border border-border">
              <MapPin className="w-8 h-8 text-accent" />
              <span className="font-semibold">Localização</span>
              <span className="text-sm text-muted-foreground">UFBA - Salvador, BA</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-lg border border-border">
              <Mail className="w-8 h-8 text-accent" />
              <span className="font-semibold">Email</span>
              <span className="text-sm text-muted-foreground">atleticapitbulls@ufba.br</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card/50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center">
                <span className="text-background font-bold text-sm">P</span>
              </div>
              <span className="font-bold">Atlética Pitbulls UFBA</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 Atlética Pitbulls. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/atleticapitbulls/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-accent hover:text-primary transition-colors" />
              </a>
              <a href="https://www.instagram.com/shop.pitbulls/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-accent hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
