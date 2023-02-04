import React, { useState } from 'react';
import B2Card from './B2Card';
import AppoinmentModal from './AppoinmentModal';
import { useQuery } from 'react-query';
import { format } from 'date-fns';
import Loading from '../../Shared/Loading/Loading';

const B2Cards = ({ selected }) => {
    // const [serviceData, setServiceData] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selected, "PP")
    // Queries
    const { data: serviceData = [], refetch, isLoading } = useQuery({
        queryKey: ['serviceData', date],
        queryFn: async () => {
            const res = await fetch(`https://doctor-portal-server-seven-brown.vercel.app/appointmentOptions?date=${date}`)
            const data = await res.json()
            return data;
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    serviceData?.map(data => {
                        return <B2Card key={data._id} service={data}
                            setTreatment={setTreatment}></B2Card>
                    })
                }
            </div>
            {
                treatment && <AppoinmentModal
                    refetch={refetch} treatment={treatment} setTreatment={setTreatment} selected={selected}></AppoinmentModal>
            }
        </div>
    );
};

export default B2Cards;