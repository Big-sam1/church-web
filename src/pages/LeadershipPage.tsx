import React from 'react';
import { Card } from '../components/ui/Card';
import { Mail, Phone, Twitter, Facebook, Linkedin } from 'lucide-react';
import p15 from '../images/p15.jpg';
import p12 from '../images/p12.jpg';
import p8 from '../images/p8.jpg';
const leaders = [
  {
    name: 'Rev. Dr. Samuel Johnson',
    role: 'Senior Pastor',
    image: p15,
    bio: "Dr. Samuel Johnson has served as Senior Pastor of Jesus Is King Ministry since 2008. He holds a Doctorate in Ministry from Grace Theological Seminary. His passion is to see people liberated by the truth of God's Word. He is married to Elizabeth, and they have three adult children.",
    email: 'samuel.j@jesusisking.org',
    phone: '+250 786 139 402'
  },
  {
    name: 'Pastor Sarah Williams',
    role: 'Associate Pastor',
    image: p12,
    bio: "Pastor Sarah oversees our Discipleship and Women's Ministries. She is a gifted teacher and counselor with a heart for helping people navigate life's challenges with biblical wisdom. She joined our staff in 2015 after serving as a missionary in Southeast Asia.",
    email: 'sarah.w@jesusisking.org',
    phone: '+250 786 139 402'
  },
  {
    name: 'Rev. David Okonjo',
    role: 'Youth & Young Adults Pastor',
    image: p8,
    bio: 'Pastor David brings dynamic energy to our youth ministry. He is passionate about raising up the next generation of leaders who are unashamed of the Gospel. He organizes our annual youth camps and campus outreach programs.',
    email: 'david.o@jesusisking.org',
    phone: '+250 786 139 402'
  }];

export function LeadershipPage() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-text mb-4">Our Leadership</h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Dedicated servants committed to shepherding the flock with wisdom,
            integrity, and love.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {leaders.map((leader, index) =>
          <div
            key={leader.name}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-start`}>

            <div className="w-full lg:w-1/3">
              <Card className="overflow-hidden">
                <div className="overflow-hidden rounded-t-xl bg-slate-950/10">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-auto block" />
                </div>

                <div className="p-6 bg-surface">
                  <div className="flex justify-center space-x-4">
                    <a
                      href="#"
                      className="p-2 bg-background rounded-full hover:text-primary transition-colors">

                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-background rounded-full hover:text-primary transition-colors">

                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-background rounded-full hover:text-primary transition-colors">

                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl font-bold text-text mb-2">
                {leader.name}
              </h2>
              <p className="text-xl text-primary font-medium mb-6">
                {leader.role}
              </p>

              <div className="prose prose-lg text-text-muted mb-8">
                <p>{leader.bio}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center p-4 bg-surface rounded-lg border border-border">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  <span className="text-text">{leader.email}</span>
                </div>
                <div className="flex items-center p-4 bg-surface rounded-lg border border-border">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  <span className="text-text">{leader.phone}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>);

}