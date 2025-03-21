'use client'; 
import { useState} from 'react'; 
import { useRouter} from 'next/navigation';
import { useUser } from './context/UserContext';


export default function Home() {
  const router =  useRouter(); 
  const { setUser } = useUser(); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if(!formData.name ||!formData.email ||!formData.password){
      setError('All fields are required');
      return;
    }
    setUser({
      name: formData.name,
      email: formData.email
    });

    router.push('/');
  };

  return (
    <main className='flex min-h-[calc(100vh-73px)] flex-col items-center justify-center p-8'>
      <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-md'>
        <h1 className='text-2xl font-bold text-center mb-6 text-black'>Sign Up</h1>

        {error && (
          <div className=' bg-red-100 border border-red-400 text-red-700 px-4 py-4 rounded mb-4'>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor='name' className='text-gray-700 block text-sm font-medium'>
              name
            </label>
            <input
              type='text'
              id='name'
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className='mt-1 block w-full rounded-md border border-black px-3 py-2'
            />
          </div>

          <button
            type="submit"
            className='w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors'
          >
            Sign Up
          </button>

        </form>
      </div>
    </main>
  );
}
