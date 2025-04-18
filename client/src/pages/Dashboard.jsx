import React, { useEffect, useState } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        navigate('/');
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen min-w-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-2">🎉 Welcome to Posterly Dashboard</h1>
      <p className="text-gray-500 mb-6">Logged in as: <span className="font-semibold">{userEmail}</span></p>

      <button
        onClick={handleLogout}
        className="bg-red-50 hover:bg-red-700 text-gray-500 px-4 py-2 rounded"
      >
        Logout
      </button>
      <Link to="/create" className="mt-4 bg-blue-50 hover:bg-blue-700 text-gray-500 px-4 py-2 rounded">
        Create Poster
      </Link>
    </div>
  );
};

export default Dashboard;
