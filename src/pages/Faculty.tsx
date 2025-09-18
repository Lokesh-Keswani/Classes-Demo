import { GraduationCap, Award, BookOpen, Users, Star, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TypingAnimation from "@/components/TypingAnimation";
import AnimatedCard from "@/components/AnimatedCard";
import CountingAnimation from "@/components/CountingAnimation";
import { useFaculty } from "@/hooks/useFaculty";

const Faculty = () => {
  const { data: faculty, isLoading: facultyLoading } = useFaculty();

  const stats = [
    { number: "15+", label: "Expert Faculty" },
    { number: "200+", label: "Years Combined Experience" },
    { number: "2000+", label: "Students Mentored" },
    { number: "4.8", label: "Average Rating" }
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
                text="Meet Our Faculty" 
                speed={80} 
                delay={500}
                className="text-white"
              />
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our team of highly qualified and experienced educators is dedicated to helping 
              you achieve academic excellence and reach your full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              // Extract the number and suffix for counting animation
              const numberMatch = stat.number.match(/^(\d+\.?\d*)(.*)$/);
              const number = numberMatch ? parseFloat(numberMatch[1]) : 0;
              const suffix = numberMatch ? numberMatch[2] : '';
              
              return (
                <AnimatedCard key={index} delay={index * 200} animation="slideUp">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      <CountingAnimation 
                        end={number} 
                        duration={2000} 
                        suffix={suffix}
                      />
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <TypingAnimation 
                text="Our Expert Educators" 
                speed={70} 
                delay={200}
              />
            </h2>
            <p className="text-lg text-muted-foreground">
              Get to know the passionate educators who will guide you on your academic journey
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {facultyLoading ? (
              <div className="col-span-full flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : faculty && faculty.length > 0 ? (
              faculty.map((teacher, index) => {
                const animations = ['slideLeft', 'slideRight', 'slideUp', 'scale', 'fadeIn', 'slideLeft'];
                const animationType = animations[index % animations.length] as 'slideLeft' | 'slideRight' | 'slideUp' | 'scale' | 'fadeIn';
                return (
                  <AnimatedCard key={teacher._id} delay={index * 300} animation={animationType}>
                    <Card className="card-faculty">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          {/* Faculty Image */}
                          <div className="md:w-1/3">
                            <img 
                              src={teacher.image} 
                              alt={teacher.name}
                              className="w-full h-64 md:h-full object-cover"
                            />
                          </div>
                          
                          {/* Faculty Details */}
                          <div className="md:w-2/3 p-6">
                            <div className="mb-4">
                              <h3 className="text-xl font-bold text-foreground mb-1">{teacher.name}</h3>
                              <p className="text-primary font-semibold">{teacher.position}</p>
                              <p className="text-muted-foreground">{teacher.subject}</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                              <div>
                                <div className="flex items-center space-x-1 mb-1">
                                  <GraduationCap className="h-4 w-4 text-accent" />
                                  <span className="font-medium">Qualification:</span>
                                </div>
                                <p className="text-muted-foreground text-xs">{teacher.qualification}</p>
                              </div>
                              <div>
                                <div className="flex items-center space-x-1 mb-1">
                                  <BookOpen className="h-4 w-4 text-secondary" />
                                  <span className="font-medium">Experience:</span>
                                </div>
                                <p className="text-muted-foreground text-xs">{teacher.experience}</p>
                              </div>
                            </div>
                            
                            
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                              {teacher.bio}
                            </p>
                            
                            <div className="mb-4">
                              <h4 className="font-medium text-foreground mb-2 text-sm">Key Achievements:</h4>
                              <ul className="space-y-1">
                                {teacher.achievements.map((achievement, index) => (
                                  <li key={index} className="flex items-start space-x-2 text-xs">
                                    <Award className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground">{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                );
              })
            ) : (
              <AnimatedCard delay={300}>
                <div className="col-span-full text-center py-8">
                  <p className="text-muted-foreground">No faculty members available at the moment.</p>
                </div>
              </AnimatedCard>
            )}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <TypingAnimation 
                text="Our Teaching Philosophy" 
                speed={70} 
                delay={300}
              />
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-12 w-12 text-primary" />,
                title: "Student-Centered Learning",
                description: "We believe every student is unique. Our personalized approach ensures each student receives the attention they deserve."
              },
              {
                icon: <BookOpen className="h-12 w-12 text-accent" />,
                title: "Conceptual Clarity",
                description: "We focus on building strong fundamentals and conceptual understanding rather than rote learning."
              },
              {
                icon: <Star className="h-12 w-12 text-secondary" />,
                title: "Excellence in Results",
                description: "Our commitment to excellence drives us to continuously improve our teaching methods and achieve outstanding results."
              }
            ].map((item, index) => {
              const animations = ['slideUp', 'scale', 'fadeIn'];
              const animationType = animations[index] as 'slideUp' | 'scale' | 'fadeIn';
              return (
                <AnimatedCard key={index} delay={index * 300} animation={animationType}>
                  <Card className="card-academic text-center">
                    <CardContent className="p-8">
                      <div className="mb-6 flex justify-center">{item.icon}</div>
                      <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-warm-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <TypingAnimation 
                text="Learn from the Best" 
                speed={60} 
                delay={300}
                className="text-white"
              />
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of students who have achieved success under the guidance 
              of our expert faculty. Start your journey to academic excellence today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Enroll Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faculty;