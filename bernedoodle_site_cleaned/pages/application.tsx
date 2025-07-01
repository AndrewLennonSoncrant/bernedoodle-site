
import { Button } from "@/components/ui/button";
import "@fontsource/quicksand/400.css";
import "@fontsource/quicksand/700.css";

export default function ApplicationPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-['Quicksand'] px-4 py-16 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Puppy Application</h1>
      <p className="text-md text-center mb-10">
        Fill out the form below to be considered for one of our puppies. We’ll get back to you as soon as possible!
      </p>
      <form className="grid gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Tell us about your home and lifestyle</label>
          <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2" rows="4" required></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Preferred Size</label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
            <option>Mini</option>
            <option>Medium</option>
            <option>Standard</option>
            <option>No preference</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Gender Preference</label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
            <option>Male</option>
            <option>Female</option>
            <option>No preference</option>
          </select>
        </div>
        <Button className="text-lg px-6 py-3 mt-4 w-full">Submit Application</Button>
      </form>
    </div>
  );
}
