import UserData from "./UserData";

function App() {
  
  // define an array of objects
  
  const data = [
    {name: "Maria Rodriguez",
      title: "Marketing Manager",
      bio: "Manages digital marketing and social media strategy. Highly skilled in SEO and content creation.",
    }
  ]

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen ">
      <div className="w-[400px}">
        <div className="bg-cyan-600 text-white p-5 outline outline-cyan-700 rounded-t-lg">
          <h1 className="text-lg text-cyan-100">{data[0].bio}</h1>
          <h1>hello hi</h1>
        </div>
      </div>
      <UserData/>
    </div>
  )

}

export default App
