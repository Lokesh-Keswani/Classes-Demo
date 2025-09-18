import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ExamUpdatesFormProps {
  formData: any;
  setFormData: (data: any) => void;
}

export const ExamUpdatesForm = ({ formData, setFormData }: ExamUpdatesFormProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label>Exam Title</Label>
        <Input
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          placeholder="e.g., Class 10th Board Exam Schedule"
          required
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>Exam Type</Label>
          <Select
            value={formData.examType || ""}
            onValueChange={(value) => setFormData({...formData, examType: value})}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select exam type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Board Exam">Board Exam</SelectItem>
              <SelectItem value="Mock Test">Mock Test</SelectItem>
              <SelectItem value="Unit Test">Unit Test</SelectItem>
              <SelectItem value="Mid Term">Mid Term</SelectItem>
              <SelectItem value="Final Exam">Final Exam</SelectItem>
              <SelectItem value="Competitive Exam">Competitive Exam</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label>Class/Standard</Label>
          <Select
            value={formData.class || ""}
            onValueChange={(value) => setFormData({...formData, class: value})}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Class 8th">Class 8th</SelectItem>
              <SelectItem value="Class 9th">Class 9th</SelectItem>
              <SelectItem value="Class 10th">Class 10th</SelectItem>
              <SelectItem value="Class 11th">Class 11th</SelectItem>
              <SelectItem value="Class 12th">Class 12th</SelectItem>
              <SelectItem value="All Classes">All Classes</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>Exam Date</Label>
          <Input
            type="date"
            value={formData.examDate ? new Date(formData.examDate).toISOString().split('T')[0] : ""}
            onChange={(e) => setFormData({...formData, examDate: e.target.value})}
          />
        </div>
        
        <div>
          <Label>Reporting Time</Label>
          <Input
            type="time"
            value={formData.reportingTime || ""}
            onChange={(e) => setFormData({...formData, reportingTime: e.target.value})}
          />
        </div>
      </div>

      <div>
        <Label>Exam Instructions</Label>
        <Textarea
          value={formData.content}
          onChange={(e) => setFormData({...formData, content: e.target.value})}
          placeholder="Important instructions for students..."
          rows={4}
          required
        />
      </div>

      <div>
        <Label>Additional Information</Label>
        <Textarea
          value={formData.additionalInfo || ""}
          onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
          placeholder="Any additional details, venue information, etc."
          rows={3}
        />
      </div>
    </div>
  );
};
