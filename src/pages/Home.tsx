import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Products from '../components/Products';
import ApplierTable from '../redux/features/Applier/ApplierTable';
import SubscribersTable from '../redux/features/Applier/SubscribersTable';
import { useAppSelector } from '../redux/hooks';
const Home = () => {
  const navigate = useNavigate();
  const token = useAppSelector((store) => store.auth.token);
  console.log({ token })
  useEffect(() => {
    if (!token) {
      navigate("/login")
    }
  }, [token])

  return (
    <div className='bg-white rounded-xl'>
      {/* <Hero /> */}
      {/* <ApplierTable /> */}
      <SubscribersTable />
      {/* <Products /> */}
    </div>
  )
}

export default Home