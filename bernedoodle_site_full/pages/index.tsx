
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, PawPrint } from "lucide-react";
import "@fontsource/quicksand/400.css";
import "@fontsource/quicksand/700.css";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-['Quicksand']">
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <PawPrint className="text-pink-500" /> Bernedoodle Pups
        </h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/parents">Parents</Link>
          <Link href="/puppies">Puppies</Link>
          <Link href="/process">Adoption Process</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/application">
            <Button className="text-sm">Apply</Button>
          </Link>
        </div>
      </nav>

      <section className="bg-gradient-to-r from-pink-100 to-yellow-100 py-24 px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Family-Raised Bernedoodles
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Beautiful, healthy, and well-socialized Bernedoodle puppies raised in our loving home with care and purpose.
        </p>
        <Link href="/puppies">
          <Button className="text-lg px-8 py-3">View Puppies</Button>
        </Link>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4">Our Story</h3>
        <p className="text-md mb-6">
          We’re a small family-based breeder dedicated to producing healthy, happy Bernedoodles with loving temperaments and stunning coats.
        </p>
        <img src="https://placekitten.com/800/400" alt="Family with puppies" className="rounded-2xl mx-auto" />
      </section>

      <section className="bg-gray-100 py-20 px-6">
        <h3 className="text-3xl font-bold text-center mb-8">Featured Puppies</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((id) => (
            <Card key={id}>
              <CardContent className="p-4">
                <img src={`https://placekitten.com/400/30${id}`} alt={`Puppy ${id}`} className="rounded-2xl mb-4" />
                <h4 className="text-xl font-semibold mb-2">Puppy {id}</h4>
                <p className="text-sm mb-2">Status: Available</p>
                <Link href="/application">
                  <Button variant="outline" className="w-full">Apply Now</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Welcome a Puppy?</h3>
        <p className="mb-6 text-md max-w-xl mx-auto">
          Our application process is simple and personalized. We’d love to hear about you and your future pup's new home.
        </p>
        <Link href="/application">
          <Button className="text-lg px-6 py-3">Start Application</Button>
        </Link>
      </section>

      <footer className="bg-gray-200 text-center py-6 text-sm">
        <div className="mb-2">
          <a href="mailto:info@bernedoodlepups.com" className="mr-4">info@bernedoodlepups.com</a>
          <span>(555) 123-4567</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Bernedoodle Pups. All rights reserved.</p>
      </footer>
    </div>
  );
}
