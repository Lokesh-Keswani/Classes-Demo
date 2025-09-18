import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, CheckCircle, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TypingAnimation from "@/components/TypingAnimation";
import AnimatedCard from "@/components/AnimatedCard";

const Contact = () => {
  const [showContactNumbers, setShowContactNumbers] = useState(false);
  const [showBranches, setShowBranches] = useState(false);
  const [showEmailAddresses, setShowEmailAddresses] = useState(false);

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      title: "Call Us",
      action: "Call Now",
      onClick: () => setShowContactNumbers(true)
    },
    {
      icon: <Mail className="h-6 w-6 text-secondary" />,
      title: "Email Us", 
      action: "Send Email",
      onClick: () => setShowEmailAddresses(true)
    }
  ];

  const emailAddresses = [
    "info@stmarysclasses.edu",
    "admissions@stmarysclasses.edu", 
    "support@stmarysclasses.edu"
  ];

  const branches = [
    {
      name: "Ganesh Tower",
      address: "Ganesh Tower, Kalyan",
      mapsLink: "https://maps.app.goo.gl/UGBmG5yAXE7KUqkQ9"
    },
    {
      name: "Khadakpada",
      address: "Khadakpada, Kalyan",
      mapsLink: "https://maps.app.goo.gl/BBT81JoF9BFipauo7"
    }
  ];

  const contactNumbers = [
    "+91 98765 43210",
    "+91 87654 32109",
    "Toll Free: 1800-xxx-xxxx"
  ];

  const faqs = [
    {
      question: "What are the admission requirements?",
      answer: "Students need to bring their previous academic records, passport-size photographs, and fill out our admission form. We conduct a brief assessment to understand the student's current level."
    },
    {
      question: "Do you provide study materials?",
      answer: "Yes, we provide comprehensive study materials, practice papers, and online resources for all our courses. All materials are included in the course fee."
    },
    {
      question: "What is your fee structure?",
      answer: "Our fees vary by course and duration. Please visit our office or call us for detailed fee structure. We also offer flexible payment options and scholarships for meritorious students."
    },
    {
      question: "Do you offer online classes?",
      answer: "Yes, we offer both online and offline modes of learning. Our hybrid approach ensures students can choose the most convenient option for their learning needs."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-academic-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <MessageSquare className="h-16 w-16 mx-auto mb-6 text-white/90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <TypingAnimation 
                text="Get in Touch" 
                speed={80} 
                delay={500}
                className="text-white"
              />
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Have questions about our courses, admission process, or need guidance? 
              We're here to help you start your journey to academic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <TypingAnimation 
                text="Multiple Ways to Reach Us" 
                speed={70} 
                delay={200}
              />
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the most convenient way to connect with our team
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <AnimatedCard key={index} delay={index * 300} animation="slideUp">
                <Card className="card-academic text-center">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">{method.icon}</div>
                    <h3 className="text-lg font-semibold mb-6">{method.title}</h3>
                    {method.title === "Call Us" ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          >
                            {method.action}
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Contact Numbers</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            {contactNumbers.map((number, index) => (
                              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                <span className="text-sm font-medium">{number}</span>
                                <Button 
                                  size="sm" 
                                  onClick={() => window.open(`tel:${number.replace(/\D/g, '')}`)}
                                >
                                  Call
                                </Button>
                              </div>
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    ) : method.title === "Email Us" ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          >
                            {method.action}
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Email Addresses</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            {emailAddresses.map((email, index) => (
                              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                <span className="text-sm font-medium">{email}</span>
                                <Button 
                                  size="sm" 
                                  onClick={() => window.open(`mailto:${email}`)}
                                >
                                  Email
                                </Button>
                              </div>
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={method.onClick}
                      >
                        {method.action}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard delay={0} animation="slideUp">
            <Card className="card-academic text-center">
              <CardContent className="p-8">
                <div className="mb-4 flex justify-center">
                  <Clock className="h-12 w-12 text-success" />
                </div>
                <h3 className="text-2xl font-semibold mb-6">Office Hours</h3>
                <div className="space-y-3">
                  <p className="text-lg text-foreground">Monday - Saturday</p>
                  <p className="text-lg text-primary font-semibold">9:00 AM - 7:00 PM</p>
                  <p className="text-muted-foreground">Sunday: By Appointment</p>
                </div>
              </CardContent>
            </Card>
          </AnimatedCard>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two Branches Side by Side */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {branches.map((branch, index) => (
              <AnimatedCard key={index} delay={index * 300} animation="slideUp">
                <Card className="card-academic">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-accent" />
                      <span>{branch.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="bg-muted rounded-lg h-48 flex items-center justify-center mb-4">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-muted-foreground">Interactive Map</p>
                        <p className="text-sm text-muted-foreground">{branch.address}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      onClick={() => window.open(branch.mapsLink, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open in Google Maps
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>

          {/* Quick Contact Below Branches */}
          <div className="flex justify-center">
            <AnimatedCard delay={600} animation="slideUp">
              <Card className="card-academic max-w-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>Quick Contact</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium">For Admissions:</span>
                      <span className="text-sm text-primary">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium">For Support:</span>
                      <span className="text-sm text-primary">+91 87654 32109</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium">WhatsApp:</span>
                      <Button size="sm" className="bg-success text-white hover:bg-success/90">
                        Chat Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <TypingAnimation 
                text="Frequently Asked Questions" 
                speed={70} 
                delay={300}
              />
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about St. Mary's Classes
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const animations = ['slideUp', 'slideLeft', 'slideRight', 'fadeIn'];
              const animationType = animations[index % animations.length] as 'slideUp' | 'slideLeft' | 'slideRight' | 'fadeIn';
              return (
                <AnimatedCard key={index} delay={index * 200} animation={animationType}>
                  <Card className="card-academic">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <CheckCircle className="h-6 w-6 text-success" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                          <p className="text-muted-foreground">{faq.answer}</p>
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

      {/* CTA Section */}
      <section className="py-20 bg-warm-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <MessageSquare className="h-16 w-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <TypingAnimation 
                text="Ready to Start Your Journey?" 
                speed={60} 
                delay={300}
                className="text-white"
              />
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Don't wait! Contact us today to learn more about our courses and 
              take the first step towards academic excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Phone className="mr-2 h-5 w-5" />
                    Call for Admission
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Contact Numbers</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    {contactNumbers.map((number, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm font-medium">{number}</span>
                        <Button 
                          size="sm" 
                          onClick={() => window.open(`tel:${number.replace(/\D/g, '')}`)}
                        >
                          Call
                        </Button>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="gradient-outline">
                    <MapPin className="mr-2 h-5 w-5" />
                    Visit Our Campus
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Our Branches</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    {branches.map((branch, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">{branch.name}</h4>
                        <p className="text-muted-foreground text-sm mb-3">{branch.address}</p>
                        <Button 
                          size="sm" 
                          onClick={() => window.open(branch.mapsLink, '_blank')}
                          className="w-full"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Open in Google Maps
                        </Button>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;