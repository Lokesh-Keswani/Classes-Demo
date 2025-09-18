import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ConfirmationDialog } from "@/components/ui/confirmation-dialog";
import { ImageUpload } from "@/components/ui/image-upload";
import { useToast } from "@/hooks/use-toast";
import AdminAuth from "@/components/AdminAuth";
import { 
  Users, 
  BookOpen, 
  Trophy, 
  MessageSquare, 
  Save,
  Plus,
  Trash2,
  Edit,
  Loader2,
  RefreshCw,
  LogOut
} from "lucide-react";

// Import hooks
import { useCourses, useCreateCourse, useUpdateCourse, useDeleteCourse } from "@/hooks/useCourses";
import { useFaculty, useCreateFaculty, useUpdateFaculty, useDeleteFaculty } from "@/hooks/useFaculty";
import { useAchievements, useCreateAchievement, useUpdateAchievement, useDeleteAchievement } from "@/hooks/useAchievements";
import { useAnnouncements, useCreateAnnouncement, useUpdateAnnouncement, useDeleteAnnouncement } from "@/hooks/useAnnouncements";
import { useAnnouncementCategories } from "@/hooks/useAnnouncementCategories";
import { ExamUpdatesForm, HolidaysForm, EventsForm, AcademicForm, OtherForm } from "@/components/announcement-forms";
import { CategoryDataDisplay } from "@/components/CategoryDataDisplay";
import { useQueryClient } from '@tanstack/react-query';

const Admin = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("courses");
  const [editingItem, setEditingItem] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const subjectsTextareaRef = useRef<HTMLTextAreaElement>(null);
  const featuresTextareaRef = useRef<HTMLTextAreaElement>(null);
  const [deleteDialog, setDeleteDialog] = useState<{
    open: boolean;
    item: any;
    type: string;
  }>({ open: false, item: null, type: '' });

  // Data hooks
  const { data: courses, isLoading: coursesLoading, refetch: refetchCourses } = useCourses();
  const { data: faculty, isLoading: facultyLoading, refetch: refetchFaculty } = useFaculty();
  const { data: achievements, isLoading: achievementsLoading, refetch: refetchAchievements } = useAchievements();
  const { data: announcements, isLoading: announcementsLoading, refetch: refetchAnnouncements } = useAnnouncements();
  const { data: categories, isLoading: categoriesLoading } = useAnnouncementCategories();


  // Mutation hooks
  const createCourse = useCreateCourse();
  const updateCourse = useUpdateCourse();
  const deleteCourse = useDeleteCourse();
  const createFaculty = useCreateFaculty();
  const updateFaculty = useUpdateFaculty();
  const deleteFaculty = useDeleteFaculty();
  const createAchievement = useCreateAchievement();
  const updateAchievement = useUpdateAchievement();
  const deleteAchievement = useDeleteAchievement();
  const createAnnouncement = useCreateAnnouncement();
  const updateAnnouncement = useUpdateAnnouncement();
  const deleteAnnouncement = useDeleteAnnouncement();

  // Authentication logic
  useEffect(() => {
    // Check if user is authenticated on component mount
    const authStatus = sessionStorage.getItem("admin_authenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_authenticated");
    setIsAuthenticated(false);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  // Form states
  const [courseForm, setCourseForm] = useState({
    title: "",
    batchSize: "",
    subjects: [] as string[],
    description: "",
    features: [] as string[],
    fees: "",
    rating: 0,
    students: 0
  });

  const [facultyForm, setFacultyForm] = useState({
    name: "",
    position: "",
    subject: "",
    qualification: "",
    experience: "",
    specialization: "",
    achievements: [] as string[],
    bio: "",
    rating: 0,
    studentsT: 0,
    image: ""
  });

  const [achievementForm, setAchievementForm] = useState({
    type: "" as "" | "Our Star Performers" | "Recent Milestones" | "Success Stories" | "Awards & Recognition",
    studentName: "",
    percentage: "",
    year: "",
    category: "Academic" as "Academic" | "Sports" | "Cultural" | "Other",
    // Additional fields for different types
    title: "", // For Recent Milestones and Awards & Recognition
    institution: "", // For Awards & Recognition
    rank: "", // For Our Star Performers
    exam: "", // For Our Star Performers
    quote: "" // For Success Stories
  });

  const [announcementForm, setAnnouncementForm] = useState({
    title: "",
    category: "",
    content: "",
    status: "Draft" as "Draft" | "Published" | "Scheduled",
    // Category-specific fields
    examType: "",
    class: "",
    examDate: "",
    reportingTime: "",
    additionalInfo: "",
    holidayType: "",
    affectedClasses: "",
    startDate: "",
    endDate: "",
    importantNotes: "",
    reopeningInfo: "",
    eventType: "",
    targetAudience: "",
    eventDate: "",
    eventTime: "",
    venue: "",
    participationDetails: "",
    instructions: "",
    updateType: "",
    effectiveDate: "",
    priority: "",
    subject: "",
    implementationDetails: "",
    studentAction: ""
  });



  // Function to render category-specific form
  const renderCategoryForm = () => {
    switch (announcementForm.category) {
      case "Exam Updates":
        return <ExamUpdatesForm formData={announcementForm} setFormData={setAnnouncementForm} />;
      case "Holidays":
        return <HolidaysForm formData={announcementForm} setFormData={setAnnouncementForm} />;
      case "Events":
        return <EventsForm formData={announcementForm} setFormData={setAnnouncementForm} />;
      case "Academic":
        return <AcademicForm formData={announcementForm} setFormData={setAnnouncementForm} />;
      case "Other":
        return <OtherForm formData={announcementForm} setFormData={setAnnouncementForm} />;
      default:
        return (
          <div className="space-y-4">
            <div>
              <Label>Title</Label>
              <Input
                value={announcementForm.title}
                onChange={(e) => setAnnouncementForm({...announcementForm, title: e.target.value})}
                placeholder="Announcement title"
                required
              />
            </div>
            <div>
              <Label>Content</Label>
              <Textarea
                value={announcementForm.content}
                onChange={(e) => setAnnouncementForm({...announcementForm, content: e.target.value})}
                placeholder="Announcement content..."
                rows={4}
                required
              />
            </div>
          </div>
        );
    }
  };

  const resetForms = () => {
    setCourseForm({
      title: "",
      batchSize: "",
      subjects: [],
      description: "",
      features: [],
      fees: "",
      rating: 0,
      students: 0
    });
    setFacultyForm({
      name: "",
      position: "",
      subject: "",
      qualification: "",
      experience: "",
      specialization: "",
      achievements: [],
      bio: "",
      rating: 0,
      studentsT: 0,
      image: ""
    });
    setAchievementForm({
      type: "",
      studentName: "",
      percentage: "",
      year: "",
      category: "Academic",
      title: "",
      institution: "",
      rank: "",
      exam: "",
      quote: ""
    });
    setAnnouncementForm({
      title: "",
      category: "",
      content: "",
      status: "Draft",
      // Reset all category-specific fields
      examType: "",
      class: "",
      examDate: "",
      reportingTime: "",
      additionalInfo: "",
      holidayType: "",
      affectedClasses: "",
      startDate: "",
      endDate: "",
      importantNotes: "",
      reopeningInfo: "",
      eventType: "",
      targetAudience: "",
      eventDate: "",
      eventTime: "",
      venue: "",
      participationDetails: "",
      instructions: "",
      updateType: "",
      effectiveDate: "",
      priority: "",
      subject: "",
      implementationDetails: "",
      studentAction: ""
    });
    setEditingItem(null);
    setIsDialogOpen(false);
  };

  const handleCourseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Filter out empty lines before saving
      const filteredCourseForm = {
        ...courseForm,
        subjects: courseForm.subjects.filter(line => line.trim().length > 0),
        features: courseForm.features.filter(line => line.trim().length > 0)
      };
      
      if (editingItem) {
        await updateCourse.mutateAsync({ id: editingItem._id, data: filteredCourseForm });
      } else {
        await createCourse.mutateAsync(filteredCourseForm);
      }
      resetForms();
    } catch (error) {
      console.error("Error saving course:", error);
    }
  };



  const handleFacultySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingItem) {
        await updateFaculty.mutateAsync({ id: editingItem._id, data: facultyForm });
      } else {
        await createFaculty.mutateAsync(facultyForm);
      }
      resetForms();
    } catch (error) {
      console.error("Error saving faculty:", error);
    }
  };

  const handleAchievementSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Start with base fields that are always required
      let filteredData: any = {
        type: achievementForm.type
      };

      // Add year and category only for Our Star Performers and Recent Milestones
      if (achievementForm.type === 'Our Star Performers' || achievementForm.type === 'Recent Milestones') {
        filteredData.year = achievementForm.year;
        filteredData.category = achievementForm.category;
      }

      // Clear all optional fields first by setting them to null
      filteredData.studentName = null;
      filteredData.percentage = null;
      filteredData.title = null;
      filteredData.institution = null;
      filteredData.rank = null;
      filteredData.exam = null;
      filteredData.quote = null;

      // Add fields based on type
      if (achievementForm.type === 'Our Star Performers') {
        filteredData.studentName = achievementForm.studentName;
        filteredData.percentage = achievementForm.percentage;
        filteredData.exam = achievementForm.exam;
        filteredData.rank = achievementForm.rank;
      } else if (achievementForm.type === 'Recent Milestones') {
        filteredData.title = achievementForm.title;
      } else if (achievementForm.type === 'Success Stories') {
        filteredData.studentName = achievementForm.studentName;
        filteredData.percentage = achievementForm.percentage; // This is used for current status/affiliation
        filteredData.quote = achievementForm.quote;
      } else if (achievementForm.type === 'Awards & Recognition') {
        filteredData.title = achievementForm.title;
        filteredData.institution = achievementForm.institution;
      }

      if (editingItem) {
        await updateAchievement.mutateAsync({ id: editingItem._id, data: filteredData });
      } else {
        await createAchievement.mutateAsync(filteredData);
      }
      resetForms();
    } catch (error) {
      console.error("Error saving achievement:", error);
    }
  };

  const handleAnnouncementSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Set default status to Published since we removed the status field
      const announcementData = { ...announcementForm, status: "Published" as "Published" };
      console.log("Submitting announcement data:", announcementData);
      if (editingItem) {
        await updateAnnouncement.mutateAsync({ id: editingItem._id, data: announcementData });
      } else {
        await createAnnouncement.mutateAsync(announcementData);
      }
      resetForms();
    } catch (error) {
      console.error("Error saving announcement:", error);
    }
  };


  const handleEdit = (item: any, type: string) => {
    setEditingItem(item);
    setIsDialogOpen(true);
    
    switch (type) {
      case 'course':
        setCourseForm({
          title: item.title || "",
          batchSize: item.batchSize || "",
          subjects: item.subjects || [],
          description: item.description || "",
          features: item.features || [],
          fees: item.fees || "",
          rating: item.rating || 0,
          students: item.students || 0
        });
        break;
      case 'faculty':
        setFacultyForm({
          name: item.name || "",
          position: item.position || "",
          subject: item.subject || "",
          qualification: item.qualification || "",
          experience: item.experience || "",
          specialization: item.specialization || "",
          achievements: item.achievements || [],
          bio: item.bio || "",
          rating: item.rating || 0,
          studentsT: item.studentsT || 0,
          image: item.image || ""
        });
        break;
      case 'achievement':
        // Clear all fields first
        let achievementData = {
          type: item.type || "Our Star Performers",
          studentName: "",
          percentage: "",
          year: item.year || "",
          details: item.details || "",
          category: item.category || "Academic",
          title: "",
          institution: "",
          rank: "",
          exam: "",
          quote: "",
          testimonial: ""
        };

        // Populate fields based on achievement type
        if (item.type === 'Our Star Performers') {
          achievementData.studentName = item.studentName || "";
          achievementData.percentage = item.percentage || "";
          achievementData.exam = item.exam || "";
          achievementData.rank = item.rank || "";
        } else if (item.type === 'Recent Milestones') {
          achievementData.title = item.title || "";
        } else if (item.type === 'Success Stories') {
          achievementData.studentName = item.studentName || "";
          achievementData.percentage = item.percentage || "";
          achievementData.quote = item.quote || "";
        } else if (item.type === 'Awards & Recognition') {
          achievementData.title = item.title || "";
          achievementData.institution = item.institution || "";
        }

        // Ensure all fields have string values to prevent controlled/uncontrolled warnings
        Object.keys(achievementData).forEach(key => {
          if (achievementData[key] === null || achievementData[key] === undefined) {
            achievementData[key] = "";
          }
        });

        setAchievementForm(achievementData);
        break;
      case 'announcement':
        console.log("Loading announcement data:", item);
        setAnnouncementForm({
          title: item.title || "",
          category: item.category || "",
          content: item.content || "",
          status: item.status || "Draft",
          // Category-specific fields with defaults
          examType: item.examType || "",
          class: item.class || "",
          examDate: item.examDate || "",
          reportingTime: item.reportingTime || "",
          additionalInfo: item.additionalInfo || "",
          holidayType: item.holidayType || "",
          affectedClasses: item.affectedClasses || "",
          startDate: item.startDate || "",
          endDate: item.endDate || "",
          importantNotes: item.importantNotes || "",
          reopeningInfo: item.reopeningInfo || "",
          eventType: item.eventType || "",
          targetAudience: item.targetAudience || "",
          eventDate: item.eventDate || "",
          eventTime: item.eventTime || "",
          venue: item.venue || "",
          participationDetails: item.participationDetails || "",
          instructions: item.instructions || "",
          updateType: item.updateType || "",
          effectiveDate: item.effectiveDate || "",
          priority: item.priority || "",
          subject: item.subject || "",
          implementationDetails: item.implementationDetails || "",
          studentAction: item.studentAction || ""
        });
        break;
    }
  };

  const handleDeleteClick = (item: any, type: string) => {
    setDeleteDialog({ open: true, item, type });
  };

  const handleDeleteConfirm = async () => {
    if (!deleteDialog.item) return;
    
    try {
      switch (deleteDialog.type) {
        case 'course':
          await deleteCourse.mutateAsync(deleteDialog.item._id);
          break;
        case 'faculty':
          await deleteFaculty.mutateAsync(deleteDialog.item._id);
          break;
        case 'achievement':
          await deleteAchievement.mutateAsync(deleteDialog.item._id);
          break;
        case 'announcement':
          await deleteAnnouncement.mutateAsync(deleteDialog.item._id);
          break;
      }
      setDeleteDialog({ open: false, item: null, type: '' });
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleRefresh = async () => {
    try {
      // Invalidate achievements query only
      queryClient.invalidateQueries({ queryKey: ['achievements'] });
      
      toast({
        title: "Success",
        description: "Data refreshed successfully!",
      });
    } catch (error) {
      console.error("Error refreshing data:", error);
      toast({
        title: "Error",
        description: "Failed to refresh data",
        variant: "destructive",
      });
    }
  };

  // If not authenticated, show login form
  if (!isAuthenticated) {
    return <AdminAuth onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-background p-2 sm:p-4 lg:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Responsive */}
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-1 sm:mb-2 truncate">
                St. Mary's Classes - Admin Panel
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground hidden sm:block">
                Manage your coaching center content and settings
              </p>
              <p className="text-xs text-muted-foreground sm:hidden">
                Manage content and settings
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2 lg:gap-3">
              <Button 
                onClick={handleRefresh} 
                variant="outline" 
                className="flex items-center justify-center gap-2 text-xs sm:text-sm px-2 sm:px-3 py-2 h-8 sm:h-9"
              >
                <RefreshCw className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">Refresh Data</span>
                <span className="xs:hidden">Refresh</span>
              </Button>
              <Button 
                onClick={handleLogout} 
                variant="outline" 
                className="flex items-center justify-center gap-2 text-destructive hover:text-white hover:bg-destructive text-xs sm:text-sm px-2 sm:px-3 py-2 h-8 sm:h-9"
              >
                <LogOut className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">Log Out</span>
                <span className="xs:hidden">Log Out</span>
              </Button>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 sm:space-y-6">
          {/* Responsive Tabs List */}
          <div className="overflow-x-auto">
            <TabsList className="grid w-full grid-cols-4 min-w-[320px] sm:min-w-0">
              <TabsTrigger 
                value="courses" 
                className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-1 sm:px-3 py-2"
              >
                <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">Courses</span>
                <span className="xs:hidden">Course</span>
              </TabsTrigger>
              <TabsTrigger 
                value="faculty" 
                className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-1 sm:px-3 py-2"
              >
                <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">Faculty</span>
                <span className="xs:hidden">Staff</span>
              </TabsTrigger>
              <TabsTrigger 
                value="achievements" 
                className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-1 sm:px-3 py-2"
              >
                <Trophy className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">Achievements</span>
                <span className="xs:hidden">Awards</span>
              </TabsTrigger>
              <TabsTrigger 
                value="announcements" 
                className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-1 sm:px-3 py-2"
              >
                <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">Announcements</span>
                <span className="xs:hidden">News</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-4 sm:space-y-6">
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl">Manage Courses</CardTitle>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        className="btn-hero w-full sm:w-auto" 
                        onClick={() => { resetForms(); setActiveTab("courses"); }}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        <span className="hidden xs:inline">Add Course</span>
                        <span className="xs:hidden">Add</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-lg sm:text-xl">
                          {editingItem ? 'Edit Course' : 'Add New Course'}
                        </DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleCourseSubmit} className="space-y-3 sm:space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          <div>
                            <Label>Course Title</Label>
                            <Input
                              value={courseForm.title}
                              onChange={(e) => setCourseForm({...courseForm, title: e.target.value})}
                              placeholder="e.g., Class 10th"
                              required
                            />
                          </div>
                          <div>
                            <Label>Total Students</Label>
                            <Input
                              type="number"
                              value={courseForm.students}
                              onChange={(e) => setCourseForm({...courseForm, students: parseInt(e.target.value) || 0})}
                              placeholder="e.g., 150"
                              min="0"
                              required
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          <div>
                            <Label>Batch Size</Label>
                            <Input
                              value={courseForm.batchSize}
                              onChange={(e) => setCourseForm({...courseForm, batchSize: e.target.value})}
                              placeholder="e.g., 15 Students"
                              required
                            />
                          </div>
                          <div>
                            <Label>Fees</Label>
                            <Input
                              value={courseForm.fees}
                              onChange={(e) => setCourseForm({...courseForm, fees: e.target.value})}
                              placeholder="e.g., ₹8,000/month"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label>Description</Label>
                          <Textarea
                            value={courseForm.description}
                            onChange={(e) => setCourseForm({...courseForm, description: e.target.value})}
                            placeholder="Course description..."
                            required
                          />
                        </div>
                        <div>
                          <Label>Focus Areas (one per line)</Label>
                          <p className="text-xs text-muted-foreground mb-2">Enter each focus area on a new line. Press Enter to create a new line.</p>
                          <Textarea
                            ref={subjectsTextareaRef}
                            value={courseForm.subjects.join('\n')}
                            onChange={(e) => {
                              setCourseForm({...courseForm, subjects: e.target.value.split('\n')});
                            }}
                            placeholder="All Subjects
Foundation Building
Concept Clarity
Board Preparation"
                            rows={4}
                            className="resize-none"
                          />
                        </div>
                        <div>
                          <Label>Features (one per line)</Label>
                          <p className="text-xs text-muted-foreground mb-2">Enter each feature on a new line. Press Enter to create a new line.</p>
                          <Textarea
                            ref={featuresTextareaRef}
                            value={courseForm.features.join('\n')}
                            onChange={(e) => {
                              setCourseForm({...courseForm, features: e.target.value.split('\n')});
                            }}
                            placeholder="Interactive Learning
Doubt Sessions
Study Material
Regular Assessments
Mock Tests"
                            rows={4}
                            className="resize-none"
                          />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                          <Button 
                            type="submit" 
                            className="btn-hero w-full sm:w-auto" 
                            disabled={createCourse.isPending || updateCourse.isPending}
                          >
                            {(createCourse.isPending || updateCourse.isPending) && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                            <span className="hidden xs:inline">{editingItem ? 'Update Course' : 'Create Course'}</span>
                            <span className="xs:hidden">{editingItem ? 'Update' : 'Create'}</span>
                          </Button>
                          <Button 
                            type="button" 
                            variant="outline" 
                            onClick={resetForms}
                            className="w-full sm:w-auto"
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {coursesLoading ? (
                  <div className="flex justify-center py-6 sm:py-8">
                    <Loader2 className="h-6 w-6 sm:h-8 sm:w-8 animate-spin" />
                  </div>
                ) : courses && Array.isArray(courses) && courses.length > 0 ? (
                  courses.map((course: any) => (
                    <div key={course._id} className="border rounded-lg p-3 sm:p-4 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                        <h3 className="font-semibold text-foreground text-sm sm:text-base truncate">
                          {course.title}
                        </h3>
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleEdit(course, 'course')}
                            className="h-8 w-8 sm:h-9 sm:w-auto px-2 sm:px-3"
                          >
                            <Edit className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="hidden sm:inline ml-1">Edit</span>
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDeleteClick(course, 'course')}
                            disabled={deleteCourse.isPending}
                            className="h-8 w-8 sm:h-9 sm:w-auto px-2 sm:px-3"
                          >
                            <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="hidden sm:inline ml-1">Delete</span>
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      <div>
                        <Label>Total Students</Label>
                          <Input value={course.students || 0} readOnly />
                      </div>
                      <div>
                        <Label>Batch Size</Label>
                          <Input value={course.batchSize} readOnly />
                      </div>
                      <div>
                        <Label>Fees</Label>
                          <Input value={course.fees} readOnly />
                      </div>
                    </div>
                    <div>
                      <Label>Description</Label>
                        <Textarea value={course.description} readOnly />
                    </div>
                    {course.subjects && course.subjects.length > 0 && (
                      <div className="sm:col-span-2 lg:col-span-3">
                        <Label className="text-xs sm:text-sm">Focus Areas ({course.subjects.length})</Label>
                        <div className="flex flex-wrap gap-1 sm:gap-2 mt-1">
                          {course.subjects.map((subject, index) => (
                            <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    {course.features && course.features.length > 0 && (
                      <div className="sm:col-span-2 lg:col-span-3">
                        <Label className="text-xs sm:text-sm">Features ({course.features.length})</Label>
                        <div className="flex flex-wrap gap-1 sm:gap-2 mt-1">
                          {course.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs px-2 py-1">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    No courses found. Add your first course to get started.
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Faculty Tab */}
          <TabsContent value="faculty" className="space-y-4 sm:space-y-6">
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl">Manage Faculty</CardTitle>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        className="btn-hero w-full sm:w-auto" 
                        onClick={() => { resetForms(); setActiveTab("faculty"); }}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        <span className="hidden xs:inline">Add Faculty</span>
                        <span className="xs:hidden">Add</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-lg sm:text-xl">
                          {editingItem ? 'Edit Faculty Member' : 'Add New Faculty Member'}
                        </DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleFacultySubmit} className="space-y-3 sm:space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          <div>
                            <Label>Name</Label>
                            <Input
                              value={facultyForm.name}
                              onChange={(e) => setFacultyForm({...facultyForm, name: e.target.value})}
                              placeholder="Faculty member name"
                              required
                            />
                          </div>
                          <div>
                            <Label>Position</Label>
                            <Input
                              value={facultyForm.position}
                              onChange={(e) => setFacultyForm({...facultyForm, position: e.target.value})}
                              placeholder="e.g., Senior Faculty"
                              required
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          <div>
                            <Label>Subject</Label>
                            <Input
                              value={facultyForm.subject}
                              onChange={(e) => setFacultyForm({...facultyForm, subject: e.target.value})}
                              placeholder="e.g., Mathematics"
                              required
                            />
                          </div>
                          <div>
                            <Label>Experience</Label>
                            <Input
                              value={facultyForm.experience}
                              onChange={(e) => setFacultyForm({...facultyForm, experience: e.target.value})}
                              placeholder="e.g., 10+ Years"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label>Qualification</Label>
                          <Input
                            value={facultyForm.qualification}
                            onChange={(e) => setFacultyForm({...facultyForm, qualification: e.target.value})}
                            placeholder="e.g., M.Sc. Mathematics, B.Ed"
                            required
                          />
                        </div>
                        <div>
                          <Label>Bio</Label>
                          <Textarea
                            value={facultyForm.bio}
                            onChange={(e) => setFacultyForm({...facultyForm, bio: e.target.value})}
                            placeholder="Faculty member bio..."
                            required
                          />
                        </div>
                        <div>
                          <Label>Key Achievements (one per line)</Label>
                          <Textarea
                            value={facultyForm.achievements.join('\n')}
                            onChange={(e) => {
                              const value = e.target.value;
                              setFacultyForm({...facultyForm, achievements: value.split('\n')});
                            }}
                            onBlur={(e) => {
                              const value = e.target.value;
                              setFacultyForm({...facultyForm, achievements: value.split('\n').filter(line => line.trim() !== '')});
                            }}
                            placeholder="Enter each achievement on a new line..."
                            rows={4}
                          />
                        </div>
                        <div>
                          <ImageUpload
                            value={facultyForm.image}
                            onChange={(value) => setFacultyForm({...facultyForm, image: value})}
                            label="Faculty Image"
                          />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                          <Button 
                            type="submit" 
                            className="btn-hero w-full sm:w-auto" 
                            disabled={createFaculty.isPending || updateFaculty.isPending}
                          >
                            {(createFaculty.isPending || updateFaculty.isPending) && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                            <span className="hidden xs:inline">{editingItem ? 'Update Faculty' : 'Add Faculty'}</span>
                            <span className="xs:hidden">{editingItem ? 'Update' : 'Add'}</span>
                          </Button>
                          <Button 
                            type="button" 
                            variant="outline" 
                            onClick={resetForms}
                            className="w-full sm:w-auto"
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {facultyLoading ? (
                  <div className="flex justify-center py-6 sm:py-8">
                    <Loader2 className="h-6 w-6 sm:h-8 sm:w-8 animate-spin" />
                  </div>
                ) : faculty && Array.isArray(faculty) && faculty.length > 0 ? (
                  faculty.map((member: any) => (
                    <div key={member._id} className="border rounded-lg p-3 sm:p-4 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          {member.image && (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                            />
                          )}
                          <h3 className="font-semibold text-foreground text-sm sm:text-base truncate">
                            {member.name}
                          </h3>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleEdit(member, 'faculty')}
                            className="h-8 w-8 sm:h-9 sm:w-auto px-2 sm:px-3"
                          >
                            <Edit className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="hidden sm:inline ml-1">Edit</span>
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDeleteClick(member, 'faculty')}
                            disabled={deleteFaculty.isPending}
                            className="h-8 w-8 sm:h-9 sm:w-auto px-2 sm:px-3"
                          >
                            <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="hidden sm:inline ml-1">Delete</span>
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <Label>Subject</Label>
                          <Input value={member.subject} readOnly />
                      </div>
                      <div>
                        <Label>Experience</Label>
                          <Input value={member.experience} readOnly />
                      </div>
                    </div>
                    <div>
                      <Label>Qualification</Label>
                        <Input value={member.qualification} readOnly />
                    </div>
                    <div>
                      <Label>Bio</Label>
                        <Textarea value={member.bio} readOnly />
                    </div>
                  </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    No faculty members found. Add your first faculty member to get started.
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-4 sm:space-y-6">
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl">Manage Achievements</CardTitle>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        className="btn-hero w-full sm:w-auto" 
                        onClick={() => { resetForms(); setActiveTab("achievements"); }}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        <span className="hidden xs:inline">Add Achievement</span>
                        <span className="xs:hidden">Add</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-lg sm:text-xl">
                          {editingItem ? 'Edit Achievement' : 'Add New Achievement'}
                        </DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleAchievementSubmit} className="space-y-3 sm:space-y-4">
                        {/* Achievement Type Selection */}
                        <div>
                          <Label>Achievement Type</Label>
                          <select
                            value={achievementForm.type}
                            onChange={(e) => setAchievementForm({...achievementForm, type: e.target.value as any})}
                            className="w-full px-3 py-2 border border-input rounded-md"
                            required
                          >
                            <option value="">Select Achievement Type</option>
                            <option value="Our Star Performers">Our Star Performers</option>
                            <option value="Recent Milestones">Recent Milestones</option>
                            <option value="Success Stories">Success Stories</option>
                            <option value="Awards & Recognition">Awards & Recognition</option>
                          </select>
                        </div>

                        {/* Conditional Fields Based on Type */}
                        {achievementForm.type === "Our Star Performers" && (
                          <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                              <div>
                                <Label>Student Name</Label>
                                <Input
                                  value={achievementForm.studentName}
                                  onChange={(e) => setAchievementForm({...achievementForm, studentName: e.target.value})}
                                  placeholder="Enter student name"
                                  required
                                />
                              </div>
                              <div>
                                <Label>Percentage/Rank</Label>
                                <Input
                                  value={achievementForm.percentage}
                                  onChange={(e) => setAchievementForm({...achievementForm, percentage: e.target.value})}
                                  placeholder="95% or Rank 1"
                                  required
                                />
                              </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                              <div>
                                <Label>Year</Label>
                                <Input
                                  value={achievementForm.year}
                                  onChange={(e) => setAchievementForm({...achievementForm, year: e.target.value})}
                                  placeholder="2024"
                                  required
                                />
                              </div>
                              <div>
                                <Label>Exam/Competition</Label>
                                <Input
                                  value={achievementForm.exam}
                                  onChange={(e) => setAchievementForm({...achievementForm, exam: e.target.value})}
                                  placeholder="JEE, NEET, Board Exams, etc."
                                  required
                                />
                              </div>
                            </div>
                            <div>
                              <Label>Achievement Details</Label>
                              <Textarea
                                value={achievementForm.details}
                                onChange={(e) => setAchievementForm({...achievementForm, details: e.target.value})}
                                placeholder="Describe the achievement in detail..."
                                required
                              />
                            </div>
                          </>
                        )}

                        {achievementForm.type === "Recent Milestones" && (
                          <>
                            <div>
                              <Label>Milestone Title</Label>
                              <Input
                                value={achievementForm.title}
                                onChange={(e) => setAchievementForm({...achievementForm, title: e.target.value})}
                                placeholder="e.g., 100% Board Result Success"
                                required
                              />
                            </div>
                          </>
                        )}

                        {achievementForm.type === "Success Stories" && (
                          <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                              <div>
                                <Label>Student Name</Label>
                                <Input
                                  value={achievementForm.studentName}
                                  onChange={(e) => setAchievementForm({...achievementForm, studentName: e.target.value})}
                                  placeholder="Enter student name"
                                  required
                                />
                              </div>
                              <div>
                                <Label>Current Status/Affiliation</Label>
                                <Input
                                  value={achievementForm.percentage}
                                  onChange={(e) => setAchievementForm({...achievementForm, percentage: e.target.value})}
                                  placeholder="e.g., IIT Delhi Student, AIIMS Delhi Student"
                                  required
                                />
                              </div>
                            </div>
                            <div>
                              <Label>Student Quote</Label>
                              <Textarea
                                value={achievementForm.quote}
                                onChange={(e) => setAchievementForm({...achievementForm, quote: e.target.value})}
                                placeholder="Enter the student's quote..."
                                required
                              />
                            </div>
                          </>
                        )}

                        {achievementForm.type === "Awards & Recognition" && (
                          <>
                            <div>
                              <Label>Award/Recognition Title</Label>
                              <Input
                                value={achievementForm.title}
                                onChange={(e) => setAchievementForm({...achievementForm, title: e.target.value})}
                                placeholder="e.g., Best Coaching Institute 2023"
                                required
                              />
                            </div>
                            <div>
                              <Label>Institution/Organization</Label>
                              <Input
                                value={achievementForm.institution}
                                onChange={(e) => setAchievementForm({...achievementForm, institution: e.target.value})}
                                placeholder="e.g., State Education Board, Local Education Department"
                                required
                              />
                            </div>
                          </>
                        )}

                        {/* Year and Category fields - only show for Our Star Performers and Recent Milestones */}
                        {(achievementForm.type === "Our Star Performers" || achievementForm.type === "Recent Milestones") && (
                          <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                              <div>
                                <Label>Year</Label>
                                <Input
                                  value={achievementForm.year}
                                  onChange={(e) => setAchievementForm({...achievementForm, year: e.target.value})}
                                  placeholder="2024"
                                  required
                                />
                              </div>
                              <div>
                                <Label>Category</Label>
                                <select
                                  value={achievementForm.category}
                                  onChange={(e) => setAchievementForm({...achievementForm, category: e.target.value as "Academic" | "Sports" | "Cultural" | "Other"})}
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  required
                                >
                                  <option value="Academic">Academic</option>
                                  <option value="Sports">Sports</option>
                                  <option value="Cultural">Cultural</option>
                                  <option value="Other">Other</option>
                                </select>
                              </div>
                            </div>
                          </>
                        )}

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                          <Button 
                            type="submit" 
                            className="btn-hero w-full sm:w-auto" 
                            disabled={createAchievement.isPending || updateAchievement.isPending}
                          >
                            {(createAchievement.isPending || updateAchievement.isPending) && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                            <span className="hidden xs:inline">{editingItem ? 'Update Achievement' : 'Add Achievement'}</span>
                            <span className="xs:hidden">{editingItem ? 'Update' : 'Add'}</span>
                          </Button>
                          <Button 
                            type="button" 
                            variant="outline" 
                            onClick={resetForms}
                            className="w-full sm:w-auto"
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {achievementsLoading ? (
                  <div className="flex justify-center py-6 sm:py-8">
                    <Loader2 className="h-6 w-6 sm:h-8 sm:w-8 animate-spin" />
                  </div>
                ) : achievements && Array.isArray(achievements) && achievements.length > 0 ? (
                  achievements.map((achievement: any) => (
                    <div key={achievement._id} className="border rounded-lg p-3 sm:p-4 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                        <h3 className="font-semibold text-foreground text-sm sm:text-base truncate">
                          {achievement.type === 'Our Star Performers' ? achievement.studentName : 
                           achievement.type === 'Recent Milestones' ? achievement.title :
                           achievement.type === 'Success Stories' ? achievement.studentName :
                           achievement.type === 'Awards & Recognition' ? achievement.title :
                           'Achievement'}
                        </h3>
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleEdit(achievement, 'achievement')}
                            className="h-8 w-8 sm:h-9 sm:w-auto px-2 sm:px-3"
                          >
                            <Edit className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="hidden sm:inline ml-1">Edit</span>
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDeleteClick(achievement, 'achievement')}
                            disabled={deleteAchievement.isPending}
                            className="h-8 w-8 sm:h-9 sm:w-auto px-2 sm:px-3"
                          >
                            <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="hidden sm:inline ml-1">Delete</span>
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    <div>
                      <Label>Type</Label>
                      <Input value={achievement.type} readOnly />
                    </div>
                    <div>
                      <Label>Year</Label>
                      <Input value={achievement.year || 'N/A'} readOnly />
                    </div>
                    <div>
                      <Label>Category</Label>
                      <Input value={achievement.category || 'N/A'} readOnly />
                    </div>
                  </div>
                  
                  {achievement.type === 'Our Star Performers' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 sm:col-span-2 lg:col-span-3">
                      <div>
                        <Label className="text-xs sm:text-sm">Student Name</Label>
                        <Input value={achievement.studentName || 'N/A'} readOnly className="text-xs sm:text-sm" />
                      </div>
                      <div>
                        <Label className="text-xs sm:text-sm">Percentage/Rank</Label>
                        <Input value={achievement.percentage || 'N/A'} readOnly className="text-xs sm:text-sm" />
                      </div>
                      <div>
                        <Label className="text-xs sm:text-sm">Exam</Label>
                        <Input value={achievement.exam || 'N/A'} readOnly className="text-xs sm:text-sm" />
                      </div>
                    </div>
                  )}
                  
                  {achievement.type === 'Recent Milestones' && (
                    <div className="sm:col-span-2 lg:col-span-3">
                      <Label className="text-xs sm:text-sm">Title</Label>
                      <Input value={achievement.title || 'N/A'} readOnly className="text-xs sm:text-sm" />
                    </div>
                  )}
                  
                  {achievement.type === 'Success Stories' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 sm:col-span-2 lg:col-span-3">
                      <div>
                        <Label className="text-xs sm:text-sm">Student Name</Label>
                        <Input value={achievement.studentName || 'N/A'} readOnly className="text-xs sm:text-sm" />
                      </div>
                      <div>
                        <Label className="text-xs sm:text-sm">Current Status</Label>
                        <Input value={achievement.percentage || 'N/A'} readOnly className="text-xs sm:text-sm" />
                      </div>
                      <div className="sm:col-span-2">
                        <Label className="text-xs sm:text-sm">Quote</Label>
                        <Textarea value={achievement.quote || 'N/A'} readOnly className="text-xs sm:text-sm" />
                      </div>
                    </div>
                  )}
                  
                  {achievement.type === 'Awards & Recognition' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 sm:col-span-2 lg:col-span-3">
                      <div>
                        <Label className="text-xs sm:text-sm">Title</Label>
                        <Input value={achievement.title || 'N/A'} readOnly className="text-xs sm:text-sm" />
                      </div>
                      <div>
                        <Label className="text-xs sm:text-sm">Institution</Label>
                        <Input value={achievement.institution || 'N/A'} readOnly className="text-xs sm:text-sm" />
                      </div>
                    </div>
                  )}
                </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    No achievements found. Add your first achievement to get started.
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Announcements Tab */}
          <TabsContent value="announcements" className="space-y-4 sm:space-y-6">
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl">Manage Announcements</CardTitle>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        className="btn-hero w-full sm:w-auto" 
                        onClick={() => { resetForms(); setActiveTab("announcements"); }}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        <span className="hidden xs:inline">Add Announcement</span>
                        <span className="xs:hidden">Add</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-lg sm:text-xl">
                          {editingItem ? 'Edit Announcement' : 'Add New Announcement'}
                        </DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleAnnouncementSubmit} className="space-y-3 sm:space-y-4">
                        {/* Category Selection */}
                        <div>
                          <Label>Category</Label>
                          <Select
                            value={announcementForm.category}
                            onValueChange={(value) => setAnnouncementForm({...announcementForm, category: value})}
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select announcement category" />
                            </SelectTrigger>
                            <SelectContent>
                              {categoriesLoading ? (
                                <div className="px-2 py-1.5 text-sm text-muted-foreground">Loading categories...</div>
                              ) : (
                                (categories as string[])?.map((category) => (
                                  <SelectItem key={category} value={category}>
                                    {category}
                                  </SelectItem>
                                ))
                              )}
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Category-specific form */}
                        {announcementForm.category && renderCategoryForm()}

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                          <Button 
                            type="submit" 
                            className="btn-hero w-full sm:w-auto" 
                            disabled={createAnnouncement.isPending || updateAnnouncement.isPending}
                          >
                            {(createAnnouncement.isPending || updateAnnouncement.isPending) && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                            <span className="hidden xs:inline">{editingItem ? 'Update Announcement' : 'Create Announcement'}</span>
                            <span className="xs:hidden">{editingItem ? 'Update' : 'Create'}</span>
                          </Button>
                          <Button 
                            type="button" 
                            variant="outline" 
                            onClick={resetForms}
                            className="w-full sm:w-auto"
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {announcementsLoading ? (
                  <div className="flex justify-center py-6 sm:py-8">
                    <Loader2 className="h-6 w-6 sm:h-8 sm:w-8 animate-spin" />
                  </div>
                ) : announcements && Array.isArray(announcements) && announcements.length > 0 ? (
                  announcements.map((announcement: any) => (
                    <div key={announcement._id} className="border rounded-lg p-3 sm:p-4 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                        <h3 className="font-semibold text-foreground text-sm sm:text-base truncate">
                          {announcement.title}
                        </h3>
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleEdit(announcement, 'announcement')}
                            className="h-8 w-8 sm:h-9 sm:w-auto px-2 sm:px-3"
                          >
                            <Edit className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="hidden sm:inline ml-1">Edit</span>
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDeleteClick(announcement, 'announcement')}
                            disabled={deleteAnnouncement.isPending}
                            className="h-8 w-8 sm:h-9 sm:w-auto px-2 sm:px-3"
                          >
                            <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="hidden sm:inline ml-1">Delete</span>
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <Label>Category</Label>
                          <Input value={announcement.category} readOnly />
                        </div>
                      </div>
                      <div>
                        <Label className="text-xs sm:text-sm">Content</Label>
                        <Textarea value={announcement.content} readOnly rows={4} className="text-xs sm:text-sm" />
                      </div>
                      <div className="sm:col-span-2">
                        <CategoryDataDisplay announcement={announcement} />
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    No announcements found. Add your first announcement to get started.
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>

        {/* Confirmation Dialog */}
        <ConfirmationDialog
          open={deleteDialog.open}
          onOpenChange={(open) => setDeleteDialog({ ...deleteDialog, open })}
          title="Confirm Deletion"
          description={`Are you sure you want to delete this ${deleteDialog.type}? This action cannot be undone.`}
          confirmText="Delete"
          cancelText="Cancel"
          onConfirm={handleDeleteConfirm}
          isLoading={
            (deleteDialog.type === 'course' && deleteCourse.isPending) ||
            (deleteDialog.type === 'faculty' && deleteFaculty.isPending) ||
            (deleteDialog.type === 'achievement' && deleteAchievement.isPending) ||
            (deleteDialog.type === 'announcement' && deleteAnnouncement.isPending)
          }
        />
      </div>
    </div>
  );
};

export default Admin;