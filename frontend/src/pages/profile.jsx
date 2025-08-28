import { useState } from "react";

// ✅ Custom Card Component
function Card({ children, className }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 ${className}`}
    >
      {children}
    </div>
  );
}

// ✅ Custom Button Component
function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 w-full bg-blue-600 text-white rounded-xl font-medium 
      hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    >
      {children}
    </button>
  );
}

// ✅ People Data (Static Example)
const peopleData = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    description:
      "Passionate about building scalable web apps and exploring AI.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sophia Smith",
    role: "Graphic Designer",
    description: "Creative designer with expertise in UI/UX and branding.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Amit Sharma",
    role: "Data Analyst",
    description:
      "Enjoys finding patterns in data and making insights actionable.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

export default function PeoplePage() {
  const [selected, setSelected] = useState(null);

  const handleRequest = (person) => {
    setSelected(person.name);
    alert(`✅ Request sent to ${person.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        People Directory
      </h1>

      {/* ✅ Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {peopleData.map((person) => (
          <Card key={person.id} className="flex flex-col items-center text-center">
            <img
              src={person.image}
              alt={person.name}
              className="w-24 h-24 rounded-full border-2 border-gray-200 mb-4 object-cover"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              {person.name}
            </h2>
            <p className="text-sm text-blue-600 font-medium">{person.role}</p>
            <p className="text-gray-600 text-sm mt-2">{person.description}</p>
            <Button className="mt-4" onClick={() => handleRequest(person)}>
              Send Request
            </Button>
          </Card>
        ))}
      </div>

      {/* ✅ Success Message */}
      {selected && (
        <p className="mt-6 text-center text-green-600 font-medium">
          🎉 Request successfully sent to <span className="font-semibold">{selected}</span>!
        </p>
      )}
    </div>
  );
}
