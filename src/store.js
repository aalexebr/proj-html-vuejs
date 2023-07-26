import {reactive} from 'vue'
export const store = reactive({
                    // store items
                    contactNumber: '00000',
                    AutoTypeList:[
                        {
                            type:'cabrio',
                            img:'cabrio.jpg',
                            listings:'4'
                        },
                        {
                            type:'hatchback',
                            img:'hatchback.jpg',
                            listings:'0'
                        },
                        {
                            type:'coupe',
                            img:'coupe.jpg',
                            listings:'1'
                        },
                        {
                            type:'pick-up',
                            img:'pickup.jpg',
                            listings:'0'
                        },
                        {
                            type:'sedan',
                            img:'sedan.jpg',
                            listings:'2'
                        },
                        {
                            type:'SUV',
                            img:'suv.jpg',
                            listings:'1'
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
                            name:'volswagen passat',
                            type:'sedan',
                            img:'vw-passat.jpg', 
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
                    ],
                    Articles:[
                        {
                            img:'news-autocar-1.jpg',
                            date:'29-01-1886',
                            source:'auto car',
                            title: 'Why is BMW associated with Nazis',
                            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus incidunt accusamus, nihil cumque unde omnis?'
                        },
                        {
                            img:'news-autocar-2.jpg',
                            date:'29-01-1886',
                            source:'auto car',
                            title: 'Why is Audi associated with the CCCP',
                            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus incidunt accusamus, nihil cumque unde omnis?'
                        },
                        {
                            img:'news-autocar-5.jpg',
                            date:'29-01-1886',
                            source:'auto car',
                            title: 'Is SKODA really a chinese spy',
                            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus incidunt accusamus, nihil cumque unde omnis?'
                        },
                        {
                            img:'news-autocar-6.jpg',
                            date:'29-01-1886',
                            source:'auto car',
                            title: 'AURIUS NorthKoreas new weapon',
                            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus incidunt accusamus, nihil cumque unde omnis?'
                        }
                    ],
                    BusinessInfo:{
                       location: {
                            icon:'fa-location-dot',
                            text:'North Korea'
                        },
                       contact: {
                            icon:'fa-phone-volume',
                            text:'+001 00001'
                        },
                        email:{
                            icon:'fa-envelope',
                            text:'kim_j_un@nk.nk'
                        },
                    },
                    myAccountNav:[
                        {
                            text:'my account',
                            link:'#'
                        },
                        {
                            text:'checkout',
                            link:'#'
                        },
                        {
                            text:'cart',
                            link:'#'
                        },
                        {
                            text:'packages',
                            link:'#'
                        },
                        {
                            text:'add car',
                            link:'#'
                        }
                    ],
                    quickLinksNav:[
                        {
                            text:'home',
                            link:'#'
                        },
                        {
                            text:'about us',
                            link:'#'
                        },
                        {
                            text:'blog',
                            link:'#'
                        },
                        {
                            text:'contact',
                            link:'#'
                        },
                        {
                            text:'refund & returns',
                            link:'#'
                        }
                    ]
});
