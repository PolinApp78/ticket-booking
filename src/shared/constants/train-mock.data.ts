export interface Train {
    id: number;
    trainNumber: string,
    trainName: string,
    duration: string,

    from: {
        station: string,
        code: string,
        time: string,
        date: string

    },
    to: {
        station: string,
        code: string,
        time: string,
        date: string
    },
    classes: [
        {
            classCode: string,
            className: string,
            availability: {
                type: "available" | "waitlist",
                count: number
            },
            fareType: string,
            price: string,
        },
        {
            classCode: string,
            className: string,
            availability: {
                type: "available" | "waitlist",
                count: number
            },
            fareType: string,
            price: string,
        },
        {
            classCode: string,
            className: string,
            availability: {
                type: "available" | "waitlist",
                count: number
            },
            fareType: string,
            price: string,
        }
    ]
}

const trainMockData: Train[] = [
    {
        id: 1,
        trainNumber: "22426",
        trainName: "VANDE BHARAT",
        duration: "8ч 0м",
        from: {
            station: "New Delhi",
            code: "NDLS",
            time: "06:00",
            date: "15 May 2024"
        },
        to: {
            station: "Varanasi Junction",
            code: "BSB",
            time: "14:00",
            date: "15 May 2024"
        },
        classes: [
            {
                classCode: "3A",
                className: "AC 3-Tier",
                availability: {
                    type: "available",
                    count: 46
                },
                fareType: "Tatkal",
                price: "₹1,825"
            },
            {
                classCode: "2A",
                className: "AC 2-Tier",
                availability: {
                    type: "waitlist",
                    count: 36
                },
                fareType: "General",
                price: "₹2,450"
            },
            {
                classCode: "1A",
                className: "AC First Class",
                availability: {
                    type: "available",
                    count: 12
                },
                fareType: "Premium",
                price: "₹4,320"
            }
        ]
    },
    {
        id: 2,
        trainNumber: "22436",
        trainName: "VANDE BHARAT",
        duration: "5ч 45м",
        from: {
            station: "Mumbai Central",
            code: "BCT",
            time: "05:45",
            date: "15 May 2024"
        },
        to: {
            station: "Ahmedabad Junction",
            code: "ADI",
            time: "11:30",
            date: "15 May 2024"
        },
        classes: [
            {
                classCode: "CC",
                className: "Chair Car",
                availability: {
                    type: "available",
                    count: 78
                },
                fareType: "Tatkal",
                price: "₹980"
            },
            {
                classCode: "EC",
                className: "Executive Chair Car",
                availability: {
                    type: "available",
                    count: 42
                },
                fareType: "General",
                price: "₹1,890"
            },
            {
                classCode: "2A",
                className: "AC 2-Tier",
                availability: {
                    type: "waitlist",
                    count: 15
                },
                fareType: "Premium",
                price: "₹2,450"
            }
        ]
    },
    {
        id: 3,
        trainNumber: "12245",
        trainName: "DURONTO EXPRESS",
        duration: "12ч 15м",
        from: {
            station: "Bengaluru City Junction",
            code: "SBC",
            time: "20:30",
            date: "15 May 2024"
        },
        to: {
            station: "Howrah Junction",
            code: "HWH",
            time: "08:45",
            date: "16 May 2024"
        },
        classes: [
            {
                classCode: "3A",
                className: "AC 3-Tier",
                availability: {
                    type: "available",
                    count: 92
                },
                fareType: "Tatkal",
                price: "₹2,350"
            },
            {
                classCode: "2A",
                className: "AC 2-Tier",
                availability: {
                    type: "available",
                    count: 67
                },
                fareType: "General",
                price: "₹3,280"
            },
            {
                classCode: "1A",
                className: "AC First Class",
                availability: {
                    type: "waitlist",
                    count: 8
                },
                fareType: "Premium",
                price: "₹5,450"
            }
        ]
    },
    {
        id: 4,
        trainNumber: "12627",
        trainName: "KARNATAKA EXP",
        duration: "9ч 50м",
        from: {
            station: "Chennai Central",
            code: "MAS",
            time: "19:20",
            date: "15 May 2024"
        },
        to: {
            station: "Bangalore East",
            code: "BNCE",
            time: "05:10",
            date: "16 May 2024"
        },
        classes: [
            {
                classCode: "SL",
                className: "Sleeper",
                availability: {
                    type: "waitlist",
                    count: 142
                },
                fareType: "General",
                price: "₹385"
            },
            {
                classCode: "3A",
                className: "AC 3-Tier",
                availability: {
                    type: "waitlist",
                    count: 58
                },
                fareType: "Tatkal",
                price: "₹1,120"
            },
            {
                classCode: "2A",
                className: "AC 2-Tier",
                availability: {
                    type: "available",
                    count: 23
                },
                fareType: "General",
                price: "₹1,650"
            }
        ]
    },
    {
        id: 5,
        trainNumber: "12951",
        trainName: "MUMBAI RAJDHANI",
        duration: "15ч 55м",
        from: {
            station: "Mumbai Central",
            code: "BCT",
            time: "16:35",
            date: "15 May 2024"
        },
        to: {
            station: "Hazrat Nizamuddin",
            code: "NZM",
            time: "08:30",
            date: "16 May 2024"
        },
        classes: [
            {
                classCode: "3A",
                className: "AC 3-Tier",
                availability: {
                    type: "waitlist",
                    count: 124
                },
                fareType: "Tatkal",
                price: "₹2,150"
            },
            {
                classCode: "2A",
                className: "AC 2-Tier",
                availability: {
                    type: "waitlist",
                    count: 45
                },
                fareType: "General",
                price: "₹3,220"
            },
            {
                classCode: "1A",
                className: "AC First Class",
                availability: {
                    type: "available",
                    count: 6
                },
                fareType: "Premium",
                price: "₹5,380"
            }
        ]
    },
    {
        id: 6,
        trainNumber: "12301",
        trainName: "HOWRAH RAJDHANI",
        duration: "20ч 55м",
        from: {
            station: "Howrah Junction",
            code: "HWH",
            time: "13:05",
            date: "16 May 2024"
        },
        to: {
            station: "New Delhi",
            code: "NDLS",
            time: "10:00",
            date: "17 May 2024"
        },
        classes: [
            {
                classCode: "3A",
                className: "AC 3-Tier",
                availability: {
                    type: "waitlist",
                    count: 85
                },
                fareType: "Tatkal",
                price: "₹2,850"
            },
            {
                classCode: "2A",
                className: "AC 2-Tier",
                availability: {
                    type: "waitlist",
                    count: 32
                },
                fareType: "General",
                price: "₹3,990"
            },
            {
                classCode: "1A",
                className: "AC First Class",
                availability: {
                    type: "available",
                    count: 4
                },
                fareType: "Premium",
                price: "₹6,450"
            }
        ]
    },
    {
        id: 7,
        trainNumber: "22691",
        trainName: "BANGALORE RAJDHANI",
        duration: "24ч 20м",
        from: {
            station: "Bengaluru City Junction",
            code: "SBC",
            time: "19:55",
            date: "16 May 2024"
        },
        to: {
            station: "Hazrat Nizamuddin",
            code: "NZM",
            time: "20:15",
            date: "17 May 2024"
        },
        classes: [
            {
                classCode: "3A",
                className: "AC 3-Tier",
                availability: {
                    type: "available",
                    count: 127
                },
                fareType: "Tatkal",
                price: "₹3,120"
            },
            {
                classCode: "2A",
                className: "AC 2-Tier",
                availability: {
                    type: "available",
                    count: 73
                },
                fareType: "General",
                price: "₹4,350"
            },
            {
                classCode: "1A",
                className: "AC First Class",
                availability: {
                    type: "waitlist",
                    count: 12
                },
                fareType: "Premium",
                price: "₹7,200"
            }
        ]
    },
    {
        id: 8,
        trainNumber: "12001",
        trainName: "BHOPAL SHATABDI",
        duration: "7ч 15м",
        from: {
            station: "New Delhi",
            code: "NDLS",
            time: "06:15",
            date: "16 May 2024"
        },
        to: {
            station: "Bhopal Junction",
            code: "BPL",
            time: "13:30",
            date: "16 May 2024"
        },
        classes: [
            {
                classCode: "CC",
                className: "Chair Car",
                availability: {
                    type: "waitlist",
                    count: 64
                },
                fareType: "Tatkal",
                price: "₹1,150"
            },
            {
                classCode: "EC",
                className: "Executive Chair Car",
                availability: {
                    type: "available",
                    count: 28
                },
                fareType: "General",
                price: "₹2,250"
            },
            {
                classCode: "2A",
                className: "AC 2-Tier",
                availability: {
                    type: "available",
                    count: 15
                },
                fareType: "Premium",
                price: "₹2,850"
            }
        ]
    },
    {
        id: 9,
        trainNumber: "12433",
        trainName: "CHENNAI RAJDHANI",
        duration: "32ч 40м",
        from: {
            station: "Chennai Central",
            code: "MAS",
            time: "06:05",
            date: "17 May 2024"
        },
        to: {
            station: "Hazrat Nizamuddin",
            code: "NZM",
            time: "14:45",
            date: "18 May 2024"
        },
        classes: [
            {
                classCode: "3A",
                className: "AC 3-Tier",
                availability: {
                    type: "available",
                    count: 213
                },
                fareType: "Tatkal",
                price: "₹3,450"
            },
            {
                classCode: "2A",
                className: "AC 2-Tier",
                availability: {
                    type: "available",
                    count: 156
                },
                fareType: "General",
                price: "₹4,890"
            },
            {
                classCode: "1A",
                className: "AC First Class",
                availability: {
                    type: "waitlist",
                    count: 9
                },
                fareType: "Premium",
                price: "₹8,120"
            }
        ]
    },
    {
        id: 10,
        trainNumber: "22129",
        trainName: "PUNE RJDHNI",
        duration: "34ч 20м",
        from: {
            station: "Pune Junction",
            code: "PUNE",
            time: "20:10",
            date: "17 May 2024"
        },
        to: {
            station: "Howrah Junction",
            code: "HWH",
            time: "06:30",
            date: "19 May 2024"
        },
        classes: [
            {
                classCode: "3A",
                className: "AC 3-Tier",
                availability: {
                    type: "available",
                    count: 189
                },
                fareType: "Tatkal",
                price: "₹2,980"
            },
            {
                classCode: "2A",
                className: "AC 2-Tier",
                availability: {
                    type: "waitlist",
                    count: 41
                },
                fareType: "General",
                price: "₹4,120"
            },
            {
                classCode: "1A",
                className: "AC First Class",
                availability: {
                    type: "available",
                    count: 7
                },
                fareType: "Premium",
                price: "₹6,780"
            }
        ]
    },
    {
        id: 11,
        trainNumber: "12424",
        trainName: "DIBRUGARH RJDHNI",
        duration: "43ч 35м",
        from: {
            station: "Dibrugarh",
            code: "DBRG",
            time: "23:45",
            date: "18 May 2024"
        },
        to: {
            station: "New Delhi",
            code: "NDLS",
            time: "19:20",
            date: "20 May 2024"
        },
        classes: [
            {
                classCode: "3A",
                className: "AC 3-Tier",
                availability: {
                    type: "available",
                    count: 245
                },
                fareType: "Tatkal",
                price: "₹3,890"
            },
            {
                classCode: "2A",
                className: "AC 2-Tier",
                availability: {
                    type: "available",
                    count: 167
                },
                fareType: "General",
                price: "₹5,450"
            },
            {
                classCode: "1A",
                className: "AC First Class",
                availability: {
                    type: "waitlist",
                    count: 5
                },
                fareType: "Premium",
                price: "₹9,200"
            }
        ]
    },
    {
        id: 12,
        trainNumber: "22435",
        trainName: "VANDE BHARAT",
        duration: "7ч 30м",
        from: {
            station: "Varanasi Junction",
            code: "BSB",
            time: "15:30",
            date: "16 May 2024"
        },
        to: {
            station: "New Delhi",
            code: "NDLS",
            time: "23:00",
            date: "16 May 2024"
        },
        classes: [
            {
                classCode: "CC",
                className: "Chair Car",
                availability: {
                    type: "available",
                    count: 112
                },
                fareType: "Tatkal",
                price: "₹1,450"
            },
            {
                classCode: "EC",
                className: "Executive Chair Car",
                availability: {
                    type: "available",
                    count: 67
                },
                fareType: "General",
                price: "₹2,680"
            },
            {
                classCode: "3A",
                className: "AC 3-Tier",
                availability: {
                    type: "waitlist",
                    count: 28
                },
                fareType: "Premium",
                price: "₹3,120"
            }
        ]
    },
    {
        id: 13,
        trainNumber: "12723",
        trainName: "TELANGANA EXP",
        duration: "28ч 45м",
        from: {
            station: "Hyderabad Deccan",
            code: "HYB",
            time: "16:25",
            date: "17 May 2024"
        },
        to: {
            station: "New Delhi",
            code: "NDLS",
            time: "21:10",
            date: "18 May 2024"
        },
        classes: [
            {
                classCode: "SL",
                className: "Sleeper",
                availability: {
                    type: "waitlist",
                    count: 234
                },
                fareType: "General",
                price: "₹550"
            },
            {
                classCode: "3A",
                className: "AC 3-Tier",
                availability: {
                    type: "waitlist",
                    count: 156
                },
                fareType: "Tatkal",
                price: "₹1,850"
            },
            {
                classCode: "2A",
                className: "AC 2-Tier",
                availability: {
                    type: "available",
                    count: 42
                },
                fareType: "General",
                price: "₹2,550"
            }
        ]
    },
    {
        id: 14,
        trainNumber: "12988",
        trainName: "AII SDAH EXP",
        duration: "35ч 50м",
        from: {
            station: "Ajmer Junction",
            code: "AII",
            time: "09:40",
            date: "18 May 2024"
        },
        to: {
            station: "Sealdah",
            code: "SDAH",
            time: "21:30",
            date: "19 May 2024"
        },
        classes: [
            {
                classCode: "SL",
                className: "Sleeper",
                availability: {
                    type: "available",
                    count: 189
                },
                fareType: "General",
                price: "₹625"
            },
            {
                classCode: "3A",
                className: "AC 3-Tier",
                availability: {
                    type: "available",
                    count: 73
                },
                fareType: "Tatkal",
                price: "₹1,550"
            },
            {
                classCode: "2A",
                className: "AC 2-Tier",
                availability: {
                    type: "waitlist",
                    count: 18
                },
                fareType: "Premium",
                price: "₹2,150"
            }
        ]
    },
    {
        id: 15,
        trainNumber: "16345",
        trainName: "NETRAVATI EXP",
        duration: "28ч 45м",
        from: {
            station: "Mumbai Central",
            code: "BCT",
            time: "11:45",
            date: "19 May 2024"
        },
        to: {
            station: "Kochi Ernakulam Junction",
            code: "ERS",
            time: "16:30",
            date: "20 May 2024"
        },
        classes: [
            {
                classCode: "SL",
                className: "Sleeper",
                availability: {
                    type: "available",
                    count: 278
                },
                fareType: "General",
                price: "₹480"
            },
            {
                classCode: "3A",
                className: "AC 3-Tier",
                availability: {
                    type: "available",
                    count: 134
                },
                fareType: "Tatkal",
                price: "₹1,320"
            },
            {
                classCode: "2A",
                className: "AC 2-Tier",
                availability: {
                    type: "waitlist",
                    count: 27
                },
                fareType: "General",
                price: "₹1,980"
            }
        ]
    },
    {
        id: 16,
        trainNumber: "12450",
        trainName: "GOA SMPRK K",
        duration: "33ч 35м",
        from: {
            station: "Madgaon Junction",
            code: "MAO",
            time: "14:20",
            date: "20 May 2024"
        },
        to: {
            station: "Hazrat Nizamuddin",
            code: "NZM",
            time: "23:55",
            date: "21 May 2024"
        },
        classes: [
            {
                classCode: "3A",
                className: "AC 3-Tier",
                availability: {
                    type: "available",
                    count: 198
                },
                fareType: "Tatkal",
                price: "₹2,550"
            },
            {
                classCode: "2A",
                className: "AC 2-Tier",
                availability: {
                    type: "available",
                    count: 89
                },
                fareType: "General",
                price: "₹3,780"
            },
            {
                classCode: "SL",
                className: "Sleeper",
                availability: {
                    type: "waitlist",
                    count: 312
                },
                fareType: "General",
                price: "₹820"
            }
        ]
    },
    {
        id: 17,
        trainNumber: "12345",
        trainName: "DARJEELING MAIL",
        duration: "14ч 35м",
        from: {
            station: "Kolkata Howrah",
            code: "HWH",
            time: "21:55",
            date: "21 May 2024"
        },
        to: {
            station: "New Jalpaiguri",
            code: "NJP",
            time: "12:30",
            date: "22 May 2024"
        },
        classes: [
            {
                classCode: "SL",
                className: "Sleeper",
                availability: {
                    type: "waitlist",
                    count: 456
                },
                fareType: "General",
                price: "₹385"
            },
            {
                classCode: "3A",
                className: "AC 3-Tier",
                availability: {
                    type: "waitlist",
                    count: 234
                },
                fareType: "Tatkal",
                price: "₹980"
            },
            {
                classCode: "2A",
                className: "AC 2-Tier",
                availability: {
                    type: "available",
                    count: 31
                },
                fareType: "General",
                price: "₹1,450"
            }
        ]
    },
    {
        id: 18,
        trainNumber: "12625",
        trainName: "KERALA EXPRESS",
        duration: "47ч 15м",
        from: {
            station: "Trivandrum Central",
            code: "TVC",
            time: "15:15",
            date: "22 May 2024"
        },
        to: {
            station: "New Delhi",
            code: "NDLS",
            time: "14:30",
            date: "24 May 2024"
        },
        classes: [
            {
                classCode: "SL",
                className: "Sleeper",
                availability: {
                    type: "available",
                    count: 187
                },
                fareType: "General",
                price: "₹690"
            },
            {
                classCode: "3A",
                className: "AC 3-Tier",
                availability: {
                    type: "available",
                    count: 92
                },
                fareType: "Tatkal",
                price: "₹1,850"
            },
            {
                classCode: "2A",
                className: "AC 2-Tier",
                availability: {
                    type: "waitlist",
                    count: 22
                },
                fareType: "Premium",
                price: "₹2,650"
            }
        ]
    },
    {
        id: 19,
        trainNumber: "12952",
        trainName: "MUMBAI RJDHNI",
        duration: "15ч 50м",
        from: {
            station: "Hazrat Nizamuddin",
            code: "NZM",
            time: "16:25",
            date: "23 May 2024"
        },
        to: {
            station: "Mumbai Central",
            code: "BCT",
            time: "08:15",
            date: "24 May 2024"
        },
        classes: [
            {
                classCode: "3A",
                className: "AC 3-Tier",
                availability: {
                    type: "waitlist",
                    count: 156
                },
                fareType: "Tatkal",
                price: "₹2,250"
            },
            {
                classCode: "2A",
                className: "AC 2-Tier",
                availability: {
                    type: "waitlist",
                    count: 67
                },
                fareType: "General",
                price: "₹3,350"
            },
            {
                classCode: "1A",
                className: "AC First Class",
                availability: {
                    type: "available",
                    count: 3
                },
                fareType: "Premium",
                price: "₹5,850"
            }
        ]
    },
    {
        id: 20,
        trainNumber: "12313",
        trainName: "SEALDAH RJDHNI",
        duration: "20ч 15м",
        from: {
            station: "Sealdah",
            code: "SDAH",
            time: "14:50",
            date: "24 May 2024"
        },
        to: {
            station: "New Delhi",
            code: "NDLS",
            time: "11:05",
            date: "25 May 2024"
        },
        classes: [
            {
                classCode: "3A",
                className: "AC 3-Tier",
                availability: {
                    type: "available",
                    count: 267
                },
                fareType: "Tatkal",
                price: "₹2,450"
            },
            {
                classCode: "2A",
                className: "AC 2-Tier",
                availability: {
                    type: "available",
                    count: 145
                },
                fareType: "General",
                price: "₹3,680"
            },
            {
                classCode: "1A",
                className: "AC First Class",
                availability: {
                    type: "waitlist",
                    count: 7
                },
                fareType: "Premium",
                price: "₹5,950"
            }
        ]
    }
];


export default trainMockData;


