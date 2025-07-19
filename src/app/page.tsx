'use client';

import { useState, useEffect } from 'react';
import {
  Star,
  Users,
  Calendar,
  MapPin,
  ChefHat,
  Heart,
  Utensils,
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/button';
import { Card, CardContent } from '@/components/card';

export default function BackyardRestaurantLanding() {
  const [currentChef, setCurrentChef] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const chefs = [
    {
      name: 'Maria Rodriguez',
      cuisine: 'Modern Mexican',
      rating: 4.9,
      reviews: 127,
      image: '/images/chef-maria.png',
      specialty: 'Farm-to-table tacos with house-made tortillas',
    },
    {
      name: 'James Chen',
      cuisine: 'Asian Fusion',
      rating: 4.8,
      reviews: 89,
      image: '/images/chef-james.png',
      specialty: 'Innovative ramen and dumplings',
    },
    {
      name: 'Sophie Laurent',
      cuisine: 'French Bistro',
      rating: 5.0,
      reviews: 156,
      image: '/images/chef-sophie.png',
      specialty: 'Classic French dishes with a modern twist',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: "The most incredible dining experience! Chef Maria's backyard felt like a hidden gem in Tuscany. The food was absolutely divine.",
      rating: 5,
      location: 'San Francisco, CA',
    },
    {
      name: 'Michael Torres',
      text: 'James created magic in his garden. Every dish was a work of art, and the intimate setting made it unforgettable.',
      rating: 5,
      location: 'Austin, TX',
    },
    {
      name: 'Emma Wilson',
      text: "Sophie's French bistro night was perfection. From the ambiance to the last bite of dessert, everything was flawless.",
      rating: 5,
      location: 'Portland, OR',
    },
  ];

  const trustLogos = [
    'Food & Wine',
    'Bon Appétit',
    'The New York Times',
    'Eater',
    'Condé Nast Traveler',
  ];

  useEffect(() => {
    const chefInterval = setInterval(() => {
      setCurrentChef((prev) => (prev + 1) % chefs.length);
    }, 4000);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(chefInterval);
      clearInterval(testimonialInterval);
    };
  }, [chefs.length, testimonials.length]);

  return (
    <div className="min-h-screen bg-warm-bg font-body">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight">
                  Discover extraordinary dining in intimate backyard settings
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Connect with talented local chefs who transform their
                  backyards into unforgettable culinary experiences. From
                  farm-to-table dinners to cultural celebrations, every meal
                  tells a story.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-700 text-white px-8 py-4 text-lg rounded-custom"
                >
                  Find Your Experience
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 text-lg rounded-custom bg-transparent"
                >
                  Become a Chef
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>500+ Happy Diners</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChefHat className="h-4 w-4" />
                  <span>50+ Local Chefs</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-custom-lg overflow-hidden shadow-custom-lg">
                <Image
                  src="/images/hero-dining.png"
                  alt="Backyard dining experience"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-custom shadow-custom-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"
                      ></div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {"Tonight's Dinner"}
                    </p>
                    <p className="text-xs text-gray-500">8 guests • 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900">
              How it works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From discovery to dining, we make it simple to find and book
              extraordinary culinary experiences
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: '01',
                title: 'Discover',
                description:
                  'Browse unique dining experiences hosted by local chefs in their backyards',
                icon: MapPin,
              },
              {
                step: '02',
                title: 'Book',
                description:
                  'Reserve your spot for an intimate dinner with just a few clicks',
                icon: Calendar,
              },
              {
                step: '03',
                title: 'Dine',
                description:
                  'Enjoy an unforgettable meal in a beautiful, intimate setting',
                icon: Utensils,
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-heading font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="px-6 lg:px-8 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm text-gray-500 mb-8">Featured in</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {trustLogos.map((logo, index) => (
              <div key={index} className="text-gray-400 font-semibold text-lg">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Spotlight Carousel */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900">
              Meet our featured chefs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Talented culinary artists who bring restaurant-quality experiences
              to intimate backyard settings
            </p>
          </div>
          <div className="relative">
            <Card className="bg-white shadow-custom-lg rounded-custom-lg border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-80 lg:h-96">
                    <Image
                      src={chefs[currentChef].image || '/placeholder.svg'}
                      alt={chefs[currentChef].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {chefs[currentChef].rating} (
                          {chefs[currentChef].reviews} reviews)
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-gray-900">
                          {chefs[currentChef].name}
                        </h3>
                        <p className="text-primary font-semibold">
                          {chefs[currentChef].cuisine}
                        </p>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {chefs[currentChef].specialty}
                      </p>
                    </div>
                    <Button className="bg-primary hover:bg-primary-700 text-white w-fit rounded-custom">
                      View Chef Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center space-x-2 mt-8">
              {chefs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentChef(index)}
                  className={`w-3 h-3 hover:cursor-pointer rounded-full transition-colors ${
                    index === currentChef ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diner Testimonials */}
      <section className="px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900">
              What diners are saying
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from our community of food lovers
            </p>
          </div>
          <div className="relative">
            <Card className="bg-gray-50 shadow-custom rounded-custom-lg border-0">
              <CardContent className="p-8 lg:p-12 text-center">
                <div className="space-y-6">
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                  </div>
                  <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                    {`"${testimonials[currentTestimonial].text}"`}
                  </blockquote>
                  <div className="space-y-1">
                    <p className="font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 hover:cursor-pointer rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 lg:px-8 py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-gray-900">
              Ready for your next culinary adventure?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of food lovers who have discovered the magic of
              backyard dining. Your perfect meal is waiting.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-700 text-white px-8 py-4 text-lg rounded-custom"
            >
              Explore Experiences
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 text-lg rounded-custom bg-transparent"
            >
              Host Your Own
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 pt-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4 text-primary" />
              <span>Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-primary" />
              <span>Safe & Verified</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
