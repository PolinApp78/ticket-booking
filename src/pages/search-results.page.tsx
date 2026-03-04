import {useCallback, useEffect, useMemo} from "react";
import {useSearchParams} from "react-router";
import {Descriptions, type DescriptionsProps} from "antd";
import {getStationNameByCode, getTripVariantName} from "../shared/utils.ts";
// import * as React from "react";
import {useState} from "react";





function SearchResultsPage() {

    const [departureDate, setDepartureDate] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');


    const [searchParams] = useSearchParams();
    const tripVariant = searchParams.get('tripVariant');
    const departure = searchParams.get('departure');
    const arrival = searchParams.get('arrival');
    const date = searchParams.get('date')?.split('_');
    const passengers = parseInt(searchParams.get('passengers') ?? '0');

    const formatDate = useCallback(()=> {
        console.log(date)
        if (date?.length === 1) {
            setDepartureDate(date[0]);
        }
        if (date?.length === 2) {
                setDepartureDate(date[0]);
                setArrivalDate(date[1]);
            }

        }, [date])

    console.log(departureDate);
    console.log(arrivalDate);


    useEffect(() => {
            formatDate()
    }, [date, formatDate]);


    const items: DescriptionsProps['items'] = useMemo(() => (
        [
            {
                key: '1',
                label: 'Trip Variant:',
                children: tripVariant ? getTripVariantName(tripVariant) : 'No data',
            },
            {
                key: '2',
                label: 'Departure:',
                children: departure ? getStationNameByCode(departure): 'No data',
            },
            {
                key: '3',
                label: 'Arrival:',
                children: arrival ? getStationNameByCode(arrival): 'No data',
            },
            {
                key: '4',
                label: 'Departure Date:',
                children: departureDate ?? 'Empty',
            },
            {
                key: '5',
                label: 'Arrival Date:',
                children: arrivalDate ?? 'Empty',
            },
            {
                key: '6',
                label: 'Passengers:',
                children: passengers,
            },
        ]
    ), [tripVariant, departure, arrival, date, passengers]);



    return (
        <div>
            <Descriptions title="Search Results" layout="vertical" items={items} bordered/>

        </div>
    );
}
export default SearchResultsPage;