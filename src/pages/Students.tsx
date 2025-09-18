import { useState } from "react";
import { Calendar, Clock, BookOpen, AlertCircle, Trophy, Users, Bell, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TypingAnimation from "@/components/TypingAnimation";
import AnimatedCard from "@/components/AnimatedCard";
import CountingAnimation from "@/components/CountingAnimation";
import { useAnnouncements } from "@/hooks/useAnnouncements";
import { useAnnouncementCategories } from "@/hooks/useAnnouncementCategories";
import { CategoryDataDisplay } from "@/components/CategoryDataDisplay";

const Students = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { data: announcements, isLoading: announcementsLoading } = useAnnouncements();
  const { data: categories, isLoading: categoriesLoading } = useAnnouncementCategories();

  // Filter announcements to only show published ones
  const publishedAnnouncements = Array.isArray(announcements) 
    ? announcements.filter(announcement => announcement.status === 'Published')
    : [];

  // Create categories based on the 5 specific categories you want
  const dynamicCategories = [
    { id: "all", label: "All Announcements", count: publishedAnnouncements.length },
    { id: "exam_updates", label: "Exam Updates", count: publishedAnnouncements.filter(a => a.category === "Exam Updates").length },
    { id: "holidays", label: "Holidays", count: publishedAnnouncements.filter(a => a.category === "Holidays").length },
    { id: "events", label: "Events", count: publishedAnnouncements.filter(a => a.category === "Events").length },
    { id: "academic", label: "Academic", count: publishedAnnouncements.filter(a => a.category === "Academic").length },
    { id: "other", label: "Other", count: publishedAnnouncements.filter(a => a.category === "Other").length }
  ];

  const priorityColors = {
    urgent: "bg-destructive text-destructive-foreground",
    high: "bg-accent text-accent-foreground",
    medium: "bg-secondary text-secondary-foreground",
    low: "bg-muted text-muted-foreground"
  };

  // Dynamic category icons based on category content
  const getCategoryIcon = (category: string) => {
    const lowerCategory = category.toLowerCase();
    if (lowerCategory.includes('exam') || lowerCategory.includes('course')) return <BookOpen className="h-4 w-4" />;
    if (lowerCategory.includes('holiday')) return <Calendar className="h-4 w-4" />;
    if (lowerCategory.includes('event') || lowerCategory.includes('achievement')) return <Trophy className="h-4 w-4" />;
    if (lowerCategory.includes('academic') || lowerCategory.includes('general')) return <Users className="h-4 w-4" />;
    return <Bell className="h-4 w-4" />; // Default icon
  };

  const filteredAnnouncements = selectedCategory === "all" 
    ? publishedAnnouncements 
    : publishedAnnouncements.filter(a => {
        // Map the selected category ID back to the actual category name
        const categoryMap: { [key: string]: string } = {
          'exam_updates': 'Exam Updates',
          'holidays': 'Holidays', 
          'events': 'Events',
          'academic': 'Academic',
          'other': 'Other'
        };
        const categoryName = categoryMap[selectedCategory];
        return a.category === categoryName;
      });

  // Get upcoming events from actual Events category announcements
  const upcomingEvents = publishedAnnouncements
    .filter(announcement => announcement.category === "Events" && announcement.eventDate)
    .map(announcement => ({
      title: announcement.title,
      date: announcement.eventDate,
      dateString: new Date(announcement.eventDate).toLocaleDateString(),
      type: announcement.eventType || "event",
      venue: announcement.venue || "",
      eventTime: announcement.eventTime || "",
      description: announcement.content
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()) // Sort by event date (nearest first)
    .slice(0, 4); // Show only next 4 events

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-academic-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <Bell className="h-16 w-16 mx-auto mb-6 text-white/90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <TypingAnimation 
                text="Student Portal" 
                speed={80} 
                delay={500}
                className="text-white"
              />
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stay updated with the latest announcements, exam schedules, events, and important 
              information from St. Mary's Classes.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <AnimatedCard delay={0} animation="slideUp">
              <Card className="card-academic text-center">
                <CardContent className="p-4">
                  <AlertCircle className="h-8 w-8 mx-auto mb-2 text-destructive" />
                  <div className="text-2xl font-bold text-foreground">
                    <CountingAnimation 
                      end={Array.isArray(announcements) ? announcements.filter(a => a.priority === "urgent").length : 0}
                      duration={1500}
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">Urgent Updates</div>
                </CardContent>
              </Card>
            </AnimatedCard>
            
            <AnimatedCard delay={200} animation="slideUp">
              <Card className="card-academic text-center">
                <CardContent className="p-4">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-foreground">
                    <CountingAnimation 
                      end={Array.isArray(announcements) ? announcements.filter(a => a.category === "Exam Updates").length : 0}
                      duration={1600}
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">Exam Updates</div>
                </CardContent>
              </Card>
            </AnimatedCard>
            
            <AnimatedCard delay={400} animation="slideUp">
              <Card className="card-academic text-center">
                <CardContent className="p-4">
                  <Calendar className="h-8 w-8 mx-auto mb-2 text-accent" />
                  <div className="text-2xl font-bold text-foreground">
                    <CountingAnimation 
                      end={Array.isArray(announcements) ? announcements.filter(a => a.category === "Events").length : 0}
                      duration={1700}
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">Upcoming Events</div>
                </CardContent>
              </Card>
            </AnimatedCard>
            
            <AnimatedCard delay={600} animation="slideUp">
              <Card className="card-academic text-center">
                <CardContent className="p-4">
                  <Clock className="h-8 w-8 mx-auto mb-2 text-secondary" />
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">Online Support</div>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories & Quick Info */}
            <div className="lg:col-span-1">
              <Card className="card-academic mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5 text-primary" />
                    <span>
                      <TypingAnimation 
                        text="Categories" 
                        speed={70} 
                        delay={200}
                      />
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    {categoriesLoading ? (
                      <div className="text-center py-4">
                        <Loader2 className="h-4 w-4 animate-spin mx-auto" />
                        <p className="text-sm text-muted-foreground mt-2">Loading categories...</p>
                      </div>
                    ) : (
                      dynamicCategories.map((category) => (
                        <Button
                          key={category.id}
                          variant={selectedCategory === category.id ? "default" : "ghost"}
                          className="w-full justify-between text-sm"
                          onClick={() => setSelectedCategory(category.id)}
                        >
                          <span>{category.label}</span>
                          <Badge variant="outline" className="text-xs">
                            {category.count}
                          </Badge>
                        </Button>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card className="card-academic">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-accent" />
                    <span>Upcoming Events</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {upcomingEvents.length > 0 ? (
                      upcomingEvents.map((event, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                          <div className="flex-shrink-0">
                            {event.type.toLowerCase().includes("exam") || event.type.toLowerCase().includes("test") ? 
                              <BookOpen className="h-4 w-4 text-primary mt-1" /> : 
                              <Trophy className="h-4 w-4 text-accent mt-1" />
                            }
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground">{event.title}</p>
                            <p className="text-xs text-muted-foreground">{event.dateString}</p>
                            {event.eventTime && (
                              <p className="text-xs text-muted-foreground">
                                <Clock className="h-3 w-3 inline mr-1" />
                                {event.eventTime}
                              </p>
                            )}
                            {event.venue && (
                              <p className="text-xs text-muted-foreground">
                                <Calendar className="h-3 w-3 inline mr-1" />
                                {event.venue}
                              </p>
                            )}
                            {event.description && (
                              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                {event.description.substring(0, 100)}{event.description.length > 100 ? '...' : ''}
                              </p>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-4">
                        <Calendar className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">No upcoming events</p>
                        <p className="text-xs text-muted-foreground">Check back later for updates</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content - Announcements */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  <TypingAnimation 
                    text={selectedCategory === "all" ? "All Announcements" : dynamicCategories.find(c => c.id === selectedCategory)?.label || "Announcements"} 
                    speed={70} 
                    delay={300}
                  />
                </h2>
                <p className="text-muted-foreground">
                  {filteredAnnouncements.length} announcement{filteredAnnouncements.length !== 1 ? 's' : ''} found
                </p>
              </div>

              <div className="space-y-6">
                {announcementsLoading ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin" />
                  </div>
                ) : filteredAnnouncements.length > 0 ? (
                  filteredAnnouncements.map((announcement, index) => {
                    const animations = ['slideUp', 'slideLeft', 'slideRight', 'fadeIn', 'scale'];
                    const animationType = animations[index % animations.length] as 'slideUp' | 'slideLeft' | 'slideRight' | 'fadeIn' | 'scale';
                    return (
                      <AnimatedCard key={announcement._id} delay={index * 200} animation={animationType}>
                        <Card className="announcement-card">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <div className="flex items-center space-x-2">
                                    {getCategoryIcon(announcement.category)}
                                    <Badge variant="outline" className="text-xs">
                                      {announcement.category}
                                    </Badge>
                                  </div>
                                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                    <Calendar className="h-4 w-4" />
                                    <span>{new Date(announcement.createdAt || announcement.publishDate).toLocaleDateString()}</span>
                                  </div>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                  {announcement.title}
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                  {announcement.content}
                                </p>
                                <CategoryDataDisplay announcement={announcement} />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </AnimatedCard>
                    );
                  })
                ) : (
                  <AnimatedCard delay={300}>
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">No published announcements available at the moment.</p>
                    </div>
                  </AnimatedCard>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for More Info */}
      <section className="py-20 bg-warm-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <Users className="h-16 w-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <TypingAnimation 
                text="Need More Information?" 
                speed={60} 
                delay={300}
                className="text-white"
              />
            </h2>
            <p className="text-lg text-white/90 mb-8">
              If you have any questions about announcements, exam schedules, or need 
              clarification on any topic, our support team is here to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Bell className="mr-2 h-5 w-5" />
                  Contact Support
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

export default Students;