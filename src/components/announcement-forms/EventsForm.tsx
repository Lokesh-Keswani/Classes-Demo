import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface EventsFormProps {
  formData: any;
  setFormData: (data: any) => void;
}

export const EventsForm = ({ formData, setFormData }: EventsFormProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label>Event Title</Label>
        <Input
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          placeholder="e.g., Annual Sports Day 2024"
          required
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>Event Type</Label>
          <Select
            value={formData.eventType || ""}
            onValueChange={(value) => setFormData({...formData, eventType: value})}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Sports Event">Sports Event</SelectItem>
              <SelectItem value="Cultural Event">Cultural Event</SelectItem>
              <SelectItem value="Academic Event">Academic Event</SelectItem>
              <SelectItem value="Competition">Competition</SelectItem>
              <SelectItem value="Workshop">Workshop</SelectItem>
              <SelectItem value="Seminar">Seminar</SelectItem>
              <SelectItem value="Parent-Teacher Meeting">Parent-Teacher Meeting</SelectItem>
              <SelectItem value="Celebration">Celebration</SelectItem>
              <SelectItem value="Field Trip">Field Trip</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label>Target Audience</Label>
          <Select
            value={formData.targetAudience || ""}
            onValueChange={(value) => setFormData({...formData, targetAudience: value})}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select target audience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Students">All Students</SelectItem>
              <SelectItem value="Primary Students">Primary Students</SelectItem>
              <SelectItem value="Middle School">Middle School</SelectItem>
              <SelectItem value="Secondary Students">Secondary Students</SelectItem>
              <SelectItem value="Senior Students">Senior Students</SelectItem>
              <SelectItem value="Parents">Parents</SelectItem>
              <SelectItem value="Faculty">Faculty</SelectItem>
              <SelectItem value="All Stakeholders">All Stakeholders</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>Event Date</Label>
          <Input
            type="date"
            value={formData.eventDate ? new Date(formData.eventDate).toISOString().split('T')[0] : ""}
            onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
            required
          />
        </div>
        
        <div>
          <Label>Event Time</Label>
          <Input
            type="time"
            value={formData.eventTime || ""}
            onChange={(e) => setFormData({...formData, eventTime: e.target.value})}
          />
        </div>
      </div>

      <div>
        <Label>Venue/Location</Label>
        <Input
          value={formData.venue || ""}
          onChange={(e) => setFormData({...formData, venue: e.target.value})}
          placeholder="e.g., School Auditorium, Sports Ground, etc."
        />
      </div>

      <div>
        <Label>Event Description</Label>
        <Textarea
          value={formData.content}
          onChange={(e) => setFormData({...formData, content: e.target.value})}
          placeholder="Detailed description of the event, activities, highlights, etc."
          rows={4}
          required
        />
      </div>

      <div>
        <Label>Participation Details</Label>
        <Textarea
          value={formData.participationDetails || ""}
          onChange={(e) => setFormData({...formData, participationDetails: e.target.value})}
          placeholder="How to participate, registration requirements, dress code, etc."
          rows={3}
        />
      </div>

      <div>
        <Label>Important Instructions</Label>
        <Textarea
          value={formData.instructions || ""}
          onChange={(e) => setFormData({...formData, instructions: e.target.value})}
          placeholder="Special instructions, what to bring, safety guidelines, etc."
          rows={2}
        />
      </div>
    </div>
  );
};
