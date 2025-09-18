import { Award, Heart, Target, Users, BookOpen, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TypingAnimation from "@/components/TypingAnimation";
import AnimatedCard from "@/components/AnimatedCard";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Dedication",
      description: "We are committed to each student's success with unwavering dedication and personalized attention."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from teaching methods to student outcomes."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Community",
      description: "We build a supportive learning community where students, teachers, and parents work together."
    },
    {
      icon: <Star className="h-8 w-8 text-success" />,
      title: "Innovation",
      description: "We continuously innovate our teaching methods to make learning more effective and enjoyable."
    }
  ];

  const milestones = [
    { year: "2009", event: "Founded St. Mary's Classes with a vision of quality education" },
    { year: "2012", event: "Expanded to include Science and Commerce streams" },
    { year: "2015", event: "Achieved 100% success rate in board examinations" },
    { year: "2018", event: "Introduced digital learning platforms and smart classrooms" },
    { year: "2021", event: "Successfully adapted to online learning during pandemic" },
    { year: "2024", event: "Celebrating 15 years of educational excellence" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-academic-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <TypingAnimation 
                text="About St. Mary's Classes" 
                speed={80} 
                delay={500}
                className="text-white"
              />
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              For over 15 years, we have been dedicated to providing exceptional education 
              and nurturing the potential of every student who walks through our doors.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                <TypingAnimation 
                  text="Our Story" 
                  speed={70} 
                  delay={200}
                />
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  St. Mary's Classes was founded in 2009 with a simple yet powerful vision: 
                  to provide quality education that empowers students to achieve their dreams. 
                  What started as a small coaching center with just a handful of students has 
                  grown into one of the most trusted educational institutions in the region.
                </p>
                <p>
                  Our founder, Mrs. Mary Joseph, an experienced educator with over 20 years 
                  of teaching experience, believed that every student has unique potential 
                  waiting to be unlocked. This philosophy continues to guide us today as we 
                  serve hundreds of students each year.
                </p>
                <p>
                  Over the years, we have consistently maintained our commitment to excellence, 
                  adapting to new teaching methodologies and technologies while never losing 
                  sight of our core values: dedication, integrity, and student-centered learning.
                </p>
              </div>
            </div>
            
            <AnimatedCard delay={0} animation="slideLeft">
              <div className="lg:order-first">
                <Card className="card-academic">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <img 
                        src="/lovable-uploads/2e11a570-c005-4626-abba-c75753c2477c.png" 
                        alt="St. Mary's Classes Logo" 
                        className="h-32 w-32 mx-auto mb-6"
                      />
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        <TypingAnimation 
                          text="Our Mission" 
                          speed={60} 
                          delay={400}
                        />
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        To provide exceptional education that nurtures academic excellence, 
                        character development, and lifelong learning skills in every student.
                      </p>
                      
                      <h3 className="text-2xl font-bold text-accent mb-4">
                        <TypingAnimation 
                          text="Our Vision" 
                          speed={60} 
                          delay={600}
                        />
                      </h3>
                      <p className="text-muted-foreground">
                        To be the leading educational institution that shapes confident, 
                        capable, and successful individuals ready to make a positive impact in the world.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <TypingAnimation 
                text="Our Values" 
                speed={70} 
                delay={300}
              />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape the learning environment 
              we create for our students.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const animations = ['slideUp', 'scale', 'fadeIn', 'slideUp'];
              const animationType = animations[index] as 'slideUp' | 'scale' | 'fadeIn';
              return (
                <AnimatedCard key={index} delay={index * 200} animation={animationType}>
                  <Card className="card-academic text-center">
                    <CardContent className="p-6">
                      <div className="mb-4 flex justify-center">{value.icon}</div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <TypingAnimation 
                text="Our Journey" 
                speed={70} 
                delay={200}
              />
            </h2>
            <p className="text-lg text-muted-foreground">
              Milestones that mark our growth and commitment to educational excellence
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => {
              const animations = ['slideLeft', 'slideRight', 'slideUp', 'scale', 'fadeIn', 'slideUp'];
              const animationType = animations[index % animations.length] as 'slideLeft' | 'slideRight' | 'slideUp' | 'scale' | 'fadeIn';
              return (
                <AnimatedCard key={index} delay={index * 300} animation={animationType}>
                  <div className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-soft">
                    <div className="flex-shrink-0 w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{milestone.year}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-foreground">{milestone.event}</p>
                    </div>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-warm-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <TypingAnimation 
                text="Principal's Message" 
                speed={70} 
                delay={300}
                className="text-white"
              />
            </h2>
            <blockquote className="text-lg text-white/90 italic mb-6">
              "Education is not just about academic achievement; it's about building character, 
              instilling values, and preparing our students for the challenges and opportunities 
              that life presents. At St. Mary's Classes, we are committed to nurturing not just 
              brilliant minds, but also compassionate hearts and strong characters."
            </blockquote>
            <p className="text-xl font-semibold">- Mrs. Mary Joseph</p>
            <p className="text-white/80">Founder & Principal</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <TypingAnimation 
                text="Why Students & Parents Trust Us" 
                speed={60} 
                delay={200}
              />
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Award className="h-8 w-8 text-primary" />, title: "Proven Track Record", desc: "15+ years of consistent results" },
              { icon: <Users className="h-8 w-8 text-accent" />, title: "Expert Faculty", desc: "Highly qualified and experienced teachers" },
              { icon: <Target className="h-8 w-8 text-secondary" />, title: "Personalized Attention", desc: "Small batch sizes for individual focus" },
              { icon: <BookOpen className="h-8 w-8 text-success" />, title: "Comprehensive Study Material", desc: "Updated curriculum and practice materials" },
              { icon: <Star className="h-8 w-8 text-accent" />, title: "Regular Assessments", desc: "Continuous evaluation and feedback" },
              { icon: <Heart className="h-8 w-8 text-primary" />, title: "Caring Environment", desc: "Supportive and nurturing atmosphere" }
            ].map((item, index) => {
              const animations = ['slideUp', 'scale', 'slideLeft', 'slideRight', 'fadeIn', 'slideUp'];
              const animationType = animations[index % animations.length] as 'slideUp' | 'scale' | 'slideLeft' | 'slideRight' | 'fadeIn';
              return (
                <AnimatedCard key={index} delay={index * 200} animation={animationType}>
                  <Card className="card-academic text-center">
                    <CardContent className="p-6">
                      <div className="mb-4 flex justify-center">{item.icon}</div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;