import UserData from "./UserData";

function App() {

  // define an array of objects

  const data = [
    // First
    {
      name: "Maria Rodriguez",
      title: "Marketing Manager",
      bio: "Manages digital marketing and social media strategy. Highly skilled in SEO and content creation.",
    },
    // Second 
    {
      name: "Theodore Carter Junior",
      title: "Customer Service Representative",
      bio: "Handles customer inquiries and provides technical support. Known for excellent communication skills and problem-solving skills.",
    },
    // Third
    {
      name: "Chloe Lee",
      title: "UX/UI Designer",
      bio: "Creates user-friendly interfaces and visual designs.",
    }
  ]

  return (
    <div className="flex flex-col items-center justify-center h-screen my-6">
      {/*First Card*/}
      <div className="w-100">
        <div className="bg-cyan-600 text-white p-5 outline outline-cyan-700 rounded-t-lg">
          <h1 className="text-lg text-cyan-100">{data[0].bio}</h1>
        </div>
        <div className="bg-stone-200 text-center p-4 outline outline-stone-400 rounded-b-lg">
          <h1 className="text-3xl text-cyan-700">{data[0].name}</h1>
          <h3 className="text-xl text-stone-400">{data[0].title}</h3>
        </div>
      </div>

      {/* Second Card */}
      <div className="w-[800px] flex my-6">
        <div className="flex justify-between mb-4 rounded-r-full">
          <div className="p-2 bg-blue-500 w-80 rounded-l-xl outline outline-blue-500">
            <h1 className="text-4xl text-white p-5 w-100">{data[1].name}</h1>
            <h2 className="text-xl text-stone-300 pl-4 p-2">{data[1].title}</h2>
          </div>

          <div className="flex items-center justify-center rounded-r-full outline outline-slate-500">
            <h1 className="text-stone-900 text-xl text-justify pl-5 text-left">{data[1].bio}</h1>
          </div>
        </div>
      </div>


      {/* Third Card */}
      <div>
      <div className="w-110">
        <div className="bg-rose-400 text-white p-5 outline outline-rose-400 rounded-t-lg rounded-br-lg">
          <h1 className="text-lg text-white">{data[2].bio}</h1>
        </div>
        <div className="bg-rose-200 text-center p-4 outline outline-rose-400 rounded-b-lg w-fit">
          <h1 className="text-2xl text-rose-700 text-left">{data[2].name}</h1>
          <h3 className="text-xl text-rose-500 text-left">{data[2].title}</h3>
        </div>

        <div className="my-4"></div>

      </div>
      </div>


    </div>
  )

}

export default App
