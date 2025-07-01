
// PUPPIES PAGE
export function PuppiesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Available Puppies</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <div key={id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={`https://placekitten.com/400/40${id}`} alt={`Puppy ${id}`} className="w-full" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">Puppy {id}</h2>
              <p className="text-sm mb-2">Status: {id % 2 === 0 ? 'Available' : 'Reserved'}</p>
              <p className="text-sm">Playful, affectionate, and ready to join your home!</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// PARENTS PAGE
export function ParentsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Meet the Parents</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {["Maple", "Oakley"].map((name, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 text-center">
            <img
              src={`https://placekitten.com/400/4${10 + idx}`}
              alt={name}
              className="rounded-full mx-auto mb-4 w-40 h-40 object-cover"
            />
            <h2 className="text-2xl font-semibold mb-2">{name}</h2>
            <p className="text-sm">Health-tested, loving temperament, and excellent lineage.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// PROCESS PAGE
export function ProcessPage() {
  const steps = [
    "Submit your application",
    "We contact you for a phone interview",
    "Secure your spot with a deposit",
    "Choose your puppy at 6 weeks",
    "Pick-up or delivery at 8 weeks"
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Adoption Process</h1>
      <ol className="space-y-6 list-decimal list-inside text-lg">
        {steps.map((step, i) => (
          <li key={i} className="border-l-4 border-pink-400 pl-4">{step}</li>
        ))}
      </ol>
    </div>
  );
}

// TESTIMONIALS PAGE
export function TestimonialsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Happy Families</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {["We love our BernieBee pup!", "Couldn’t ask for a better dog.", "The process was amazing!"].map((text, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-xl shadow">
            <p className="text-lg italic mb-2">“{text}”</p>
            <p className="text-sm text-right">— Happy Owner {i + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// GALLERY PAGE
export function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Photo Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <img
            key={id}
            src={`https://placekitten.com/300/30${id}`}
            alt={`Bernedoodle ${id}`}
            className="rounded-xl shadow-md object-cover w-full h-60"
          />
        ))}
      </div>
    </div>
  );
}
