import React, { lazy } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { PrayerRequestForm } from '../components/PrayerRequestForm';
export function ContactPage() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-text mb-4">Contact Us</h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions or prayer
            requests.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info & Form */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-text mb-1">Visit Us</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Jesus Is King Ministry
                    <br />
                    Nyagatare Town, Nyagatare District
                    <br />
                    Eastern Province, Rwanda
                  </p>
                </div>
              </Card>
              <Card className="p-6 flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-text mb-1">Call Us</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    +250 786 139 402
                    <br />
                    Mon-Fri: 8am-5pm | Sat: 9am-1pm
                  </p>
                </div>
              </Card>
              <Card className="p-6 flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-text mb-1">Email Us</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    info@jesusisking.org
                    <br />
                    prayer@jesusisking.org
                  </p>
                </div>
              </Card>
              <Card className="p-6 flex items-start space-x-4">
                <MessageSquare className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-text mb-1">WhatsApp</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    +250 786 139 402
                    <br />
                    Chat with us
                  </p>
                </div>
              </Card>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-text mb-6">
                Send a Message
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="Name" placeholder="Your name" />
                  <Input label="Email" type="email" placeholder="Your email" />
                </div>
                <Input label="Subject" placeholder="How can we help?" />
                <div>
                  <label className="block text-sm font-medium text-text mb-1">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-text placeholder-text-muted min-h-[120px]"
                    placeholder="Write your message here..." />
                  
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </Card>
          </div>

          {/* Map & Prayer Request */}
          <div className="space-y-8">
            <div className="h-[400px] bg-surface rounded-xl overflow-hidden shadow-md border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153169!3d-37.81732344202116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sus!4v1645498263421!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{
                  border: 0
                }}
                allowFullScreen
                loading="lazy"
                title="Church Location">
              </iframe>
            </div>

            <PrayerRequestForm />
          </div>
        </div>
      </div>
    </div>);

}