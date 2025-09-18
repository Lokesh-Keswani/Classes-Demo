import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface OtherFormProps {
  formData: any;
  setFormData: (data: any) => void;
}

export const OtherForm = ({ formData, setFormData }: OtherFormProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label>Title</Label>
        <Input
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          placeholder="Announcement title"
          required
        />
      </div>
      
      <div>
        <Label>Description</Label>
        <Textarea
          value={formData.content}
          onChange={(e) => setFormData({...formData, content: e.target.value})}
          placeholder="Detailed description of the announcement..."
          rows={4}
          required
        />
      </div>
    </div>
  );
};

