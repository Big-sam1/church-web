import React from 'react';
import { TeamSection } from '../components/TeamSection';
import { Card } from '../components/ui/Card';
import { CheckCircle, Heart, BookOpen, Users, Flame, Globe, Sprout } from 'lucide-react';
import p15 from '../images/p15.jpg';
export function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
            About Jesus Is King Ministry
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            "Jesus Reigns Forever — Hope, Faith, and Salvation for All."
          </p>
        </div>
      </div>

      {/* History & Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text mb-6">Our Story</h2>
              <div className="prose prose-lg text-text-muted">
                <p className="mb-4">
                  Jesus Is King is a Christian ministry dedicated to glorifying Jesus Christ through worship, prayer, biblical teaching, evangelism, discipleship, and community outreach.
                </p>
                <p className="mb-4">
                  We are committed to sharing God's love, strengthening believers, and bringing hope to every generation through the life-changing message of the Gospel.
                </p>
                <p>
                  Today, we continue to build a Christ-centered community where lives are transformed by the power of God's Word and every nation comes to know that Jesus Christ is King.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl bg-slate-950/5">
              <img
                src={p15}
                alt="Church History"
                className="w-full h-auto block rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-l-4 border-primary">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-text">Our Mission</h3>
              </div>
              <p className="text-text-muted text-lg">
                To glorify God by proclaiming the Gospel of Jesus Christ, teaching the Holy Scriptures, making disciples, and serving communities with love, compassion, and integrity according to the will of God.
              </p>
            </Card>
            <Card className="p-8 border-l-4 border-secondary">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-secondary/10 rounded-full mr-4">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-text">Our Vision</h3>
              </div>
              <p className="text-text-muted text-lg">
                To build a Christ-centered community where lives are transformed by the power of God's Word, believers grow in faith, and every nation comes to know that Jesus Christ is King.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Motto & Scripture Theme */}
      <section className="py-16 bg-background border-t border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-block px-6 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm tracking-wide uppercase">
            Our Motto: "Christ Above All, Love for All."
          </div>
          <blockquote className="text-2xl md:text-3xl text-text font-medium italic border-l-4 border-primary pl-6 py-2 text-left">
            "Therefore God exalted Him to the highest place and gave Him the name that is above every name, that at the name of Jesus every knee should bow... and every tongue acknowledge that Jesus Christ is Lord, to the glory of God the Father."
            <footer className="text-base text-text-muted mt-4 font-normal not-italic font-bold">
              — Philippians 2:9–11 (NIV)
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">
              Our Core Values
            </h2>
            <p className="text-text-muted">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Christ-Centered Living',
                icon: <Heart className="w-6 h-6" />,
                desc: 'We place Jesus Christ at the center of our lives and ministry.'
              },
              {
                title: 'Biblical Truth',
                icon: <BookOpen className="w-6 h-6" />,
                desc: 'We stand firmly on the authority of Holy Scriptures.'
              },
              {
                title: 'Prayer & Worship',
                icon: <Flame className="w-6 h-6" />,
                desc: 'Connecting with God through prayer and passionate praise.'
              },
              {
                title: 'Love & Compassion',
                icon: <Heart className="w-6 h-6" />,
                desc: 'Serving others with love, mercy, and kindness.'
              },
              {
                title: 'Unity & Fellowship',
                icon: <Users className="w-6 h-6" />,
                desc: 'Growing together in unity and fellowship.'
              },
              {
                title: 'Evangelism & Outreach',
                icon: <Globe className="w-6 h-6" />,
                desc: 'Proclaiming the Gospel and serving communities.'
              },
              {
                title: 'Integrity & Holiness',
                icon: <CheckCircle className="w-6 h-6" />,
                desc: 'Living with integrity, transparency, and holiness.'
              },
              {
                title: 'Spiritual Growth',
                icon: <Sprout className="w-6 h-6" />,
                desc: 'Discipling believers and encouraging spiritual maturity.'
              }].
              map((value, idx) =>
                <Card
                  key={idx}
                  className="p-6 text-center hover:shadow-md transition-shadow">

                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-bold text-lg text-text mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-muted text-sm">{value.desc}</p>
                </Card>
              )}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />
    </div>);

}