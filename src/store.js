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
                    ]
});