import React from 'react';
import { Card } from './ui/Card';
import { Facebook, Twitter, Mail, Globe } from 'lucide-react';
import { localImages } from '../images/index';
interface TeamMember {
  name: string;
  role: string;
  country: string;
  image: string;
  bio?: string;
}
const team: TeamMember[] = [
  {
    name: 'Rev. Dr. Samuel Johnson',
    role: 'Senior Pastor',
    country: 'Rwanda',
    image: localImages.p15,
    bio: 'Pastor Sam has served Jesus Is King Ministry with a passion for biblical teaching.'
  },
  {
    name: 'Pastor Sarah Williams',
    role: 'Associate Pastor',
    country: 'Rwanda',
    image: localImages.p12,
    bio: "Sarah leads our women's ministry and community outreach programs."
  },
  {
    name: 'Rev. David Okonjo',
    role: 'Youth Pastor',
    country: 'Rwanda',
    image: localImages.p5,
    bio: 'David brings energy and deep theological insight to our youth programs.'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Worship Director',
    country: 'Rwanda',
    image: localImages.p4,
    bio: 'Elena leads our worship team with a heart for praise.'
  }];

export function TeamSection() {
  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text mb-4">
            Our Leadership Team
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Meet the dedicated men and women who serve our community and lead us
            in our spiritual journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) =>
            <Card key={member.name} hover className="group overflow-hidden">
              <div className="relative overflow-hidden rounded-t-xl bg-slate-950/10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 z-10">
                  <div className="flex space-x-4 text-white">
                    <Facebook className="w-5 h-5 hover:text-primary cursor-pointer" />
                    <Twitter className="w-5 h-5 hover:text-primary cursor-pointer" />
                    <Mail className="w-5 h-5 hover:text-primary cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-text mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-2">
                  {member.role}
                </p>
                <div className="flex items-center justify-center text-text-muted text-xs mb-3">
                  <Globe className="w-3 h-3 mr-1" />
                  {member.country}
                </div>
                {member.bio &&
                  <p className="text-text-muted text-sm line-clamp-2">
                    {member.bio}
                  </p>
                }
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>);

}