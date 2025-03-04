
'use client'
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useTranslations } from "next-intl";
import { FormData, sendMessage } from "@/lib/server";
import contacts from "@/constants/contacts";

const Contact = () => {
  const { toast } = useToast();
  const contact_t = useTranslations('Contact');
  const toast_t = useTranslations('Toast');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await sendMessage(formData)

    toast({
      title: toast_t("success"),
      description: toast_t("success_description"),
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })  
    setIsSubmitting(false);
    
  };

  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="section-title">{contact_t("title")}</h2>
          <p className="section-subtitle">
            {contact_t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 animate-fade-in">
            <div className="glass-card rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">{contact_t("message_title")}</h3>
              <p className="text-muted-foreground mb-8">
                {contact_t("message_description" )}
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
                    <p className="text-base">{contacts.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">{contact_t("phone")}</h4>
                    <p className="text-base">{contacts.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">{contact_t("location")}</h4>
                    <p className="text-base">{contacts.contact.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 animate-fade-in">
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {contact_t("form_name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={contact_t("form_name_placeholder")}
                    required
                    className="bg-white/50 border-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {contact_t("form_email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={contact_t("form_email_placeholder")}
                    required
                    className="bg-white/50 border-white/20"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="subject" className="text-sm font-medium">
                  {contact_t("form_subject")}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={contact_t("form_subject_placeholder")}
                  required
                  className="bg-white/50 border-white/20"
                />
              </div>

              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-sm font-medium">
                  {contact_t("form_message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={contact_t("form_message_placeholder")}
                  rows={5}
                  required
                  className="bg-white/50 border-white/20"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? contact_t("form_sending") : contact_t("form_submit")}
                <Send size={16} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
