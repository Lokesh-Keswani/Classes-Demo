import { ArrowRight, Award, BookOpen, Users, Star, CheckCircle, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TypingAnimation from "@/components/TypingAnimation";
import AnimatedCard from "@/components/AnimatedCard";
import CountingAnimation from "@/components/CountingAnimation";
import { useAchievements } from "@/hooks/useAchievements";

const Index = () => {
  // Fetch achievements data
  const { data: achievements, isLoading: achievementsLoading } = useAchievements();
  
  // Filter success stories from achievements
  const achievementsArray = Array.isArray(achievements) ? achievements : [];
  const successStories = achievementsArray
    .filter(achievement => achievement.type === 'Success Stories' && achievement.isActive !== false)
    .slice(0, 3); // Show only top 3 for home page

  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Expert Faculty",
      description: "Learn from highly qualified and experienced teachers dedicated to your success."
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Proven Results",
      description: "Track record of excellent results with students achieving top ranks consistently."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Small Batches",
      description: "Personalized attention with limited students per batch for better learning."
    }
  ];

  const stats = [
    { number: "500+", label: "Students Taught" },
    { number: "95%", label: "Success Rate" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Top Ranks" }
  ];

  const subjects = [
    "Mathematics", "Physics", "Chemistry", "Biology", "English", "Hindi"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="animate-fade-in">
            <img 
              src="/lovable-uploads/2e11a570-c005-4626-abba-c75753c2477c.png" 
              alt="St. Mary's Classes Logo" 
              className="h-24 w-24 mx-auto mb-8 animate-float"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <TypingAnimation 
                text="Welcome to St. Mary's Classes" 
                speed={80} 
                delay={300}
                className="text-white"
              />
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-tight whitespace-nowrap md:whitespace-normal">
              Shaping Bright Futures Through Excellence in Education
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              Join thousands of successful students who achieved their dreams with our expert guidance, 
              personalized teaching methods, and proven track record of academic excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button size="lg" className="btn-hero">
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" className="bg-card text-primary hover:bg-card/90">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCard delay={0} animation="slideUp">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <CountingAnimation end={500} suffix="+" duration={1500} />
                </div>
                <div className="text-muted-foreground">Students Taught</div>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={200} animation="scale">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <CountingAnimation end={95} suffix="%" duration={1800} />
                </div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={400} animation="slideUp">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <CountingAnimation end={15} suffix="+" duration={1200} />
                </div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={600} animation="scale">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <CountingAnimation end={50} suffix="+" duration={1600} />
                </div>
                <div className="text-muted-foreground">Top Ranks</div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <TypingAnimation 
                text="Why Choose St. Mary's Classes?" 
                speed={60} 
                delay={200}
              />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide the perfect environment for academic growth with our unique teaching methodology 
              and dedicated support system.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard delay={0} animation="slideLeft">
              <Card className="card-academic">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{features[0].icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{features[0].title}</h3>
                  <p className="text-muted-foreground">{features[0].description}</p>
                </CardContent>
              </Card>
            </AnimatedCard>
            <AnimatedCard delay={200} animation="scale">
              <Card className="card-academic">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{features[1].icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{features[1].title}</h3>
                  <p className="text-muted-foreground">{features[1].description}</p>
                </CardContent>
              </Card>
            </AnimatedCard>
            <AnimatedCard delay={400} animation="slideRight">
              <Card className="card-academic">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{features[2].icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{features[2].title}</h3>
                  <p className="text-muted-foreground">{features[2].description}</p>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Subjects Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <TypingAnimation 
                text="Subjects We Teach" 
                speed={70} 
                delay={200}
              />
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive coverage of all major subjects with expert guidance
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {subjects.map((subject, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 bg-card rounded-lg shadow-soft">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="font-medium">{subject}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/courses">
              <Button size="lg" className="btn-hero">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <TypingAnimation 
                text="Our Success Stories" 
                speed={70} 
                delay={400}
              />
            </h2>
            <p className="text-lg text-muted-foreground">
              Celebrating the achievements of our brilliant students
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {achievementsLoading ? (
              <div className="col-span-3 flex justify-center items-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : successStories.length > 0 ? (
              successStories.map((story, index) => {
                const animations = ['slideUp', 'scale', 'fadeIn'];
                const animationType = animations[index % animations.length] as 'slideUp' | 'scale' | 'fadeIn';
                return (
                  <AnimatedCard key={story._id || index} delay={index * 300} animation={animationType}>
                    <Card className="card-academic bg-gradient-to-br from-success/10 to-secondary/10">
                      <CardContent className="p-6 text-center">
                        <div className="flex justify-center mb-4">
                          <Star className="h-8 w-8 text-secondary fill-current" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{story.studentName}</h3>
                        {story.percentage && (
                          <p className="text-2xl font-bold text-success mb-1">{story.percentage}</p>
                        )}
                        <p className="text-muted-foreground">{story.details}</p>
                        {story.quote && (
                          <blockquote className="text-sm italic text-muted-foreground mt-3">
                            "{story.quote}"
                          </blockquote>
                        )}
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                );
              })
            ) : (
              <div className="col-span-3 text-center py-8">
                <p className="text-muted-foreground">No success stories available yet. Check back soon!</p>
              </div>
            )}
          </div>
          
          <div className="text-center">
            <Link to="/achievements">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Achievements
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-warm-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            <TypingAnimation 
              text="Ready to Start Your Journey to Success?" 
              speed={60} 
              delay={300}
              className="text-white"
            />
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join St. Mary's Classes today and unlock your true potential with our expert guidance and proven teaching methods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="gradient-outline">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;