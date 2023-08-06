import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const useStudent = () => {
    const { user, loading } = useContext(AuthContext)
    const { data: isStudent, isLoading:isStudentLoading } = useQuery({
        queryKey: ['isStudent', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`http://localhost:80/linrayAPI/index.php?url=/alluser`)
            const chack = res.data.filter(curr => curr.email === user.email)
            return chack
        }
    })
    return {isStudent,isStudentLoading}
};

export default useStudent;