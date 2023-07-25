import {reactive} from 'vue'
export const store = reactive({
                    // store items
                    contactNumber: '00000',
                    AutoTypeList:[
                        {
                            type:'cabrio',
                            img:'cabrio.jpg'
                        },
                        {
                            type:'hatchback',
                            img:'hatchback.jpg'
                        },
                        {
                            type:'coupe',
                            img:'coupe.jpg'
                        },
                        {
                            type:'pick-up',
                            img:'pickup.jpg'
                        },
                        {
                            type:'sedan',
                            img:'sedan.jpg'
                        },
                        {
                            type:'SUV',
                            img:'suv.jpg'
                        },
                    ],
                    ListedAutos:[
                        {
                            name:'bmw m9',
                            type:'cabrio',
                            img:'bmw_m9.jpg',
                            price:'59.000',
                            brand:'BMW',
                            fuelType:'electric',
                        },
                        {
                            name:'bmw m8',
                            type:'cabrio',
                            img:'bmw_m8.jpg',
                            price:'59.000',
                            brand:'BMW',
                            fuelType:'diesel',
                        },
                        {
                            name:'bmw m4',
                            type:'cabrio',
                            img:'bmw_m4.jpg',
                            price:'59.000',
                            brand:'BMW',
                            fuelType:'gasoline',
                        },
                        {
                            name:'seat ibiza',
                            type:'hatchback',
                            img:'seat_ibiza.jpg',
                            price:'59.000',
                            brand:'seat',
                            fuelType:'electric',
                        },
                        {
                            name:'seat arona',
                            type:'hatchback',
                            img:'seat_arona.jpg',
                            price:'59.000',
                            brand:'seat',
                            fuelType:'gasoline',
                        },
                        {
                            name:'volswagen taigo',
                            type:'hatchback',
                            img:'vw_taigo.jpg',
                            price:'59.000',
                            brand:'seat',
                            fuelType:'gasoline',
                        },
                        {
                            name:'volswagen taigo',
                            type:'hatchback',
                            img:'vw_tcross.jpg',
                            price:'59.000',
                            brand:'seat',
                            fuelType:'gasoline',
                        },
                        {
                            name:'volswagen taigo',
                            type:'hatchback',
                            img:'vw_tcross.jpg', 
                            price:'59.000',
                            brand:'seat',
                            fuelType:'gasoline',
                        },
                    ],
                    Testimonials:[
                        {
                            name:'adam',
                            img:'man1.png',
                            text:'We are a gallery vehicle dealer. Before we met this site our sales were shit.'
                        },
                        {
                            name:'cristian',
                            img:'testimonial2-1.png',
                            text:'We are a gallery vehicle dealer. Before we met this site our sales were shit.'
                        },
                        {
                            name:'rob',
                            img:'man2.png',
                            text:'We are a gallery vehicle dealer. Before we met this site our sales were shit.'
                        },
                        {
                            name:'elizabeth',
                            img:'testimonial4-1.png',
                            text:'We are a gallery vehicle dealer. Before we met this site our sales were shit.'
                        },
                    ]
});
