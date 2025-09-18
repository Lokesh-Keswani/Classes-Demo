import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AcademicFormProps {
  formData: any;
  setFormData: (data: any) => void;
}

export const AcademicForm = ({ formData, setFormData }: AcademicFormProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label>Academic Update Title</Label>
        <Input
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          placeholder="e.g., New Curriculum Implementation"
          required
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>Update Type</Label>
          <Select
            value={formData.updateType || ""}
            onValueChange={(value) => setFormData({...formData, updateType: value})}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select update type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Curriculum Change">Curriculum Change</SelectItem>
              <SelectItem value="New Course Introduction">New Course Introduction</SelectItem>
              <SelectItem value="Academic Calendar">Academic Calendar</SelectItem>
              <SelectItem value="Assessment Policy">Assessment Policy</SelectItem>
              <SelectItem value="Grading System">Grading System</SelectItem>
              <SelectItem value="Study Material">Study Material</SelectItem>
              <SelectItem value="Library Updates">Library Updates</SelectItem>
              <SelectItem value="Technology Integration">Technology Integration</SelectItem>
              <SelectItem value="Academic Achievement">Academic Achievement</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label>Affected Classes</Label>
          <Select
            value={formData.affectedClasses || ""}
            onValueChange={(value) => setFormData({...formData, affectedClasses: value})}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select affected classes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Classes">All Classes</SelectItem>
              <SelectItem value="Class 8th">Class 8th</SelectItem>
              <SelectItem value="Class 9th">Class 9th</SelectItem>
              <SelectItem value="Class 10th">Class 10th</SelectItem>
              <SelectItem value="Class 11th">Class 11th</SelectItem>
              <SelectItem value="Class 12th">Class 12th</SelectItem>
              <SelectItem value="Multiple Classes">Multiple Classes</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>Effective Date</Label>
          <Input
            type="date"
            value={formData.effectiveDate ? new Date(formData.effectiveDate).toISOString().split('T')[0] : ""}
            onChange={(e) => setFormData({...formData, effectiveDate: e.target.value})}
          />
        </div>
        
        <div>
          <Label>Priority Level</Label>
          <Select
            value={formData.priority || ""}
            onValueChange={(value) => setFormData({...formData, priority: value})}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="High">High Priority</SelectItem>
              <SelectItem value="Medium">Medium Priority</SelectItem>
              <SelectItem value="Low">Low Priority</SelectItem>
              <SelectItem value="Informational">Informational Only</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label>Subject/Department</Label>
        <Select
          value={formData.subject || ""}
          onValueChange={(value) => setFormData({...formData, subject: value})}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select subject/department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Subjects">All Subjects</SelectItem>
            <SelectItem value="Mathematics">Mathematics</SelectItem>
            <SelectItem value="Science">Science</SelectItem>
            <SelectItem value="English">English</SelectItem>
            <SelectItem value="Social Studies">Social Studies</SelectItem>
            <SelectItem value="Hindi">Hindi</SelectItem>
            <SelectItem value="Computer Science">Computer Science</SelectItem>
            <SelectItem value="Physical Education">Physical Education</SelectItem>
            <SelectItem value="Arts">Arts</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Academic Update Details</Label>
        <Textarea
          value={formData.content}
          onChange={(e) => setFormData({...formData, content: e.target.value})}
          placeholder="Detailed information about the academic update, changes, new policies, etc."
          rows={4}
          required
        />
      </div>

      <div>
        <Label>Implementation Details</Label>
        <Textarea
          value={formData.implementationDetails || ""}
          onChange={(e) => setFormData({...formData, implementationDetails: e.target.value})}
          placeholder="How this will be implemented, timeline, requirements, etc."
          rows={3}
        />
      </div>

      <div>
        <Label>Student Action Required</Label>
        <Textarea
          value={formData.studentAction || ""}
          onChange={(e) => setFormData({...formData, studentAction: e.target.value})}
          placeholder="What students need to do, any preparation required, etc."
          rows={2}
        />
      </div>
    </div>
  );
};
