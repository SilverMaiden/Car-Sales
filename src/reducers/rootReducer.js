const initialState = {
additionalPrice: 0,
car: {
  price: 26395,
  name: '2019 Ford Mustang',
  image:
    'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  features: []
},
additionalFeatures: [
  { id: 1, name: 'V-6 engine', price: 1500 },
  { id: 2, name: 'Racing detail package', price: 1500 },
  { id: 3, name: 'Premium sound system', price: 500 },
  { id: 4, name: 'Rear spoiler', price: 250 }
]
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD':
            console.log(action.payload);
            return {
                ...state,
                additionalPrice: state.additionalPrice += action.payload.price,
                car: {
                    ...state.car, features: [...state.car.features, action.payload.name]
                }
            };
        case 'REMOVE':
            console.log("Removing!");
            console.log(action.payload)
            let feature = state.additionalFeatures.filter(each => {
                return each.name === action.payload;
            })
            let newAdditionalFeatures = state.car.features.filter(each => {
                return each !== action.payload;

            })
            console.log(feature);
            let amount = action.payload;
            return {
                ...state,
                additionalPrice: state.additionalPrice -= feature[0].price,
                car: {
                    ...state.car, features: newAdditionalFeatures
                }
            };
        default:
            return state;

    }
}

export default rootReducer;
