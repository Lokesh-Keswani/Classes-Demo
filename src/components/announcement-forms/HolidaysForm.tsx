import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface HolidaysFormProps {
  formData: any;
  setFormData: (data: any) => void;
}

export const HolidaysForm = ({ formData, setFormData }: HolidaysFormProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label>Holiday Title</Label>
        <Input
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          placeholder="e.g., Diwali Holidays 2024"
          required
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>Holiday Type</Label>
          <Select
            value={formData.holidayType || ""}
            onValueChange={(value) => setFormData({...formData, holidayType: value})}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select holiday type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="National Holiday">National Holiday</SelectItem>
              <SelectItem value="Religious Holiday">Religious Holiday</SelectItem>
              <SelectItem value="Festival">Festival</SelectItem>
              <SelectItem value="Mid-term Break">Mid-term Break</SelectItem>
              <SelectItem value="Summer Vacation">Summer Vacation</SelectItem>
              <SelectItem value="Winter Break">Winter Break</SelectItem>
              <SelectItem value="Emergency Holiday">Emergency Holiday</SelectItem>
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
              <SelectItem value="Primary (1-5)">Primary (1-5)</SelectItem>
              <SelectItem value="Middle (6-8)">Middle (6-8)</SelectItem>
              <SelectItem value="Secondary (9-10)">Secondary (9-10)</SelectItem>
              <SelectItem value="Senior (11-12)">Senior (11-12)</SelectItem>
              <SelectItem value="Specific Classes">Specific Classes</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>Start Date</Label>
          <Input
            type="date"
            value={formData.startDate ? new Date(formData.startDate).toISOString().split('T')[0] : ""}
            onChange={(e) => setFormData({...formData, startDate: e.target.value})}
            required
          />
        </div>
        
        <div>
          <Label>End Date</Label>
          <Input
            type="date"
            value={formData.endDate ? new Date(formData.endDate).toISOString().split('T')[0] : ""}
            onChange={(e) => setFormData({...formData, endDate: e.target.value})}
            required
          />
        </div>
      </div>

      <div>
        <Label>Holiday Description</Label>
        <Textarea
          value={formData.content}
          onChange={(e) => setFormData({...formData, content: e.target.value})}
          placeholder="Details about the holiday, any special arrangements, etc."
          rows={4}
          required
        />
      </div>

      <div>
        <Label>Important Notes</Label>
        <Textarea
          value={formData.importantNotes || ""}
          onChange={(e) => setFormData({...formData, importantNotes: e.target.value})}
          placeholder="Any important instructions for students and parents..."
          rows={3}
        />
      </div>

      <div>
        <Label>Reopening Information</Label>
        <Textarea
          value={formData.reopeningInfo || ""}
          onChange={(e) => setFormData({...formData, reopeningInfo: e.target.value})}
          placeholder="Information about when classes resume, any schedule changes, etc."
          rows={2}
        />
      </div>
    </div>
  );
};
