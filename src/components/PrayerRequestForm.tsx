import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Card } from './ui/Card';
import { Send, Lock, Globe } from 'lucide-react';
export function PrayerRequestForm() {
  const [privacy, setPrivacy] = useState<'private' | 'public'>('private');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };
  if (submitted) {
    return (
      <Card className="p-8 text-center bg-surface border-primary/20">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-text mb-2">
          Prayer Request Sent
        </h3>
        <p className="text-text-muted mb-6">
          Thank you for sharing. Our prayer team will be praying for you.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Send Another Request
        </Button>
      </Card>);

  }
  return (
    <Card className="p-6 md:p-8 bg-surface">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-text mb-2">
          Share Your Prayer Request
        </h3>
        <p className="text-text-muted">
          We believe in the power of prayer. How can we pray for you today?
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Your Name" placeholder="John Doe" required />
          <Input
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            required />
          
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-1">
            Your Prayer Request
          </label>
          <textarea
            className="w-full px-4 py-3 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-text placeholder-text-muted min-h-[120px]"
            placeholder="Please share your prayer needs here..."
            required />
          
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setPrivacy('private')}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${privacy === 'private' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-background text-text-muted border border-border hover:bg-surface'}`}>
              
              <Lock className="w-4 h-4 mr-2" />
              Keep Private
            </button>
            <button
              type="button"
              onClick={() => setPrivacy('public')}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${privacy === 'public' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-background text-text-muted border border-border hover:bg-surface'}`}>
              
              <Globe className="w-4 h-4 mr-2" />
              Share on Prayer Wall
            </button>
          </div>

          <Button type="submit" isLoading={isSubmitting}>
            Submit Request
          </Button>
        </div>
      </form>
    </Card>);

}