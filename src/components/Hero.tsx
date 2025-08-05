import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent leading-tight">
            Premium Tech
            <br />
            <span className="text-4xl md:text-6xl">Made Simple</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover cutting-edge technology and premium accessories designed for the modern lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
              Shop Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/5">
              Explore Categories
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
    </section>
  );
};

export default Hero;