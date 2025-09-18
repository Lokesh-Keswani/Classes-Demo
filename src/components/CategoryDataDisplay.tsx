import { Calendar, Clock, MapPin, Users, BookOpen, AlertTriangle, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryDataDisplayProps {
  announcement: any;
}

export const CategoryDataDisplay = ({ announcement }: CategoryDataDisplayProps) => {
  
  const renderExamData = () => (
    <div className="space-y-3">
      {announcement.examType && (
        <div className="flex items-center space-x-2">
          <BookOpen className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Exam Type:</span>
          <Badge variant="outline">{announcement.examType}</Badge>
        </div>
      )}
      {announcement.class && (
        <div className="flex items-center space-x-2">
          <Users className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium">Class:</span>
          <Badge variant="outline">{announcement.class}</Badge>
        </div>
      )}
      {announcement.examDate && (
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-secondary" />
          <span className="text-sm font-medium">Exam Date:</span>
          <span className="text-sm">{new Date(announcement.examDate).toLocaleDateString()}</span>
        </div>
      )}
      {announcement.reportingTime && (
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium">Reporting Time:</span>
          <span className="text-sm">{announcement.reportingTime}</span>
        </div>
      )}
      {announcement.additionalInfo && (
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="flex items-start space-x-2">
            <Info className="h-4 w-4 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-blue-800">Additional Information:</p>
              <p className="text-sm text-blue-700">{announcement.additionalInfo}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderHolidayData = () => (
    <div className="space-y-3">
      {announcement.holidayType && (
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Holiday Type:</span>
          <Badge variant="outline">{announcement.holidayType}</Badge>
        </div>
      )}
      {announcement.affectedClasses && (
        <div className="flex items-center space-x-2">
          <Users className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium">Affected Classes:</span>
          <Badge variant="outline">{announcement.affectedClasses}</Badge>
        </div>
      )}
      {announcement.startDate && announcement.endDate && (
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-secondary" />
          <span className="text-sm font-medium">Duration:</span>
          <span className="text-sm">
            {new Date(announcement.startDate).toLocaleDateString()} - {new Date(announcement.endDate).toLocaleDateString()}
          </span>
        </div>
      )}
      {announcement.importantNotes && (
        <div className="bg-orange-50 p-3 rounded-lg">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-orange-800">Important Notes:</p>
              <p className="text-sm text-orange-700">{announcement.importantNotes}</p>
            </div>
          </div>
        </div>
      )}
      {announcement.reopeningInfo && (
        <div className="bg-green-50 p-3 rounded-lg">
          <div className="flex items-start space-x-2">
            <Info className="h-4 w-4 text-green-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-green-800">Reopening Information:</p>
              <p className="text-sm text-green-700">{announcement.reopeningInfo}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderEventData = () => (
    <div className="space-y-3">
      {announcement.eventType && (
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Event Type:</span>
          <Badge variant="outline">{announcement.eventType}</Badge>
        </div>
      )}
      {announcement.targetAudience && (
        <div className="flex items-center space-x-2">
          <Users className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium">Target Audience:</span>
          <Badge variant="outline">{announcement.targetAudience}</Badge>
        </div>
      )}
      {announcement.eventDate && (
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-secondary" />
          <span className="text-sm font-medium">Event Date:</span>
          <span className="text-sm">{new Date(announcement.eventDate).toLocaleDateString()}</span>
        </div>
      )}
      {announcement.eventTime && (
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium">Event Time:</span>
          <span className="text-sm">{announcement.eventTime}</span>
        </div>
      )}
      {announcement.venue && (
        <div className="flex items-center space-x-2">
          <MapPin className="h-4 w-4 text-secondary" />
          <span className="text-sm font-medium">Venue:</span>
          <span className="text-sm">{announcement.venue}</span>
        </div>
      )}
      {announcement.participationDetails && (
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="flex items-start space-x-2">
            <Info className="h-4 w-4 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-blue-800">Participation Details:</p>
              <p className="text-sm text-blue-700">{announcement.participationDetails}</p>
            </div>
          </div>
        </div>
      )}
      {announcement.instructions && (
        <div className="bg-yellow-50 p-3 rounded-lg">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-yellow-800">Instructions:</p>
              <p className="text-sm text-yellow-700">{announcement.instructions}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderAcademicData = () => (
    <div className="space-y-3">
      {announcement.updateType && (
        <div className="flex items-center space-x-2">
          <BookOpen className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Update Type:</span>
          <Badge variant="outline">{announcement.updateType}</Badge>
        </div>
      )}
      {announcement.affectedClasses && (
        <div className="flex items-center space-x-2">
          <Users className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium">Affected Classes:</span>
          <Badge variant="outline">{announcement.affectedClasses}</Badge>
        </div>
      )}
      {announcement.effectiveDate && (
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-secondary" />
          <span className="text-sm font-medium">Effective Date:</span>
          <span className="text-sm">{new Date(announcement.effectiveDate).toLocaleDateString()}</span>
        </div>
      )}
      {announcement.priority && (
        <div className="flex items-center space-x-2">
          <AlertTriangle className="h-4 w-4 text-destructive" />
          <span className="text-sm font-medium">Priority:</span>
          <Badge variant={announcement.priority === 'High' ? 'destructive' : 'secondary'}>
            {announcement.priority} Priority
          </Badge>
        </div>
      )}
      {announcement.subject && (
        <div className="flex items-center space-x-2">
          <BookOpen className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Subject:</span>
          <Badge variant="outline">{announcement.subject}</Badge>
        </div>
      )}
      {announcement.implementationDetails && (
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="flex items-start space-x-2">
            <Info className="h-4 w-4 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-blue-800">Implementation Details:</p>
              <p className="text-sm text-blue-700">{announcement.implementationDetails}</p>
            </div>
          </div>
        </div>
      )}
      {announcement.studentAction && (
        <div className="bg-green-50 p-3 rounded-lg">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-4 w-4 text-green-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-green-800">Student Action Required:</p>
              <p className="text-sm text-green-700">{announcement.studentAction}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderCategoryData = () => {
    switch (announcement.category) {
      case "Exam Updates":
        return renderExamData();
      case "Holidays":
        return renderHolidayData();
      case "Events":
        return renderEventData();
      case "Academic":
        return renderAcademicData();
      case "Other":
        return null; // Other category has no additional fields
      default:
        return null;
    }
  };

  const hasAdditionalData = () => {
    if (announcement.category === "Other") return false;
    
    // Check if any category-specific fields have data
    const categoryFields = [
      'examType', 'class', 'examDate', 'reportingTime', 'additionalInfo',
      'holidayType', 'affectedClasses', 'startDate', 'endDate', 'importantNotes', 'reopeningInfo',
      'eventType', 'targetAudience', 'eventDate', 'eventTime', 'venue', 'participationDetails', 'instructions',
      'updateType', 'effectiveDate', 'priority', 'subject', 'implementationDetails', 'studentAction'
    ];
    
    return categoryFields.some(field => {
      const value = announcement[field];
      if (value === null || value === undefined) return false;
      if (typeof value === 'string') return value.trim() !== '';
      if (value instanceof Date) return true;
      return !!value;
    });
  };

  const hasData = hasAdditionalData();
  
  // For "Other" category, don't render anything - just show title and content
  if (announcement.category === "Other") {
    return null;
  }
  
  // For other categories, only show additional info if there's actual data
  if (!hasData) {
    return null;
  }
  
  return (
    <div className="mt-4 p-4 bg-muted/30 rounded-lg">
      <h4 className="text-sm font-semibold text-foreground mb-3">
        Additional Information
      </h4>
      {renderCategoryData()}
    </div>
  );
};
