
import React, { useState } from 'react';



  

const Form = () => {

    const [users, setUsers] = useState([
        { name: 'John Doe', age: 25 },
        { name: 'Alexander', age: 17 },
        { name: 'Nelson Mandela', age: 78 },
        { name: 'Mahatma Gandhi', age: 56 },
        { name: 'Nikol Tesla', age: 39 }
      ]);
    
      // Function to sort users by age and display names
      const sortAndDisplayNames = () => {
        // Sort the array based on the 'age' property
        const sortedUsers = users.slice().sort((a, b) => a.age - b.age);
    
        // Extract names from the sorted array
        const sortedNames = sortedUsers.map(user => user.name);
    
        // Display the sorted names using window.alert
        window.alert('Sorted Names:\n' + sortedNames.join('\n'));
        
      };
    
  return (

    
    <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
        <h1 className='text-5xl font-semibold'>Welcome Back</h1>
        <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter your details.</p>
        <div className='mt-8'>
            <div>
                <label className='text-lg font-medium'>Email</label>
                <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your email'/>
            </div>
            <div>
                <label className='text-lg font-medium'>Password</label>
                <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your password' type='password'/>
            </div>
            <div className='mt-8 flex justify-between items-center'>
                <div>
                    <input type="checkbox" id='remember'/>
                    <label className='ml-2 font-medium text-base' for="remember">Remember for 30 days</label>
                </div>
                <button className='font-medium text-base text-violet-500'>Forgot password</button>
            </div>
            <div className='mt-8 flex flex-col gap-y-4'>
                <button className='active:scale-[.98]  active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-4 rounded-xl bg-violet-500 text-white text-lg font-bold'>Sign in</button>
                
                <button className='flex rounded-xl py-4 border-2 active:scale-[.98]  active:duration-75 transition-all hover:scale-[1.01] ease-in-out flex items-center justify-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
</svg>
                    Sign in with Google</button>
            </div>
            <div className='mt-8 flex justify-center items-center'>
                <p className='font-medium text-base'>Don't have an account? </p>
                <button onClick={sortAndDisplayNames} className='text-violet-500 text-base font-medium ml-2' id='signupButton'>Sign up</button>
            </div>
        </div>
    </div>
  )
}



export default Form