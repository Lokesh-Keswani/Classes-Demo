import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/2e11a570-c005-4626-abba-c75753c2477c.png" 
                alt="St. Mary's Classes Logo" 
                className="h-10 w-10"
              />
              <div>
                <h3 className="text-lg font-bold">St. Mary's Classes</h3>
                <p className="text-primary-foreground/80 text-sm">Excellence in Education</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Empowering students with quality education and shaping bright futures through 
              dedicated teaching and innovative learning methods.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Our Courses</Link></li>
              <li><Link to="/faculty" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Faculty</Link></li>
              <li><Link to="/achievements" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Achievements</Link></li>
              <li><Link to="/students" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Students</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  123 Education Street, Academic District, City - 123456
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80 text-sm">info@stmarysclasses.edu</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            &copy; 2024 St. Mary's Classes. All rights reserved. | Designed with ❤️ for academic excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;