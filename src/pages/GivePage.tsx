import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import {
  CreditCard,
  Smartphone,
  Building,
  Heart,
  CheckCircle } from
'lucide-react';
export function GivePage() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-text mb-4">Giving</h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            "Each of you should give what you have decided in your heart to
            give, not reluctantly or under compulsion, for God loves a cheerful
            giver." - 2 Corinthians 9:7
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Online Giving */}
          <Card className="p-8 border-t-4 border-primary text-center">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <CreditCard className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-4">Give Online</h3>
            <p className="text-text-muted mb-8">
              Secure, simple, and fast. Give a one-time gift or set up recurring
              donations.
            </p>
            <div className="space-y-3">
              <Button className="w-full" variant="primary">
                Give via Stripe
              </Button>
              <Button className="w-full" variant="outline">
                Give via PayPal
              </Button>
            </div>
          </Card>

          {/* Mobile Money */}
          <Card className="p-8 border-t-4 border-secondary text-center">
            <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-4">Mobile Money</h3>
            <p className="text-text-muted mb-6">
              Send your offering directly from your phone using mobile money
              services.
            </p>
            <div className="space-y-4 text-left bg-surface p-4 rounded-lg">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span className="font-semibold text-text">MTN Mobile Money:</span>
                <span className="font-mono text-primary">+250 786 139 402</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span className="font-semibold text-text">Airtel Money:</span>
                <span className="font-mono text-primary">+250 786 139 402</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-text">Momo Code / Paybill:</span>
                <span className="font-mono text-primary">786139</span>
              </div>
            </div>
          </Card>

          {/* Bank Transfer */}
          <Card className="p-8 border-t-4 border-accent text-center">
            <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-4">Bank Transfer</h3>
            <p className="text-text-muted mb-6">
              Direct bank transfer details for tithes and offerings.
            </p>
            <div className="text-left bg-surface p-4 rounded-lg space-y-2 text-sm">
              <p>
                <span className="font-semibold text-text">Bank Name:</span>{' '}
                <span className="text-text-muted">Kingdom Bank</span>
              </p>
              <p>
                <span className="font-semibold text-text">Account Name:</span>{' '}
                <span className="text-text-muted">Jesus Is King Ministry</span>
              </p>
              <p>
                <span className="font-semibold text-text">Account No:</span>{' '}
                <span className="text-text-muted font-mono">
                  1234 5678 9012
                </span>
              </p>
              <p>
                <span className="font-semibold text-text">Branch:</span>{' '}
                <span className="text-text-muted">Main Branch</span>
              </p>
            </div>
          </Card>
        </div>

        {/* Impact Section */}
        <div className="bg-surface rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">
              Your Giving Makes a Difference
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Because of your generosity, we are able to support missions, help
              the needy, and spread the Gospel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            'Supported 50+ families with food this month',
            'Sent 3 mission teams to remote areas',
            'Provided school supplies for 200 children'].
            map((item, idx) =>
            <div key={idx} className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                <p className="text-text font-medium">{item}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>);

}