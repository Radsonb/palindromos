"use client";

import axios from "axios";
import React, { useState } from "react";

export default function Home() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('')
  const [palindromes, setPalindromes] = useState<number[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      const response = await axios.get('http://localhost:5000/palindrome',{
        params: {
          start: Number(start),
          end: Number(end)
        }
      });

      setPalindromes(response.data)
    }catch(error){
      console.error("erro ao buscar números palíndromos:", error)
      
    }
  }
  return (
    <div className="flex flex-col justify-center items-center border-2 border-purple-50 rounded-2xl p-2 w-[300px] mt-4 mx-4">
      <h1 className="text-xl mb-2 py-6">Find Palindromic Numbers</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-5 ">
        <input 
          type="number" 
          placeholder="start"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          required
          className="p-2 rounded-xl border-2 text-black border-purple-600"
        />
        </div>
        <div>
        <input 
          type="number" 
          placeholder="end"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          required
          className="p-2 rounded-xl border-2 text-black border-purple-600"
        />        
        </div>
        <div  className="bg-purple-600 mt-4 py-2 flex rounded-md justify-center items-center">
          <button type="submit" className="text-lg">Submit</button>
        </div>
      </form>

      {palindromes.length > 0 && (
        <div className="border-2 border-purple-50 p-4 mt-10 rounded-lg bg-white text-gray-800">
          <h2 className="text-lg font-semibold">Palindromic Numbers:</h2>
          <ul className="flex gap-2">
            {palindromes.map((num) => (
              <li className="text-gray-600" key={num}>{num}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
