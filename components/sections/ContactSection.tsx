'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { submitContactForm } from '@/app/actions/contact'
import { siteConfig } from '@/lib/siteConfig'

interface ContactSectionProps {
  id?: string
  title?: string
  description?: string
  backgroundColor?: string
  textColor?: string
}

export function ContactSection({
  id = 'contact',
  title = siteConfig.contact.title,
  description = siteConfig.contact.description,
  backgroundColor = 'bg-gradient-to-b from-background to-secondary/30',
  textColor = 'text-foreground',
}: ContactSectionProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)
    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        setSubmitStatus('success')
        // Reset form and clear status after 5 seconds
        const form = document.querySelector('form') as HTMLFormElement
        form?.reset()
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id={id} className={`${backgroundColor} ${textColor} py-20 md:py-32 relative overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse duration-8" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse duration-10" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{title}</h2>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Info - Left Side */}
          <div className="animate-fade-in-left space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Let's Talk</h3>
              <p className="text-muted-foreground leading-relaxed">
                Have questions? We're here to help. Reach out using any of these methods and we'll get back to you quickly.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-5">
              {siteConfig.business.email && (
                <div className="group p-4 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 cursor-pointer">
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Email</p>
                  <a
                    href={`mailto:${siteConfig.business.email}`}
                    className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    {siteConfig.business.email}
                  </a>
                </div>
              )}

              {/* {siteConfig.business.phone && (
                <div className="group p-4 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 cursor-pointer">
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Phone</p>
                  <a
                    href={`tel:${siteConfig.business.phone}`}
                    className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    {siteConfig.business.phone}
                  </a>
                </div>
              )} */}

              {siteConfig.business.whatsapp && (
                <div className="group p-4 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 cursor-pointer">
                  <p className="text-sm font-semibold text-muted-foreground mb-1">WhatsApp</p>
                  <a
                    href={`https://wa.me/${siteConfig.business.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                  >
                    Chat Now
                    <span className="text-sm">→</span>
                  </a>
                </div>
              )}

              {/* {siteConfig.business.address && (
                <div className="p-4 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-300">
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Address</p>
                  <p className="text-muted-foreground">{siteConfig.business.address}</p>
                </div>
              )} */}
            </div>

            {/* Response Time Badge */}
            <div className=" rounded-xl bg-accent/10 border border-accent/20">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 bg-accent rounded-full" />
                <div>
                  <p className="font-semibold text-sm">Fast Response</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    {siteConfig.contact.responseTime}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="animate-fade-in-right">
            <form action={handleSubmit} className="space-y-5 bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  disabled={isLoading}
                  className="w-full h-11 transition-all duration-200 focus:scale-[1.02]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  disabled={isLoading}
                  className="w-full h-11 transition-all duration-200 focus:scale-[1.02]"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">
                  Company (Optional)
                </label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Acme Inc"
                  disabled={isLoading}
                  className="w-full h-11 transition-all duration-200 focus:scale-[1.02]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us what you need. The more detail, the better..."
                  disabled={isLoading}
                  rows={5}
                  className="w-full transition-all duration-200 focus:scale-[1.02] resize-none"
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg animate-fade-in">
                  <p className="text-sm font-semibold text-green-900 dark:text-green-200">
                    ✓ Got it! We'll be in touch shortly.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg animate-fade-in">
                  <p className="text-sm font-semibold text-red-900 dark:text-red-200">
                    Oops! Something went wrong. Please try again.
                  </p>
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 text-base font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                size="lg"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="inline-block w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Sending...
                  </span>
                ) : (
                  'Send Inquiry'
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We'll reply {siteConfig.contact.responseTime.toLowerCase()}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
