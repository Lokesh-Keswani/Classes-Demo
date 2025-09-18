import { Trophy, Star, Award, TrendingUp, Users, Target, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TypingAnimation from "@/components/TypingAnimation";
import AnimatedCard from "@/components/AnimatedCard";
import CountingAnimation from "@/components/CountingAnimation";
import { useAchievements } from "@/hooks/useAchievements";

const Achievements = () => {
  const { data: achievements, isLoading: achievementsLoading } = useAchievements();

  // Filter achievements by type
  const achievementsArray = Array.isArray(achievements) ? achievements : [];
  
  const recentMilestones = achievementsArray.filter(achievement => 
    achievement.type === 'Recent Milestones'
  );
  
  const starPerformers = achievementsArray.filter(achievement => 
    achievement.type === 'Our Star Performers'
  );
  
  const successStories = achievementsArray.filter(achievement => 
    achievement.type === 'Success Stories'
  );
  
  const awardsRecognition = achievementsArray.filter(achievement => 
    achievement.type === 'Awards & Recognition'
  );




  // Static stats - not calculated from database
  const stats = [
    { number: "500+", label: "Successful Students", icon: <Users className="h-8 w-8 text-primary" /> },
    { number: "95%", label: "Success Rate", icon: <TrendingUp className="h-8 w-8 text-success" /> },
    { number: "50+", label: "Top 10 Ranks", icon: <Trophy className="h-8 w-8 text-secondary" /> },
    { number: "200+", label: "College Selections", icon: <Award className="h-8 w-8 text-accent" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-warm-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <Trophy className="h-16 w-16 mx-auto mb-6 text-white/90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <TypingAnimation 
                text="Our Achievements" 
                speed={100} 
                delay={500}
                className="text-white"
              />
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Celebrating the remarkable success stories of our students who have achieved 
              excellence in their academic pursuits and made us proud.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedCard key={index} delay={index * 200}>
                <Card className="card-academic text-center">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">{stat.icon}</div>
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {stat.number === "500+" ? (
                        <CountingAnimation end={500} suffix="+" duration={1500} />
                      ) : stat.number === "95%" ? (
                        <CountingAnimation end={95} suffix="%" duration={1800} />
                      ) : stat.number === "50+" ? (
                        <CountingAnimation end={50} suffix="+" duration={1600} />
                      ) : stat.number === "200+" ? (
                        <CountingAnimation end={200} suffix="+" duration={1700} />
                      ) : (
                        stat.number
                      )}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Top Performers - Only show "Our Star Performers" type */}
      {starPerformers.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                <TypingAnimation 
                  text="Our Star Performers - 2024" 
                  speed={70} 
                  delay={200}
                />
              </h2>
              <p className="text-lg text-muted-foreground">
                Meet our outstanding students who have set new benchmarks of excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {starPerformers.map((achievement, index) => {
                const animations = ['slideUp', 'scale', 'fadeIn', 'slideLeft', 'slideRight', 'slideUp'];
                const animationType = animations[index % animations.length] as 'slideUp' | 'scale' | 'fadeIn' | 'slideLeft' | 'slideRight';
                return (
                  <AnimatedCard key={achievement._id || index} delay={index * 300} animation={animationType}>
                    <Card className="card-academic">
                      <CardContent className="p-6">
                        <div className="text-center mb-6">
                          <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-primary/10 flex items-center justify-center">
                            <Trophy className="h-10 w-10 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-1">{achievement.studentName}</h3>
                          <Badge variant="default" className="bg-success text-white mb-2">
                            {achievement.percentage}
                          </Badge>
                          <p className="text-2xl font-bold text-primary">{achievement.year}</p>
                          <p className="text-muted-foreground text-sm">{achievement.category}</p>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2 text-sm">Achievement Details:</h4>
                            <p className="text-sm text-muted-foreground">
                              {achievement.details}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                );
              })}
            </div>
          </div>
        </section>
      )}


      {/* Achievement Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <TypingAnimation 
                text="Recent Milestones" 
                speed={70} 
                delay={300}
              />
            </h2>
            <p className="text-lg text-muted-foreground">
              A timeline of our recent achievements and accolades
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {recentMilestones.length > 0 ? recentMilestones.map((achievement, index) => {
              const animations = ['slideLeft', 'slideRight', 'slideUp', 'scale', 'fadeIn'];
              const animationType = animations[index % animations.length] as 'slideLeft' | 'slideRight' | 'slideUp' | 'scale' | 'fadeIn';
              return (
                <AnimatedCard key={achievement._id || index} delay={index * 300} animation={animationType}>
                  <Card className="card-academic">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <Trophy className="h-8 w-8 text-secondary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <CardTitle className="text-lg">{achievement.title}</CardTitle>
                            <Badge variant="outline">{achievement.year}</Badge>
                          </div>
                          <p className="text-muted-foreground">{achievement.details}</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </AnimatedCard>
              );
            }) : (
              <AnimatedCard delay={300}>
                <div className="col-span-2 text-center py-8">
                  <p className="text-muted-foreground">No recent milestones available. Add some in the admin panel!</p>
                </div>
              </AnimatedCard>
            )}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <TypingAnimation 
                text="Success Stories" 
                speed={80} 
                delay={300}
              />
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from our successful students about their journey with us
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.length > 0 ? successStories.map((achievement, index) => (
              <AnimatedCard key={achievement._id || index} delay={index * 300}>
                <Card className="card-academic">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{achievement.studentName}</h4>
                        <p className="text-sm text-primary">{achievement.percentage}</p>
                      </div>
                    </div>
                    <blockquote className="text-muted-foreground italic">
                      "{achievement.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              </AnimatedCard>
            )) : (
              <AnimatedCard delay={300}>
                <div className="col-span-3 text-center py-8">
                  <p className="text-muted-foreground">No success stories available. Add some in the admin panel!</p>
                </div>
              </AnimatedCard>
            )}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 bg-academic-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <Star className="h-16 w-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <TypingAnimation 
                text="Awards & Recognition" 
                speed={60} 
                delay={300}
                className="text-white"
              />
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {awardsRecognition.length > 0 ? awardsRecognition.map((achievement, index) => {
                const animations = ['slideUp', 'scale', 'fadeIn', 'slideLeft'];
                const animationType = animations[index % animations.length] as 'slideUp' | 'scale' | 'fadeIn' | 'slideLeft';
                return (
                  <AnimatedCard key={achievement._id || index} delay={index * 300} animation={animationType}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                      <Award className="h-12 w-12 mx-auto mb-4 text-secondary" />
                      <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-white/80">{achievement.institution}</p>
                      <p className="text-white/70 text-sm mt-2">{achievement.details}</p>
                    </div>
                  </AnimatedCard>
                );
              }) : (
                <AnimatedCard delay={300}>
                  <div className="col-span-2 text-center py-8">
                    <p className="text-white/80">No awards available. Add some in the admin panel!</p>
                  </div>
                </AnimatedCard>
              )}
            </div>
            <p className="text-lg text-white/90">
              Our commitment to excellence has been recognized by various educational authorities 
              and institutions, further validating our dedication to quality education.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Achievements;