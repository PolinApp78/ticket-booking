import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import {Badge, Descriptions, type DescriptionsProps, Flex} from "antd";
import { getStationNameByCode, getTripVariantName } from "../shared/utils.ts";
import dayjs from 'dayjs';

import classes from './page.module.scss'
import TrainCard from "../modules/trains/ui/train-card.tsx";
import {Typography} from "antd";


const { Title } = Typography;

function SearchResultsPage() {
    const [departureDate, setDepartureDate] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');

    const [searchParams] = useSearchParams();
    const tripVariant = searchParams.get('tripVariant');
    const departure = searchParams.get('departure');
    const arrival = searchParams.get('arrival');
    const date = searchParams.get('date')?.split('_');
    const passengers = parseInt(searchParams.get('passengers') ?? '0');

    // Format dates from URL params
    useEffect(() => {
        if (date?.length === 1) {
            setDepartureDate(date[0]);
            setArrivalDate(''); // Clear arrival date for one-way trips
        }
        if (date?.length === 2) {
            setDepartureDate(date[0]);
            setArrivalDate(date[1]);
        }
    }, [date]);

    // Helper function to format date to DD-MM-YYYY
    const formatDateString = (dateString: string) => {
        if (!dateString) return null;

        const parsed = dayjs(dateString);
        return parsed.isValid() ? parsed.format('DD-MM-YYYY') : null;
    };

    const items: DescriptionsProps['items'] = useMemo(() => {
        const formattedDepartureDate = formatDateString(departureDate);
        const formattedArrivalDate = formatDateString(arrivalDate);

        return [
            {
                key: '1',
                span: 1,
                label: 'Trip Variant',
                children: <Badge style={{color: "#1677ff"}} status="processing" text={tripVariant ? getTripVariantName(tripVariant) : 'No data'} />,

            },
            {
                key: '2',
                span: 1,
                label: 'Passengers',
                children: passengers || 'No data',

            },
            {
                key: '3',
                span: 1,
                label: 'Departure',
                children: departure ? getStationNameByCode(departure) : 'No data',
            },
            {
                key: '4',
                span: 1,
                label: 'Arrival',
                children: arrival ? getStationNameByCode(arrival) : 'No data',

            },
            {
                key: '5',
                span: 1,
                label: 'Departure Date',
                children: formattedDepartureDate || 'No data',


            },
            {
                key: '6',
                span: 1,
                label: 'Arrival Date',
                children: formattedArrivalDate || (tripVariant === 'roundtrip' ? 'No data' : 'Not applicable for one-way trip'),

            },

        ];
    }, [tripVariant, departure, arrival, departureDate, arrivalDate, passengers]);

    const styles: DescriptionsProps['styles'] = {
        content: {
            color: '#1677ff',
            fontWeight: '600',
        },
        label: {
            color: '#000000',
        },
        title: {
            fontSize: '2rem',
            color: '#1677ff',
        },
    };

    return (
        <div className={classes.searchResultsContainer}>
            <Descriptions
                title="Boarding Details"
                layout="vertical"
                items={items}
                column={2}
                className={classes.descriptions}
                styles={styles}


            />

            <Title className={classes.title}>Available Trains</Title>
            <Flex className={classes.trainsCardsContainer} vertical gap={24}>
                <TrainCard/>
                <TrainCard/>
                <TrainCard/>
            </Flex>
        </div>
    );
}

export default SearchResultsPage;

































// import {useCallback, useEffect, useMemo} from "react";
// import {useSearchParams} from "react-router";
// import {DatePicker, Descriptions, type DescriptionsProps} from "antd";
// import {getStationNameByCode, getTripVariantName} from "../shared/utils.ts";
// // import * as React from "react";
// import {useState} from "react";
// import dayjs from 'dayjs';
//
//
//
//
//
// function SearchResultsPage() {
//
//     const [departureDate, setDepartureDate] = useState('');
//     const [arrivalDate, setArrivalDate] = useState('');
//
//
//     const [searchParams] = useSearchParams();
//     const tripVariant = searchParams.get('tripVariant');
//     const departure = searchParams.get('departure');
//     const arrival = searchParams.get('arrival');
//     const date = searchParams.get('date')?.split('_');
//     const passengers = parseInt(searchParams.get('passengers') ?? '0');
//
//     const formatDate = useCallback(()=> {
//         console.log(date)
//         if (date?.length === 1) {
//             setDepartureDate(date[0]);
//         }
//         if (date?.length === 2) {
//                 setDepartureDate(date[0]);
//                 setArrivalDate(date[1]);
//             }
//
//         }, [date])
//
//     console.log(departureDate);
//     console.log(arrivalDate);
//
//
//     useEffect(() => {
//             formatDate()
//     }, [date, formatDate]);
//
//
//     const items: DescriptionsProps['items'] = useMemo(() => (
//         [
//             {
//                 key: '1',
//                 label: 'Trip Variant:',
//                 children: tripVariant ? getTripVariantName(tripVariant) : 'No data',
//             },
//             {
//                 key: '2',
//                 label: 'Departure:',
//                 children: departure ? getStationNameByCode(departure): 'No data',
//             },
//             {
//                 key: '3',
//                 label: 'Arrival:',
//                 children: arrival ? getStationNameByCode(arrival): 'No data',
//             },
//             {
//                 key: '4',
//                 label: 'Departure Date:',
//                 children: <DatePicker value={dayjs(departureDate)} />,
//
//             },
//             {
//                 key: '5',
//                 label: 'Arrival Date:',
//                 children: <DatePicker value={dayjs(arrivalDate)} />,
//             },
//             {
//                 key: '6',
//                 label: 'Passengers:',
//                 children: passengers,
//             },
//         ]
//     ), [tripVariant, departure, arrival, date, passengers]);
//
//
//
//     return (
//         <div>
//             <Descriptions title="Search Results" layout="vertical" items={items} bordered/>
//
//         </div>
//     );
// }
// export default SearchResultsPage;