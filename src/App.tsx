import UserData from "./UserData";

function App() {
  
  // define an array of objects
  
  const data = [
    // First
    {name: "Maria Rodriguez",
      title: "Marketing Manager",
      bio: "Manages digital marketing and social media strategy. Highly skilled in SEO and content creation.",
    },
    // Second 
    {name: "Theodore Carter Junior",
      title: "Customer Service Representative",
      bio: "Handles customer inquiries and provides technical support. Known for excellent communication skills and problem-solving skills.",
    },
    // Third
    {name: "Maria Rodriguez",
      title: "Marketing Manager",
      bio: "Manages digital marketing and social media strategy. Highly skilled in SEO and content creation.",
    }
  ]

  return (
    // First Card
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-100">
        <div className="bg-cyan-600 text-white p-5 outline outline-cyan-700 rounded-t-lg">
          <h1 className="text-lg text-cyan-100">{data[0].bio}</h1>
        </div>
        <div className="bg-stone-200 text-center p-4 outline outline-stone-400 rounded-b-lg">
          <h1 className="text-3xl text-cyan-700">{data[0].name}</h1>
          <h3 className="text-xl text-stone-400">{data[0].title}</h3>
        </div>
      </div>
    </div>
  )

}

export default App
