"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import TagMediaSplitAbout from '@/components/sections/about/TagMediaSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Coffee, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="largeSizeMediumTitles"
      background="dotGrid"
      cardStyle="frosted-heavy"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Morning Brew"
          button={{
            text: "Order Now",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="Morning Brew"
          description="Your neighborhood coffee destination. Handcrafted espresso drinks, fresh pastries, and a welcoming space to start your day."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765912725394-1fwtpnlu.jpg"
          imageAlt="Cozy coffee shop interior with warm lighting"
          frameStyle="card"
          className="w-full"
          containerClassName="w-full"
        />
      </div>

      <div id="about" data-section="about">
        <TagMediaSplitAbout
          variant="card"
          title="Our Story"
          description="Since 2018, Morning Brew has been the heart of our community"
          textboxLayout="default"
          contentTag="LOCAL ROASTERY"
          contentTagIcon={Coffee}
          contentTitle="Passion for Perfect Coffee"
          contentDescription="We source the finest beans from local roasters and international partners. Every cup is prepared with care by our experienced baristas who believe that great coffee starts with great relationships with our farmers and customers."
          contentButtons={[{
            text: "Learn More",
            href: "#menu"
          }]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765912726529-6dw2anmj.jpg"
          imageAlt="Expert barista crafting specialty coffee"
          imagePosition="right"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="menu" data-section="menu">
        <FeatureCardOne
          title="Signature Drinks"
          description="Discover our hand-crafted menu of specialty coffee beverages and seasonal favorites"
          textboxLayout="default"
          features={[
            {
              title: "Classic Espresso",
              description: "Rich, bold shots of freshly pulled espresso from our award-winning machines",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765912727398-dki9aij2.jpg",
              imageAlt: "Perfect espresso shot with crema",
              button: {
                text: "Try It",
                href: "#order"
              }
            },
            {
              title: "Creamy Cappuccino",
              description: "Silky microfoam and smooth espresso in perfect harmony every time",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765912728223-lczdjkuj.jpg",
              imageAlt: "Cappuccino with latte art",
              button: {
                text: "Try It",
                href: "#order"
              }
            },
            {
              title: "Cold Brew",
              description: "Smooth, refreshing cold brew steeped for 18 hours for deep flavor",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765912729029-gyykpn9i.jpg",
              imageAlt: "Cold brew iced coffee in glass",
              button: {
                text: "Try It",
                href: "#order"
              }
            },
            {
              title: "Fresh Pastries",
              description: "Locally baked croissants, muffins, and pastries to pair with your coffee",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765912730010-h2oxsl4k.jpg",
              imageAlt: "Fresh pastries and croissants",
              button: {
                text: "Order",
                href: "#order"
              }
            }
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="Loved by Our Community"
          description="See what our regular customers have to say about Morning Brew"
          textboxLayout="default"
          showRating={true}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              handle: "@sarah_j",
              testimonial: "The best espresso in town! The baristas really know their craft. I visit Morning Brew every morning before work.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765912730998-ttxqihf0.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              handle: "@mike_coffee",
              testimonial: "Amazing atmosphere and friendly staff. The cold brew is absolutely smooth and delicious. Highly recommend!",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765912731868-xcgwe8yf.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              handle: "@emma_r",
              testimonial: "Perfect place to work and relax. Their pastries are fresh, coffee is excellent, and wifi is fast. A real gem!",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765912732751-yg37nz1l.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "David Park",
              handle: "@david_park",
              testimonial: "Finally a coffee shop that takes quality seriously. The latte art is beautiful and the taste is even better.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765912733505-vbtqr59q.jpg",
              imageAlt: "David Park"
            },
            {
              id: "5",
              name: "Lisa Thompson",
              handle: "@lisa_t",
              testimonial: "Local business that genuinely cares. They remember regular customers and always make my order exactly right.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765912734354-eyrckm6h.jpg",
              imageAlt: "Lisa Thompson"
            },
            {
              id: "6",
              name: "James Wilson",
              handle: "@james_w",
              testimonial: "The coffee quality and customer service are outstanding. Worth waking up early for!",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765912735210-e63o3h37.jpg",
              imageAlt: "James Wilson"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about Morning Brew"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          faqs={[
            {
              id: "1",
              title: "What are your hours?",
              content: "We're open Monday through Friday from 6:30 AM to 7:00 PM, and Saturday-Sunday from 8:00 AM to 6:00 PM. Closed on major holidays."
            },
            {
              id: "2",
              title: "Do you offer WiFi?",
              content: "Yes! We have free high-speed WiFi for all customers. Perfect for working, studying, or just browsing. No password needed."
            },
            {
              id: "3",
              title: "Can I order for pickup?",
              content: "Absolutely. You can order ahead through our app or website and pick up your order at the counter. We typically have your order ready within 10 minutes."
            },
            {
              id: "4",
              title: "Do you have dairy-free options?",
              content: "Yes! We offer almond milk, oat milk, soy milk, and coconut milk as alternatives. All our beverages can be customized for dietary preferences."
            },
            {
              id: "5",
              title: "Where do you source your coffee beans?",
              content: "We partner with local roasters and carefully selected international suppliers. All our coffee is sourced ethically and sustainably from farms we trust."
            },
            {
              id: "6",
              title: "Do you have a loyalty program?",
              content: "Yes! Join our Morning Brew Rewards program and earn points on every purchase. Get a free drink after 10 purchases!"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Stay Brew'd"
          description="Subscribe to get updates on new menu items, special events, and exclusive offers delivered to your inbox."
          useInvertedBackground="noInvert"
          inputPlaceholder="your@email.com"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
          tagIcon={Mail}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          copyrightText="© 2024 Morning Brew | Local Coffee Since 2018"
          columns={[
            {
              title: "Hours",
              items: [
                { label: "Mon-Fri: 6:30 AM - 7:00 PM" },
                { label: "Sat-Sun: 8:00 AM - 6:00 PM" }
              ]
            },
            {
              title: "Location",
              items: [
                { label: "123 Main Street", href: "https://maps.google.com" },
                { label: "(555) 123-4567", href: "tel:5551234567" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}