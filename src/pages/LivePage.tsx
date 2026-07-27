import React from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Calendar, Clock, Share2, MessageCircle } from 'lucide-react';
export function LivePage() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Main Stream Area */}
      <section className="bg-black text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <h1 className="text-xl md:text-2xl font-bold">
              LIVE: Sunday Morning Service
            </h1>
          </div>

          <div className="aspect-video w-full bg-slate-900 rounded-xl overflow-hidden shadow-2xl mb-6">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/live_stream?channel=UC_x5XG1OV2P6uZZ5FSM9Ttw"
              title="Live Stream"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
            {/* Note: This is a placeholder embed URL. In a real app, you'd use a real channel ID or video ID */}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-1">
                Walking in Faith - Part 3
              </h2>
              <p className="text-slate-400">
                Rev. Dr. Samuel Johnson • Started at 10:30 AM
              </p>
            </div>
            <div className="flex space-x-3">
              <Button variant="secondary" size="sm">
                <Share2 className="w-4 h-4 mr-2" /> Share
              </Button>
              <Button variant="primary" size="sm">
                <MessageCircle className="w-4 h-4 mr-2" /> Live Chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Info */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Streams */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-text mb-6">
              Upcoming Broadcasts
            </h3>
            <div className="space-y-4">
              {[
              {
                title: 'Midweek Bible Study',
                date: 'Wednesday',
                time: '7:00 PM',
                desc: 'Deep dive into the Book of Romans'
              },
              {
                title: 'Youth Night Live',
                date: 'Friday',
                time: '6:30 PM',
                desc: 'Worship and word for the next generation'
              },
              {
                title: 'Sunday Morning Service',
                date: 'Sunday',
                time: '8:30 AM & 10:30 AM',
                desc: 'Weekly worship gathering'
              }].
              map((event, idx) =>
              <Card
                key={idx}
                className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                
                  <div className="bg-surface p-4 rounded-lg text-center min-w-[100px] border border-border">
                    <div className="text-primary font-bold text-lg">
                      {event.date}
                    </div>
                    <div className="text-text-muted text-sm">{event.time}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-text">
                      {event.title}
                    </h4>
                    <p className="text-text-muted">{event.desc}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Set Reminder
                  </Button>
                </Card>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 bg-primary text-white">
              <h3 className="text-xl font-bold mb-4">First Time Watching?</h3>
              <p className="mb-6 opacity-90">
                We're so glad you're here! We'd love to connect with you and
                help you get plugged into our community.
              </p>
              <Button
                variant="secondary"
                className="w-full bg-white text-primary hover:bg-slate-100">
                
                Connect With Us
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-text mb-4">Need Prayer?</h3>
              <p className="text-text-muted mb-6">
                Our prayer team is available online during the service to pray
                with you.
              </p>
              <Button variant="outline" className="w-full">
                Request Prayer
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>);

}