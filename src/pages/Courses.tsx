import { BookOpen, Clock, Users, Star, ArrowRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TypingAnimation from "@/components/TypingAnimation";
import AnimatedCard from "@/components/AnimatedCard";
import { useCourses } from "@/hooks/useCourses";

const Courses = () => {
  const { data: courses, isLoading: coursesLoading } = useCourses();

  const features = [
    "Small batch sizes for personalized attention",
    "Regular doubt clearing sessions",
    "Comprehensive study materials",
    "Mock tests and assessments",
    "Parent-teacher interaction",
    "Flexible timing options"
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
                text="Our Courses" 
                speed={80} 
                delay={500}
                className="text-white"
              />
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Choose from our wide range of courses designed to help you excel in your academic journey. 
              Each course is carefully crafted to ensure comprehensive learning and outstanding results.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              <TypingAnimation 
                text="What Makes Our Courses Special?" 
                speed={70} 
                delay={200}
              />
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const animations = ['slideUp', 'scale', 'fadeIn', 'slideLeft', 'slideRight', 'slideUp'];
              const animationType = animations[index % animations.length] as 'slideUp' | 'scale' | 'fadeIn' | 'slideLeft' | 'slideRight';
              return (
                <AnimatedCard key={index} delay={index * 200} animation={animationType}>
                  <div className="flex items-center space-x-3 p-4 bg-card rounded-lg shadow-soft">
                    <Star className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <TypingAnimation 
                text="Choose Your Course" 
                speed={70} 
                delay={300}
              />
            </h2>
            <p className="text-lg text-muted-foreground">
              Find the perfect course that matches your academic goals and aspirations
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {coursesLoading ? (
              <div className="col-span-full flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : courses && courses.length > 0 ? (
              courses.map((course, index) => {
                const animations = ['slideUp', 'scale', 'fadeIn', 'slideLeft', 'slideRight', 'slideUp'];
                const animationType = animations[index % animations.length] as 'slideUp' | 'scale' | 'fadeIn' | 'slideLeft' | 'slideRight';
                return (
                  <AnimatedCard key={course._id} delay={index * 300} animation={animationType}>
                    <Card className="card-course w-full">
                      <CardHeader className="pb-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-xl text-foreground">
                              {course.title}
                            </CardTitle>
                          </div>
                          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{course.batchSize}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{course.students || 0} total students</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-2xl font-bold text-primary">{course.fees}</div>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground text-sm leading-relaxed">{course.description}</p>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 text-sm">Focus Areas:</h4>
                          <div className="flex flex-wrap gap-1">
                            {course.subjects.map((subject, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 text-sm">Features:</h4>
                          <div className="space-y-1">
                            {course.features.map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2 text-sm">
                                <BookOpen className="h-3 w-3 text-accent flex-shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex flex-col gap-2 pt-2">
                          <Link to="/contact" className="w-full">
                            <Button className="w-full btn-hero">
                              Enroll Now
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                          <Link to="/contact" className="w-full">
                            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                              More Info
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                );
              })
            ) : (
              <AnimatedCard delay={300}>
                <div className="col-span-full text-center py-8">
                  <p className="text-muted-foreground">No courses available at the moment.</p>
                </div>
              </AnimatedCard>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-warm-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <TypingAnimation 
                text="Not Sure Which Course to Choose?" 
                speed={60} 
                delay={300}
                className="text-white"
              />
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Our academic counselors are here to help you find the perfect course 
              that aligns with your goals and learning style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Free Counseling
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/faculty">
                <Button size="lg" variant="gradient-outline">
                  Meet Our Faculty
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

export default Courses;